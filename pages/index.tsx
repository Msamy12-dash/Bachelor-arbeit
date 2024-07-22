import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { useCallback, useEffect, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import { PARTYKIT_HOST, PARTYKIT_URL } from "./env";
import * as Y from "yjs";
import { Role, SINGLETON_ROOM_ID, User } from "@/party/types";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  const [yProvider, setYProvider] = useState<YPartyKitProvider | null>(null);
  const [yDoc, setYDoc] = useState<Y.Doc | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  

  const getOrCreateUser = async (username: string, role: Role) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${PARTYKIT_URL}/parties/useridserver/${SINGLETON_ROOM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, role }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get or create user: ${response.statusText}`);
      }
      
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error('Error getting or creating user:', error);
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    // You might want to prompt the user for their username and role here
    // For now, we'll use a default username and role
    getOrCreateUser('defaultUser', Role.User);
  }, []);


  const createProvider = useCallback(() => {
    if (!user) return;
    console.log("userID: ", user.id);
    const provider = new YPartyKitProvider(
      PARTYKIT_HOST,
      currentRoom,
      undefined,
      { party: "editorserver",
        connectionId: user.id,
       }
    );
    setYProvider(provider);
    setYDoc(provider.doc);
    return provider;
  }, [currentRoom, user]);

  useEffect(() => {
    if (!user) return;

    const provider = createProvider();
    setLoading(false);

    return () => {
      provider?.disconnect();
    };
  }, [currentRoom, user, createProvider]);
  
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

if (!yProvider || !yDoc) {
  return <div>Initializing...</div>;
}

return (
  <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} >
      <EditorPage currentRoom={currentRoom} yDoc={yDoc} yProvider={yProvider} />
  </DefaultLayout>
);
}