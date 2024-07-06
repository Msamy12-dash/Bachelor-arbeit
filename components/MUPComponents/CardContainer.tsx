// components/MUPComponents/CardContainer.tsx
import React, { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
import useYProvider from "y-partykit/react";
import MUPCard from "./MUPCard";
import { SINGLETON_ROOM_ID } from "@/party/types";

// Interface to structure each card's data
interface CardData {
  id: string;
  selectedText: string;
  editableText: string;
}

export default function CardContainer({
  selectedText,
  room,
}: Readonly<{
  selectedText: string;
  room: string;
}>) {
  const [cards, setCards] = useState<CardData[]>([]);
  const ydoc = useRef(new Y.Doc()).current;
  const provider = useYProvider({
    host: "localhost:1999", // or your server address
    party: "editorserver",
    room: SINGLETON_ROOM_ID,
    doc: ydoc,
  });

  useEffect(() => {
    const yarray = ydoc.getArray<CardData>("cards");

    setCards(yarray.toArray());

    const observer = (event: Y.YArrayEvent<CardData>) => {
      setCards(yarray.toArray());
    };

    yarray.observe(observer);

    return () => {
      yarray.unobserve(observer);
    };
  }, [ydoc]);

  const handleAddCard = () => {
    const yarray = ydoc.getArray<CardData>("cards");
    const newCard = {
      id: Math.random().toString(36).substring(2, 8),
      selectedText,
      editableText: "",
    };
    yarray.push([newCard]);
  };

  const handleCardTextChange = (id: string, newText: string) => {
    const yarray = ydoc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), editableText: newText };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  return (
    <div>
      {selectedText && selectedText.length > 0 && (
        <button onClick={handleAddCard}>Add Card with Selected Text</button>
      )}
      <div className="cardsContainer">
        {cards.map((card) => (
          <MUPCard
            key={card.id}
            cardData={card}
            room={room}
            onTextChange={handleCardTextChange}
          />
        ))}
      </div>
    </div>
  );
}
