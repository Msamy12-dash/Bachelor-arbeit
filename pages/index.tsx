import EditorPage from "@/components/EditorComponent/Editorinterface";
import DefaultLayout from "@/layouts/default";
import { useState } from "react";

export default function IndexPage() {
  const [currentRoom, setCurrentRoom] = useState("default");
  
  return (
    <DefaultLayout currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} >
      <EditorPage currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
    </DefaultLayout>
  );
}
