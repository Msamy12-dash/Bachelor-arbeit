import React, { useEffect, useRef, useState } from "react";
import MUPCard from "./MUPCard";
import { Button } from "@nextui-org/react";
import Quill from "react-quill";
import colors from "../../highlightColors.js";
import { PARTYKIT_HOST } from "@/pages/env";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { IconButton } from "@mui/material";
import { useTheme } from 'next-themes';

interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
  responseText: string;
  submitting: boolean;
  range: { index: number; length: number };
}

interface Range{
  index: number;
  length: number;
}


export default function CardContainer({
  currentRoom,
  yDoc,
  yProvider,
  selectedText,
  completeText,
  setPrompts,
  editor,
  range,
  selectedModel
}: Readonly<{
  currentRoom: string;
  yDoc: Y.Doc;
  yProvider: YPartyKitProvider;
  selectedText: string;
  completeText: string;
  setPrompts: Function;
  editor: Quill & {
    highlightText: (index: number, length: number, color: string) => void;
    removeHighlight: (index: number, length: number) => void;
    getSelection: () => { index: number; length: number } | null;
  } | null;
  range: Range | undefined;
  selectedModel: string;
}>) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    if (!yProvider.doc) return;

    setIsLoading(false);
    const ydoc = yProvider.doc;
    const yarray = ydoc.getArray<CardData>("cards");

    const updateCards = () => setCards(yarray.toArray());

    yarray.observe(updateCards);
    updateCards();

    return () => yarray.unobserve(updateCards);
  }, [yProvider.doc]);

  const handleAddCard = () => {
    if (!yProvider.doc || !editor || !editor.getSelection()) return;

    const yarray = yProvider.doc.getArray<CardData>("cards");
    const selection = editor.getSelection();


    // if(selectedText.length > 30){
    //   selectedText = selectedText.substring(0,30) + "...";
    // }

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
    const yarray = yProvider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), promptText: newText };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleResponseChange = (id: string, newResponse: string) => {
    const yarray = yProvider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), responseText: newResponse };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleSubmittingChange = (id: string, isSubmitting: boolean) => {
    const yarray = yProvider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const updatedCard = { ...yarray.get(index), submitting: isSubmitting };
      yarray.delete(index, 1);
      yarray.insert(index, [updatedCard]);
    }
  };

  const handleDiscardCard = (id: string) => {
    const yarray = yProvider.doc.getArray<CardData>("cards");
    const index = yarray.toArray().findIndex((card) => card.id === id);
    if (index !== -1) {
      const card = yarray.get(index);
      editor?.removeHighlight(card.range.index, card.range.length);
      yarray.delete(index, 1);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
        <div className={`card bg-gradient-to-b ${theme === 'dark' ?  'black' : 'from-gray-100 to-gray-200 rounded-lg'}flex flex-col  shadow-lg overflow-y-auto relative h-[40vw]`}>
          <div className={`card ${theme === 'dark' ?  'gray-900' : 'gray-100'} mb-2 mx-4`}>
            <Button color="primary"
              className={`inline-flex justify-center m-6 px-6 py-6 text-lg ${
                selectedText
                  ? "hover:blue-600 "
                  : "opacity-60 cursor-not-allowed"
              } transition-all duration-300`}
              onClick={handleAddCard}
              disabled={!selectedText}
              style={{
                minWidth: "60px",
                maxWidth: "100%",
                wordWrap: "break-word",
              }}
            >
              <IconButton> <AutoAwesomeIcon sx={{ color: "#fff" }}/></IconButton>
              Ask AI
            </Button>
          </div>


          <div className="flex-1 px-2 pb-6">
            <div className="flex flex-col space-y-6">
              {cards.map((card) => (
                <MUPCard
                  key={card.id}
                  cardData={card}
                  room={currentRoom}
                  onTextChange={handleCardTextChange}
                  onResponseChange={handleResponseChange}
                  onSubmittingChange={handleSubmittingChange}
                  onDiscard={handleDiscardCard}
                  yDoc={yDoc}
                  setPrompts={setPrompts}
                  editor={editor}
                  range={range}
                  selectedModel={selectedModel}

                />
              ))}
            </div>
          </div>
        </div>
  );
}
