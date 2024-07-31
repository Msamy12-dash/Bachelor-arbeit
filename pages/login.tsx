import { signIn } from "next-auth/react";
import { useState } from "react";
import { getOrCreateUser } from "@/lib/userUtils";
import { Role, SINGLETON_ROOM_ID } from "@/party/types";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { PARTYKIT_HOST, PARTYKIT_URL } from "./env";
import { PartySocket } from "partysocket";


export default function Login({ updateUser, roomserverPartySocket }: { updateUser: Function; roomserverPartySocket: PartySocket }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<Role>(Role.User);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const user = await getOrCreateUser(username, role as Role);
      console.log("User:", user);
      console.log("connId:", roomserverPartySocket.id);
      console.log("userId:", user.id);
      // Check if user is already active
      const response = await fetch(`${PARTYKIT_URL}/parties/roomserver/${SINGLETON_ROOM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'checkAndAddUser', connectionId: roomserverPartySocket.id, userId: user.id }),
      });
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);

      if (!data.success) {
        throw new Error("User is already logged in");
      }

      console.log("User:", user);
      updateUser(user); // Use the updateUser function with the full user object
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="p-2 text-lg border rounded-md w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
            required
          />
          <select
            className="p-2 text-lg border border-gray-300 rounded-md w-full"
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            required
          >
            <option value={Role.User}>User</option>
            <option value={Role.Admin}>Admin</option>
          </select>
          <button
            type="submit"
            className="p-2 text-lg bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
