import { getLLMResponse } from "./ollamaPrompting";

//Builds Prompt for adequate multi-comment-prompting response.
//userComments is an array of strings
//needs additional array to send the text its referring to.
function buildPromptForMCP(completeText, userComments, userCommentsContext) { 
  
    let task = `Rewrite the text at the end of this prompt by adhering to the feedback provided in the ${userComments.length} comments listed below. Respond only with the your final rewritten text. Do not add other text or symbols other than the rewritten text! The Text you need to rewrite is: 
    
    "${completeText}"`;
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
  
  And the example comments you should take into account are:

    Example comment 1:
      
      Regarding the following part of the text:

        "There are times when the night sky glows with bands of color. The bands may
        begin as cloud shapes and then spread into a great arc across the entire sky. They
        may fall in folds like a curtain drawn across the heavens. The lights usually grow
        brighter, then suddenly dim. During this time the sky glows with pale yellow, pink,
        green, violet, blue, and red. These lights are called the Aurora Borealis. Some
        people call them the Northern Lights."

      The comment is:
    
        "Summarize this text."

    
    Example comment 2:

      Regarding the complete text,

      The comment is:
    
        "Leave the first sentence the same."
  
  then a valid response from you to the example would be:
  
    "There are times when the night sky glows with bands of color. 
    The Aurora Borealis, or Northern Lights, usually appear as vibrant displays of pale yellow, pink, green, violet, blue, and red.
    Scientists have been watching them for
    hundreds of years. They are not quite sure what causes them. In ancient times
    people were afraid of the Lights. They imagined that they saw fiery dragons in the
    sky. Some even concluded that the heavens were on fire."`;
    let persona = "";
    let format = "";
    let tone = "";
  
    let formattedUserFeedback = [`The user comments you need to take into account when rewriting the text is:`];

    const buildUserContextStringHelper = (context, index) => {
      if (context[index].length === 0) {
        return `    Regarding the whole text stated at the beginning of this prompt.`;
      } else {
        return `    Regarding only the following serction of the text:
  
      "${context[index]}"`;
      }
    };

    for (let i = 0; i < userComments.length; i++) {
        formattedUserFeedback.push(`

  Comment ${i + 1}:

${buildUserContextStringHelper(userCommentsContext, i)}

    The comment is:

        "${userComments[i]}"
`)
    }

    formattedUserFeedback = formattedUserFeedback.join("");

    let prompt = `${task}
    
${formattedUserFeedback}

${exemplar}`;

    //for testing pruposes
    console.log(prompt); 
    return prompt;
  }
  
  //This is the function that gets called by the server API
  export async function requestResponseForMCP(completeText, userComments, userCommentsContext) {
    try {
      return await getLLMResponse(buildPromptForMCP(completeText, userComments, userCommentsContext));  
    } catch (error) {
      console.error('Error:', error.message || error);
      return error;
    }
  }
  