import React, { useEffect, useRef, useState } from "react";
import useYProvider from "y-partykit/react";
import MUPCard from "./MUPCard";
import { Button } from "@nextui-org/react";
import Quill from "react-quill";
import colors from "../../highlightColors.js";
import { PARTYKIT_HOST } from "@/pages/env";
import YPartyKitProvider from "y-partykit/provider";

interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
  responseText: string;
  submitting: boolean;
  range: { index: number; length: number };
}

export default function CardContainer({
  selectedText,
  room,
  completeText,
  editor,
}: Readonly<{
  selectedText: string;
  room: string;
  completeText: string;
  editor:
    | (Quill & {
        highlightText: (index: number, length: number, color: string) => void;
        removeHighlight: (index: number, length: number) => void;
        getSelection: () => { index: number; length: number } | null;
      })
    | null;
}>) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const providerRef = useRef<YPartyKitProvider | null>(null);

  const provider = useYProvider({
    host: PARTYKIT_HOST,
    room: room,
    party: "editorserver",
    options: { connect: true },
  });

  useEffect(() => {
    providerRef.current = provider;
    // Cleanup function to disconnect the previous provider
    return () => {
      if (providerRef.current) {
        providerRef.current.disconnect();
        providerRef.current = null;
      }
    };
  }, [room, provider]);

  useEffect(() => {
    if (!provider.doc) return;

    setIsLoading(false);
    const ydoc = provider.doc;
    const yarray = ydoc.getArray<CardData>("cards");

    const updateCards = () => setCards(yarray.toArray());

    yarray.observe(updateCards);
    updateCards();

    return () => yarray.unobserve(updateCards);
  }, [provider.doc]);

  const handleAddCard = () => {
    if (!provider.doc || !editor || !editor.getSelection()) return;

    const yarray = provider.doc.getArray<CardData>("cards");
    const selection = editor.getSelection();

    if (selection) {
      const newCard: CardData = {
        id: Math.random().toString(36).substring(2, 8),
        completeText,
        selectedTextOnMUPCard: selectedText,
        promptText: "",
        responseText: "",
        submitting: false,
        range: selection,
      };

      yarray.push([newCard]);
      editor?.highlightText(
        selection.index,
        selection.length,
        colors.currentMUPSectionDYellow
      );
    }
  };

  const handleCardTextChange = (id: string, newText: string) => {
    const yarray = provider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), promptText: newText };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleResponseChange = (id: string, newResponse: string) => {
    const yarray = provider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), responseText: newResponse };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleSubmittingChange = (id: string, isSubmitting: boolean) => {
    const yarray = provider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), submitting: isSubmitting };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleDiscardCard = (id: string) => {
    const yarray = provider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const card = yarray.get(index);
      editor?.removeHighlight(card.range.index, card.range.length);
      yarray.delete(index, 1);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 rounded-lg shadow-lg overflow-y-auto relative h-full">
      <div className="flex flex-col items-center mb-2 mx-4">
        <Button
          className={`inline-flex items-center justify-center w-full m-6 px-6 py-6 text-lg text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full ${
            selectedText
              ? "hover:from-blue-600 hover:to-indigo-600"
              : "opacity-60 cursor-not-allowed"
          } transition-all duration-300`}
          onClick={handleAddCard}
          disabled={!selectedText}
          style={{
            minWidth: "200px",
            maxWidth: "100%",
            wordWrap: "break-word",
          }}
        >
          Add Card with Selected Text
        </Button>
      </div>
      <div
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 px-2 pb-6"
      >
        <div className="flex flex-col space-y-6">
          {cards.map((card) => (
            <MUPCard
              key={card.id}
              cardData={card}
              room={room}
              onTextChange={handleCardTextChange}
              onResponseChange={handleResponseChange}
              onSubmittingChange={handleSubmittingChange}
              onDiscard={handleDiscardCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}