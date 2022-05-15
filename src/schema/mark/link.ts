import {MarkSpec} from "prosemirror-model"


/**
 * A link. Has `href` and `title` attributes.
 * `title` defaults to the empty string.
 * Rendered and parsed as an `<a>` element.
 */
export const link: MarkSpec = {
  attrs: {
    href: {},
    title: {default: null}
  },
  inclusive: false,
  parseDOM: [
    {
      tag: "a[href]",
      getAttrs(someDom) {
        const dom = someDom as Element
        return {
          href: dom.getAttribute("href"),
          title: dom.getAttribute("title")
        }
      }
    }
  ],
  toDOM(node) {
    let {href, title} = node.attrs
    return ["a", {href, title}, 0]
  }
}
