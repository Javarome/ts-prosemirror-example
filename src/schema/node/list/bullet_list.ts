import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const ulDOM: DOMOutputSpecArray = ["ul", 0]

/**
 * A bullet list node spec, represented in the DOM as `<ul>`.
 */
export const bulletList: NodeSpec = {
  parseDOM: [{tag: "ul"}],
  toDOM(_node): DOMOutputSpec {
    return ulDOM
  }
}
