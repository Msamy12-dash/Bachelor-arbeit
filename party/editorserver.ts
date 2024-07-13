/* eslint-disable prettier/prettier */
import type * as Party from "partykit/server";

import { onConnect, type YPartyKitOptions } from "y-partykit";
import { Doc } from "yjs";
import * as Y from 'yjs'

import { SINGLETON_ROOM_ID } from "./types";
import { PARTYKIT_HOST } from "@/pages/env";
import PartySocket from "partysocket";

export default class EditorServer implements Party.Server {
  yjsOptions: YPartyKitOptions = {
    persist: { mode: "snapshot" },
    
   
  };
  constructor(public room: Party.Room) {}
  
  getOpts() {
    // options must match when calling unstable_getYDoc and onConnect
    const opts: YPartyKitOptions = {
      callback: { handler: (doc) => this.handleYDocChange(doc), 
        debounceWait: 200, // default: 2000 ms
        debounceMaxWait: 10000, // default: 10000 ms
        timeout: 5000},
        
    };
    
    return opts;
  }

  async onConnect(conn: Party.Connection) {
    await this.updateCount();

    return onConnect(conn, this.room, this.getOpts());
  }

  async onClose(_: Party.Connection) {
    await this.updateCount();
  }

  async handleYDocChange(_: Doc) {
    //  any changes handleYDocChange is called
   
   
    const text=_.getText('quill')

    console.log()

    if (text._length>10){
      _.getText('quill').delete(1,1)
    }
  
    const relPos = Y.createRelativePositionFromTypeIndex(_.getText("quill"), 2)

    

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