import { useState } from "react";
import { Head } from "./head";

import { Navbar } from "@/components/MainPageComponent/navbar";
import PartySocket from "partysocket";

export default function DefaultLayout({
  children,
  currentRoom,
  setCurrentRoom,
  roomCounts,
  //roomServerSocket,
}: {
  children: React.ReactNode;
  currentRoom: string;
  setCurrentRoom: React.Dispatch<React.SetStateAction<string>>
  roomCounts: Record<string, number>;
  //roomServerSocket: PartySocket,
}) {

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} roomCounts={roomCounts} />
      <main className="container mx-auto max-w-full px-3 flex-grow pt-8 ">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3" />
    </div>
  );
}

