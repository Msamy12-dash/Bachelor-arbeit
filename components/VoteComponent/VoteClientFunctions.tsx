import { PARTYKIT_URL } from "@/pages/env";
import { Poll } from "@/party/src/types";

export async function sendvote(ID:String,poll: Poll) {
    try{await fetch(`${PARTYKIT_URL}/parties/vote/${ID}`, {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    });}catch(error){};}