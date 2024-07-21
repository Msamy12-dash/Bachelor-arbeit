import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { act, use, useCallback, useEffect, useRef, useState } from "react";
import YPartyKitProvider from "y-partykit/provider";
import useYProvider from "y-partykit/react";
import { PARTYKIT_HOST } from "./env";
import usePartySocket from "partysocket/react";
import { connect } from "http2";
import * as Y from "yjs";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  const [yProvider, setYProvider] = useState<YPartyKitProvider | null>(null);
  const [yDoc, setYDoc] = useState<Y.Doc | null>(null);

  const createProvider = useCallback(() => {
    const provider = new YPartyKitProvider(
      PARTYKIT_HOST,
      currentRoom,
      undefined,
      { party: "editorserver" }
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

  if (!yProvider || !yDoc) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} >
        <EditorPage currentRoom={currentRoom} yDoc={yDoc} yProvider={yProvider} />
    </DefaultLayout>
  );
}
