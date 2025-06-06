import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const partyRes = await fetch("http://localhost:1999/party/aicontr", {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    body: req.method === "POST" ? JSON.stringify(req.body) : undefined,
  });
  const text = await partyRes.text();
  console.log("[API Proxy] PartyKit responded:", partyRes.status, text);
  res.status(partyRes.status).send(text);
}

