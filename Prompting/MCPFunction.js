import { getOllamaResponse } from "./ollamaPrompting.js";
import {getOpenAIResponse} from "./OpenAIPrompting.js";

//Builds Prompt for adequate multi-comment-prompting response.
//userComments is an array of strings
//needs additional array to send the text its referring to.
export function buildPromptForMCP(completeText, userComments, userCommentsContext) { 
    
    let task = `Rewrite the base text that follows this prompt in double quotes by synthesizing the ${userComments.length} comments listed below and applying their meaining all at once. The base text you need to rewrite is: 
    
    "${completeText}"`;

    let context = `The company you work for has described your next project in the following way.`;
    
    let persona = `You are a linguistics professor that specializes in the application of synthesized feedback on texts. 
    In your job, you have multiple comments that grant feedback on a base text, more specifically regarding either the whole text or only specific sections of it. Then you need to synthesize the gist of the comments and apply them to the base text.`;
    
    let format = `Let your response only be the rewritten version of the base text and no other text or symbols.`;

    let tone = `Let your tone reflect the tone of the base text.`;
  
    let formattedUserFeedback = [`The user comments you need to take into account when rewriting the text is:`];

    const buildUserContextStringHelper = (context, index) => {
      if (context[index].length === 0) {
        return `    The following comment ${index + 1} is in regards to the complete base text stated at the beginning.`;
      } else {
        return `    The following comment ${index + 1} is in regards to the following section ${index + 1} of the base text.
  
      Section ${index + 1}:  

        "${context[index]}"`;
      }
    };

    for (let i = 0; i < userComments.length; i++) {
        formattedUserFeedback.push(`

        ${buildUserContextStringHelper(userCommentsContext, i)}

        Comment ${i + 1}:

        "${userComments[i]}"
        `)
    }


    formattedUserFeedback = formattedUserFeedback.join("");

    let prompt = `${persona}
    
      ${context}

      ${task}
          
      ${formattedUserFeedback}

      ${format}

      ${tone}`;

    //for testing pruposes
    //console.log(prompt); 
    return prompt;
  }
  
  // This is the function that gets called by the server API
  export async function requestResponseForMCP(model, completeText, userComments, userCommentsContext) {

    // If Ollama is selected
    if(model == "Ollama"){
      try {
        return await getOllamaResponse(buildPromptForMCP(completeText, userComments, userCommentsContext));  
      } catch (error) {
        console.error('Error:', error.message || error);
        return error;
      }
    }

    // If OpenAI is selected
    if(model == "OpenAI"){
      try {
        return await getOpenAIResponse(buildPromptForMCP(completeText, userComments, userCommentsContext));  
      } catch (error) {
        console.error('Error:', error.message || error);
        return error;
      }
    }


    // If Mistral is selected
    if(model == "Mistral"){
      
    }
  }
  

  
  // request a summary on what AI has changed based on the selected comments
  export async function requestChangesSummaryForMCP(model, prevText, newText){
    // build prompt
    
    let task = "You are an expert for analyzing changes within two versions of the same text. I will give you two versions of the same text. The old version is 'current text'. The new version is 'new text'. Your Task is to give me an overview what has changed between the two texts. Respond in a short form where you summarize the biggest changes in a maximum of 5 sentences."

    let text1 = `Current text: \n ${prevText}\n \n`;
    let text2 = `New text: \n ${newText}\n \n`;

    let prompt = task + text1 + text2;

    // If Ollama is selected
    if(model == "Ollama"){
      try {
        return await getOllamaResponse(prompt);  
      } catch (error) {
        console.error('Error:', error.message || error);
        return error;
      }
    }

    // If OpenAI is selected
    if(model == "OpenAI"){
      try {
        return await getOpenAIResponse(prompt);  
      } catch (error) {
        console.error('Error:', error.message || error);
        return error;
      }
    }


    // If Mistral is selected
    if(model == "Mistral"){
      
    }
    
  }