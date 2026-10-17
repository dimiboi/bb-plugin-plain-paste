# Manual test checklist

Run after `bb plugin build` and `bb plugin install .`, in bb Desktop on macOS. Use a message box in a thread or the new-thread composer.

| # | Step | Expected |
|---|------|----------|
| 1 | Settings → Keyboard: find "Paste as plain text" | Listed with ⇧⌘V, no conflict notice. If ⇧⌘V is already bound elsewhere, the plugin's binding is unbound; note the clash. |
| 2 | Open the command palette (⇧⌘P) and search "plain" | "Paste as plain text" is listed |
| 3 | Copy text from a PowerPoint slide. In the message box press ⇧⌘V | Only the text is inserted; no attachment |
| 4 | Same clipboard, press ⌘V | Text plus image attachment, as without the plugin |
| 5 | Copy plain text from any app, press ⇧⌘V | The text is inserted |
| 6 | Copy only an image (screenshot to clipboard), press ⇧⌘V | Nothing inserted, no attachment, a notice says there is no text |
| 7 | Copy several lines, press ⇧⌘V | Same lines in the same order, line breaks kept |
| 8 | Select text in the message box, press ⇧⌘V with new text on the clipboard | The selection is replaced |
| 9 | Switch to the Russian layout, repeat steps 3 and 5 (physical V key) | Same results. If nothing happens, see design decision 3 |
| 10 | Focus a terminal or browser tab, press ⇧⌘V | The plugin does nothing |
| 11 | Rebind the command in Settings → Keyboard, press the new shortcut | It works; the old one no longer does |

Record the bb version and the result of each row before a release.
