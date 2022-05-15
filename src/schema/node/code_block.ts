import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const preDOM: DOMOutputSpecArray = ["pre", ["code", 0]]

/**
 * A code listing.
 * Disallows marks or non-text inline nodes by default.
 * Represented as a `<pre>` element with a `<code>` element inside of it.
 */
export const code_block: NodeSpec = {
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  parseDOM: [{tag: "pre", preserveWhitespace: "full"}],
  toDOM(_node): DOMOutputSpec {
    return preDOM
  }
}
