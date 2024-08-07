import type * as Party from "partykit/server";

import { json, Poll } from "./src/types";
import { CheckVote, SetVote, ReceivingVotes } from "./src/VoteFunction";

// Standalone function to handle POST requests


export default class VoteServer implements Party.Server {
  onStart(): void | Promise<void> {
      this.room.storage.deleteAll();
  }

  poll: Poll | undefined;
  async onConnect(connection: Party.Connection) {
    console.log("connected to poll server " )

    // when a websocket connection is established, send them a list of rooms
    const votes=JSON.stringify(await this.getActiveRooms())
    
    connection.send(votes);
    await this.updateConnections("connect", connection);

  }
  async getActiveRooms(): Promise<Poll[]> {
    const rooms = await this.room.storage.list<Poll>();


    return [...rooms.values()];
  }
  constructor(public readonly room: Party.Room) {
    this.room.storage.setAlarm(Date.now() + 10 * 60 * 1000);
    console.log("vote now ")
  }

  async onRequest(_req: Party.Request) {

    switch (_req.method) {
      case "POST":
        return SetVote(_req, this.room, this.setPoll.bind(this));
      case "GET":
        return CheckVote(this.poll);
      default:
        return json({ error: "Method not found" });
    }
  }

  setPoll(poll: Poll) {
    this.poll = poll;
    console.log(poll.votes)
  }

  async onMessage(message: string , sender: Party.Connection) {
    
    ReceivingVotes(message, this.poll, this.room, this.setPoll.bind(this));
    
  }

  async onAlarm() {
    this.room.storage.setAlarm(Date.now() + 10 * 60 * 1000);
    
  }


  

  async onClose(connection: Party.Connection) {
    await this.updateConnections("disconnect", connection);
  }

  async updateConnections(type: "connect" | "disconnect", connection: Party.Connection) {
    try {
      // get handle to a shared room instance of the "connections" party
      const connectionsParty = this.room.context.parties.notificationserver;

      if (!connectionsParty) {
        throw new Error("Connections party not found");
      }

      const connectionsRoomId = "active-connecti  ons";
      const connectionsRoom = connectionsParty.get(connectionsRoomId);

      if (!connectionsRoom) {
        throw new Error(`Connections room with id ${connectionsRoomId} not found`);
      }

      // notify room by making an HTTP POST request
      await connectionsRoom.fetch({
        method: "POST",
        body: JSON.stringify({
          type,
          connectionId: connection.id,
          roomId: this.room.id,
          poll:this.poll
        }),
      });
    } catch (error) {
      console.error(`Error updating connections for type ${type}:`, error);
    }
  }
}

