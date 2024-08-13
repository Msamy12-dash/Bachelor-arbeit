import { DeltaStatic, RangeStatic } from "quill/index";
import ReactQuill from "react-quill";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";
import { generatePollTitle } from "@/components/VoteComponent/AIVotingFunctions";

interface ReadOnlyContext {
  quill: any;
}
interface Range {
  id: number;
  current: boolean;
  index: number;
  length: number;
}
export interface RelRange{
  start: Y.RelativePosition;
  end: Y.RelativePosition;
  oldText: string;
  newText?: string;
  pollTitle?:string;
}

const localVoteRangesDoc = new Y.Doc();


export const getCurrentId = (doc: Y.Doc,provider: YPartyKitProvider): string => {
  const localState = provider.awareness.getLocalState();

  return localState ? localState['currentId'] : null;
};
export const setCurrentRangeForUser = (rangeId:string ,provider:YPartyKitProvider )=> {
  provider.awareness.setLocalStateField('currentId', rangeId);
};


// Adds a range to the Y.Doc using Y.RelativePosition and Y.Map
export const addRelRangeToDoc = (doc: Y.Doc, start: number, length: number, ytext: Y.Text,provider:YPartyKitProvider) => {
  const yMap = doc.getMap<RelRange>("relRanges");
  // Log all keys in the shared YMap
  console.log("Keys in the shared Y.Map (relRanges):", Array.from(yMap.keys()));



  const currentId = crypto.randomUUID();

  const oldText = ytext.toString().substring(start, start + length);



  const startRelPos = Y.createRelativePositionFromTypeIndex(ytext, start);
  const endRelPos = Y.createRelativePositionFromTypeIndex(ytext, start + length);

  const newRelRange: RelRange = {
    start: startRelPos,
    end: endRelPos,
    oldText: oldText,
  };



   yMap.set(currentId, newRelRange);

  setCurrentRangeForUser(currentId, provider);
  // Log all keys in the shared YMap
  console.log("Keys in the shared Y.Map (relRanges):", Array.from(yMap.keys()));


};


export const getRelRangeFromDoc = (doc: Y.Doc, id: string): { start: number, end: number } | null => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = yMap.get(id);

  if (relRange) {
    const startPos = Y.createAbsolutePositionFromRelativePosition(relRange.start, doc);
    const endPos = Y.createAbsolutePositionFromRelativePosition(relRange.end, doc);

    if (startPos && endPos ) {
      return { start: startPos.index, end: endPos.index };
    }
  }

  return null;
};

export const getRelRangeTextsFromDoc = (doc: Y.Doc, id: string): { oldText: string, newText?: string } | null => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = yMap.get(id);

  if (relRange) {
    return {
      oldText: relRange.oldText,
      newText: relRange.newText
    };
  }

  return null;
};



export const deleteRelRange = (doc: Y.Doc, id: string, quill: React.RefObject<ReactQuill>) => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = getRelRangeFromDoc(doc, id);

  if (relRange) {
    const editor = quill.current?.getEditor();

    if (editor) {
      editor.formatText(relRange.start, relRange.end - relRange.start, { background: false });
      //ytext.delete(relRange.start, relRange.end - relRange.start);
    }
    yMap.delete(id.toString());
  }
};


export const saveRelRange = (quill: React.RefObject<ReactQuill>, doc: Y.Doc, provider: YPartyKitProvider, range?: Omit<Range, "id" | "current">) => {

  if (quill.current) {
    const editor = quill.current.getEditor();
    const ytext = doc.getText("quill");



    if (range && range.length > 0) {
      if (range.index == 0) {
        editor.insertText(range.index, " ", { background: false });
        range.index += 1;
      }
      if(range.index + range.length + 1 >= editor.getLength()){
        editor.insertText(editor.getLength(), " ", { background: false });
      }
      editor.formatText(range.index, range.length, { background: "#ffcccc" });
      addRelRangeToDoc(doc, range.index, range.length, ytext,provider);
    }
  }

};

export const deleteCurrentRelRange = (doc: Y.Doc, provider: YPartyKitProvider, quill: React.RefObject<ReactQuill>) => {
  const currentId = getCurrentId(doc, provider);
  const ytext = provider.doc.getText('quill');

  if (currentId !== null) {
    deleteRelRange(doc, currentId, quill);
  }
};
export const handleRORelSelectionChange = async (
  quill: React.RefObject<ReactQuill>,
  range: Omit<Range, "id" | "current">,
  doc: Y.Doc,
  ytext: Y.Text
) => {
  if (range) {
    const start = range.index;
    const end = range.index + range.length;

    const yMap = doc.getMap<RelRange>("relRanges");
    console.log("Keys in the shared Y.Map (relRanges):", Array.from(yMap.keys()));

    const ranges = Array.from(yMap.values());

    const overlap = ranges.some((relRange) => {
      const startPos = Y.createAbsolutePositionFromRelativePosition(relRange.start, doc);
      const endPos = Y.createAbsolutePositionFromRelativePosition(relRange.end, doc);

      if (startPos && endPos && startPos.type === ytext && endPos.type === ytext) {
        const rangeStart = startPos.index;
        const rangeEnd = endPos.index;

        // Check if the provided range overlaps with the current range
        return start <= rangeEnd && end > rangeStart;
      }

      return false;
    });

    if (overlap) {
      quill.current?.getEditor().blur();
    }
  }
};

