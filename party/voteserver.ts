import type * as Party from "partykit/server";

import { json, Poll } from "./src/types";
import { CheckVote, SetVote, ReceivingVotes } from "./src/VoteFunction";

// Standalone function to handle POST requests


export default class VoteServer implements Party.Server {
  poll: Poll | undefined;

  constructor(public readonly room: Party.Room) {
    this.room.storage.setAlarm(Date.now() + 10 * 60 * 1000);
  }

  async onRequest(req: Party.Request) {
    switch (req.method) {
      case "POST":
        return SetVote(req, this.room, this.setPoll.bind(this));
      case "GET":
        return CheckVote(this.poll);
      default:
        return json({ error: "Method not found" });
    }
  }

  setPoll(poll: Poll) {
    this.poll = poll;
  }

  async onMessage(message: string) {
    ReceivingVotes(message, this.poll, this.room, this.setPoll.bind(this));
  }

  async onAlarm() {
    console.log("vote is over");
    this.room.storage.setAlarm(Date.now() + 10 * 60 * 1000);
  }
}