/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";

import { Reactions } from "./ComponentLike";

import { PARTYKIT_URL } from "@/pages/env";


const ROOM_ID = "1";

export default function LikeConnector() {
  const [reactions, setReactions] = useState({ });
  const roomHost = PARTYKIT_URL;
  const roomId = ROOM_ID;

  useEffect(() => {
    async function fetchReactions() {
      try {
        const req = await fetch(`/parties/likesserver/${roomId}`, {
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
