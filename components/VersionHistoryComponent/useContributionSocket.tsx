// src/hooks/useContributionSocket.tsx
import usePartySocket from "partysocket/react";
import { AIContributionDetail } from "@/types";
import { PARTYKIT_HOST } from "@/env";

export default function useContributionSocket(
  roomId: string,
  onInitial: (list: AIContributionDetail[]) => void,
  onDetail: (detail: AIContributionDetail) => void
) {
  return usePartySocket({
    host: PARTYKIT_HOST,
    room: roomId,
    party: "contribution",
    onMessage(evt) {
      const msg = JSON.parse(evt.data);
      if (msg.type === "initial") {
        onInitial(msg.contributions);
      } else if (msg.type === "contribution") {
        onDetail(msg.detail);
      }
    },
  });
}
