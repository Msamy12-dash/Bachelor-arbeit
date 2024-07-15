import React, { useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { useTheme } from "next-themes";

interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
  responseText: string;
  submitting: boolean;
  range: { index: number; length: number };
}

export default function MUPCard({
  cardData,
  room,
  onTextChange,
  onResponseChange,
  onSubmittingChange,
  onDiscard,
}: Readonly<{
  cardData: CardData;
  room: string;
  onTextChange: (id: string, newText: string) => void;
  onResponseChange: (id: string, newResponse: string) => void;
  onSubmittingChange: (id: string, isSubmitting: boolean) => void;
  onDiscard: (id: string) => void;
}>) {
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    onTextChange(cardData.id, newText);
  };

  const handleSubmitToAI = async () => {
    try {
      setLoading(true);
      onSubmittingChange(cardData.id, true);

      const requestBody = {
        completeText: "",
        highlightedText: cardData.selectedTextOnMUPCard,
        multiUserPrompt: cardData.promptText,
      };

      const response = await fetch("/api/getOllamaMUPResponse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      onResponseChange(cardData.id, data.response);
    } catch (error) {
      console.error("Error submitting to AI:", error);
      onResponseChange(cardData.id, "Error submitting to AI");
    } finally {
      setLoading(false);
      onSubmittingChange(cardData.id, false);
    }
  };

  const handleDiscard = () => {
    onDiscard(cardData.id);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full box-border">
      <div className="mb-4 p-4 bg-gray-50 border border-gray-300 rounded-lg box-border">
        {cardData.selectedTextOnMUPCard}
      </div>
      <textarea
        className="w-full p-4 mb-4 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 box-border"
        value={cardData.promptText}
        onChange={handleTextChange}
      />
      <Button
        className={`inline-flex items-center justify-center w-full px-6 py-3 text-lg text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-md ${
          cardData.submitting ? "cursor-not-allowed" : "hover:from-blue-600 hover:to-indigo-600"
        } transition-all duration-300`}
        onClick={handleSubmitToAI}
        disabled={cardData.submitting || cardData.promptText.trim().length === 0}
      >
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
            <Spinner color="current" />
            <span className="font-semibold">Submitting...</span>
          </div>
        ) : (
          "Submit to AI"
        )}
      </Button>
      {cardData.responseText && (
        <div className="mt-4 p-4 bg-gray-50 border border-gray-300 rounded-lg box-border">
          {cardData.responseText}
        </div>
      )}
      <div className="mt-4 flex space-x-2 w-full">
        <Button className="flex-grow flex-shrink min-w-0 px-2 py-3 text-lg text-white bg-green-500 rounded-full shadow-md hover:bg-green-600 transition-all duration-300">
          Save
        </Button>
        <Button 
          className="flex-grow flex-shrink min-w-0 px-2 py-3 text-lg text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 transition-all duration-300"
          onClick={handleDiscard}
        >
          Discard
        </Button>
        <Button className="flex-grow flex-shrink min-w-0 px-2 py-3 text-lg text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300">
          Commit
        </Button>
      </div>
    </div>
  );
}
