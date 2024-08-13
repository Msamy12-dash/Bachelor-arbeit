import { getOpenAIResponse } from '../../Prompting/OpenAIPrompting';
import * as Y from "yjs";

import {RelRange} from "../VoteComponent/TextBlocking";


export const generateOpenAIShortCommand = async (
  text: string,
  type: 'clarity' | 'tone' | 'rephrase' | 'complexity-up' | 'complexity-down'
): Promise<string> => {
  let prompt = '';

  // Choose the prompt based on the type
  switch (type) {
    case 'clarity':
      prompt = `Please rewrite the following text to improve its clarity, making it easier to understand while preserving the original meaning:\n\n${text}`;
      break;
    case 'tone':
      prompt = `Please rewrite the following text to improve its tone, making it more professional and suitable for a formal audience:\n\n${text}`;
      break;
    case 'rephrase':
      prompt = `Please rephrase the following text, keeping the original meaning but expressing it in a different way:\n\n${text}`;
      break;
    case 'complexity-up':
      prompt = `Please rewrite the following text to increase its complexity, using more advanced vocabulary and sentence structures:\n\n${text}`;
      break;
    case 'complexity-down':
      prompt = `Please rewrite the following text to reduce its complexity, using simpler language and more straightforward sentence structures:\n\n${text}`;
      break;
    default:
      throw new Error('Invalid type specified');
  }

  const aiGeneratedText = await getOpenAIResponse(prompt);
  return aiGeneratedText ?? "AI could not generate a response. Please try again.";
};


export const tieBreakerAI = (doc: Y.Doc, id: string): boolean => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = yMap.get(id);

  if (!relRange || !relRange.oldText || !relRange.newText) {
    console.error("RelRange or texts not found for the given ID.");
    return false;
  }

  const { oldText, newText } = relRange;

  const prompt = `
    Consider the following two versions of text. Based on clarity, tone, and overall quality, which version is better?
    
    Version 1: "${oldText}"
    Version 2: "${newText}"
    
    Respond with "version 1" if the first version is better, or "version 2" if the second version is better.
  `;

  const aiResponse = getOpenAIResponse(prompt);

  if (typeof aiResponse === 'string' && aiResponse === "version 2") {
    console.log("ai decided on version 2  "+aiResponse)
    return true;

  }

  // If AI couldn't decide or didn't return a meaningful response, assume the old text is better
  console.log("ai decided on version 1  " +aiResponse)
  return false;
};

export const generatePollTitle = async (oldText: string, newText: string): Promise<string> => {
  const prompt = `
    You are given two versions of a text. Based on their differences, generate a short, descriptive title for a poll comparing these two texts.

    Version 1: "${oldText}"
    Version 2: "${newText}"

    Please respond with a short title (2-3 words).
  `;

  try {
    const aiResponse = await getOpenAIResponse(prompt);
    return aiResponse?.trim() || "Unnamed Poll";
  } catch (error) {
    return "Unnamed Poll";
  }
};

