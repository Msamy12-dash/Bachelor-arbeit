import type * as Party from "partykit/server";


import { Rooms } from "./src/types";

import { addCorsHeaders } from "@/lib/userUtils";

export default class RoomServer implements Party.Server {
  rooms: Rooms;
  activeUserIds: Map<string, string>; // Map<userId, connectionId>

  constructor(public room: Party.Room) {
    this.rooms = {};
    this.activeUserIds = new Map();
  }

  async onStart(): Promise<void> {
    try {
      const roomNames = await this.getAllRoomNamesFromAPI();

      roomNames.forEach((roomName) => {
        this.rooms[roomName] = 0;
      });
    } catch (error) {
      console.error("Error initializing rooms:", error);
    }
  }

  onConnect(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;
    const existingConnections = this.room.getConnections();
    const numberOfExistingConnections: string[] = [];

    Array.from(existingConnections).forEach((c: Party.Connection) =>
      numberOfExistingConnections.push(c.id)
    );
    const connectionID = conn.id;

    //console.log(`* onConnect at ${partyName}/${roomId}:
    //Connection ID: ${connectionID},
    //Number of connections: ${numberOfExistingConnections}
//-----------------------------------------------`);
  

    conn.send(JSON.stringify({ type: "rooms", rooms: this.rooms }));
  }

  async onRequest(req: Party.Request) {

    //console.log(`Received ${req.method} request to ${req.url}`);
    
    if (req.method === "OPTIONS") {
      //console.log("Received OPTIONS request:", req, "\n-----------------------------------------------");
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }
    
    if (req.method === "POST") {
      const {
        room,
        count,
        type,
        connectionId,
        userId,
      }: {
        room: string;
        count?: number;
        type?: string;
        connectionId?: string;
        userId?: string;
      } = await req.json();

      if (type && userId && connectionId) {
        if (type === "checkAndAddUser") {
          if (this.activeUserIds.has(userId)) {
            //return Response.json({ success: false, message: "User already logged in" });
            //console.log("active Users:", this.activeUserIds);

            // @ts-ignore
            return addCorsHeaders(Response.json({ success: false, message: "User already logged in" }));
          }
          this.activeUserIds.set( userId, connectionId );
          //console.log("active Users:", this.activeUserIds);

          // @ts-ignore
          return addCorsHeaders(Response.json({ success: true }));
        }
      }

      if (count !== undefined) {
        this.rooms[room] = count;
        this.room.broadcast(
          JSON.stringify({ type: "rooms", rooms: this.rooms })
        );
        //console.log(
        //  `Room update: ${room} has ${count} user${count !== 1 ? "s" : ""}`);
      }

      // @ts-ignore
      return addCorsHeaders(Response.json({ ok: true }));
    }
    if (req.method === "GET") {
      // @ts-ignore
      return addCorsHeaders(Response.json({
        activeUserIds: Array.from(this.activeUserIds.keys()),
      }));
    }

    // @ts-ignore
    return addCorsHeaders(Response.json({ error: "Method not allowed" }, { status: 405 }));
  }

  onClose(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;
    const existingConnections = this.room.getConnections();
    const numberOfExistingConnections: string[] = [];

    Array.from(existingConnections).forEach((c: Party.Connection) =>
      numberOfExistingConnections.push(c.id)
    );
    const connectionID = conn.id;

    //console.log(`* onConnect at ${partyName}/${roomId}:
   // Connection ID: ${connectionID},
   // Number of connections: ${numberOfExistingConnections}
//-----------------------------------------------`);


    this.activeUserIds.forEach((value, key) => {
      if (value === conn.id) {
      this.activeUserIds.delete(key);
      }
    });
  }

  private async getAllRoomNamesFromAPI(): Promise<string[]> {
    const response = await fetch("http://localhost:3000/api/getRoomNames", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch room names");
    }

    const data = await response.json();

    return data.roomNames;
  }

  
}
