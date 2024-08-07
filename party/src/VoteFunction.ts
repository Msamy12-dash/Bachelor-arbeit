import type * as Party from "partykit/server";

import { json, Poll, ReactionSchema, ReactionUpdateSchema } from "./types";
import { type } from "os";

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
  
  export const DeleteVote = (reactions: Record<string, number>) => {
     for (let index = 0; index < reactions.length; index++) {
       reactions[index] = 0;
      
     }
  };

  export const parseVoteMessage = (message: string) => {
    return ReactionSchema.parse(JSON.parse(message));
  };
  
  export const createVoteMessage = (kind: string) => { 
    return JSON.stringify(
      ReactionSchema.parse({
        type: "reaction",
        kind,
      })
    );
  };

  export const DeleteReaction = (reactions: Record<string, number>) => {
    for (let index = 0; index < reactions.length; index++) {
      reactions[index] = 0;
     
    }
 };

  

  export async function SetVote(req: Party.Request, room: Party.Room, setPoll: (poll: Poll) => void): Promise<any> {
    const pollData = await req.json() as Poll;

    console.log(pollData.options)
    let poll = {
      ...pollData,
      votes: pollData.options.map(() => 0),
    };
  
    await savePoll(poll, room);
    const roomId = room.id; // Assuming room.id holds the identifier for the room
    const broadcastMessage = JSON.stringify({ message: "vote now", roomId ,poll});
        await updatevote("connect",room,poll);

    room.broadcast(broadcastMessage);
    setPoll(poll);
  
    return json(poll);
  }
  
  // Standalone function to handle GET requests
  export  function CheckVote(poll: Poll | undefined): any {
    console.log(poll)
    if (poll) {
      
      return json(poll);
    }
  
    return json({ error: "No active poll" });
  }
  
  // Standalone function to save poll
  export async function savePoll(poll: Poll, room: Party.Room) {
    await room.storage.put("poll", poll);
  }
  
  // Standalone function to handle messages
  export async function ReceivingVotes(message: string, poll: Poll | undefined, room: Party.Room, updatePoll: (poll: Poll) => void) {
    if (!poll) return;
  
    const event = JSON.parse(message);
  
    if (event.type === "vote") {

      poll.votes![event.option] += 1;
      room.broadcast(JSON.stringify(poll));
      savePoll(poll, room);
      updatePoll(poll);
    }
  }

  async function updatevote(type: "connect" | "disconnect",room: Party.Room,poll: Poll) {
    try {
      // get handle to a shared room instance of the "connections" party
      const connectionsParty = room.context.parties.notificationserver;

      if (!connectionsParty) {
        throw new Error("Connections party not found");
      }

      const connectionsRoomId = "active-connections";
      const connectionsRoom = connectionsParty.get(connectionsRoomId);

      if (!connectionsRoom) {
        throw new Error(`Connections room with id ${connectionsRoomId} not found`);
      }

      // notify room by making an HTTP POST request
      await connectionsRoom.fetch({
        method: "POST",
        body: JSON.stringify({
          type,
          connectionId: room.id,
          roomId: room.id,
          poll:poll
        }),
      });
    } catch (error) {
      console.error(`Error updating connections for type ${type}:`, error);
    }
  }


/** import type * as Party from "partykit/server";

import { json, Poll, ReactionSchema, ReactionUpdateSchema } from "./types";

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
  
  export const DeleteVote = (reactions: Record<string, number>) => {
     for (let index = 0; index < reactions.length; index++) {
       reactions[index] = 0;
      
     }
  };

  export const parseVoteMessage = (message: string) => {
    return ReactionSchema.parse(JSON.parse(message));
  };
  
  export const createVoteMessage = (kind: string) => { 
    return JSON.stringify(
      ReactionSchema.parse({
        type: "reaction",
        kind,
      })
    );
  };

  export const DeleteReaction = (reactions: Record<string, number>) => {
    for (let index = 0; index < reactions.length; index++) {
      reactions[index] = 0;
     
    }
 };

  

 export async function SetVote(req: Party.Request, room: Party.Room, setPoll: (poll: Poll) => void): Promise<any> {
  const pollData = await req.json() as Poll;

  console.log("Received poll data:", pollData);
  
  let poll: Poll = {
    ...pollData,
    votes: pollData.options.map(() => 0),
  };
  
  await savePoll(poll, room);
  setPoll(poll);
  const broadcastMessage = JSON.stringify({ message: "Vote now", roomId: room.id });

  room.broadcast(broadcastMessage);

  return json(poll);
}

export function CheckVote(poll: Poll | undefined): any {
  console.log("Checking poll state:", poll);
  if (poll) {
    return json(poll);
  } else {
    console.error("No active poll to return.");

    return json({ error: "No active poll" });
  }
}

export async function savePoll(poll: Poll, room: Party.Room) {
  console.log("Saving poll to storage");
  await room.storage.put("poll", poll);
}

export async function ReceivingVotes(message: string, poll: Poll | undefined, room: Party.Room, updatePoll: (poll: Poll) => void) {
  if (!poll) {
    console.warn("No active poll to receive votes.");

    return;
  }

  const event = JSON.parse(message);

  console.log("Processing vote:", event);
  
  if (event.type === "vote") {
    poll.votes![event.option] += 1;
    room.broadcast(JSON.stringify(poll));
    await savePoll(poll, room);
    updatePoll(poll);
  }
}*/