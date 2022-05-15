import {NodeSpec} from "prosemirror-model"
import {paragraph} from "./paragraph"
import {blockquote} from "./blockquote"
import {horizontal_rule} from "./horizontal_rule"
import {code_block} from "./code_block"
import {heading} from "./heading"
import {image} from "./image"
import {hard_break} from "./hard_break"

/**
 * The text node.
 */
const text: NodeSpec = {
  group: "inline"
}

/**
 * The top level document node.
 */
const doc: NodeSpec = {
  content: "block+"
}

/**
 * [Specs](#model.NodeSpec) for the nodes defined in this schema.
 */
export const nodes: { [name: string]: NodeSpec } = {
  doc,
  paragraph,
  blockquote,
  horizontal_rule,
  heading,
  code_block,
  text,
  image,
  hard_break
}
