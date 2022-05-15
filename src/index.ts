import "./styles.css"
import "./editor.css"
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "./schema"
import {addListNodes} from "./schema/node/list"
import {exampleSetup} from "./setup"

// Mix the nodes from schema/list into the basic schema to create a schema with list support.
const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
  marks: schema.spec.marks
})

let editorSelector = "#editor"
let editorElem = document.querySelector(editorSelector)
if (editorElem) {
  let contentSelector = "#content"
  let contentElem = document.querySelector(contentSelector)
  if (contentElem) {
    var view = new EditorView(editorElem, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(contentElem),
        plugins: exampleSetup({schema: mySchema})
      })
    })
  } else {
    console.error("Could not find ", contentSelector)
  }
} else {
  console.error("Could not find ", editorSelector)
}
