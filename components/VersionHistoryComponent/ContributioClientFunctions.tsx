import * as Y from "yjs";
import PartySocket from "partysocket";
import { PARTYKIT_URL } from "@/env";
import type { AIContributionDetail } from "@/types";

export async function sendContribution(
  roomId: string,
  contribution: AIContributionDetail
) {
  await PartySocket.fetch(
    { host: PARTYKIT_URL, room: roomId, party: "contribution" },
    {
      method: "POST",
      body: JSON.stringify(contribution),
      headers: { "Content-Type": "application/json" },
    }
  );
}
export async function saveAIContributionDetail(
  doc: Y.Doc,
  range: { start: number; length: number },
  user: string,
  prompt: string,
  aiResponse: string,
  source: string,
  roomId = "global-contributions" // or dynamic if needed
) {
  const snapshot = Y.encodeStateVector(doc); // Uint8Array
  const contribution: AIContributionDetail = {
    id: crypto.randomUUID(),
    user,
    prompt,
    aiResponse,
    timestamp: new Date().toISOString(),
    source,
    tags: [], // optionally add topic tags
    ydocSnapshot: Array.from(snapshot), // convert to number[]
  };

  // Send to the PartyKit server
  await PartySocket.fetch(
    {
      host: PARTYKIT_URL,
      room: roomId,
      party: "contribution",
    },
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contribution),
    }
  );
}
