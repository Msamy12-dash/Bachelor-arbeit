import React, { useEffect, useState } from "react";

import { Reactions } from "./ComponentLike";

import { PARTYKIT_HOST, PARTYKIT_URL } from "@/env";

interface LikeConnectorProps {
  roomID: string;
}

async function fetchData(roomID: string, setRes: React.Dispatch<React.SetStateAction<{ reactions: {} }>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) {
  try {
    const req = await fetch(
      `${PARTYKIT_URL}/parties/likeserver/${roomID}`,
      {
        method: "GET",
        next: { revalidate: 0 },
      }
    );

    const data = await req.json();

    setRes(data);
  } catch (error) {
    setErrorMessage("Failed to fetch data");
  }
}

export default function LikeConnector({ roomID }: LikeConnectorProps) {
  const [res, setRes] = useState({ reactions: {} });
  const [, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData(roomID, setRes, setErrorMessage);
  }, [roomID]);

  return (
    <>
      <Reactions
        initialData={res.reactions}
        roomHost={PARTYKIT_HOST}
        roomId={roomID}
      />
    </>
  );
}

async function Deletedata(roomID: string, setRes: React.Dispatch<React.SetStateAction<{ reactions: {} }>>, setErrorMessage: React.Dispatch<React.SetStateAction<string>>) {
  try {
    const req = await fetch(
      `${PARTYKIT_URL}/parties/likeserver/${roomID}`,
      {
        method: "DELETE",
        next: { revalidate: 0 },
      }
    );

    const data = await req.json();

    setRes(data);
  } catch (error) {
    setErrorMessage("Failed to fetch data");
  }
}