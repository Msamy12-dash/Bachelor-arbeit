import type * as Party from "partykit/server";

import { createUpdateMessage, DeleteReaction, parseReactionMessage ,json} from "./types";
export default class likelerver implements Party.Server {
  options: Party.ServerOptions = { hibernate: true };
  constructor(readonly room: Party.Room) {
  }
  reactions: Record<string, number> = {};

  async onStart() {
    // load reactions from storage on startup
    this.reactions = (await this.room.storage.get("reactions")) ?? {};
  }

  async onRequest(req: Party.Request) {
    // for all HTTP requests, respond with the current reaction counts

    if (req.method === "GET") {
      return json(createUpdateMessage(this.reactions));
    }

    if (req.method === "DELETE") {
     DeleteReaction(this.reactions)
    }

    return new Response("Not found", { status: 404 });

  }

  onConnect(conn: Party.Connection) {
    // on WebSocket connection, send the current reaction counts
    conn.send(createUpdateMessage(this.reactions));
  }

  onMessage(message: string, _sender: Party.Connection) {
    // rate limit incoming messages

    // client sends WebSocket message: update reaction count
    const parsed = parseReactionMessage(message);

    this.updateAndBroadcastReactions(parsed.kind);
  }

  updateAndBroadcastReactions(kind: string) {
    // update stored reaction counts
    this.reactions[kind] = (this.reactions[kind] ?? 0) + 1;
    // send updated counts to all connected listeners
    this.room.broadcast(createUpdateMessage(this.reactions));
    // save reactions to disk (fire and forget)
    this.room.storage.put("reactions", this.reactions);
  }
  async onClose(_connection: Party.Connection) {
   _connection.id
  }
}

likelerver satisfies Party.Worker;
