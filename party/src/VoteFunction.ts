import { Poll, ReactionSchema, ReactionUpdateSchema } from "./types";

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
  

// Function to  Vote

  export const parseUpdateVote = (message: string) => {
    return ReactionUpdateSchema.parse(JSON.parse(message));
  };
  
  export const createVote = (vote: Poll) => {
    return JSON.stringify(
      ReactionUpdateSchema.parse({
        type: "Created",
        vote,
      })
    );
  };
  
  export const DeleteReaction = (reactions: Record<string, number>) => {
     for (let index = 0; index < reactions.length; index++) {
       reactions[index] = 0;
      
     }
  };