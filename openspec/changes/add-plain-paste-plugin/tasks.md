# Tasks

## 1. Scaffold and manifest

- [x] 1.1 Run `bb plugin new plain-paste` and move the result to the repo root; verify `package.json` name is `bb-plugin-plain-paste` and `bb plugin build` succeeds
- [x] 1.2 Delete scaffold demo slots, sample RPC and unused vendored UI, keeping only what the plugin uses; verify `bb plugin build` still succeeds and `git ls-files` lists no demo files
- [x] 1.3 Set `version` 0.1.0, `engines` `{ "bb": ">=0.46", "bbPluginSdk": ">=0.6.49" }`, a real `bb.description` and `bb.branding`; verify by reading `package.json`

## 2. Paste command

- [x] 2.1 Register the composer command `paste-plain-text` ("Paste as plain text", `defaultShortcut` `{ key: "v", mod: true, shift: true }`) whose `run` reads `navigator.clipboard.readText()` and calls `composer.insert`; verify with a unit test using a fake composer and stubbed clipboard
- [x] 2.2 Handle empty text and read failures with a toast and no insert; verify unit tests for image-only (empty text) and a rejected read
- [x] 2.3 Add unit tests for multi-line text and for the composer receiving the exact text; verify `npm test` passes

## 3. Install and layout check

- [x] 3.1 Install locally with `bb plugin install <path>`, then in Settings → Keyboard confirm ⇧⌘V is bound to the command and not clashing; verify and record the result
- [x] 3.2 On the Russian layout, press ⇧⌘V in the message box with an Office text-and-image clipboard; if it inserts only the text, keep the command; if it does not fire (`key` is "м"), replace the shortcut path with a content-script `keydown` listener matching `event.code === "KeyV"` that calls the same insert, update design.md decision 3, and verify on both layouts
- [x] 3.3 With a multi-line clipboard and with text selected in the message box, run the command; verify line breaks are kept and the selection is replaced, and that plain ⌘V is unchanged

## 4. Docs, license, release readiness

- [x] 4.1 Write `README.md` (what, install via `bb plugin install git:https://github.com/dimiboi/bb-plugin-plain-paste`, shortcut, message-box-only scope); verify the install command is accurate
- [x] 4.2 Write `PLUGIN_OVERVIEW.md` in marketplace style (outcome-first hook, no banned adjectives, states macOS and message-box limits); verify it matches the README claims
- [x] 4.3 Add MIT `LICENSE` (Dmitry Makarov, 2026); verify the file is present
- [x] 4.4 Write `TESTING.md` manual checklist covering every case in the plugin-packaging spec; verify each case has steps and an expected result
- [x] 4.5 Final integration: run `bb plugin build`, `npm test`, walk `TESTING.md` on the installed plugin, confirm a clean `git status`; do not push or tag (the `v0.1.0` tag and push need the owner's explicit approval, and the marketplace PR is a follow-up change)
