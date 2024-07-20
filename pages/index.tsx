import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { use, useCallback, useEffect, useRef, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import useYProvider from "y-partykit/react";
import { PARTYKIT_HOST } from "./env";
import usePartySocket from "partysocket/react";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");

  //const providerRef = useRef<YPartyKitProvider | null>(null);
  const renderCount = useRef(0);
  const mountCount = useRef(0);

  const yProvider = useYProvider({
    host: PARTYKIT_HOST,
    room: currentRoom,
    party: "editorserver",
    options: { connect: true },
  });

  useEffect(() => {
    //providerRef.current = yProvider;
    mountCount.current += 1;
    console.log(`Component mounted. Mount count: ${mountCount.current}`);

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  renderCount.current += 1;
  console.log(`Component rendered. Render count: ${renderCount.current}`);

  return (

    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} children={""}>
        <EditorPage currentRoom={currentRoom} yProvider={yProvider} />
    </DefaultLayout>
  );
}
