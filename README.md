# Typescript Prosemirror example

This is the Promisemirror [basic example](https://prosemirror.net/examples/basic):
- written in Typescript
- with non-core module embedded instead of being referenced.
  In accordance with the educational purpose of those modules,
  this allows to more easily see and understand what those modules are doing
  and to customize/replace them. So:
  - [`prosemirror-schema-basic`](https://github.com/ProseMirror/prosemirror-schema-basic) is in `src/schema/` but split
    between `node/` and `mark/`.
  - [`prosemirror-schema-list`](https://github.com/ProseMirror/prosemirror-schema-list) is in `src/schema/node/list`
  - [`prosemirror-example-setup`](https://github.com/ProseMirror/prosemirror-example-setup) is in `src/setup/`

See [Understanding ProseMirror](UNDERSTANDING.md) for more information.
