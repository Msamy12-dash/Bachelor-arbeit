import React, { useState } from 'react';
import { Head } from './head';
import { Navbar } from "@/components/MainPageComponent/navbar";
import EditorPage from '@/components/EditorComponent/Editorinterface';

export default function DefaultLayout() {
  const [currentRoom, setCurrentRoom] = useState("default");

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      <main className="container mx-auto max-w-full px-3 flex-grow pt-8">
        <EditorPage currentRoom={currentRoom} />
      </main>
      <footer className="w-full flex items-center justify-center py-3" />
    </div>
  );
}
