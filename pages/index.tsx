import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { act, use, useCallback, useEffect, useRef, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import useYProvider from "y-partykit/react";
import { PARTYKIT_HOST } from "./env";
import usePartySocket from "partysocket/react";
import { connect } from "http2";
import * as Y from "yjs";
import { Role, SINGLETON_ROOM_ID, User } from "@/party/types";
import PartySocket from "partysocket";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  const [yProvider, setYProvider] = useState<YPartyKitProvider | null>(null);
  const [yDoc, setYDoc] = useState<Y.Doc | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const createProvider = useCallback(() => {
    const provider = new YPartyKitProvider(
      PARTYKIT_HOST,
      currentRoom,
      undefined,
      { party: "editorserver",
        connectionId: "daniel",
       }
    );
    setYProvider(provider);
    setYDoc(provider.doc);
    return provider;
  }, [currentRoom]);

  useEffect(() => {
    const provider = createProvider();

    return () => {
      provider.disconnect();
    };
  }, [currentRoom]);
  
  const getOrCreateUser = async (username: string, role: Role) => {
    try {
      const response = await fetch(`${PARTYKIT_HOST}/parties/useridserver/${SINGLETON_ROOM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, role }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get or create user');
      }
      
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error('Error getting or creating user:', error);
    }
  };

  useEffect(() => {
    // You might want to prompt the user for their username and role here
    // For now, we'll use a default username and role
    getOrCreateUser('defaultUser', Role.User);
  }, []);

// //Debugging lines:
//   const renderCount = useRef(0);
//   const mountCount = useRef(0);

//   useEffect(() => {
//     mountCount.current += 1;
//     console.log(`Component mounted. Mount count: ${mountCount.current}`);

//     return () => {
//       console.log('Component unmounted');
//     };
//   }, []);

//   renderCount.current += 1;
//   console.log(`Component rendered. Render count: ${renderCount.current}`);

if (!yProvider || !yDoc || !user) {
  return <div>Loading...</div>;
}

return (
  <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} >
      <EditorPage currentRoom={currentRoom} yDoc={yDoc} yProvider={yProvider} />
  </DefaultLayout>
);
}