import React, { useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { useTheme } from "next-themes";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";
import { IconButton } from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseIcon from "@mui/icons-material/Close";
import Quill from "quill";
import { requestResponseForMUP } from "@/Prompting/MUPFunction";
import StarIcon from "@mui/icons-material/Star";
import colors from "../../highlightColors.js";
import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "@/env";
import { addAIContributionToMap } from "../VersionHistoryComponent/AIContributionTagging";
import type { AIContributionDetail } from "@/types";




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


export default function MUPCard({
  cardData,
  onTextChange,
  onResponseChange,
  onSubmittingChange,
  onDiscard,
  setPrompts,
  yProvider,
  editor,
  range,
  selectedModel
}: Readonly<{
  cardData: CardData;
  onTextChange: (id: string, newText: string) => void;
  onResponseChange: (id: string, newResponse: string) => void;
  onSubmittingChange: (id: string, isSubmitting: boolean) => void;
  onDiscard: (id: string) => void;
  setPrompts: Function;
  yProvider: YPartyKitProvider;
  editor: Quill & {
    highlightText: (index: number, length: number, color: string) => void;
    removeHighlight: (index: number, length: number) => void;
    getSelection: () => { index: number; length: number } | null;
  } | null;
  range: Range | undefined;
  selectedModel: string;

}>) {
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState(cardData.promptText || "");
  const { theme } = useTheme();
  const yDoc = yProvider?.doc;
  const yPrompts = yDoc?.getArray("prompts");
  const contribSocket = usePartySocket({
    host: PARTYKIT_HOST,
    room: yProvider.roomname,
    party: "aicontr",
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    onTextChange(cardData.id, newText);
  };

  
    
  const handleSubmitToAI = async () => {
    try {
      setLoading(true);
      onSubmittingChange(cardData.id, true);
      
      // Request answer from selected AI
      //const response = await requestResponseForMUP(selectedModel, cardData.selectedTextOnMUPCard, cardData.promptText);
      const response = "AI Response to prompt: " + cardData.promptText +"On: "+ cardData.selectedTextOnMUPCard ;
      onResponseChange(cardData.id, response);
    } catch (error) {
      console.error("Error submitting to AI:", error);
      onResponseChange(cardData.id, "Error submitting to AI");
    } finally {
      setLoading(false);
      onSubmittingChange(cardData.id, false);
    }
  };

  const handleMinimize = () => {
    editor?.highlightText(cardData.range.index, cardData.range.length, colors.prevMUPSectionLYellow);
    
  };

  const handleDiscard = () => {
    onDiscard(cardData.id);
  };
    

  const handleSave = () => {
    console.log("----- called")
    yPrompts.push([inputText]);
  };

  const handleCommit = () => {
    if (editor && yDoc) {
      const start = cardData.range!.index;
      const length = cardData.range!.length;

      // Replace selected text with response from AI
      editor.editor.deleteText(start, length);
      editor.editor.insertText(start, cardData.responseText);

      const contributionId = crypto.randomUUID();
      const snapshot = Y.encodeStateAsUpdate(yDoc);
      const detail: AIContributionDetail = {
        id: contributionId,
        user: yProvider.awareness.getLocalState()?.user.name || "unknown",
        prompt: cardData.promptText,
        aiResponse: cardData.responseText,
        timestamp: new Date().toISOString(),
        source: "AI MUP ",
        tags: [],
        ydocSnapshot: Array.from(snapshot),
      };

      contribSocket.send(JSON.stringify({ type: "contribution", detail }));
      addAIContributionToMap(
        contributionId,
        yDoc,
        start,
        cardData.responseText.length,
        "Ask AI"
      );

      handleDiscard();
    }
  };

  
  return (
    <div className={`${theme === 'dark' ?  'bg-gray-700' : 'bg-white'} p-6  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full box-border`}>
     <div className="h-6 flex justify-between mb-5  ">
           <p className="text-lg font-semibold  pb-5 text-indigo-800 ">
             Selected Text:{" "}
           </p>
   
           <div className="flex  items-center">
             <IconButton onClick={handleMinimize} className="float-right">
               <MinimizeIcon/>
             </IconButton>
             <IconButton onClick={handleDiscard} className="float-right">
               <CloseIcon />
             </IconButton>
           </div>
         </div>
       <div className={`${theme === 'dark' ?  'bg-gray-900' : 'bg-gray-50'} mb-4 p-2`}>
         <p className="text-small font-medium">{cardData.selectedTextOnMUPCard}</p>
       </div>
       <p className="text-lg font-semibold  pb-5 text-indigo-800 ">Prompt:</p>
       <div className="flex">
          
         <textarea
           className={`${theme === 'dark' ?  'bg-gray-900' : 'bg-gray-50'} w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 box-border`}
           value={cardData.promptText}
           onChange={handleTextChange}
         />
          
          
             <StarIcon onClick={handleSave} className="h-fit ml-2  inline-flex items-center justify-center  rounded-lg text-yellow-400" />
           </div>
      <Button
        className={`mb-4 inline-flex items-center justify-center px-6 py-3 text-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-md ${
          cardData.submitting ? "cursor-not-allowed" : "hover:from-blue-600 hover:to-indigo-600"
        } transition-all duration-300`}
        onPress={handleSubmitToAI}
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
        <div>
          <p>Response:</p>
          <div className={`${theme === 'dark' ?  'bg-gray-900' : 'bg-gray-50'} p-4 border border-gray-300 rounded-lg box-border`}>
            {cardData.responseText}
          </div>
      
          <div className="mt-4 flex space-x-2">
            
            <Button onPress={handleCommit} className="px-7 py-3 text-medium text-white bg-blue-500 shadow-md hover:bg-blue-600 transition-all duration-300">
              Commit
            </Button>
          </div>
        </div>
      )}
    </div>
   );
}

