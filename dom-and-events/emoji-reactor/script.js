/**
 * Increments the displayed count for an emoji button up to a maximum of 10.
 *
 * @param {HTMLButtonElement} buttonEl - The emoji button element that was clicked.
 * Reads the current count from the DOM, applies a guard clause at 10,
 * updates the count display, and applies a visual class when full.
 */
function updateCount(buttonEl) {
  const countEl = buttonEl.querySelector('.count');
  const currCount = +countEl.textContent.split('/')[0];

  if (currCount >= 10) return;

  const newCount = currCount + 1;
  countEl.textContent = `${newCount}/10`;

  if (newCount === 10) {
    buttonEl.classList.add('emoji-full');
  }
}

document.querySelectorAll('.emoji-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => updateCount(e.currentTarget));
});
