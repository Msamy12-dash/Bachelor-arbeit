import type * as Party from "partykit/server";

import { onConnect, type YPartyKitOptions } from "y-partykit";
import { Doc } from "yjs";

import { SINGLETON_ROOM_ID } from "./types";

export default class EditorServer implements Party.Server {
  yjsOptions: YPartyKitOptions = {
    persist: { mode: "snapshot" },
   
  };
  constructor(public room: Party.Room) {}
  
  getOpts() {
    
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
  

    return onConnect(conn, this.room, this.getOpts());
  }

  async onClose(_: Party.Connection) {
    await this.updateCount();
  }

  async handleYDocChange(_: Doc) {
    //  any changes handleYDocChange is called
   
   
    const text=_.getText('quill')

    console.log(_.clientID)



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
/**    */