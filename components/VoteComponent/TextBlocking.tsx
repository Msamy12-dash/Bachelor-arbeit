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

export const addElementToYArray = (doc: Y.Doc, element: Range) => {
  const yarray = doc.getArray<Range>("rangesArray");

  console.log("Current Yjs Array:", yarray.toArray()); // Debug log

  const newRange: Range = {
    index: element.index,
    length: element.length,
  };

  yarray.push([newRange]);
  console.log("Updated Yjs Array:", yarray.toArray());
};
export const addElementToVoteYArray = (doc: Y.Doc, element: VoteRange) => {
  const voteYarray = doc.getArray<VoteRange>("voteArray");

  console.log("Current vote Array:", voteYarray.toArray()); // Debug log

  const newRange: VoteRange = {
    index: element.index,
    length: element.length,
    text: element.text
  };

  voteYarray.push([newRange]);
  console.log("Updated vote Array:", voteYarray.toArray());
};

const getYArray = (doc: Y.Doc): any[] => {
  const yarray = doc.getArray("rangesArray")
  console.log(yarray);
  return yarray.toArray();

};

export const saveRORange = (quill: React.RefObject<ReactQuill>, doc: Y.Doc) => {
  if (quill.current) {
    const editor = quill.current.getEditor();
    const range = editor.getSelection();

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
      const text = editor.getText(range.index, range.length); // Get the text in the selected range


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
  const voteYarray = doc.getArray<VoteRange>("voteArray");
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
    console.log("Updated vote Array:", voteYarray.toArray());
  } else {
    console.log("Range not found");
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

    console.log(ranges);

    const overlap = ranges.some((range) => {
      const rangeEnd = range.index + range.length;

      return start <= rangeEnd && end > range.index;
    });

    if (overlap) {
      console.log("Current selection overlaps with an existing range");
      quill.current?.getEditor().blur();
    } else {
      console.log("No overlap detected");
    }
  }
};

export const deleteRangeFromYArray = (doc: Y.Doc, newText: string, quill:any) => {
  const voteYarray = doc.getArray<VoteRange>("voteArray");
  const voteRanges = voteYarray.toArray();

  const voteRangeIndex = voteRanges.findIndex(range => range.text === newText);

  if (voteRangeIndex !== -1) {
    const voteRange = voteRanges[voteRangeIndex];

    const yarray = doc.getArray<Range>("rangesArray");
    const ranges = yarray.toArray();

    const rangeIndex = ranges.findIndex(range => range.index === voteRange.index && range.length === voteRange.length);

    if (rangeIndex !== -1) {
      const range = ranges[rangeIndex];
      yarray.delete(rangeIndex, 1); // Remove the range from rangesArray
      console.log("Deleted range from rangesArray:", yarray.toArray());


      quill.current?.getEditor().deleteText(range.index, range.length);
      quill.current?.getEditor().insertText(range.index, newText);
      console.log("Updated editor text");
    } else {
      console.log("Range not found in rangesArray");
    }
  } else {
    console.log("Range not found in voteArray");
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
  let ranges: Range[] = getYArray(doc);

  const newBlockedRanges = ranges.map((range) => {
    let start = range.index;
    let end = range.index + range.length;

    delta.ops?.forEach((op) => {
      const retainLength = op.retain || 0;

      console.log(JSON.stringify(retainLength));
      const insertLength =
        op.insert && typeof op.insert === "string" ? op.insert.length : 0;
      const deleteLength = op.delete || 0;
      const pos = editor.getSelection().index;

      if (pos <= start) {
        start += insertLength - deleteLength;
        end += insertLength - deleteLength;
      }
    });

    return { index: start, length: end - start };
  });

  const yArray = doc.getArray<Range>('rangesArray');
  yArray.delete(0, yArray.length);
  yArray.push(newBlockedRanges);
};
