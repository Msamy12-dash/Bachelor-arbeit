import * as Y from "yjs";
import ReactQuill from "react-quill";
import { AIContributionDetail } from "@/types";
import YPartyKitProvider from "y-partykit/provider";
import PartySocket from "partysocket";
import { PARTYKIT_URL } from "@/env";
export interface AIContributionMetadata {
  start: Y.RelativePosition;
  length: Y.RelativePosition;
  isAIContribution: boolean;
  source: string;
  timestamp: string;
}


export const addAIContributionToMap = (
  Id: string,
  yDoc: Y.Doc,
  start: number,
  length: number,
  source: string
): string => {
  const yText = yDoc.getText("quill");

  const startRelPos = Y.createRelativePositionFromTypeIndex(yText, start);
  const endRelPos = Y.createRelativePositionFromTypeIndex(yText, start + length);
  const metadataMap = yDoc.getMap<AIContributionMetadata>("metadata");

  metadataMap.set(Id, {
    start: startRelPos,
    length: endRelPos,
    isAIContribution: true,
    source,
    timestamp: new Date().toISOString(),
  });

  console.log(`AI contribution metadata saved: ${Id}`);
  return Id;
};

export const highlightAIContributions = (
  yDoc: Y.Doc,
  quill: React.RefObject<ReactQuill>,
  highlightColor: string = "#FFFF99"
) => {
  if (!quill.current) {
    console.error("Quill editor is not initialized.");
    return;
  }

  const metadataMap = yDoc.getMap<AIContributionMetadata>("metadata");
  const editor = quill.current.getEditor();
  const yText = yDoc.getText("quill");

  metadataMap.forEach((metadata, contributionId) => {
    const startPos = Y.createAbsolutePositionFromRelativePosition(metadata.start, yDoc);
    const endPos = Y.createAbsolutePositionFromRelativePosition(metadata.length, yDoc);

    if (startPos && endPos && startPos.type === yText && endPos.type === yText) {
      const start = startPos.index;
      const length = endPos.index - start;

      editor.formatText(start, length, { background: highlightColor });

      // Add data attributes for hover detection
      const leaf = editor.getLeaf(start)[0]?.domNode;
      if (leaf instanceof HTMLElement) {
        leaf.setAttribute("data-start", start.toString());
        leaf.setAttribute("data-end", (start + length).toString());
        leaf.setAttribute("data-contribution-id", contributionId);
      }
    }
  });
};



