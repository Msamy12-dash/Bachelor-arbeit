/* eslint-disable prettier/prettier */
import type * as Party from "partykit/server";

import { createUpdateMessage } from "@/party/types";


const json = (response: string) =>
  new Response(response, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export default class LikeServer implements Party.Server {
  options: Party.ServerOptions = { hibernate: true };
  constructor(readonly room: Party.Room) {}
  reactions: Record<string, number> = {"heart": 0,
        "thumbsup": 0};

  async onStart() {
    // load reactions from storage on startup
    this.reactions = (await this.room.storage.get("reactions")) ?? {};
  }

  async onRequest(_req: Party.Request) {
    // for all HTTP requests, respond with the current reaction counts
    return json(createUpdateMessage(this.reactions));
  }

  onConnect(conn: Party.Connection) {
    // on WebSocket connection, send the current reaction counts
    conn.send(createUpdateMessage(this.reactions));
  }

  onMessage(_message: string, _sender: Party.Connection) {
    // rate limit incoming messages
    
  }

  updateAndBroadcastReactions(kind: string) {
    // update stored reaction counts
    this.reactions[kind] = (this.reactions[kind] ?? 0) + 1;
    // send updated counts to all connected listeners
    this.room.broadcast(createUpdateMessage(this.reactions));
    // save reactions to disk (fire and forget)
    this.room.storage.put("reactions", this.reactions);
  } 
}

LikeServer satisfies Party.Worker;
