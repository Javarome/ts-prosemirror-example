import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const hrDOM: DOMOutputSpecArray = ["hr"]

/**
 * A horizontal rule (`<hr>`).
 */
export const horizontal_rule: NodeSpec = {
  group: "block",
  parseDOM: [{tag: "hr"}],
  toDOM(_node): DOMOutputSpec {
    return hrDOM
  }
}
