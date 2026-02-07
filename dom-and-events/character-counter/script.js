const charEl = document.getElementById('char-count');
const textEl = document.getElementById('text-input');
const MAX = 50;

// Set the textarea and paragraph HTML attributes
textEl.maxLength = MAX;
textEl.placeholder = 'Type something...';
textEl.rows = 5;
textEl.cols = 33;
charEl.textContent = `Character Count: 0/${MAX}`;

textEl.addEventListener('input', updateCount);

/**
 * Updates the character counter UI based on the current textarea value.
 * Enforces the max length defensively (covers paste and programmatic value updates)
 * and toggles a "full" visual state when the max is reached.
 *
 * @returns {void}
 */
function updateCount() {
  // Enforce max length in JS (covers paste + programmatic value changes)
  if (textEl.value.length > MAX) {
    textEl.value = textEl.value.slice(0, MAX);
  }

  const currCount = textEl.value.length;

  // Toggle styling based on limit reached
  const isFull = currCount >= MAX;
  textEl.classList.toggle('full-text', isFull);
  charEl.classList.toggle('full-text', isFull);

  // Update display
  charEl.textContent = `Character Count: ${currCount}/${MAX}`;
}
