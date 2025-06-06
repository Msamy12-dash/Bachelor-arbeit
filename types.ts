
export interface AIContributionDetail {
  id: string;
  user: string;
  prompt: string;
  aiResponse: string;
  timestamp: string;
  source: string;
  tags: string[];
  ydocSnapshot: number[];
}
