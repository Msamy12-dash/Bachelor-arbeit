/* eslint-disable prettier/prettier */
import type * as Party from "partykit/server";
import { Rooms } from "./types";

export default class RoomServer implements Party.Server {
  // Track room occupancy
  rooms: Rooms;

  constructor(public room: Party.Room) {
    this.rooms = {};
  }

  onConnect(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;
    const existingConnections = this.room.getConnections();
    const numberOfExistingConnections = [...existingConnections].length;
    const connectionID = conn.id;
    const clientAlreadyConnected = [...existingConnections].some(
      (c) => c.id === connectionID
    );
    console.log(`onConnect at ${partyName}/${roomId}:
Number of connections: ${numberOfExistingConnections},
Connection ID: ${connectionID},
Client already connected: ${clientAlreadyConnected}
`);

    conn.send(JSON.stringify({ type: "rooms", rooms: this.rooms }));
  }

  async onRequest(req: Party.Request) {
    

    if (req.method === "POST") {
      const { room, count }: { room: string; count: number } = await req.json();

      this.rooms[room] = count;
      this.room.broadcast(JSON.stringify({ type: "rooms", rooms: this.rooms }));
      
      console.log(`Room update: ${room} has ${count} user${count !== 1 ? "s" : ""}`);
      console.log(`All rooms:
${JSON.stringify(this.rooms, null, 2)}
`);
      return Response.json({ ok: true });
    }

    // Always return a Response
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  onClose(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;
    const existingConnections = this.room.getConnections();
    const numberOfExistingConnections = [...existingConnections].length;
    const connectionID = conn.id;
    const clientAlreadyConnected = [...existingConnections].some(
      (c) => c.id === connectionID
    );
    console.log(`onConnect at ${partyName}/${roomId}:
Number of connections: ${numberOfExistingConnections},
Connection ID: ${connectionID},
Client already connected: ${clientAlreadyConnected}
`);
  }
}
