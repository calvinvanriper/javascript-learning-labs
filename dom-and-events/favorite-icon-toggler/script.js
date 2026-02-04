const favButtons = document.querySelectorAll('.favorite-icon');

/**
 * Toggles the favorite state of a heart button.
 *
 * @param {HTMLButtonElement} button - The button element that was clicked.
 * Adds or removes the "filled" class and switches the heart symbol accordingly.
 */
function toggleFavorite(button) {
  if (button.classList.contains('filled')) {
    button.classList.remove('filled');
    button.innerHTML = '&#9825;';
  } else {
    button.classList.add('filled');
    button.innerHTML = '&#10084;';
  }
}

favButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => toggleFavorite(e.currentTarget));
});
