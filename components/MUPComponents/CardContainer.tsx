import React, { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
import useYProvider from "y-partykit/react";
import MUPCard from "./MUPCard";
import { Button } from "@nextui-org/react";

interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
  responseText: string;
  submitting: boolean;
}

export default function CardContainer({
  selectedText,
  room,
  completeText,
}: Readonly<{
  selectedText: string;
  room: string;
  completeText: string;
}>) {
  const ydoc = useRef(new Y.Doc()).current;
  const [cards, setCards] = useState<CardData[]>([]);

  const provider = useYProvider({
    host: "localhost:1999",
    party: "editorserver",
    room,
    doc: ydoc,
  });

  useEffect(() => {
    const yarray = ydoc.getArray<CardData>("cards");

    const updateCards = () => {
      setCards(yarray.toArray());
    };

    yarray.observe(updateCards);
    updateCards();

    return () => {
      yarray.unobserve(updateCards);
    };
  }, [ydoc]);

  const handleAddCard = () => {
    const yarray = ydoc.getArray<CardData>("cards");
    const newCard = {
      id: Math.random().toString(36).substring(2, 8),
      completeText,
      selectedTextOnMUPCard: selectedText,
      promptText: "",
      responseText: "",
      submitting: false,
    };
    yarray.push([newCard]);
  };

  const handleCardTextChange = (id: string, newText: string) => {
    const yarray = ydoc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), promptText: newText };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleResponseChange = (id: string, newResponse: string) => {
    const yarray = ydoc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), responseText: newResponse };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleSubmittingChange = (id: string, isSubmitting: boolean) => {
    const yarray = ydoc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), submitting: isSubmitting };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  return (
    <div className="flex flex-1 flex-col p-6 bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg mt-4 overflow-y-auto border-t-3 border-gray-300 relative h-full -mx-6 -mb-6">
      <Button
        className={`inline-flex items-center justify-center px-6 py-3 mb-6 text-lg text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md ${
          selectedText ? "hover:from-blue-600 hover:to-indigo-600" : "opacity-60 cursor-not-allowed"
        } transition-all duration-300`}
        onClick={handleAddCard}
        disabled={!selectedText}
      >
        Add Card with Selected Text
      </Button>
      <div className="flex flex-col space-y-6">
        {cards.map((card) => (
          <MUPCard
            key={card.id}
            cardData={card}
            room={room}
            onTextChange={handleCardTextChange}
            onResponseChange={handleResponseChange}
            onSubmittingChange={handleSubmittingChange}
          />
        ))}
      </div>
    </div>
  );
  
  
  
}
