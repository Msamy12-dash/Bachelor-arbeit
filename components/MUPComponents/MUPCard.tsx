import React from "react";
import styles from "./MUPCard.module.css";

interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
  responseText: string;
  submitting: boolean;
}

export default function MUPCard({
  cardData,
  room,
  onTextChange,
  onResponseChange,
  onSubmittingChange,
}: Readonly<{
  cardData: CardData;
  room: string;
  onTextChange: (id: string, newText: string) => void;
  onResponseChange: (id: string, newResponse: string) => void;
  onSubmittingChange: (id: string, isSubmitting: boolean) => void;
}>) {
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    onTextChange(cardData.id, newText);
  };

  const handleSubmitToAI = async () => {
    try {
      onSubmittingChange(cardData.id, true);

      const requestBody = {
        completeText: "",
        highlightedText: cardData.selectedTextOnMUPCard,
        multiUserPrompt: cardData.promptText.valueOf(),
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
      onSubmittingChange(cardData.id, false);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.selectedTextOnMUPCard}>{cardData.selectedTextOnMUPCard}</div>
      <textarea
        className={styles.textField}
        value={cardData.promptText}
        onChange={handleTextChange}
      />
      <button
        className={styles.submitButton}
        onClick={handleSubmitToAI}
        disabled={cardData.submitting || cardData.promptText.trim().length === 0}
      >
        {cardData.submitting ? "Submitting..." : "Submit to AI"}
      </button>
      {cardData.responseText && <div className={styles.responseText}>{cardData.responseText}</div>}
    </div>
  );
}
