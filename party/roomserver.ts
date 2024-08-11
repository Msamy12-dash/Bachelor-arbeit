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
    const connectionID = conn.id;

    console.log(`* onConnect at ${partyName}/${roomId}: Connection ID: ${connectionID}, Number of connections: ${existingConnections.size}`);

    conn.send(JSON.stringify({ type: "rooms", rooms: this.rooms }));
  }

  async onRequest(req: Party.Request) {
    console.log(`Received ${req.method} request to ${req.url}`);

    if (req.method === "OPTIONS") {
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
            console.log("User already logged in:", userId);
            console.log("Active Users:", this.activeUserIds);

            return addCorsHeaders(Response.json({ success: false, message: "User already logged in" }));
          }
          this.activeUserIds.set(userId, connectionId);
          console.log("Active Users updated:", this.activeUserIds);

          return addCorsHeaders(Response.json({ success: true }));
        }
      }

      if (room && count !== undefined) {
        console.log(`Updating room: ${room} with count: ${count}`);
        this.rooms[room] = count;
        console.log(`Room update: ${room} has ${count} user${count !== 1 ? "s" : ""}`);

        console.log("Broadcasting updated room data:", this.rooms);
        this.room.broadcast(
          JSON.stringify({ type: "rooms", rooms: this.rooms })
        );
      }

      return addCorsHeaders(Response.json({ ok: true }));
    }

    if (req.method === "GET") {
      console.log("Active Users:", Array.from(this.activeUserIds.keys()));

      return addCorsHeaders(Response.json({
        activeUserIds: Array.from(this.activeUserIds.keys()),
      }));
    }

    return addCorsHeaders(Response.json({ error: "Method not allowed" }, { status: 405 }));
  }

  onClose(conn: Party.Connection) {
    const partyName = this.room.name;
    const roomId = this.room.id;
    const connectionID = conn.id;

    console.log(`* onClose at ${partyName}/${roomId}: Connection ID: ${connectionID}`);

    this.activeUserIds.forEach((value, key) => {
      if (value === conn.id) {
        this.activeUserIds.delete(key);
      }
    });

    console.log("Active Users after disconnect:", this.activeUserIds);
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
