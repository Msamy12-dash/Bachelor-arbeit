import {OpenAI} from "openai"

//OpenAI API KEY (has to be in .env.local)
const key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;


export async function getOpenAIResponse(prompt) {
    
    try {
        
        const client = new OpenAI({ apiKey: key, dangerouslyAllowBrowser: true});
        const completion = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'user', content: prompt }
            ]
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error generating completion:', error.message || error);
    }
}