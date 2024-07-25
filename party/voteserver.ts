import type * as Party from "partykit/server";

import { json, Poll } from "./src/types";




export default class VoteServer implements Party.Server {
  onAlarm() {
    // do something
    console.log("vote is over")

    // (optional) schedule next alarm in 5 minutes
    this.room.storage.setAlarm(Date.now() +  10*60 * 1000);
    //this.room.storage.deleteAll;
  }
  
  constructor(readonly room: Party.Room) {
    //console.log("vote is sent")

      this.room.storage.setAlarm(Date.now() + 10*60 * 1000);
  }
  static async onCron(

    _cron: Party.Cron,
    _lobby: Party.CronLobby,
    _ctx: Party.ExecutionContext,

  ) {

    _cron.scheduledTime
    
    //console.log(`Running cron ${_cron.name} at ${_cron.scheduledTime}`);
  }

  poll: Poll | undefined;

  async onRequest(req: Party.Request) {
    if (req.method === "POST") {
      const comingPoll = (await req.json()) as Poll;

      this.poll = { ...comingPoll, votes: comingPoll.options.map(() => 0) };
      this.savePoll();
    
    

    if (this.poll) {
      console.log(this.poll)
      this.room.broadcast("vote now");

             return json( this.poll)


    }}
    if (req.method === "GET") {
      const poll = (await req.json()) as Poll;

      this.poll = { ...poll, votes: poll.options.map(() => 0) };
      this.savePoll();

      return json( this.room.storage)
    }

    return json( "NOTFOUND")
  }

  async onMessage(message: string) {
    if (!this.poll) return;

    const event = JSON.parse(message);

    if (event.type === "vote") {
      this.poll.votes![event.option] += 1;
      this.room.broadcast(JSON.stringify(this.poll));
      this.savePoll();
    }
  }

  async savePoll() {
    if (this.poll) {
      await this.room.storage.put<Poll>("poll", this.poll);
    }
  }

  async onStart() {
    this.poll = await this.room.storage.get<Poll>("poll");
  }
}

