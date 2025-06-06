import type * as Party from "partykit/server";

interface AIContributionDetail {
  id: string;
  user: string;
  prompt: string;
  aiResponse: string;
  timestamp: string;
  source: string;
  tags: string[];
  ydocSnapshot: number[];
}

// CORS headers for all responses
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS, DELETE",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

// JSON response helper
const json = <T>(data: T, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: CORS,
  });

// Handle GET: return all contributions
export async function CheckContributions(
  room: Party.Room
) {
  const list =
    (await room.storage.get<AIContributionDetail[]>("Contributions")) ?? [];
  return json(list);
}

// Handle HTTP POST: add a new contribution
export async function SetContribution(
  req: Party.Request,
  room: Party.Room,
  set?: (list: AIContributionDetail[]) => void
) {
  const detail = (await req.json()) as AIContributionDetail;

  // Get current list from storage (or start fresh)
  const current =
    (await room.storage.get<AIContributionDetail[]>("Contributions")) ?? [];

  // Add the new detail
  const updated = [...current, detail];

  // Save updated list back to storage
  await room.storage.put("Contributions", updated);

  // Update memory if a set() function is passed
  if (set) set(updated);

  return json({ success: true });
}

// Handle WebSocket “contribution” messages
export async function ReceiveContributions(
  msg: string,
  room: Party.Room,
  set?: (list: AIContributionDetail[]) => void
) {
  const { type, detail } = JSON.parse(msg) as {
    type: string;
    detail: AIContributionDetail;
  };

  if (type !== "contribution") return;

  // Get current list
  const current =
    (await room.storage.get<AIContributionDetail[]>("Contributions")) ?? [];

  // Add and store new entry
  const updated = [...current, detail];
  await room.storage.put("Contributions", updated);

  if (set) set(updated);

  // Broadcast updated list to all clients
  room.broadcast(JSON.stringify(updated));
}
