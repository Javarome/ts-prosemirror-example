import {DOMOutputSpecArray, MarkSpec} from "prosemirror-model"

const codeDOM: DOMOutputSpecArray = ["code", 0]

/**
 * Code font mark.
 * Represented as a `<code>` element.
 */
export const code: MarkSpec = {
  parseDOM: [{tag: "code"}],
  toDOM() {
    return codeDOM
  }
}
