import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import usePartySocket from "partysocket/react";
import { useCallback, useEffect, useState } from "react";
import { PARTYKIT_HOST } from "./env";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom}>
      <EditorPage currentRoom={currentRoom} />
    </DefaultLayout>
  );
}
