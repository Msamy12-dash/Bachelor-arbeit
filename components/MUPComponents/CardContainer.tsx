// components/MUPComponents/CardContainer.tsx
import React, { useEffect, useState, useRef } from "react";
import * as Y from "yjs";
import useYProvider from "y-partykit/react";
import MUPCard from "./MUPCard";
import styles from "./CardContainer.module.css"; // Import CSS module

// Interface to structure each card's data
interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
}

export default function CardContainer({
  selectedText,
  room,
  completeText,
}: Readonly<{
  selectedText: string;
  room: string;
  completeText:string;
}>) {
  const ydoc = useRef(new Y.Doc()).current;
  const [cards, setCards] = useState<CardData[]>([]);

  const provider = useYProvider({
    host: "localhost:1999", // or your server address
    party: "editorserver",
    room, // <-- Use room as the identifier for Y.Doc, not SINGLETON_ROOM_ID 
    doc: ydoc,
  });

  useEffect(() => {
    const yarray = ydoc.getArray<CardData>("cards");

    const updateCards = () => {
      setCards(yarray.toArray());
    };

    yarray.observe(updateCards);
    updateCards(); // Initial load

    return () => {
      yarray.unobserve(updateCards);
    };
  }, [ydoc]);

  const handleAddCard = () => {
    const yarray = ydoc.getArray<CardData>("cards");
    const newPromptText = ""; // Initial prompt text
    const newCard = {
      id: Math.random().toString(36).substring(2, 8),
      completeText,
      selectedTextOnMUPCard: selectedText,
      promptText: newPromptText,
    };

    // Pushing the new card to Y.Array
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

  return (
    <div className={styles.cardContainer}>
      <button
        className={`${styles.addButton} ${selectedText ? "" : styles.disabled}`}
        onClick={handleAddCard}
        disabled={!selectedText}
      >
        Add Card with Selected Text
      </button>
      <div className={styles.cardsContainer}>
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
