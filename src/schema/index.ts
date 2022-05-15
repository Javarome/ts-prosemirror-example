import {Schema} from "prosemirror-model"
import {nodes} from "./node"
import {marks} from "./mark"

/**
 * This schema roughly corresponds to the document schema used by
 * [CommonMark](http://commonmark.org/), minus the list elements,
 * which are defined in the [`prosemirror-schema-list`](#schema-list)
 * module.
 *
 * To reuse elements from this schema, extend or read from its
 * `spec.nodes` and `spec.marks` [properties](#model.Schema.spec).
 */
export const schema = new Schema({nodes, marks})