const forceSpacesAroundRelRange = (
  doc: Y.Doc,
  relRangeKey: string,
  quill: React.RefObject<ReactQuill>,
  ytext: Y.Text
) => {
  const editor = quill.current?.getEditor();

  if (editor) {
    const yMap = doc.getMap<RelRange>("relRanges");

    const relRange = yMap.get(relRangeKey);

    if (relRange) {
      const startPos = Y.createAbsolutePositionFromRelativePosition(relRange.start, doc);
      const endPos = Y.createAbsolutePositionFromRelativePosition(relRange.end, doc);

      if (startPos && endPos && startPos.type === ytext && endPos.type === ytext) {
        let start = startPos.index;
        let end = endPos.index;

        // Add space before the range if it's not already there
        if (start > 0) {
          const textBefore = editor.getText(start - 1, 1);

          if (textBefore !== " ") {
            editor.insertText(start, " ", { background: false });
            start += 1; // Adjust start position
            end += 1; // Adjust end position
          }
        }

        // Add space after the range if it's not already there
        if (end < editor.getLength()) {
          const textAfter = editor.getText(end, 1);

          if (textAfter !== " ") {
            editor.insertText(end, " ", { background: false });
            end += 1; // Adjust end position
          }
        }

        // Update the relative positions in the Y.js doc
        const newStartRelPos = Y.createRelativePositionFromTypeIndex(ytext, start);
        const newEndRelPos = Y.createRelativePositionFromTypeIndex(ytext, end);

        // Update the relRange in the YMap
        relRange.start = newStartRelPos;
        relRange.end = newEndRelPos;
        yMap.set(relRangeKey, relRange);
        // Log all keys in the shared YMap
        console.log("Keys in the shared Y.Map (relRanges):", Array.from(yMap.keys()));
      }
    } else {
      console.error(`RelRange with key ${relRangeKey} not found.`);
    }
  }
};


export const saveNewTextForCurrentRange = async (
  doc: Y.Doc,
  provider: YPartyKitProvider,
  newText: string
) => {
  const currentId = getCurrentId(doc, provider);

  if (currentId && currentId !== null) {
    const yMap = doc.getMap<RelRange>("relRanges");

    const relRange = yMap.get(currentId.toString());

    if (relRange) {
      relRange.newText = newText;

      const pollTitle = await generatePollTitle(relRange.oldText, newText);
      relRange.pollTitle = pollTitle || "Untitled Poll";

      yMap.set(currentId.toString(), relRange);
    } else {
      console.log(`RelRange with ID ${currentId} not found.`);
    }
  } else {
    console.log("No current ID found for the user.");
  }
};


export const unlockRange = (
  doc: Y.Doc,
  rangeId: string,
  replaceText: boolean,
  quill: React.RefObject<ReactQuill>
) => {
  const yMap = doc.getMap<RelRange>("relRanges");
  let found = false
// Log all keys in the local YMap
  console.log("Keys in the shared Y.Map (relRanges):", Array.from(yMap.keys()));

  const relRange = yMap.get(rangeId);

  if (relRange) {
    const editor = quill.current?.getEditor();
    found = true;

    if (editor) {
      if (replaceText && relRange.newText) {
        const rangeStart = Y.createAbsolutePositionFromRelativePosition(relRange.start, doc)?.index;
        const rangeEnd = Y.createAbsolutePositionFromRelativePosition(relRange.end, doc)?.index;

        if (rangeStart !== undefined && rangeEnd !== undefined) {
          editor.deleteText(rangeStart, rangeEnd - rangeStart);
          editor.insertText(rangeStart, relRange.newText, { background: false });

          editor.formatText(rangeStart, relRange.newText.length, { background: false });
        }
      }
      deleteRelRange(doc,rangeId,quill)
    }
  } else {
    console.log(`RelRange with ID ${rangeId} not found.`);
  }

};

export const clearAllRelRanges = (
  doc: Y.Doc,
  quill: React.RefObject<ReactQuill>
) => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const editor = quill.current?.getEditor();

    yMap.clear();
  console.log("Keys in the shared Y.Map (relRanges):", Array.from(yMap.keys()));

    editor?.formatText(0, editor.getLength(), { background: false });

};


export const restoreSelectionToCurrentRange = (
  doc: Y.Doc,
  provider: YPartyKitProvider,
  quill: React.RefObject<ReactQuill>,
) => {
  const currentId = getCurrentId(doc, provider);

  if (currentId !== null) {
    const yMap = doc.getMap<RelRange>("relRanges");
    const relRange = yMap.get(currentId.toString());

    if (relRange) {
      const startPos = Y.createAbsolutePositionFromRelativePosition(relRange.start, doc);
      const endPos = Y.createAbsolutePositionFromRelativePosition(relRange.end, doc);

      if (startPos && endPos ) {
        const start = startPos.index;
        const end = endPos.index;

        const editor = quill.current?.getEditor();

        if (editor) {
          editor.setSelection(start, end - start);
        }
      }
    } else {
      console.error(`RelRange with ID ${currentId} not found.`);
    }
  } else {
    console.error("No current ID found for the user.");
  }
};

export const getPollTitle = (doc: Y.Doc, id: string): string | null => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = yMap.get(id);

  if (relRange && relRange.pollTitle) {
    return relRange.pollTitle;
  }

  return null;
};








