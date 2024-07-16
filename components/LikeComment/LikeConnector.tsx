/* eslint-disable prettier/prettier */

import { useEffect, useState } from "react";

import { Reactions } from "./ComponentLike";

import { PARTYKIT_HOST, PARTYKIT_URL } from "@/pages/env";



export default function LikeConnector() {
  const [reactions, setReactions] = useState({ });
  const roomId = "1";
  const roomHost = PARTYKIT_URL+"/parties/ReactionServer";

  useEffect(() => {
    async function fetchReactions() {
      try {
        
        const req = await fetch(roomHost+"/1", {
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
