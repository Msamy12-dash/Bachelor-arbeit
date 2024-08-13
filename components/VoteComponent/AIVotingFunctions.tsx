// AIVotingFunctions.tsx

import { getOpenAIResponse } from '../../Prompting/OpenAIPrompting';

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


export const tieBreakerAI = async (oldText: string, newText: string): Promise<boolean> => {
  const prompt = `
    Consider the following two versions of text. Based on clarity, tone, and overall quality, which version is better?
    
    Version 1: "${oldText}"
    Version 2: "${newText}"
    
    Respond with "Version 1" if the first version is better, or "Version 2" if the second version is better.
  `;

  const aiResponse = await getOpenAIResponse(prompt);

  // Check if AI prefers the new text
  if (aiResponse) {
    return aiResponse.trim().toLowerCase() === "version 2";
  }

  // If AI couldn't decide or didn't return a meaningful response, assume the old text is better
  return false;
};

