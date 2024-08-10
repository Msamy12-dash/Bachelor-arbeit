import type * as Party from "partykit/server";

import { Poll } from "./src/types";

interface Update {
  type: "connect" | "disconnect" | "delete";
  connectionId: string;
  roomId: string;
  poll: Poll; // Make sure the poll type definition is correct and imported
}

export default class NotificationServer implements Party.Server {
  connections: Record<string, number> | undefined;
  Polls: Record<string, Poll> | undefined; // Store polls by roomId

  constructor(readonly party: Party.Party) {
    this.Polls = {};
    this.connections = {};
  }

  async onRequest(request: Party.Request) {
    try {

      // read from storage
      this.Polls = await this.party.storage.get("Polls") ?? {};
      this.connections = await this.party.storage.get("connections") ?? {};

      if (request.method === "POST") {
        const update = await request.json() as Update;

        const count = this.connections[update.roomId] ?? 0;

        if (update.type === "delete") {
          console.log("Deleting poll with Room_id " + update.poll.title);
          // Delete the poll from the list
          delete this.Polls[update.roomId];
          delete this.connections[update.roomId];
        
          
        } else if (update.type === "connect") {
          this.connections[update.roomId] = count + 1;
        } else if (update.type === "disconnect") {
          this.connections[update.roomId] = Math.max(0, count - 1);
        }

        if (update.type !== "delete") {
          // Update the poll for the room
          this.Polls[update.roomId] = update.poll;
        }

        if (this.connections) {
          for (const roomId in this.connections) {
            if (this.connections.hasOwnProperty(roomId)) {
              const connectionCount = this.connections[roomId];

              console.log(`Room ID: ${roomId}, Connections: ${connectionCount}, Poll: ${JSON.stringify(this.Polls[roomId])}`);
            }
          }
        }

        // Save updated polls and connections to storage
        await this.party.storage.put("Polls", this.Polls);
        await this.party.storage.put("connections", this.connections);

        // Notify any connected listeners about the updated connections and polls
        this.party.broadcast(JSON.stringify({
          connectionKeys: Object.keys(this.connections)
        }));
      }

      // Send connection counts to requester
      return new Response(JSON.stringify(this.connections));
    } catch (error) {
      console.error("Error handling request:", error);

      return new Response("Internal Server Error", { status: 500 });
    }
  }

  onStart(): void | Promise<void> {
    this.party.storage.deleteAll();
  }

  async onMessage(message: string, sender: Party.Connection) {
    // Parsing message to extract roomId and poll related action
    try {
      const data = JSON.parse(message);
      const roomId = data.roomId;

      if (!roomId) {
        console.error("Room ID is missing in the message");

        return;  // Exit if no roomId provided
      }

      const poll = this.Polls[roomId];

      if (poll) {
        await this.ReceivingVotes(data, poll, roomId, (updatedPoll: Poll) => this.Polls[roomId] = updatedPoll);
      }
    } catch (error) {
      console.error("Failed to parse message or process it:", error);
    }
  }

  async ReceivingVotes(event: any, poll: Poll, roomId: string, updatePoll: (poll: Poll) => void) {
    if (event.type === "vote" && poll.id === event.pollId && poll.votes) {
      poll.votes[event.option] = (poll.votes[event.option] || 0) + 1;
      this.party.broadcast(JSON.stringify(poll));
      await this.savePoll(poll, roomId);
      updatePoll(poll);
    }
  }

  async savePoll(poll: Poll, id: string) {
    this.Polls[id] = poll;
  }
}
