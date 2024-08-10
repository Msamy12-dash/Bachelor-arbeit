import { DeltaStatic, RangeStatic } from "quill/index";
import ReactQuill from "react-quill";
import * as Y from "yjs";
import YPartyKitProvider from "y-partykit/provider";

interface ReadOnlyContext {
  quill: any;
}
interface Range {
  id: number;
  current: boolean;
  index: number;
  length: number;
}
interface VoteRange {
  id: number;
  index: number;
  length: number;
  text: string;
}
interface RelRange{
  id: number;
  current: boolean;
  start: Y.RelativePosition;
  end: Y.RelativePosition;
  oldText: string;
  newText?: string;
}

const voteRangesDoc = new Y.Doc();

const forceSpacesAroundRange = (editor: any, range: Range) => {

  if (range.index == 0) {
    const textBefore = editor.getText(range.index - 1, 1);
    if (textBefore !== " ") {
      editor.insertText(range.index, " ",{
        background: false});
      range.index += 2;
    }
  }

  // Check if the range ends at the last position in the editor
  if (range.index + range.length == editor.getLength()) {
    const textAfter = editor.getText(range.index + range.length, 1);
    if (textAfter !== " ") {
      editor.insertText(range.index + range.length, " ",{
        background: false});
    }
  }
};


export const deleteAll = (quill: React.RefObject<ReactQuill> , doc : Y.Doc) => {
  const yarray = doc.getArray('rangeArray');
  const voteYarray = voteRangesDoc.getArray('voteArray');

  yarray.delete(0,yarray.length);
  voteYarray.delete(0,voteYarray.length);

  const editor = quill.current?.getEditor();

  editor?.formatText(0,editor?.getLength(),{ background: false });

};

export const addElementToYArray = (doc: Y.Doc, element: Omit<Range,"id"|"current">,provider:YPartyKitProvider,quill? :React.RefObject<ReactQuill> ) => {
  const yarray = doc.getArray<Range>("rangeArray");
  const currentRanges = yarray.toArray();
  const maxIdRange = currentRanges.reduce(
    (maxRange, range) => (range.id > maxRange.id ? range : maxRange),
    { id: 0, current: false, index: 0, length: 0 }
  );

  if (maxIdRange.id !== 0) {
    const updatedRange = { ...maxIdRange, current: false };
    yarray.delete(currentRanges.indexOf(maxIdRange), 1);
    yarray.insert(currentRanges.indexOf(maxIdRange), [updatedRange]);
  }

  const newRange: Range = {
    id: maxIdRange.id + 1,
    current: true,
    index: element.index,
    length: element.length,
  };

  const editor = quill?.current?.getEditor();
  if (editor) {
    forceSpacesAroundRange(editor, newRange);
  }

  yarray.push([newRange])
  setCurrentRangeForUser(newRange.id, provider);
};
export const addElementToVoteYArray = (doc: Y.Doc, element: Omit<VoteRange, "id">) => {
  const voteYarray = voteRangesDoc.getArray<VoteRange>("voteArray");
  const currentRanges = voteYarray.toArray();
  const maxIdRange = currentRanges.reduce(
    (maxRange, range) => (range.id > maxRange.id ? range : maxRange),
    { id: 0, index: 0, length: 0 }
  );


  const newRange: VoteRange = {
    id: maxIdRange.id + 1,
    index: element.index,
    length: element.length,
    text: element.text
  };

  voteYarray.push([newRange]);


};

const getYArray = (doc: Y.Doc): any[] => {
  const yarray = doc.getArray("rangeArray")

  return yarray.toArray();

};

export const saveRORange = (quill: React.RefObject<ReactQuill>, doc: Y.Doc,provider:YPartyKitProvider, range?:Omit<Range, "id"|"current">) => {
  if (quill.current) {
    const editor = quill.current.getEditor();



      if (range && range.length > 0) {

          editor.formatText(range.index, range.length, {
            background: "#ffcccc"
          });
        addElementToYArray(doc, range,provider, quill);
      }
    }

};

export const saveRangeWithText = (quill: React.RefObject<ReactQuill>, doc: Y.Doc) => {
  if (quill.current) {
    const editor = quill.current.getEditor();
    const range = editor.getSelection();

    if (range && range.length > 0) {
      const text = editor.getText(range.index, range.length);

      const voteRange: VoteRange = {
        id: 1,
        index: range.index,
        length: range.length,
        text: text
      };


      addElementToVoteYArray(doc, voteRange);
    }
  }
};

