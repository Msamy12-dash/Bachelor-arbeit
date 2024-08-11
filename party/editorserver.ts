import { Buffer } from 'buffer';
import * as Party from "partykit/server";
import { onConnect, type YPartyKitOptions } from "y-partykit";
import * as Y from "yjs";
import { SINGLETON_ROOM_ID } from "./src/types";

export default class EditorServer implements Party.Server {
  yjsOptions: YPartyKitOptions = {
    persist: { mode: "snapshot" },
  };

  constructor(public room: Party.Room) {}

  static async onBeforeConnect(req: Party.Request, lobby: Party.Lobby, ctx: Party.ExecutionContext) {
    console.log("onBeforeConnect req url:", req.url);
  }

  async onConnect(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;

    const existingConnections = this.room.getConnections();
    const numberOfExistingConnections = Array.from(existingConnections).map(c => c.id);

    const connectionID = conn.id;

    console.log(`* onConnect at ${partyName}/${roomId}: Connection ID: ${connectionID}, Number of connections: ${numberOfExistingConnections}`);
    await this.updateCount();

    return onConnect(conn, this.room, {
      load: async () => this.handleLoadFromDB(),
      callback: {
        handler: (doc) => this.handleYDocChange(doc),
        debounceWait: 5000,
        debounceMaxWait: 20000,
        timeout: 5000,
      },
    });
  }

  async onClose(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;

    const existingConnections = this.room.getConnections();
    const numberOfExistingConnections = Array.from(existingConnections).map(c => c.id);

    const connectionID = conn.id;

    console.log(`* onClose at ${partyName}/${roomId}: Connection ID: ${connectionID}, Number of connections: ${numberOfExistingConnections}`);
    await this.updateCount();
  }

  static async isUserIDAlreadyInUse(connectionID: string, lobby: Party.Lobby): Promise<boolean> {
    try {
      const response = await lobby.parties.roomserver
        .get(SINGLETON_ROOM_ID)
        .fetch({
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

      if (!response.ok) {
        throw new Error(`Failed to fetch active user IDs. Status: ${response.status}`);
      }

      const data = await response.json();
      const activeUserIds = new Set(data.activeUserIds);

      return activeUserIds.has(connectionID);
    } catch (error) {
      console.error("Error checking if user ID is already in use:", error);
      return false;
    }
  }

  async handleLoadFromDB() {
    try {
      const response = await fetch(`http://localhost:3000/api/getYDocForRoom?room=${this.room.id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { state } = await response.json();

      if (state) {
        const uint8Array = Buffer.from(state, "base64");
        const yDoc = new Y.Doc();
        Y.applyUpdate(yDoc, uint8Array);
        return yDoc;
      }
    } catch (error) {
      console.error("Error loading from DB:", error);
    }

    return new Y.Doc();
  }

  async handleYDocChange(doc: Y.Doc) {
    const update = Y.encodeStateAsUpdate(doc);
    const base64State = Buffer.from(update).toString('base64');

    console.log("handleYDocChange is running");
    try {
      const response = await fetch("http://localhost:3000/api/setYDocForRoom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ state: base64State, room: this.room.id }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to save state. Status: ${response.status}, Response: ${errorText}`);
      }
    } catch (error) {
      console.error("Error saving state:", error);
      throw error;
    }
  }

  async updateCount() {
    const count = [...this.room.getConnections()].length;

    try {
      const response = await this.room.context.parties.rooms.get(SINGLETON_ROOM_ID).fetch({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ room: this.room.id, count }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update count. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error updating count:", error);
    }
  }
}
