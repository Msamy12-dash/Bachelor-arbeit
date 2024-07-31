import type * as Party from "partykit/server";

import { Buffer } from 'buffer';

import { onConnect, type YPartyKitOptions } from "y-partykit";
import * as Y from "yjs";

import { SINGLETON_ROOM_ID } from "./src/types";

export default class EditorServer implements Party.Server {
  yjsOptions: YPartyKitOptions = {
    persist: { mode: "snapshot" },
  };
  connections: Record<string, number> | undefined;

  constructor(public room: Party.Room) {}
  onStart?(): void | Promise<void>{}
  getOpts() {
    this.handleLoadFromDB();
    // options must match when calling unstable_getYDoc and onConnect
    const opts: YPartyKitOptions = {
      readOnly: true,
      callback: { handler: (doc) => this.handleYDocChange(doc),
        debounceWait: 200, // default: 2000 ms
        debounceMaxWait: 10000, // default: 10000 ms
        timeout: 5000},

    };

    
    return opts;
  }

  async onConnect(conn: Party.Connection) {
    await this.updateCount();
    console.log(this.room.storage);

    return onConnect(conn, this.room, {
      load: async () => this.handleLoadFromDB(),
      callback: {
        handler: (doc) => {
          this.handleYDocChange(doc)
        },
        debounceWait: 5000, //set this back to 10000
        debounceMaxWait: 20000,
        timeout: 5000
      }
    });
  }

  async handleLoadFromDB() {
    try {
      const response = await fetch(`http://localhost:3000/api/getYDocForRoom?room=${this.room.id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { state } = await response.json();

      if (state) {
        const uint8Array = Buffer.from(state, 'base64');
        const yDoc = new Y.Doc();

        Y.applyUpdate(yDoc, uint8Array);

        return yDoc;
      }
    } catch (error) {
      
    }

    return new Y.Doc();
    
  }

  async onClose(_: Party.Connection) {
    await this.updateCount();
  }

  async handleYDocChange(doc: Y.Doc) {


    const update = Y.encodeStateAsUpdate(doc);
    const base64State = Buffer.from(update).toString('base64');

    try {
      const response = await fetch('http://localhost:3000/api/setYDocForRoom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: base64State, room: this.room.id }),
      });

      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(`Failed to save state. Status: ${response.status}, Response: ${errorText}`);
      }

    } catch (error) {
      console.error('Error saving state:', error);
      // Rethrow the error if you want it to be handled by the caller
      throw error;
    }
  }

  async updateCount() {
    // Count the number of live connections
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
      console.error('Error updating count:', error);
    }
  }


}
