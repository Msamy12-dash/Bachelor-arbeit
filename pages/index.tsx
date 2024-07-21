import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { use, useCallback, useEffect, useRef, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import useYProvider from "y-partykit/react";
import { PARTYKIT_HOST } from "./env";
import usePartySocket from "partysocket/react";
import { connect } from "http2";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");

  const yProvider = useRef<YPartyKitProvider | null>(null);

  useEffect(() => {
    // Cleanup function to disconnect the previous provider
    return () => {
      if (yProvider.current) {
        yProvider.current.disconnect();
        yProvider.current = null;
      }
    };
  }, [currentRoom]);
  
  const actualYProvider = useYProvider({
    host: PARTYKIT_HOST,
    party: "editorserver",
    room: currentRoom,
  });

  // Assign the new provider to the ref
  yProvider.current = actualYProvider;

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

  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} >
        {/* <EditorPage currentRoom={currentRoom} yProvider={yProvider} /> */}
        <div>Index Page</div>
    </DefaultLayout>
  );
}
