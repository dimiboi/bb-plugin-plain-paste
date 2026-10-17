import assert from "node:assert/strict";
import { test } from "node:test";
import { pasteCommand, pastePlainText } from "./paste.ts";

function run(readText: () => Promise<string>) {
  const inserted: string[] = [];
  const notices: string[] = [];
  return pastePlainText({
    readText,
    insert: (text) => inserted.push(text),
    notify: (message) => notices.push(message),
  }).then(() => ({ inserted, notices }));
}

test("inserts the clipboard text unchanged", async () => {
  const { inserted, notices } = await run(async () => "hello");
  assert.deepEqual(inserted, ["hello"]);
  assert.deepEqual(notices, []);
});

test("keeps line breaks of multi-line text", async () => {
  const text = "line one\nline two\n\nline four";
  const { inserted } = await run(async () => text);
  assert.deepEqual(inserted, [text]);
});

test("empty text (image-only clipboard) inserts nothing and notifies", async () => {
  const { inserted, notices } = await run(async () => "");
  assert.deepEqual(inserted, []);
  assert.equal(notices.length, 1);
});

test("a rejected read inserts nothing and notifies", async () => {
  const { inserted, notices } = await run(() => Promise.reject(new Error("denied")));
  assert.deepEqual(inserted, []);
  assert.equal(notices.length, 1);
});

test("the command is registered as ⇧⌘V \"Paste as plain text\"", () => {
  assert.equal(pasteCommand.id, "paste-plain-text");
  assert.equal(pasteCommand.title, "Paste as plain text");
  assert.deepEqual(pasteCommand.defaultShortcut, { key: "v", mod: true, shift: true });
});
