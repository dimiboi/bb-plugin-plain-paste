# plain-paste-command Specification

## Purpose

Gives bb users a paste-as-plain-text action for the message box, so text copied from Office apps can be pasted without the image those apps put on the clipboard.

## Requirements

### Requirement: Paste as plain text command
The plugin SHALL provide a "Paste as plain text" command for the message box, bound by default to ⇧⌘V, listed in bb's command palette and Settings → Keyboard, and rebindable there.

#### Scenario: Shortcut inserts clipboard text
- **WHEN** the caret is in a message box and the user presses ⇧⌘V while the clipboard holds text
- **THEN** the clipboard text is inserted at the caret

#### Scenario: Command listed
- **WHEN** the user opens the command palette or Settings → Keyboard
- **THEN** "Paste as plain text" appears and its shortcut can be changed

### Requirement: No image attachment
The command SHALL insert only the plain text of the clipboard and SHALL NOT attach images or files that are also on the clipboard.

#### Scenario: Office clipboard with text and image
- **WHEN** the clipboard holds text and a PNG copied from PowerPoint and the user presses ⇧⌘V in the message box
- **THEN** the text is inserted and no attachment is added

### Requirement: Selection and line breaks
The command SHALL replace any selected text in the message box with the pasted text and SHALL preserve line breaks of multi-line text.

#### Scenario: Paste over selection
- **WHEN** text is selected in the message box and the user presses ⇧⌘V
- **THEN** the selection is replaced by the clipboard text

#### Scenario: Multi-line text
- **WHEN** the clipboard text contains several lines
- **THEN** the inserted text has the same lines in the same order

### Requirement: Failed or empty clipboard read
If the clipboard cannot be read or holds no text, the command SHALL leave the message box unchanged, SHALL NOT fall back to pasting an image, and SHALL tell the user why.

#### Scenario: Image-only clipboard
- **WHEN** the clipboard holds only an image and the user presses ⇧⌘V
- **THEN** the message box is unchanged and the user sees a notice that there is no text to paste

#### Scenario: Read failure
- **WHEN** reading the clipboard fails
- **THEN** the message box is unchanged and the user sees an error notice

### Requirement: Plain paste unchanged
The plugin SHALL NOT change the behavior of ⌘V.

#### Scenario: Ordinary paste
- **WHEN** the user presses ⌘V with an Office text-and-image clipboard
- **THEN** bb behaves as it does without the plugin

### Requirement: Non-Latin keyboard layouts
⇧⌘V SHALL trigger the command while a non-Latin keyboard layout, including Russian, is active.

#### Scenario: Russian layout
- **WHEN** the Russian layout is active and the user presses the physical V key with ⇧⌘ in a message box
- **THEN** the clipboard text is inserted as on a Latin layout

### Requirement: Message box scope
The command SHALL act only on the message box that holds the caret and SHALL be inactive while a terminal, browser tab or dialog has focus.

#### Scenario: Focus outside the message box
- **WHEN** a terminal has focus and the user presses ⇧⌘V
- **THEN** the plugin does nothing
