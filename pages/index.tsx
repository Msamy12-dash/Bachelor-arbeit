import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { useCallback, useEffect, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import { PARTYKIT_HOST, PARTYKIT_URL } from "./env";
import * as Y from "yjs";
import { Role, SINGLETON_ROOM_ID, User, Rooms } from "@/party/types";
import { getOrCreateUser } from "@/lib/userUtils";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import UserAvatar from "@/components/UserComponent/UserAvatar";
import { useOnlineUsers } from "@/contexts/OnlineUsersContext";

export default function IndexPage({
                                    user,
                                    rooms,
                                    setRooms,
                                  }: {
  user: User;
  rooms: Rooms;
  setRooms: Function;
}): JSX.Element {
  const [currentRoom, setCurrentRoom] = useState("default");
  const [yProvider, setYProvider] = useState<YPartyKitProvider | null>(null); //hand this down to your component, if you need it
  const [yDoc, setYDoc] = useState<Y.Doc | null>(null); //hand this down to your component, if you need it
  const [selectedModel, setSelectedModel] = useState("OpenAI");
  const { onlineUsers, setOnlineUsers } = useOnlineUsers();  // Use the context hook


  const createProvider = useCallback(() => {
    if (!user) return;
    const provider = new YPartyKitProvider(
      PARTYKIT_HOST,
      currentRoom,
      undefined,
      { party: "editorserver", connectionId: user.id }
    );

    const awareness = provider.awareness;
    console.log("Setting local state for user:", user);
    awareness.setLocalStateField('user', user);

    awareness.on('change', () => {
      const users: User[] = [];
      awareness.getStates().forEach((state, clientId) => {
        if (state.user) {
          console.log(`State for client ${clientId}:`, state.user);
          users.push(state.user);
        }
      });
      setOnlineUsers(users);  // Update context with online users
      console.log("Updated online users:", users);
    });


    setYProvider(provider);
    setYDoc(provider.doc);
    return provider;
  }, [currentRoom, user]);

  useEffect(() => {
    if (!user) return;
    console.log("User ID:", user.id);
    const provider = createProvider();

    return () => {
      provider?.disconnect();
    };
  }, [currentRoom, user, createProvider]);

  if (!yProvider || !yDoc) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} setRooms={setRooms}>

      <EditorPage currentRoom={currentRoom} yDoc={yDoc} yProvider={yProvider} />
    </DefaultLayout>
  );
}
