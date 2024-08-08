import { getOllamaResponse } from "./ollamaPrompting.js";
import {getOpenAIResponse} from "./OpenAIPrompting.js";

//Builds Prompt for adequate multi-user-prompting response.
//might add another parameter called "context" that hold the entire document (to give the ai more context and make changes to paragraphs or sentences be mroe in line with the surrounding text).
function buildPromptForMUP(completeText, highlightedText, multiUserPrompt) { 
  
  let task = `Rewrite the text at the end of this prompt while taking the following feedback about the text into account. Your response must only consist of the rewritten text and no other text or symbols! The Text you need to rewrite is: 
  
  "${highlightedText}"`;
  let context = "";
  let persona = "";
  let format = "";
  let tone = "";

  let formattedUserFeedback = `The user feedback you need to take into account when rewriting the text is: 
  
    "${multiUserPrompt}"
    
  For context, the complete text is:
  
    "${completeText}"`;

  let prompt = `${task}
  
  ${formattedUserFeedback}`;

  //for testing pruposes
  console.log(prompt); 
  return prompt;
}

//This is the function that gets called by the server API
export async function requestResponseForMUP(model, completeText, highlightedText, multiUserPrompt) {
  
  // If Ollama is selected
  if(model == "Ollama"){
    try {
      return await getOllamaResponse(buildPromptForMUP(completeText, highlightedText, multiUserPrompt));  
    } catch (error) {
      console.error('Error:', error.message || error);
      return error;
    }
  }

  // If OpenAI is selected
  if(model == "OpenAI"){
    try {
      return await getOpenAIResponse(buildPromptForMUP(completeText, highlightedText, multiUserPrompt));  
    } catch (error) {
      console.error('Error:', error.message || error);
      return error;
    }
  }


  // If Mistral is selected
  if(model == "Mistral"){
    
  }
}


