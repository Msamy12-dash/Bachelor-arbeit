import * as Party from "partykit/server";

import { json, Poll } from "./src/types";
import { CheckVote, SetVote, ReceivingVotes, updatevote, deletevote } from "./src/VoteFunction";

// Standalone function to handle POST requests


export default class VoteServer implements Party.Server {
  onStart(): void | Promise<void> {
      this.room.storage.deleteAll();
  }

  poll: Poll | undefined;
  async onConnect(connection: Party.Connection) {

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
   
  }

  async onRequest(_req: Party.Request) {

    switch (_req.method) {
      case "POST":  return SetVote(_req, this.room, this.setPoll.bind(this));
      case "GET":   return CheckVote(this.poll);
      default:
        return json({ error: "Method not found" });
    }
  }

  setPoll(poll: Poll) {
    this.poll = poll;


     this.room.storage.put<string>("id",this.room.id);
     this.room.storage.put<Poll>("Poll",this.poll) ; 

  }

  async onMessage(message: string , sender: Party.Connection) {
    
    ReceivingVotes(message, this.poll, this.room, this.setPoll.bind(this));
    
  }

  async onAlarm() {
    this.room.storage.setAlarm(Date.now() + 10 * 60 * 1000);
    console.log("end vote")
       // alarms don't have access to room id, so retrieve it from storage
       const id = await this.room.storage.get<string>("id");
       const poll = await this.room.storage.get<Poll>("Poll") ; 

      console.log("id ="+id)
      console.log("poll ="+poll)

       if (poll) {
        await deletevote("delete",poll);

          
  }
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
    /**
   * A scheduled job that executes when the room storage alarm is triggered
   */
   
    

  
}