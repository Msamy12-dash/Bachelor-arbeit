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

  const createProvider = useCallback(() => {
    if (!user) return;
    const provider = new YPartyKitProvider(
      PARTYKIT_HOST,
      currentRoom,
      undefined,
      { party: "editorserver", connectionId: user.id }
    );
    setYProvider(provider);
    setYDoc(provider.doc);
    return provider;
  }, [currentRoom, user]);

  useEffect(() => {
    if (!user) return;

    const provider = createProvider();

    return () => {
      provider?.disconnect();
    };
  }, [currentRoom, user, createProvider]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

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
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} rooms={rooms} setRooms={setRooms} selectedModel={selectedModel} setSelectedModel={setSelectedModel}>
      <EditorPage currentRoom={currentRoom} yDoc={yDoc} yProvider={yProvider} user={user} selectedModel={selectedModel}/>
    </DefaultLayout>
  );
}
