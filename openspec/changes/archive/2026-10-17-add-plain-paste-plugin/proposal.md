# Proposal

## Why

In the bb desktop app on macOS, text copied from PowerPoint and other Office apps also puts a PNG on the clipboard. Pasting it into the message box attaches that image next to the text, and bb has no paste-as-plain-text action. Users who only want the text must delete the attachment every time.

## What Changes

- New bb plugin `bb-plugin-plain-paste` (plugin ID `plain-paste`), built from scratch with `bb plugin new` and cleaned of scaffold leftovers.
- Registers a composer command, "Paste as plain text", with default shortcut ⇧⌘V. It reads the clipboard text and inserts it into the message box that holds the caret, replacing any selection, and never attaches clipboard images.
- Plain ⌘V is untouched.
- Works with a non-Latin keyboard layout. If macOS reports a non-Latin `key` for ⇧⌘V (checked on the Russian layout), the command is switched to a content-script `keydown` listener matching `event.code === "KeyV"`.
- Scope is the message box only. Other text fields already ignore the clipboard image on ⌘V, so they are out of scope.
- Repo deliverables: README, `PLUGIN_OVERVIEW.md`, MIT license (Dmitry Makarov), manual test checklist, `engines` of `{ "bb": ">=0.46", "bbPluginSdk": ">=0.6.49" }`, ready for semver tags (first `v0.1.0`) from the public GitHub repo `dimiboi/bb-plugin-plain-paste`.
- Out of scope: pushing or tagging (needs explicit approval at release time) and the `get-bb/marketplace` submission PR (follow-up change).

## Capabilities

### New Capabilities
- `plain-paste-command`: the ⇧⌘V "Paste as plain text" composer command, its clipboard-read and insert behavior, failure handling, and keyboard-layout independence.
- `plugin-packaging`: repository contents and release readiness (clean scaffold, docs, license, checklist, engines, semver tag convention).

### Modified Capabilities

## Impact

- New plugin source in this repo (previously empty apart from OpenSpec files); no existing code changes.
- Depends on bb 0.46+ and `@get-bb/plugin-sdk` 0.6.49+, including the `experimental_` composer command API, which may change in later bb releases.
- Uses `navigator.clipboard.readText()` in bb Desktop (verified to work on a key press without a prompt).
