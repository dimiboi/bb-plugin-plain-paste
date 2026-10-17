# Plain Paste

A [bb](https://getbb.app) plugin that adds **Paste as plain text** to the message box, bound to ⇧⌘V.

Some apps put an image on the clipboard next to the text they copy, so a normal ⌘V attaches that image to your message. ⇧⌘V inserts only the text.

## Use

1. Put the caret in a bb message box.
2. Press **⇧⌘V**.

The text is inserted at the caret and replaces any selected text. Line breaks are kept. Plain ⌘V works as before.

The command also appears in the command palette ("Paste as plain text") and in Settings → Keyboard, where you can rebind it.

If the clipboard holds no text (for example only an image), or cannot be read, nothing is pasted and a short notice appears.

## Scope

- The message box only. Other text fields already ignore the clipboard image on ⌘V.
- macOS bb Desktop. The key press gives the clipboard read the focus it needs.
- Requires bb 0.46 or later (SDK 0.6.49). The composer command API is marked `experimental_`, so a future bb release may require an update.

## Install

```sh
bb plugin install git:https://github.com/dimiboi/bb-plugin-plain-paste
```

## Develop

```sh
npm install
npm test            # unit tests (node --test)
npm run typecheck
bb plugin build
bb plugin install .
```

`hono` and `@types/better-sqlite3` are dev dependencies only because the SDK's type declarations import them for `tsc`.

Manual checks are listed in [TESTING.md](TESTING.md).

## License

[MIT](LICENSE)
