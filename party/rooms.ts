import type * as Party from "partykit/server";
import { Rooms, Poll } from "./types";

export default class OccupancyServer implements Party.Server {
  // Track room occupancy
  rooms: Rooms;
  poll: Poll | undefined;

  constructor(public room: Party.Room) {
    this.rooms = {};
  }
  
  async onRequest(req: Party.Request) {
    const request = req as unknown as Request; // Type assertion to the Fetch API Request

    if (request.method === "GET") {
      return new Response(
        `Hi! This is party '${this.room.name}' and room '${this.room.id}'!`
      );
    }

    if (request.method === "POST") {
      const { room, count }: { room: string; count: number } = await request.json();
      this.rooms[room] = count;
      this.room.broadcast(JSON.stringify({ type: "rooms", rooms: this.rooms }));
      return Response.json({ ok: true });
    }

    // Always return a Response
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  onConnect(connection: Party.Connection) {
    connection.send(JSON.stringify({ type: "rooms", rooms: this.rooms }));

  }
}
