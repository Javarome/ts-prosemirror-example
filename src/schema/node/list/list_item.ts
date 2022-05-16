/*
 * This code is a TypeScript port of https://github.com/ProseMirror/prosemirror-schema-list/blob/master/src/schema-list.js
 */
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
