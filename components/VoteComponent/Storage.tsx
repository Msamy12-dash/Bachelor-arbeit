import * as Party from "partykit/server";

export type Range = {
  index: number;
  length: number;
};

// export default async function arrayHandler(
//   request: Party.Request,
//   room: Party.Room,
// ) {
//   if (request.method === "POST") {
//     const arrayData = await request.json();
//
//     room.context.parties.arrayData = arrayData;
//
//     return new Response(
//       JSON.stringify({ status: "Array saved successfully!" }),
//       {
//         headers: { "Content-Type": "application/json" },
//       },
//     );
//   }

//   return new Response("Invalid request method", { status: 405 });
// }
