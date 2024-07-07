import { getLLMResponse } from "./ollamaPrompting";

//Builds Prompt for adequate multi-user-prompting response.
//might add another parameter called "context" that hold the entire document (to give the ai more context and make changes to paragraphs or sentences be mroe in line with the surrounding text).
function buildPromptForMUP(completeText, highlightedText, multiUserPrompt) { 
  
  let task = `Rewrite the text at the end of this prompt while taking the following feedback about the text into account. Your response must only consist of the rewritten text and no other text or symbols! The Text you need to rewrite is: 
  
  "${highlightedText}"`;
  let context = "";
  let exemplar = `For example, if the text you need to rewrite is:
   
  "There are times when the night sky glows with bands of color. The bands may
  begin as cloud shapes and then spread into a great arc across the entire sky. They
  may fall in folds like a curtain drawn across the heavens. The lights usually grow
  brighter, then suddenly dim. During this time the sky glows with pale yellow, pink,
  green, violet, blue, and red. These lights are called the Aurora Borealis. Some
  people call them the Northern Lights. Scientists have been watching them for
  hundreds of years. They are not quite sure what causes them. In ancient times
  people were afraid of the Lights. They imagined that they saw fiery dragons in the
  sky. Some even concluded that the heavens were on fire."

And the feedback you should take into account is:

  "This should be summarized."

then a valid response would be:

  "The Aurora Borealis, or Northern Lights, are bands of color in the night sky. Ancient
  people thought that these lights were dragon on fire, and even modern scientists
  are not sure what they are."`;
  let persona = "";
  let format = "";
  let tone = "";

  let formattedUserFeedback = `The user feedback you need to take into account when rewriting the text is: 
  
    "${multiUserPrompt}"
    
  For context, the complete text is:
  
    "${completeText}"`;

  let prompt = `${task}
  
${formattedUserFeedback}
  
${exemplar}`;

  //for testing pruposes
  console.log(prompt); 
  return prompt;
}

//This is the function that gets called by the server API
export async function requestResponseForMUP(completeText, highlightedText, multiUserPrompt) {
  try {
    return await getLLMResponse(buildPromptForMUP(completeText, highlightedText, multiUserPrompt));  
  } catch (error) {
    console.error('Error:', error.message || error);
    return error;
  }
}


