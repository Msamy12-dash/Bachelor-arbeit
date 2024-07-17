import type * as Party from "partykit/server";

interface ConnectionUpdate {
  type: "connect" | "disconnect";
  connectionId: string;
  roomId: string;
}

export default class RoomServer implements Party.Server {
  connections: Record<string, number> | undefined;
  
  constructor(readonly room: Party.Room) {
    this.initialize();
  }

  async initialize() {
    // Clear connections on server start
    await this.room.storage.delete("connections");
    this.connections = {};
    console.log("Connections reset on server start");
  }

  async onRequest(request: Party.Request) {
    // Read from storage
    this.connections = this.connections ?? (await this.room.storage.get("connections")) ?? {};
    
    // Update connection count
    if (request.method === "POST") {
      const update: ConnectionUpdate = await request.json();
      const count = this.connections[update.roomId] ?? 0;
      if (update.type === "connect")
        this.connections[update.roomId] = count + 1;
      if (update.type === "disconnect")
        this.connections[update.roomId] = Math.max(0, count - 1);

      // Save to storage
      await this.room.storage.put("connections", this.connections);
      
      // Notify any connected listeners
      this.room.broadcast(JSON.stringify(this.connections));

      return new Response("OK");
    }
    return new Response("NOK");
  }

  async onConnect(connection: Party.Connection) {
    // Send current connections to the new connection
    connection.send(JSON.stringify(this.connections));
  }
}