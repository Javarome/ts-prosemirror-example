import {DOMOutputSpecArray, MarkSpec} from "prosemirror-model"

const emDOM: DOMOutputSpecArray = ["em", 0]

/**
 * An emphasis mark. Rendered as an `<em>` element.
 * Has parse rules that also match `<i>` and `font-style: italic`.
 */
export const em: MarkSpec = {
  parseDOM: [{tag: "i"}, {tag: "em"}, {style: "font-style=italic"}],
  toDOM() {
    return emDOM
  }
}
