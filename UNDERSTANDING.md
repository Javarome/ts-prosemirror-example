# Understanding Prosemirror

Prosemirror is not an editor but a toolkit to build one.
So it is quite low level, but also quite powerful, provided you understand its API.

## Schema

The Prosemirror API will constantly check requested actions against the **schema** you provided.

That schema defines Prosemirror nodes':

- name
- content: an Regex-like expression that will allow `ContentMatch`es
