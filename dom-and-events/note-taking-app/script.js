const noteEl = document.getElementById('note');
const statusEl = document.getElementById('status');

let currentContent = '';

/**
 * Clears status message when note receives focus.
 * Intent: prevent outdated save confirmation from displaying while user edits content.
 */
function handleNoteFocus() {
  statusEl.textContent = '';
}

/**
 * Saves note content state and updates status when editing finishes.
 * Intent: detect content changes and provide accessible confirmation via aria-live region.
 */
function handleNoteBlur() {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }

  currentContent = newContent;

  statusEl.textContent = 'Note saved successfully!';
}

/**
 * Initializes note state from existing content.
 * Intent: establish baseline content for change detection.
 */
function initializeNoteState() {
  currentContent = noteEl.innerHTML;
}

noteEl.addEventListener('focus', handleNoteFocus);
noteEl.addEventListener('blur', handleNoteBlur);

window.addEventListener('DOMContentLoaded', initializeNoteState);

// ---- Test calls (manual validation) ----
// 1) Click note and edit content; expected: status message clears on focus.
// 2) Click outside note after editing; expected: "Note saved successfully!" appears.
// 3) Click note without editing and blur; expected: no status message appears.
// 4) Reload page; expected: existing content is treated as saved baseline.
// 5) Edit note multiple times; expected: status updates only when content changes.
