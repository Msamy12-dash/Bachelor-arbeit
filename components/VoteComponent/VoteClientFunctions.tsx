import PartySocket from "partysocket";

import { PARTYKIT_URL } from "@/env";
import { Poll } from "@/party/src/types";

export async function sendvote(ID:string,poll: Poll) {

  try{await PartySocket.fetch(
    { host: PARTYKIT_URL, room: ID , party:"vote" },
    {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    })}catch(error){};
    

    /**try{await fetch(`${PARTYKIT_URL}/parties/vote/${ID}`, {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    });}catch(error){};**/}

    
    
    