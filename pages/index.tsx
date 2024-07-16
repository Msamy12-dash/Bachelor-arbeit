import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { useCallback, useEffect, useState } from "react";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom}>
      <EditorPage currentRoom={currentRoom} />
    </DefaultLayout>
  );
}
