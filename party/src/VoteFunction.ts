import type * as Party from "partykit/server";

import { json, Poll, ReactionSchema, ReactionUpdateSchema } from "./types";

import { PARTYKIT_URL } from "@/pages/env";
const DELETE_VOTE_AFTER_VOTTING_PERIOD = 100 * 60 * 1; 


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

     
    let poll = {
      ...pollData,
      votes: pollData.options.map(() => 0),

    };

    await room.storage.setAlarm(
      new Date().getTime() + DELETE_VOTE_AFTER_VOTTING_PERIOD
    );
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
    
    if (poll) {
      
      return json(poll);
    }
  
    return json({ error: "No active poll" });
  }
  
  // Standalone function to save poll
  export async function savePoll(poll: Poll, room: Party.Room) {
    await room.storage.put<Poll>("poll", poll);
    await room.storage.put<string>("id",room.id);
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

  export async function updatevote(type: "connect" | "disconnect"|"delete",room: Party.Room,poll: Poll) {
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
  export async function deletevote(type: "delete",poll: Poll) {
    try {
      // get handle to a shared room instance of the "connections" party
     console.log("deleting this pool"+poll.votes)
      // notify room by making an HTTP POST request
      fetch(`${PARTYKIT_URL}/parties/notificationserver/active-connections`, {

        method: "POST",
        body: JSON.stringify({
          type,
          poll:poll

        }),
      });
    } catch (error) {
      console.error(`Error updating connections for type ${type}:`, error);
    }
  }