import * as Y from "yjs";

export interface AIContributionDetail {
  id: string;
  user: string; // The user who initiated the contribution
  prompt: string; // The AI prompt
  aiResponse: string; // The AI's response
  timestamp: string; // When the contribution occurred
  source: string; // The source or purpose of the contribution
}