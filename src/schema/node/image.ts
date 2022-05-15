import {NodeSpec} from "prosemirror-model"

/**
 * An inline image (`<img>`) node. Supports `src`, `alt`, and `href` attributes.
 * The latter two default to the empty string.
 */
export const image: NodeSpec = {
  inline: true,
  attrs: {
    src: {},
    alt: {default: null},
    title: {default: null}
  },
  group: "inline",
  draggable: true,
  parseDOM: [
    {
      tag: "img[src]",
      getAttrs(someDom) {
        const dom = someDom as Element
        return {
          src: dom.getAttribute("src"),
          title: dom.getAttribute("title"),
          alt: dom.getAttribute("alt")
        }
      }
    }
  ],
  toDOM(node) {
    let {src, alt, title} = node.attrs
    return ["img", {src, alt, title}]
  }
}
