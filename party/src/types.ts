import z, { boolean } from "zod";
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
    makeChange?:boolean;
    Room_id:string;
    title: string;
    options: string[];
    votes?: number[];
    bolck_id : number|null;
    user: User;
  };

export type Rooms = {
  [key: string]: number;
};
export const notFound = () => error("Not found", 404);
export const error = (err: string | { message: string }, status = 500) => {
  console.error("Error response", err);

  return json(
    {
      ok: false,
      error: typeof err === "string" ? err : err.message ?? "Unknown error",
    },
    status
  );
};
// To connect to the server

export enum Role {
  Admin = "admin",
  User = "user",
}

export type UserCore = {
  id: string;
  name: string;
  
};

export type User = UserCore & {
  role: Role;
};
export const SINGLETON_ROOM_ID = "index";
export const LOCAL_HOST = "http://localhost:1999";

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type', // Add this line

};

export const json = <T>(data: T, status = 200) => Response.json(data, { status, headers: CORS });
interface Update {
  roomId: string;
  type: 'connect' | 'disconnect' |'delete';
}