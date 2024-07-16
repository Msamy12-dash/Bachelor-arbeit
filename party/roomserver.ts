import type * as Party from "partykit/server";
import { Rooms } from "./types";

export default class RoomServer implements Party.Server {
  constructor(public room: Party.Room) {}

  async onMessage(message: string, sender: Party.Connection) {
    const data = JSON.parse(message);

    if (data.type === "createNewRoom") {
      const newRoomId = this.generateUniqueRoomId();

      // Notify the requester about the new room creation
      sender.send(
        JSON.stringify({ type: "newRoomCreated", roomId: newRoomId })
      );
    }
  }

  generateUniqueRoomId(): string {
    let roomId;
    do {
      roomId = Math.random().toString(36).substring(2, 8);
    } while (roomId in this.rooms);
    return roomId;
  }
}
