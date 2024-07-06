// components/MUPComponents/MUPCard.tsx
import React, { useState, useEffect } from "react";

// Interface to structure each card's data
interface CardData {
  id: string;
  selectedText: string;
  editableText: string;
}

export default function MUPCard({
  cardData,
  room,
  onTextChange,
}: Readonly<{
  cardData: CardData;
  room: string;
  onTextChange: (id: string, newText: string) => void;
}>) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(cardData.editableText);
  }, [cardData]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(cardData.id, newText);
  };

  return (
    <div className="card">
      <div className="selectedText">{cardData.selectedText}</div>
      <textarea value={text} onChange={handleTextChange} />
    </div>
  );
}
