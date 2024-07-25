import { PARTYKIT_URL } from "@/pages/env";
import { Poll } from "@/party/types";

export async function sendvote(poll: Poll) {
    try{await fetch(`${PARTYKIT_URL}/parties/vote/${1}`, {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    });}catch(error){};}