// components/MUPComponents/MUPCard.tsx
import React, { useState, useEffect } from "react";
import styles from "./MUPCard.module.css";

// Interface to structure each card's data
interface CardData {
  id: string;
  completeText: string;
  selectedTextOnMUPCard: string;
  promptText: string;
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
  const [submitting, setSubmitting] = useState(false); // State for submit action
  const [responseText, setResponseText] = useState(""); // State for response text
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    onTextChange(cardData.id, newText);
  };

  const handleSubmitToAI = async () => {
    // Perform API call to submit selectedTextOnMUPCard
    try {
      setSubmitting(true); // Set submitting state to true during submission

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

      setResponseText(data.response);
    } catch (error) {
      console.error("Error submitting to AI:", error);
      setResponseText("Error submitting to AI");
    } finally {
      setSubmitting(false); // Set submitting state back to false after response
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
        disabled={submitting || cardData.promptText.trim().length === 0} // Disable if submitting or no text
      >
        {submitting ? "Submitting..." : "Submit to AI"}
      </button>

      {/* Display response text below the button */}
      {responseText && <div className={styles.responseText}>{responseText}</div>}
    </div>
  );
}
