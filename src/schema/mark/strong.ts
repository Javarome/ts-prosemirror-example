import {DOMOutputSpecArray, MarkSpec} from "prosemirror-model"

const strongDOM: DOMOutputSpecArray = ["strong", 0]

/**
 * A strong mark.
 * Rendered as `<strong>`, parse rules also match `<b>` and `font-weight: bold`.
 */
export const strong: MarkSpec = {
  parseDOM: [
    {tag: "strong"},
    // This works around a Google Docs misbehavior where pasted content will be inexplicably wrapped in `<b>`
    // tags with a font-weight normal.
    {
      tag: "b",
      getAttrs: (someNode) => {
        const node = someNode as HTMLElement
        return node.style.fontWeight != "normal" && null
      }
    },
    {
      style: "font-weight",
      getAttrs: (someValue) => {
        const value = someValue as string
        return /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
      }
    }
  ],
  toDOM() {
    return strongDOM
  }
}
