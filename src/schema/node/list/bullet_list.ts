/*
 * This code is a TypeScript port of https://github.com/ProseMirror/prosemirror-schema-list/blob/master/src/schema-list.js
 */
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
