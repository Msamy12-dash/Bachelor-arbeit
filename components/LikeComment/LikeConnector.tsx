/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";

import { Reactions } from "./ComponentLike";

import { PARTYKIT_HOST, PARTYKIT_URL } from "@/pages/env";


const ROOM_ID = "1";

export default function LikeConnector() {
  const [reactions, setReactions] = useState({ });
  const roomId = ROOM_ID;
  const roomHost = PARTYKIT_HOST+"/parties/likeserver";

  useEffect(() => {
    async function fetchReactions() {
      try {
        
        const req = await fetch(`/parties/likeserver/${ROOM_ID}`, {
          method: "GET",
          next: { revalidate: 0 },
        });
        const res = await req.json();


        setReactions(res.reactions);
      } catch (error) {
        
      }
    }

    fetchReactions();
  }, [roomHost, roomId]);

  return (
    <>
      <Reactions
        initialData={reactions}
        roomHost={roomHost}
        roomId={roomId}
      />
    </>
  );
}
