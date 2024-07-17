/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useState } from "react";
import usePartySocket from "partysocket/react";
import { Rooms, SINGLETON_ROOM_ID } from "@/party/types";
import TextArea from "../common/textArea";
import Button from "../common/button";
import CardContainer from "../MUPComponents/CardContainer";
import { PARTYKIT_HOST } from "@/pages/env";
import Quill from "react-quill";
import * as Y from "yjs";
import useYProvider from "y-partykit/react";

export default function Lobby({
  currentRoom,
  setCurrentRoom,
  selectedText,
  completeText,
  setPrompts,
  editor
}: {
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
  selectedText: string;
  completeText: string;
  setPrompts: Function
  editor: Quill & {
    highlightText: (index: number, length: number, color: string) => void;
    removeHighlight: (index: number, length: number) => void;
    getSelection: () => { index: number; length: number } | null;
  } | null;
}) {
  const [rooms, setRooms] = useState<Rooms>({});
  const [nextRoomId, setNextRoomId] = useState<number>(1);
  const [inputText, setInputText] = useState('')
  const ydoc = new Y.Doc();
  const provider = useYProvider({
    host: "localhost:1999", // optional, defaults to window.location.host
    party: "editorserver",
    room: SINGLETON_ROOM_ID,
    doc: ydoc,
  });

  usePartySocket({
    // host: props.host, -- defaults to window.location.host if not set
    host: PARTYKIT_HOST,

    party: "rooms",
    room: SINGLETON_ROOM_ID,
    onMessage(evt) {
      const data = JSON.parse(evt.data);

      if (data.type === "rooms") {
        setRooms((prevRooms) => ({
          ...prevRooms,
          ...data.rooms,
        }));
      }
    },
  });

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    const savedPrompts = JSON.parse(
      localStorage.getItem("savedPrompts") || "[]"
    );
    const updatedPrompts = [...savedPrompts, inputText];

    localStorage.setItem("savedPrompts", JSON.stringify(updatedPrompts));
    setPrompts(updatedPrompts);
    const ytext = provider.doc.getText("promptList");
      ytext.setAttribute("savePrompt", JSON.stringify(updatedPrompts));
      console.log("🚀 ~ handleSave ~ ytext:", ytext.getAttribute("savePrompt"));
    setInputText("");
  };


  const handleNewRoom = () => {
    const newRoom = nextRoomId.toString().padStart(1, "0"); // Converts the number to a string with leading zeros

    setRooms((prevRooms) => ({
      ...prevRooms,
      [newRoom]: 1, // Assuming the new room starts with 1 present user
    }));
    setCurrentRoom(newRoom);
    setNextRoomId(nextRoomId + 1); // Increment the next room ID
  };

  return (
    <div className="flex flex-col w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Top Section */}
      <div className="top-section p-4 bg-white rounded-lg">
        <h3 className="text-2xl font-bold mb-4">All Rooms</h3>
        <ul className="flex flex-col space-y-4 mb-6">
          {Object.entries(rooms).map(([room, count]) => {
            return (
              //Need to add: show Present: {count} next to each room
              <li key={room} className="flex items-center justify-between p-4 bg-white rounded shadow">
                <Button
                  onClick={() => setCurrentRoom(room)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600"
                >
                  Room #{room}
                </Button>
                <span>
                  Present <span className="font-bold">{count}</span>
                </span>
              </li>
            );
          })}
        </ul>
        {/* <Button
          onClick={() => setCurrentRoom(Math.random().toString(36).substring(2, 8))}
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600 mb-6"
        >
          New Room
        </Button> */}
      

      {/**
       * Prompt save
       */}
      <div style={{ display: "flex" }}>
        <TextArea value={inputText} onChange={handleTextChange} />
        <Button onClick={handleSave}>Save</Button>
      </div>
      </div>
  
      {/* Card Container Section */}
      {currentRoom && (
        <div className="card-container flex-1 overflow-hidden">
          <CardContainer
            key={currentRoom}
            selectedText={selectedText}
            room={currentRoom}
            completeText={completeText}
            editor={editor}
          />
        </div>
      )}
    </div>
  );
  
}
