import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const liDOM: DOMOutputSpecArray = ["li", 0]

/**
 * A list item (`<li>`) spec.
 */
export const listItem: NodeSpec = {
  parseDOM: [{tag: "li"}],
  toDOM(_node): DOMOutputSpec {
    return liDOM
  },
  defining: true
}