export const updateVoteRangeText = (doc: Y.Doc, text: string, newText: string) => {
  const voteYarray = voteRangesDoc.getArray<VoteRange>("voteArray");
  const voteRanges = voteYarray.toArray();

  const rangeIndex = voteRanges.findIndex(range => range.text === text);

  if (rangeIndex !== -1) {
    const voteRange = voteRanges[rangeIndex];
    const updatedRange: VoteRange = {
      id : voteRange.id,
      index: voteRange.index,
      length: voteRange.length,
      text: newText
    };

    voteYarray.delete(rangeIndex, 1); // Remove the old range
    voteYarray.insert(rangeIndex, [updatedRange]); // Insert the updated range

  } else {

  }
};

export const handleROSelectionChange = async (
  quill: any,
  selection: RangeStatic,
  source: string,
  doc: Y.Doc,
) => {
  if (selection) {
    const start = selection.index;
    const end = selection.index + selection.length + 1;
    let ranges: Range[] = getYArray(doc);



    const overlap = ranges.some((range) => {
      const rangeEnd = range.index + range.length;

      return start <= rangeEnd && end > range.index;
    });

    if (overlap) {

      quill.current?.getEditor().blur();
    } else {

    }
  }
};

export const deleteRangeFromYArray = (doc: Y.Doc, newText: string, quill:any) => {
  const voteYarray = voteRangesDoc.getArray<VoteRange>("voteArray");
  const voteRanges = voteYarray.toArray();

  const voteRangeIndex = voteRanges.findIndex(range => range.text === newText);

  if (voteRangeIndex !== -1) {
    const voteRange = voteRanges[voteRangeIndex];

    const yarray = doc.getArray<Range>("rangeArray");
    const ranges = yarray.toArray();

    const rangeIndex = ranges.findIndex(range => range.index === voteRange.index && range.length === voteRange.length);

    if (rangeIndex !== -1) {
      const range = ranges[rangeIndex];

      yarray.delete(rangeIndex, 1); // Remove the range from rangeArray



      quill.current?.getEditor().deleteText(range.index, range.length);
      quill.current?.getEditor().insertText(range.index, newText);

    } else {

    }
  } else {

  }
};

export const handleROChange = (
  quill: any,
  value: string,
  delta: DeltaStatic,
  source: string,
) => {
  // const editor = quill.current?.getEditor();
  //
  // console.log(rangeListRef);
  // const deleteOperation = delta.ops?.find((op) => op.delete);
  //
  // if (deleteOperation !== undefined) {
  //   const isBlocked = rangeListRef.current.some(
  //     (range) => deleteOperation.retain === range.index + range.length + 3,
  //   );
  //
  //   if (
  //     isBlocked &&
  //     delta.ops?.some((op) => "delete" in op || "insert" in op)
  //   ) {
  //     quill.current?.getEditor().blur();
  //   }
  // } else {
  //   const isBlocked = rangeListRef.current.some(
  //     (range) =>
  //       editor?.getSelection()?.index === range.index + range.length + 3,
  //   );
  //
  //   if (
  //     isBlocked &&
  //     delta.ops?.some((op) => "delete" in op || "insert" in op)
  //   ) {
  //     quill.current?.getEditor().history.undo();
  //   }
  // }
};

export const handleRangeShift = (delta: DeltaStatic, quill: any, doc: Y.Doc) => {
  const editor = quill.current?.getEditor();

  let ranges: Range[] = doc.getArray<Range>("rangeArray").toArray();

  const newBlockedRanges = ranges.map((range) => {
    let start = range.index;
    let end = range.index + range.length;


    delta.ops?.forEach((op) => {
      const retainLength = op.retain || 0;
      const insertLength = op.insert && typeof op.insert === "string" ? op.insert.length : 0;
      const deleteLength = op.delete || 0;
      const pos = op.retain || 0;

      if (pos <= start) {
        start += insertLength - deleteLength;
      }
    });

    return { id:range.id ,current: range.current,index: start, length: range.length };
  });

  const yArray = doc.getArray<Range>('rangeArray');

  yArray.delete(0, yArray.length);
  yArray.push(newBlockedRanges);
  newBlockedRanges.pop();



  let voteRanges: VoteRange[] = voteRangesDoc.getArray<VoteRange>("voteArray").toArray();

  const newBlockedVoteRanges = voteRanges.map((voteRange) => {
    let start = voteRange.index;
    let end = voteRange.index + voteRange.length;
    let text = voteRange.text;

    delta.ops?.forEach((op) => {
      const retainLength = op.retain || 0;

      const insertLength =
        op.insert && typeof op.insert === "string" ? op.insert.length : 0;
      const deleteLength = op.delete || 0;
      const pos = op.retain || 0;

      if (pos <= start) {
        start += insertLength - deleteLength;
      }
    });

    return { id:voteRange.id, index: start, length: voteRange.length, text: text };
  });

  const voteYArray = voteRangesDoc.getArray<VoteRange>('voteArray');

  voteYArray.delete(0, voteYArray.length);
  voteYArray.push(newBlockedVoteRanges);
  console.log(voteYArray.toArray());
};

