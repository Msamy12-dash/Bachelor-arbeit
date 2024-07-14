/* eslint-disable prettier/prettier */
import type * as Party from "partykit/server";

import { onConnect, type YPartyKitOptions } from "y-partykit";
import { Doc } from "yjs";

import { SINGLETON_ROOM_ID } from "./types";

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

  handleYDocChange(_: Doc) {
    //  any changes handleYDocChange is called
    
    
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
