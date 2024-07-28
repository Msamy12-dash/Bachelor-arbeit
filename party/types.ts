/* eslint-disable prettier/prettier */
import z from "zod";
const allowedReactions = ["clap", "heart", "thumbsup", "party"] as const;
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

export const createUpdateMessage = (reactions: Record<string, number>) => {
  return JSON.stringify(
    ReactionUpdateSchema.parse({
      type: "update",
      reactions :  {
        "heart": 0,
        "thumbsup": 0
      }
    })
  );
};

export const parseUpdateMessage = (message: string) => {
  return ReactionUpdateSchema.parse(JSON.parse(message));
};
export type Poll = {
  title: string;
  options: string[];
  votes?: number[];
};

export type Rooms = {
  [key: string]: number;
};

export enum Role {
  Admin = "admin",
  User = "user",
}

export type User = {
  id: string;
  name: string;
  color: string;
  role: Role;
};
export const SINGLETON_ROOM_ID = "index";
export const LOCAL_HOST = "http://localhost:1999";

