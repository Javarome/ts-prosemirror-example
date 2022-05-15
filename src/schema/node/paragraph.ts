import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const pDOM: DOMOutputSpecArray = ["p", 0]


/**
 * A plain paragraph textblock.
 * Represented in the DOM as a `<p>` element.
 */
export const paragraph: NodeSpec = {
  content: "inline*",
  group: "block",
  parseDOM: [{tag: "p"}],
  toDOM(_node): DOMOutputSpec {
    return pDOM
  }
}
