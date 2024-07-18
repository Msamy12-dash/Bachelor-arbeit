import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { useCallback, useEffect, useRef, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import useYProvider from "y-partykit/react";
import { PARTYKIT_HOST } from "./env";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");

  //const providerRef = useRef<YPartyKitProvider | null>(null);
  const renderCount = useRef(0);
  const mountCount = useRef(0);

  useEffect(() => {
    mountCount.current += 1;
    console.log(`Component mounted. Mount count: ${mountCount.current}`);

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  renderCount.current += 1;
  console.log(`Component rendered. Render count: ${renderCount.current}`);

  const yProvider = useYProvider({
    host: PARTYKIT_HOST,
    room: currentRoom,
    party: "editorserver",
    options: { connect: true },
  });

  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom}>
      <EditorPage currentRoom={currentRoom} yProvider={yProvider} />
    </DefaultLayout>
  );
}
