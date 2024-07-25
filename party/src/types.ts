import z from "zod";
export const allowedReactions = ["thumbsup","heart"] as const;
export const allowedReactionsSchema = z.enum(allowedReactions);

// client sends a message either via WebSocket or HTTP
// { type: "reaction", kind: "clap" }
export const ReactionSchema = z.object({
  type: z.literal("reaction"),
  kind: allowedReactionsSchema,
});

// server responds with an updated count of reactions
// { type: "update", reactions: { clap: 1, heart: 2 } }
export const ReactionUpdateSchema = z.object({
  type: z.literal("update"),
  reactions: z.record(z.number()),
});


export type Poll = {
  title: string;
  options: string[];
  votes?: number[];
};

export type Rooms = {
  [key: string]: number;
};

// To connect to the server


export const SINGLETON_ROOM_ID = "index";
export const LOCAL_HOST = "http://localhost:1999";

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type', // Add this line

};

export const json = <T>(data: T, status = 200) => Response.json(data, { status, headers: CORS });