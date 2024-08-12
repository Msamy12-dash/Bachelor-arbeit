import type * as Party from "partykit/server";

import { Poll } from "./src/types";

interface Update {
  type: "connect" | "disconnect" | "delete";
  connectionId: string;
  roomId: string;
  poll: Poll;

}

export default class NotificationServer implements Party.Server {
  connections: Record<string, number> | undefined;
  Polls: Record<string, Poll> | undefined;

  constructor(readonly party: Party.Room) {
    this.Polls = {};
    this.connections = {};
  }

  async onRequest(request: Party.Request) {
    try {
      // Load the polls and connections from storage
      this.Polls = await this.party.storage.get("Polls") ?? {};
      this.connections = await this.party.storage.get("connections") ?? {};
      console.log(this.connections);

      if (request.method === "POST") {
        const update = await request.json() as Update;
        const count = this.connections[update.roomId] ?? 0;

        if (update.type === "delete") {
          console.log("update.poll.Room_id+update.poll.options[0]" + update.poll.makeChange);
          
          // Filter out the connection to delete
          const filteredConnections: Record<string, number> = {};

          Object.keys(this.connections).forEach((key) => {
            if (key !== update.poll.Room_id) {
              filteredConnections[key] = this.connections[key];
            }
          });

          // Update the server state with the filtered connections
          this.connections = filteredConnections;

          // Remove the corresponding poll
          delete this.Polls[update.roomId];

          // Save the updated connections and polls back to storage
          await this.party.storage.put("connections", this.connections);
          await this.party.storage.put("Polls", this.Polls);

          // Broadcast the updated connections state
          this.party.broadcast(JSON.stringify({
            update: "delete vote",
            makechanges : update.poll.makeChange,
            block_id: update.poll.bolck_id,
            connectionKeys: Object.keys(this.connections)
          }));
        } else if (update.type === "connect" || update.type === "disconnect") {
          if (update.type === "connect") {
            this.connections[update.roomId] = count + 1;
          }
          if (update.type === "disconnect") {
            this.connections[update.roomId] = Math.max(0, count - 1);
          }

          // Update the poll for the room
          this.Polls[update.roomId] = update.poll;

          // Save updated polls and connections to storage
          await this.party.storage.put("Polls", this.Polls);
          await this.party.storage.put("connections", this.connections);

          // Notify any connected listeners about the updated connections and polls
          this.party.broadcast(JSON.stringify({
            update: "add vote",
            connectionKeys: Object.keys(this.connections)
          }));
        }

        // Return the current connection state
        return new Response(JSON.stringify(this.connections));
      }
    } catch (error) {
      console.error("Error handling request:", error);

      return new Response("Internal Server Error", { status: 500 });
    }
  }

  onStart(): void | Promise<void> {
    this.party.storage.deleteAll();
  }

  async onMessage(message: string, sender: Party.Connection) {
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
