import {DOMOutputSpec, DOMOutputSpecArray, NodeSpec} from "prosemirror-model"

const olDOM: DOMOutputSpecArray = ["ol", 0]

/**
 * An ordered list [node spec](#model.NodeSpec). Has a single
 * attribute, `order`, which determines the number at which the list
 * starts counting, and defaults to 1. Represented as an `<ol>`
 * element.
 */
export const orderedList: NodeSpec = {
  attrs: {order: {default: 1}},
  parseDOM: [{
    tag: "ol",
    getAttrs(someDom) {
      const dom = someDom as HTMLElement
      let startAttr = dom.getAttribute("start")
      return {order: dom.hasAttribute("start") ? +startAttr : 1}
    }
  }],
  toDOM(node): DOMOutputSpec {
    return node.attrs.order == 1 ? olDOM : ["ol", {start: node.attrs.order}, 0]
  }
}
