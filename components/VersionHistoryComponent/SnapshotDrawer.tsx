import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
} from "@nextui-org/react";
import dynamic from "next/dynamic";
import * as Y from "yjs";

// Dynamically load ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface SnapshotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  snapshot: Uint8Array | null;
  onRestore: (snapshot: Uint8Array) => void;
}

const SnapshotDrawer: React.FC<SnapshotDrawerProps> = ({ isOpen, onClose, snapshot, onRestore }) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (snapshot && snapshot.length > 0) {
      try {
        if (!(snapshot instanceof Uint8Array)) {
          throw new Error("Snapshot is not a valid Uint8Array");
        }
        const tempDoc = new Y.Doc();
        Y.applyUpdate(tempDoc, snapshot);
        const yText = tempDoc.getText("quill");
        setContent(yText.toString());
      } catch (error) {
        console.error("Error processing snapshot:", error);
        setContent("Error loading snapshot.");
      }
    } else {
      setContent("No snapshot data available or it is corrupted.");
    }
  }, [snapshot]);

  const handleRestore = () => {
    if (snapshot) {
      onRestore(snapshot);
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size={"5xl"} backdrop="blur">
      <DrawerContent>
        <DrawerHeader>Snapshot View</DrawerHeader>
        <DrawerBody>
          {content && <ReactQuill value={content} readOnly theme="snow" />}
        </DrawerBody>
        <DrawerFooter>
          <Button color="primary" onPress={handleRestore} style={{ margin: "10px" }}>
            Restore to Main Editor
          </Button>
          <Button color="danger" onPress={onClose} style={{ margin: "10px" }}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default SnapshotDrawer;