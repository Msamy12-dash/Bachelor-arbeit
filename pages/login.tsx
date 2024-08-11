import { useState } from "react";
import { useRouter } from "next/router";
import { PartySocket } from "partysocket";

import { PARTYKIT_URL } from "./env";


import { getOrCreateUser } from "@/lib/userUtils";
import { Role, SINGLETON_ROOM_ID } from "@/party/src/types";


export default function Login({ setUser, roomserverPartySocket }: { setUser: Function; roomserverPartySocket: PartySocket }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<Role>(Role.User);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await getOrCreateUser(username, role as Role);

      //console.log("User:", user);
      //console.log("connId:", roomserverPartySocket.id);
      //console.log("userId:", user.id);
      // Check if user is already active
      const response = await fetch(`${PARTYKIT_URL}/parties/roomserver/${SINGLETON_ROOM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'checkAndAddUser', connectionId: roomserverPartySocket.id, userId: user.id }),
      });

      //console.log("response:", response);
      const data = await response.json();

      //console.log("data:", data);

      if (!data.success) {
        throw new Error("User is already logged in");
      }

      //console.log("User:", user);
      setUser(user); // Use the updateUser function with the full user object
      router.push("/");
    } catch (error: any) {
      setError(`Login failed: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 rounded-lg shadow-md text-center w-80">
        <h1 className="text-2xl mb-5">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            required
            className="p-2 text-lg border rounded-md w-full"
            placeholder="Name"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <select
            required
            className="p-2 text-lg border border-gray-300 rounded-md w-full"
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
          >
            <option value={Role.User}>User</option>
            <option value={Role.Admin}>Admin</option>
          </select>
          <button
            className="p-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700"
            type="submit"
          >
            Login
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
