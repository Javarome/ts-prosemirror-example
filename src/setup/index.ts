import {keymap} from "prosemirror-keymap"
import {history} from "prosemirror-history"
import {baseKeymap} from "prosemirror-commands"
import {Plugin} from "prosemirror-state"
import {dropCursor} from "prosemirror-dropcursor"
import {gapCursor} from "prosemirror-gapcursor"
import {menuBar, MenuItem} from "prosemirror-menu"

import {buildMenuItems} from "./menu"
import {buildKeymap} from "./keymap"
import {buildInputRules} from "./inputrules"
import {Schema} from "prosemirror-model"

export {buildMenuItems, buildKeymap, buildInputRules}

// !! This module exports helper functions for deriving a set of basic
// menu items, input rules, or key bindings from a schema. These
// values need to know about the schema for two reasons—they need
// access to specific instances of node and mark types, and they need
// to know which of the node and mark types that they know about are
// actually present in the schema.
//
// The `exampleSetup` plugin ties these together into a plugin that
// will automatically enable this basic functionality in an editor.

interface SetupOptions {
  /**
   *   The schema to generate key bindings and menu items for.
   */
  schema: Schema

  /**
   *   Can be used to [adjust](#example-setup.buildKeymap) the key bindings created.
   */
  mapKeys?: Object

  /**
   *   Set to false to disable the menu bar.
   */
  menuBar?: boolean

  /**
   *   Set to false to disable the history plugin.
   */
  history?: boolean

  /**
   *   Set to false to make the menu bar non-floating.
   */
  floatingMenu?: boolean

  /**
   *   Can be used to override the menu content.
   */
  menuContent?: MenuItem[]
}

/**
 * A convenience plugin that bundles together a simple menu with basic
 * key bindings, input rules, and styling for the example schema.
 * Probably only useful for quickly setting up a passable
 * editor—you'll need more control over your settings in most
 * real-world situations.
 */
export function exampleSetup(options: SetupOptions): Plugin[] {
  const plugins = [
    buildInputRules(options.schema),
    keymap(buildKeymap(options.schema, options.mapKeys)),
    keymap(baseKeymap),
    dropCursor(),
    gapCursor()
  ]
  if (options.menuBar !== false)
    plugins.push(
      menuBar({
        floating: options.floatingMenu !== false,
        content: options.menuContent || buildMenuItems(options.schema).fullMenu
      })
    )
  if (options.history !== false) plugins.push(history())

  return plugins.concat(
    new Plugin({
      props: {
        attributes: {class: "ProseMirror-example-setup-style"}
      }
    })
  )
}
