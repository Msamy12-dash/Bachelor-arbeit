import * as Party from "partykit/server";
import { json } from "./src/types";

// Define the shape of your AI contribution data
interface AiContributionDetail {
  id: string;
  user: string;
  prompt: string;
  aiResponse: string;
  timestamp: string;
  ydocSnapshot: Uint8Array; // or `ArrayBuffer` depending on how you handle this
}

export default class AiContributionsServer implements Party.Server {
  // Keep a reference to the room
  constructor(public readonly room: Party.Room) {}

  /**
   * onStart: This method is called when the PartyKit room starts for the first time.
   * You could optionally clear or set up some initial storage here if you want.
   */
  onStart(): void | Promise<void> {
    // Example: Clear out any previously stored AI contributions
    // this.room.storage.deleteAll();
    return;
  }

  /**
   * onConnect: Called each time a WebSocket connection is established.
   */
  async onConnect(connection: Party.Connection) {
    // If you'd like to send something to the user upon connection, you can do so here.
    // e.g., connection.send("Welcome to AI Contributions server!");
  }

  /**
   * onRequest: Handles HTTP requests to this room. We’ll use this to store and retrieve AI contributions.
   */
  async onRequest(request: Party.Request): Promise<Response> {
    const { method } = request;
    switch (method) {
      case "POST":
        return this.storeAiContribution(request);
      case "GET":
        return this.listAiContributions(request);
      default:
        return json({ error: "Method not found" });
    }
  }

  /**
   * storeAiContribution: Handles the POST request, storing AI contribution details into room.storage.
   */
  private async storeAiContribution(request: Party.Request): Promise<Response> {
    try {
      // Parse the JSON body from the request
      const aiContributionDetail = (await request.json()) as AiContributionDetail;
      const { id } = aiContributionDetail;

      if (!id) {
        return json({ error: "Missing AI contribution 'id' field" });
      }

      // Store it in PartyKit room.storage using the id as a key
      await this.room.storage.put<AiContributionDetail>(`ai-${id}`, aiContributionDetail);

      return json({ success: true });
    } catch (error: any) {
      console.error("Error storing AI contribution:", error);
      return json({ error: error.message || "Internal Server Error" });
    }
  }

  /**
   * listAiContributions: Handles the GET request.
   * - Could return all stored AI contributions, or
   * - if a query parameter is provided (e.g. ?id=xxx), return a single item
   */
  private async listAiContributions(request: Party.Request): Promise<Response> {
    try {
      // Example of checking a query parameter "id"
      const url = new URL(request.url);
      const idQuery = url.searchParams.get("id");

      if (idQuery) {
        // Return a single item if 'id' is specified
        const item = await this.room.storage.get<AiContributionDetail>(`ai-${idQuery}`);
        if (!item) {
          return json({ error: "Not found" });
        }
        return json(item);
      }

      // Otherwise, return all items
      const allData = this.room.storage.list<AiContributionDetail>();
      const items: AiContributionDetail[] = [...(await allData).values()];
      return json(items);
    } catch (error: any) {
      console.error("Error listing AI contributions:", error);
      return json({ error: error.message || "Internal Server Error" });
    }
  }

  /**
   * onMessage: Handle WebSocket messages sent by the connected client.
   * If not needed, you can leave it unimplemented.
   */
  async onMessage(message: string, sender: Party.Connection) {
    // For example, if you want to handle real-time collaboration or updates
    // but for storing an AI contribution, you may not need this at all.
  }

  /**
   * onAlarm: Called when an alarm is triggered (if you set one via room.storage.setAlarm).
   * If you don’t use alarms, you can ignore/remove this.
   */
  async onAlarm() {
    // Not needed unless you want some scheduled logic.
  }

  /**
   * onClose: Called when a WebSocket connection closes
   */
  async onClose(connection: Party.Connection) {
    // Optionally handle cleanup here
  }
}
