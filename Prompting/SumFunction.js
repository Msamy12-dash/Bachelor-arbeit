import { getOllamaResponse } from "./ollamaPrompting.js";
import {getOpenAIResponse} from "./OpenAIPrompting.js";

//Builds Prompt for adequate multi-comment-prompting response.
//userComments is an array of strings
//needs additional array to send the text its referring to.
// Function to summarize all user comments

export function summarizeAllComments(userComments) {
    if (userComments.length === 0) {
        return "No comments to summarize";
    }

    let summarizedContent = "Summary of all comments:\n\n";
    
    // Summarize all the comments into a single string
    for (let i = 0; i < userComments.length; i++) {
        summarizedContent += `Comment ${i + 1}: ${userComments[i].content}\n`;
    }

    return summarizedContent;
}







// This is the function that gets called by the server API
export async function requestResponseForSum(model, userComments) {
    
    try {
        const preamble = `
    Prompt:

    Summarize user comments in bullet points on the latest draft of the collaborative project document:

    Summary:
    - Most relevant comments.
    Overall: Like or dislike.
    follow the same structre and make it as short as possible.eliminate any sentences not related to summary. `;

    const summarizedComments = summarizeAllComments(userComments);
    
    const fullPrompt = `${preamble}${summarizedComments}`;


    // If Ollama is selected
    if(model == "Ollama"){
        try {
            return await getOllamaResponse(fullPrompt);  
        } catch (error) {
            console.error('Error:', error.message || error);
            return error;
        }
    }

    // If OpenAI is selected
    if(model == "OpenAI"){
        try {
            return await getOpenAIResponse(fullPrompt);  
        } catch (error) {
            console.error('Error:', error.message || error);
            return error;
        }
    }


    // If Mistral is selected
    if(model == "Mistral"){

    }

    } catch (error) {
        console.error('Error:', error.message || error);
        return error;
    }
}

  