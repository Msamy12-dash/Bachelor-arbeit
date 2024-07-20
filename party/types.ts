import z from "zod";
const allowedReactions = ["thumbsup","heart"] as const;
const allowedReactionsSchema = z.enum(allowedReactions);

// client sends a message either via WebSocket or HTTP
// { type: "reaction", kind: "clap" }
const ReactionSchema = z.object({
  type: z.literal("reaction"),
  kind: allowedReactionsSchema,
});

// server responds with an updated count of reactions
// { type: "update", reactions: { clap: 1, heart: 2 } }
const ReactionUpdateSchema = z.object({
  type: z.literal("update"),
  reactions: z.record(z.number()),
});

export const parseReactionMessage = (message: string) => {
  return ReactionSchema.parse(JSON.parse(message));
};

export const createReactionMessage = (kind: string) => {
  return JSON.stringify(
    ReactionSchema.parse({
      type: "reaction",
      kind,
    })
  );
};

export const parseUpdateMessage = (message: string) => {
  return ReactionUpdateSchema.parse(JSON.parse(message));
};

export const createUpdateMessage = (reactions: Record<string, number>) => {
  return JSON.stringify(
    ReactionUpdateSchema.parse({
      type: "update",
      reactions,
    })
  );
};

export const DeleteReaction = (reactions: Record<string, number>) => {
   for (let index = 0; index < reactions.length; index++) {
     reactions[index] = 0;
    
   }
};
export type Poll = {
  title: string;
  options: string[];
  votes?: number[];
};

export type Rooms = {
  [key: string]: number;
};
export const SINGLETON_ROOM_ID = "index";
export const LOCAL_HOST = "http://localhost:1999";

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
};

export const json = <T>(data: T, status = 200) => Response.json(data, { status, headers: CORS });