export const deleteCurrent = (quill: React.RefObject<ReactQuill>, doc: Y.Doc, provider: YPartyKitProvider) => {
  const yarray = doc.getArray<Range>("rangeArray");
  const ranges = yarray.toArray();

  const currentId = getCurrentId(doc, provider);

  if (currentId !== null) {
    const currentRangeIndex = ranges.findIndex((range) => range.id === currentId);

    if (currentRangeIndex !== -1) {
      const currentRange = ranges[currentRangeIndex];

      console.log(JSON.stringify(yarray.toArray()));
      yarray.delete(currentRangeIndex, 1);
      console.log(JSON.stringify(yarray.toArray()));

      const editor = quill.current?.getEditor();
      if (editor) {
        editor.formatText(currentRange.index, currentRange.length, { background: false });
      }
    }
  }
};


export const getCurrentId = (doc: Y.Doc,provider: YPartyKitProvider): number | null => {
  const localState = provider.awareness.getLocalState();
  return localState ? localState['currentId'] : null;
};
export const setCurrentRangeForUser = (rangeId:any ,provider:YPartyKitProvider )=> {
  provider.awareness.setLocalStateField('currentId', rangeId);
};


// Adds a range to the Y.Doc using Y.RelativePosition and Y.Map
export const addRelRangeToDoc = (doc: Y.Doc, start: number, length: number, ytext: Y.Text,provider:YPartyKitProvider) => {
  const yMap = doc.getMap<RelRange>("relRanges");

  let currentId = 0;
  if (yMap.size > 0) {
    const maxId = Array.from(yMap.values()).reduce((max, range) => {
      return range.id > max ? range.id : max;
    }, 0);
    currentId = maxId + 1;
  }

  const oldText = ytext.toString().substring(start, start + length);



  const startRelPos = Y.createRelativePositionFromTypeIndex(ytext, start);
  const endRelPos = Y.createRelativePositionFromTypeIndex(ytext, start + length);

  const newRelRange: RelRange = {
    id: currentId,
    current: true,
    start: startRelPos,
    end: endRelPos,
    oldText: oldText,
  };



   yMap.set(currentId.toString(), newRelRange);

  setCurrentRangeForUser(newRelRange.id, provider);

};


export const getRelRangeFromDoc = (doc: Y.Doc, id: number, ytext: Y.Text): { start: number, end: number } | null => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = yMap.get(id.toString());

  if (relRange) {
    const startPos = Y.createAbsolutePositionFromRelativePosition(relRange.start, doc);
    const endPos = Y.createAbsolutePositionFromRelativePosition(relRange.end, doc);

    if (startPos && endPos && startPos.type === ytext && endPos.type === ytext) {
      return { start: startPos.index, end: endPos.index };
    }
  }

  return null;
};


export const deleteRelRange = (doc: Y.Doc, id: number, quill: React.RefObject<ReactQuill>, ytext: Y.Text) => {
  const yMap = doc.getMap<RelRange>("relRanges");
  const relRange = getRelRangeFromDoc(doc, id, ytext);

  if (relRange) {
    const editor = quill.current?.getEditor();
    if (editor) {
      editor.formatText(relRange.start, relRange.end - relRange.start, { background: false });
      //ytext.delete(relRange.start, relRange.end - relRange.start);
    }
    yMap.delete(id.toString());
  }
};

export const handleRelRangeShift = (doc: Y.Doc, ytext: Y.Text) => {
  const yMap = doc.getMap<RelRange>("relRanges");

  yMap.forEach((relRange, key) => {
    const rangePos = getRelRangeFromDoc(doc, relRange.id, ytext);

    if (rangePos) {
      const start = rangePos.start;
      const end = rangePos.end;
      // The positions will be adjusted automatically by Y.js.
      // Optionally, you can perform additional logic if necessary.
    }
  });
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
    deleteRelRange(doc, currentId, quill, ytext);
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

const forceSpacesAroundRelRange = (doc: Y.Doc, relRange: RelRange, quill: React.RefObject<ReactQuill>, ytext: Y.Text) => {
  const editor = quill.current?.getEditor();

  if (editor) {
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

      relRange.start = newStartRelPos;
      relRange.end = newEndRelPos;

      // Update the relRange in the Y.Map
      const yMap = doc.getMap<RelRange>("relRanges");
      yMap.set(relRange.id.toString(), relRange);
    }
  }
};



