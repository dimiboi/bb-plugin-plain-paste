# plugin-packaging Specification

## Purpose

Defines what the repository must contain so the plugin can be released with semver tags and later submitted to the bb community marketplace.

## Requirements

### Requirement: Clean plugin package
The repository SHALL contain a buildable bb plugin named `bb-plugin-plain-paste` (plugin ID `plain-paste`) with no scaffold demo code, sample slots or unused vendored files, and `bb plugin build` SHALL succeed.

#### Scenario: Build
- **WHEN** `bb plugin build` runs in the plugin directory
- **THEN** it succeeds and produces the declared bundles

#### Scenario: No scaffold leftovers
- **WHEN** the source tree is reviewed
- **THEN** it holds only code the plugin uses

### Requirement: Compatibility declaration
`package.json` SHALL declare `engines` of `{ "bb": ">=0.46", "bbPluginSdk": ">=0.6.49" }`, a real `bb.description` and `bb.branding`, and a semver `version` starting at `0.1.0`.

#### Scenario: Manifest check
- **WHEN** `package.json` is read
- **THEN** the engines, description, branding and version are present as stated

### Requirement: Documentation and license
The repository SHALL include a README, a `PLUGIN_OVERVIEW.md` that states the same claim as the marketplace description at greater length, an MIT `LICENSE` held by Dmitry Makarov, and a manual test checklist. These documents SHALL state that the plugin covers the message box only.

#### Scenario: Files present
- **WHEN** the repository root is listed
- **THEN** README.md, PLUGIN_OVERVIEW.md, LICENSE and the checklist exist

### Requirement: Manual test checklist coverage
The checklist SHALL cover: Office text-and-image paste, text-only clipboard, image-only clipboard, multi-line text, paste over selection, ⇧⌘V on a Russian layout, plain ⌘V unchanged, the command in the palette and Settings → Keyboard, and any existing ⇧⌘V binding.

#### Scenario: Checklist items
- **WHEN** the checklist is read
- **THEN** each listed case appears as a step with an expected result

### Requirement: Release readiness
The repository SHALL be releasable from the public GitHub repo `dimiboi/bb-plugin-plain-paste` with annotated tags of the form `vX.Y.Z`, and no commit or tag SHALL be pushed without explicit approval from the repository owner.

#### Scenario: Tag convention
- **WHEN** the first release is prepared
- **THEN** the tag is `v0.1.0` and is pushed only after the owner approves
