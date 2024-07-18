import type * as Party from "partykit/server";
import { onConnect, type YPartyKitOptions } from "y-partykit";
import * as Y from "yjs";
import { Buffer } from 'buffer';
import { connect } from "http2";

interface ConnectionUpdate {
  type: "connect" | "disconnect";
  connectionId: string;
  roomId: string;
}

export default class EditorServer implements Party.Server {
  constructor(public room: Party.Room) {
    const existingConnections = room.getConnections();
    console.log('Connections on editorserver start:', [...existingConnections].length);
  }

  //only for debugging:
  async onStart() {

  }

  yjsOptions: YPartyKitOptions = {
    persist: { mode: "snapshot" },
  };

  async onConnect(conn: Party.Connection) {
    // Check if the client already exists
    console.log('Connection id:', conn.uri);
    const existingConnections = this.room.getConnections();
    console.log('Connections on editorserver connect:', [...existingConnections].length); //log
    const clientAlreadyConnected = [...existingConnections].some(c => c.id === conn.id);
    console.log('New connection established. Client already connected:', clientAlreadyConnected);
    
        await this.updateConnections("connect", conn);

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

  async onClose(conn: Party.Connection) {
    await this.updateConnections("disconnect", conn);
    console.log('Close connection id:', conn.uri);
  }

  async updateConnections(type: "connect" | "disconnect", connection: Party.Connection) {
    const connectionsParty = this.room.context.parties.roomserver; //ok?
    const connectionsRoomId = "active-connections";
    const connectionsRoom = connectionsParty.get(connectionsRoomId);

    await connectionsRoom.fetch({
      method: "POST",
      body: JSON.stringify({
        type,
        connectionId: connection.id,
        roomId: this.room.id
      } as ConnectionUpdate)
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
      console.error('Error loading from DB:', error);
    }
    return new Y.Doc();
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
}