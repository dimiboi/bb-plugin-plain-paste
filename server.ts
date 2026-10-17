import type { BbPluginApi } from "@get-bb/plugin-sdk";

// The manifest requires a server entry; this plugin has no backend.
export default async function plugin(_bb: BbPluginApi) {}
