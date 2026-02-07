/**
 * Rock–Paper–Scissors–Lizard–Spock game.
 * Uses DOM buttons as the player input source and a rule map (`beats`) to
 * determine round outcomes and update the UI.
 *
 * Assumptions:
 * - Each option button has class `.btn` and a `value` matching a key in `beats`.
 * - The game ends when either player reaches `WIN_SCORE`.
 */

/**
 * NodeList of all option buttons the player can click (e.g., Rock, Paper, etc.).
 * @type {NodeListOf<HTMLButtonElement>}
 */
const optionButtons = document.querySelectorAll('.btn');

/**
 * Rule map: each key beats the array of options listed as its value.
 * @type {Record<string, string[]>}
 */
const beats = {
  Rock: ['Scissors', 'Lizard'],
  Paper: ['Rock', 'Spock'],
  Scissors: ['Paper', 'Lizard'],
  Lizard: ['Paper', 'Spock'],
  Spock: ['Rock', 'Scissors'],
};

/**
 * List of valid options derived from the buttons and filtered to those that have
 * defined rules in `beats`. This list is used for the computer's random choice.
 * @type {string[]}
 */
const options = Array.from(optionButtons)
  .map((btn) => btn.value)
  .filter((opt) => Boolean(beats[opt]));

/**
 * Player score display element.
 * @type {HTMLSpanElement}
 */
const playerScoreEl = document.getElementById('player-score');

/**
 * Computer score display element.
 * @type {HTMLSpanElement}
 */
const computerScoreEl = document.getElementById('computer-score');

/**
 * Round results message element.
 * @type {HTMLParagraphElement}
 */
const roundResultsMsg = document.getElementById('results-msg');

/**
 * Winner message element shown when the game ends.
 * @type {HTMLParagraphElement}
 */
const winnerMsgElement = document.getElementById('winner-msg');

/**
 * Button used to reset the game.
 * @type {HTMLButtonElement}
 */
const resetGameBtn = document.getElementById('reset-game-btn');

/**
 * Container holding the option buttons. Hidden when the game ends.
 * @type {HTMLElement}
 */
const optionsContainer = document.querySelector('.options-container');

/**
 * Score required to win the game.
 * @type {number}
 */
const WIN_SCORE = 5;

/**
 * Current player score.
 * @type {number}
 */
let playerScore = 0;

/**
 * Current computer score.
 * @type {number}
 */
let computerScore = 0;

/**
 * Validates that each option available to the computer has a corresponding rule
 * entry in `beats`. Logs warnings in the console if anything is missing.
 * Intended as a developer sanity check when adding new options.
 *
 * @returns {void}
 */
function validateRules() {
  options.forEach((opt) => {
    if (!beats[opt]) console.warn(`Missing beats rules for: ${opt}`);
  });
}

validateRules();

/**
 * Returns a random option for the computer from the `options` list.
 *
 * @returns {string} A random option (e.g., "Rock", "Spock").
 */
function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

/**
 * Determines whether the player wins the round based on `beats` rules.
 *
 * @param {string} playerChoice - The player's selected option.
 * @param {string} computerChoice - The computer's selected option.
 * @returns {boolean} True if the player wins; otherwise false.
 */
function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return beats[playerChoice]?.includes(computerChoice) ?? false;
}

/**
 * Computes the result of a round, updates the appropriate score,
 * and returns the human-readable message describing the outcome.
 *
 * @param {string} userOption - The player's selected option.
 * @returns {string} Round result message for display.
 */
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  }

  if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  }

  computerScore++;
  return `Computer wins! ${computerResult} beats ${userOption}`;
}

/**
 * Renders the round outcome to the UI, updates score displays,
 * and ends the game when either participant reaches `WIN_SCORE`.
 * If the game is already over, this function does nothing.
 *
 * @param {string} userOption - The player's selected option.
 * @returns {void}
 */
function showResults(userOption) {
  if (playerScore >= WIN_SCORE || computerScore >= WIN_SCORE) return;

  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreEl.innerText = String(computerScore);
  playerScoreEl.innerText = String(playerScore);

  if (playerScore >= WIN_SCORE || computerScore >= WIN_SCORE) {
    winnerMsgElement.innerText = `${
      playerScore >= WIN_SCORE ? 'Player' : 'Computer'
    } has won the game!`;

    resetGameBtn.style.display = 'block';
    optionsContainer.style.display = 'none';
  }
}

/**
 * Resets game state and UI to the initial values so a new game can be played.
 *
 * @returns {void}
 */
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  computerScoreEl.innerText = '0';
  playerScoreEl.innerText = '0';

  resetGameBtn.style.display = 'none';
  optionsContainer.style.display = 'block';

  winnerMsgElement.innerText = '';
  roundResultsMsg.innerText = '';
}

/**
 * Attaches event listeners to option buttons for gameplay and to the reset button
 * to restart the game.
 *
 * @returns {void}
 */
function bindUIEvents() {
  optionButtons.forEach((button) => {
    button.addEventListener('click', (e) => showResults(e.currentTarget.value));
  });

  resetGameBtn.addEventListener('click', resetGame);
}

bindUIEvents();
