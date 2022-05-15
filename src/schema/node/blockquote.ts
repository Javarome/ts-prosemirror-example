import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const blockquoteDOM: DOMOutputSpecArray = ["blockquote", 0]

/**
 * A blockquote (`<blockquote>`) wrapping one or more blocks.
 */
export const blockquote: NodeSpec = {
  content: "block+",
  group: "block",
  defining: true,
  parseDOM: [{tag: "blockquote"}],
  toDOM(_node): DOMOutputSpec {
    return blockquoteDOM
  }
}
