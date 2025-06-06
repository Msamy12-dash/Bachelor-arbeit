// server/ContributionServer.ts
import * as Party from "partykit/server";
import type { AIContributionDetail } from "../types";

export default class ContributionServer implements Party.Server {
  private contributions: AIContributionDetail[] = [];

  constructor(public readonly room: Party.Room) {}

  onStart(): void {
    // wipe any stale state
    this.room.storage.deleteAll();
  }

  /** Send full list on new WS connections */
  async onConnect(conn: Party.Connection) {
    // load from storage if first ever
    const stored =
      (await this.room.storage.get<AIContributionDetail[]>(
        "Contributions"
      )) ?? [];
    this.contributions = stored;
    conn.send(
      JSON.stringify({ type: "initial", contributions: this.contributions })
    );
  }

  async onMessage(message: string, sender: Party.Connection) {
    const { type, detail } = JSON.parse(message) as {
      type: string;
      detail: AIContributionDetail;
    };
    if (type == "contribution:tag") return this.handleTagUpdate(detail);
    if (type !== "contribution") return;

    // 1) append
    this.contributions.push(detail);

    // 2) persist back
    await this.room.storage.put("Contributions", this.contributions);

    // 3) broadcast **only** the new detail
    this.room.broadcast(JSON.stringify({ type: "contribution", detail }));
  }

  private async handleTagUpdate(detail: AIContributionDetail) {
    const index = this.contributions.findIndex(c => c.id === detail.id);
    if (index !== -1) {
      const existing = this.contributions[index];
      const existingTags = existing.tags || [];
      const incomingTags = detail.tags || [];
      const mergedTags = Array.from(new Set([...existingTags, ...incomingTags]));

      this.contributions[index] = { ...existing, tags: mergedTags };
      await this.room.storage.put("Contributions", this.contributions);
      this.room.broadcast(
        JSON.stringify({ type: "contribution", detail: this.contributions[index] })
      );
    }
  }
}
