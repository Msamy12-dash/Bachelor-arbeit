import type * as Party from "partykit/server";
import { Rooms } from "./types";

export default class RoomServer implements Party.Server {
   // Track room occupancy
   rooms: Rooms;

  constructor(public room: Party.Room) {
    this.rooms = {};
  }

  onConnect(connection: Party.Connection) {
    connection.send(JSON.stringify({ type: "rooms", rooms: this.rooms }));
  }

  async onMessage(message: string, sender: Party.Connection) {
    const data = JSON.parse(message);
    
    if (data.type === "createNewRoom") {
      const newRoomId = this.generateUniqueRoomId();
      
      this.rooms[newRoomId] = 1; // Initialize with 1 user
      
      // Notify all clients about the new room
      this.room.broadcast(JSON.stringify({ type: "rooms", rooms: this.rooms }));
      
      // Notify the requester about the new room creation
      sender.send(JSON.stringify({ type: "newRoomCreated", roomId: newRoomId }));
    }
  }

  async onRequest(req: Party.Request) {
    if (req.method === "GET") {
      return new Response(
        `Hi! This is party '${this.room.name}' and room '${this.room.id}'!`
      );
    }

    if (req.method === "POST") {
      const { room, count }: { room: string; count: number } = await req.json();

      this.rooms[room] = count;
      this.room.broadcast(JSON.stringify({ type: "rooms", rooms: this.rooms }));

      return Response.json({ ok: true });
    }

    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  generateUniqueRoomId(): string {
    let roomId;
    do {
      roomId = Math.random().toString(36).substring(2, 8);
    } while (roomId in this.rooms);
    return roomId;
  }
}