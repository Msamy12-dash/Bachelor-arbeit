import ollama from 'ollama/browser';

// Returns a response from llama3 to a given prompt string.
export async function getOllamaResponse(prompt) {
  const response = await ollama.chat({
    model: 'llama3',
    messages: [{ role: 'user', content: prompt }],
    keep_alive: "10m"
  });
  return response.message.content;
}
