import {MarkSpec} from "prosemirror-model"

import {link} from "./link"
import {em} from "./em"
import {strong} from "./strong"
import {code} from "./code"


/**
 * [Specs](#model.MarkSpec) for the marks in the schema.
 */
export const marks: { [markName: string]: MarkSpec } = {link, em, strong, code}
