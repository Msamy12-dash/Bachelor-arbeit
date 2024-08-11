import { DeltaStatic } from "quill/index";
import * as Y from "yjs";


interface Comment {
  key: number;
  name: string;
  content: string;
  date: string; 
  upvotes: number;
  isTextSpecific: boolean;
  shortenedSelectedText: string;
  index: number;
  length: number;
  history: string[]; 
  replies: Comment[];
  parentKey: number | null;
  canReply: boolean;
}

export const handleCommentRangeShift = (delta: DeltaStatic, quill: any, doc: Y.Doc) => {
  const editor = quill.current?.getEditor();

  let comments: Comment[] = doc.getArray<Comment>("comments").toArray();

  const newCommentRanges = comments.map((comment) => {
    let start = comment.index;
    let end = comment.index + comment.length;
    let length = comment.length;
    let currentPos = 0;

    //console.log(`Processing range: start=${start}, end=${end}`);

    delta.ops?.forEach((op) => {
      if (op.retain !== undefined) {
        currentPos += op.retain;
      } else if (op.insert) {
        const insertLength = typeof op.insert === "string" ? op.insert.length : 1;
        if (currentPos <= start) {
          start += insertLength;
        }
        if (currentPos <= end) {
          end += insertLength;
          length += insertLength;
        }
        currentPos += insertLength;
      } else if (op.delete) {
        const deleteLength = op.delete;
        if (currentPos < start) {
          start -= Math.min(deleteLength, start - currentPos);
        }
        if (currentPos <= end) {
          end -= Math.min(deleteLength, end - currentPos);
          length -= Math.min(deleteLength, end - currentPos);
        }
        currentPos += deleteLength;
      }
    });

    //console.log(`Final range: start=${start}, length=${length}`);
    return {...comment, index: start, length: length};
  });

  const yArray = doc.getArray<Comment>("comments");
  yArray.delete(0, yArray.length);
  yArray.push(newCommentRanges);

  newCommentRanges.pop();
};