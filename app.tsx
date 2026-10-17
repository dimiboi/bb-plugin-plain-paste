import { definePluginApp } from "@get-bb/plugin-sdk/app";
import { toast } from "sonner";
import { pasteCommand, pastePlainText } from "./paste";

export default definePluginApp((app) => {
  app.composer.experimental_registerCommand({
    ...pasteCommand,
    run: ({ composer }) =>
      pastePlainText({
        readText: () => navigator.clipboard.readText(),
        insert: (text) => composer.insert(text),
        notify: (message) => toast(message),
      }),
  });
});
