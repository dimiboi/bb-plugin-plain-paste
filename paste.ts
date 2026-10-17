export const pasteCommand = {
  id: "paste-plain-text",
  title: "Paste as plain text",
  defaultShortcut: { key: "v", mod: true, shift: true },
} as const;

export interface PasteDeps {
  readText: () => Promise<string>;
  insert: (text: string) => void;
  notify: (message: string) => void;
}

// Insert the clipboard's text only. Images on the clipboard are never read, and
// a failed or empty read changes nothing, so no image is ever pasted instead.
export async function pastePlainText({ readText, insert, notify }: PasteDeps) {
  let text: string;
  try {
    text = await readText();
  } catch {
    notify("Could not read the clipboard.");
    return;
  }
  if (!text) {
    notify("The clipboard has no text to paste.");
    return;
  }
  insert(text);
}
