# Typescript Prosemirror example

This is the Promisemirror [basic example](https://prosemirror.net/examples/basic):
- written in Typescript
- with non-core module embedded instead of being referenced. \
  The goal of this is to see what is done under the hood of those convenient modules and to be able to 
  customize/replace them. So:
  - [`prosemirror-schema-basic`](https://github.com/ProseMirror/prosemirror-schema-basic) is in `schema/` but split 
    between `node/` and `mark/`.
  - [`prosemirror-schema-basic`](https://github.com/ProseMirror/prosemirror-schema-list) is in `schema/list`
  - [`prosemirror-example-setup`](https://github.com/ProseMirror/prosemirror-example-setup) is in `setup/`
