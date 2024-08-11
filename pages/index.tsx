import { useCallback, useEffect, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import * as Y from "yjs";
import { User } from "next-auth";

import { PARTYKIT_HOST } from "./env";
import DefaultLayout from "@/layouts/default";
import EditorPage from "@/components/EditorComponent/Editorinterface";
import { Rooms } from "@/party/src/types";

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
  //     //console.log(`Component mounted. Mount count: ${mountCount.current}`);

  //     return () => {
  //       //console.log('Component unmounted');
  //     };
  //   }, []);

  //   renderCount.current += 1;
  //   //console.log(`Component rendered. Render count: ${renderCount.current}`);


  if (!yProvider || !yDoc) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout currentRoom={currentRoom} rooms={rooms} selectedModel={selectedModel} setCurrentRoom={setCurrentRoom} setRooms={setRooms} setSelectedModel={setSelectedModel}>
      <EditorPage currentRoom={currentRoom} provider={yProvider} selectedModel={selectedModel} yDoc={yDoc}/>
    </DefaultLayout>
  );
}
