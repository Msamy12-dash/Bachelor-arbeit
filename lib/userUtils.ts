import { Role, User } from "@/party/types";
import { PARTYKIT_URL } from "@/pages/env";
import { SINGLETON_ROOM_ID } from "@/party/types";

export async function getOrCreateUser(username: string, role: Role): Promise<User> {
  try {
    const response = await fetch(`${PARTYKIT_URL}/parties/useridserver/${SINGLETON_ROOM_ID}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', },
      body: JSON.stringify({ username, role }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to get or create user: ${response.statusText}`);
    }
    
    const user = await response.json();

    return user;
  } catch (error) {
    console.error('Error getting or creating user:', error);
    throw error;
  }

  
}

export function addCorsHeaders(response: Response): Response {
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      ...Object.fromEntries(response.headers),
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
