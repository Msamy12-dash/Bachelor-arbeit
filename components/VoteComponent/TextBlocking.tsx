import { DeltaStatic, RangeStatic } from "quill/index";
import ReactQuill from "react-quill";
import * as Y from "yjs";

interface ReadOnlyContext {
  quill: any;
}
interface Range {
  index: number;
  length: number;
}
interface VoteRange {
  index: number;
  length: number;
  text: string;
}

const voteRangesDoc = new Y.Doc();

export const deleteAll = (quill: React.RefObject<ReactQuill> , doc : Y.Doc) => {
  const yarray = doc.getArray('rangeArray');
  const voteYarray = voteRangesDoc.getArray('voteArray');
  yarray.delete(0,yarray.length);
  voteYarray.delete(0,voteYarray.length);

  const editor = quill.current?.getEditor();
  editor?.formatText(0,editor?.getLength(),{ background: false });

};

export const addElementToYArray = (doc: Y.Doc, element: Range) => {
  const yarray = doc.getArray<Range>("rangeArray");



  const newRange: Range = {
    index: element.index,
    length: element.length,
  };

  yarray.push([newRange])
};
export const addElementToVoteYArray = (doc: Y.Doc, element: VoteRange) => {
  const voteYarray = voteRangesDoc.getArray<VoteRange>("voteArray");

  const newRange: VoteRange = {
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

export const saveRORange = (quill: React.RefObject<ReactQuill>, doc: Y.Doc, range:Range) => {
  if (quill.current) {
    const editor = quill.current.getEditor();

    if (range && range.length > 0) {
      editor.formatText(range.index, range.length, {
        background: "#ffcccc"
      });
      // const text = editor.getText(range.index, range.length);

      // editor.insertText(range.index + range.length, "  " + text, {
      //   color: "green",
      //   underline: true,
      // });

      addElementToYArray(doc, range);

      // rangeListRef.current.push({
      //   index: range.index,
      //   length: range.length,
      // });
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
  console.log("Initial ranges from Yjs doc: ", ranges);


  const newBlockedRanges = ranges.map((range) => {
    let start = range.index;
    let end = range.index + range.length;
    console.log(`Processing range: start=${start}, end=${end}`);

    delta.ops?.forEach((op) => {
      const retainLength = op.retain || 0;
      console.log("Retain length:", retainLength);

      const insertLength = op.insert && typeof op.insert === "string" ? op.insert.length : 0;
      console.log("Insert length:", insertLength);

      const deleteLength = op.delete || 0;
      console.log("Delete length:", deleteLength);

      const pos = op.retain || 0;
      console.log("Operation position:", pos);

      if (pos <= start) {
        start += insertLength - deleteLength;
        console.log(`Updated start position: ${start}`);
      }
    });

    console.log(`Final range: start=${start}, length=${range.length}`);
    return { index: start, length: range.length };
  });

  console.log("New blocked ranges:", newBlockedRanges);

  const yArray = doc.getArray<Range>('rangeArray');
  console.log("Yjs rangesArray before update:", yArray.toArray());

  yArray.delete(0, yArray.length);
  console.log("Yjs rangesArray after deletion:", yArray.toArray());

  yArray.push(newBlockedRanges);
  console.log("Yjs rangesArray after push:", yArray.toArray());

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

    return { index: start, length: voteRange.length, text: text };
  });

  const voteYArray = voteRangesDoc.getArray<VoteRange>('voteArray');
  voteYArray.delete(0, voteYArray.length);
  voteYArray.push(newBlockedVoteRanges);
  console.log(voteYArray.toArray());
};
