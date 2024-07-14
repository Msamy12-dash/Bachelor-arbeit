/* eslint-disable prettier/prettier */
import type * as Party from "partykit/server";
import { onConnect, type YPartyKitOptions } from "y-partykit";
import * as Y from "yjs";
import { SINGLETON_ROOM_ID } from "./types";
import { Buffer } from 'buffer'; // Import Buffer


export default class EditorServer implements Party.Server {
  constructor(public room: Party.Room) {}
  yjsOptions: YPartyKitOptions = {
    persist: { mode: "snapshot" }, 
  };

  async onConnect(conn: Party.Connection) {
    await this.updateCount();

    return onConnect(conn, this.room, this.getOpts());
  }

  getOpts() {
    // options must match when calling unstable_getYDoc and onConnect
    const opts: YPartyKitOptions = {
      callback: { handler: (doc) => this.handleYDocChange(doc), 
        debounceWait: 10000, // default: 2000 ms
        debounceMaxWait: 20000, // default: 10000 ms
        timeout: 5000}
    };
    return opts;
  }

  

  async onClose(_: Party.Connection) {
    await this.updateCount();
  }

  async handleYDocChange(doc: Y.Doc) {
    // Encode the entire state of the Y.doc
    const update = Y.encodeStateAsUpdate(doc);
    
    // Convert the Uint8Array to a Base64 string for easier storage
    const base64State = Buffer.from(update).toString('base64');

    try {
      const response = await fetch('http://localhost:3000/api/saveMainText2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state: base64State, room: this.room.id }),
      });

      if (!response.ok) {
        throw new Error('Failed to save state');
      }
    } catch (error) {
      console.error('Error saving state:', error);
    }
  }

  async updateCount() {
    // Count the number of live connections
    const count = [...this.room.getConnections()].length;

    // Send the count to the 'rooms' party using HTTP POST
    await this.room.context.parties.rooms.get(SINGLETON_ROOM_ID).fetch({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ room: this.room.id, count }),
    });
  }


}
