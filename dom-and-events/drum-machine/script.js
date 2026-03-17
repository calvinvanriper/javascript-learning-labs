const displayEl = document.getElementById('display');
const drumPadKeys = document.querySelectorAll('.drum-pad');

/**
 * Returns the audio element contained within a drum pad.
 * @param {HTMLElement} pad - The drum pad element.
 * @returns {HTMLAudioElement | null} The child audio element.
 */
function getPadAudio(pad) {
  return pad.querySelector('.clip');
}

/**
 * Updates the display text using the drum pad's data-label value.
 * @param {HTMLElement} pad - The drum pad element.
 */
function updateDisplay(pad) {
  displayEl.textContent = pad.dataset.label;
}

/**
 * Resets and plays a drum pad audio element.
 * @param {HTMLAudioElement} audioEl - The audio element to play.
 */
function playAudioEl(audioEl) {
  audioEl.currentTime = 0;
  audioEl.play();
}

/**
 * Triggers a drum pad by playing its audio and updating the display.
 * @param {HTMLElement} pad - The drum pad element to trigger.
 */
function triggerPad(pad) {
  const audioEl = getPadAudio(pad);

  if (!audioEl) return;

  playAudioEl(audioEl);
  updateDisplay(pad);
}

drumPadKeys.forEach((pad) => {
  pad.addEventListener('click', (event) => {
    const currentPad = event.currentTarget;
    triggerPad(currentPad);
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  const audioEl = document.getElementById(key);

  if (!audioEl) return;

  const pad = audioEl.parentElement;
  triggerPad(pad);
});
