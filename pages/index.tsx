import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { useCallback, useEffect, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import { PARTYKIT_HOST, PARTYKIT_URL } from "./env";
import * as Y from "yjs";
import { Role, SINGLETON_ROOM_ID, User } from "@/party/types";
import { getOrCreateUser } from "@/lib/userUtils";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  const [yProvider, setYProvider] = useState<YPartyKitProvider | null>(null);
  const [yDoc, setYDoc] = useState<Y.Doc | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initUser() {
      try {
        // You might want to get these values from a context or props
        const newUser = await getOrCreateUser('defaultUser', Role.User);
        setUser(newUser);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    }

    initUser();
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