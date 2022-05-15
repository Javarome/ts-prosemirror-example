import {DOMOutputSpecArray, NodeSpec} from "prosemirror-model"
import {paragraph} from "./paragraph"
import {blockquote} from "./blockquote"
import {horizontal_rule} from "./horizontal_rule"
import {code_block} from "./code_block"
import {heading} from "./heading"
import {image} from "./image"

const brDOM: DOMOutputSpecArray = ["br"]

/**
 * A hard line break, represented in the DOM as `<br>`.
 */
export const hard_break: NodeSpec = {
  inline: true,
  group: "inline",
  selectable: false,
  parseDOM: [{tag: "br"}],
  toDOM() {
    return brDOM
  }
}
