// HighlightBlot.ts
import ReactQuill, { Quill } from "react-quill";

const Inline = Quill.import('blots/inline');

class HighlightBlot extends Inline {
  static blotName = 'highlight';
  static tagName = 'span';
  static className = 'highlighted-text';

  static create(value: string): Node {
    let node = super.create();
    node.setAttribute('data-highlight-id', value);
    return node;
  }

  static formats(node: HTMLElement): string | undefined {
    return node.getAttribute('data-highlight-id') || undefined;
  }
}

export default HighlightBlot;
