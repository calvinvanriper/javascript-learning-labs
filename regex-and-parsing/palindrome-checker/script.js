const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultMessage = document.getElementById('result');

/**
 * Determines whether a given string is a palindrome.
 *
 * The function normalizes the input by converting it to lowercase
 * and removing all non-alphanumeric characters before comparing
 * the string with its reversed form.
 *
 * @param {string} msg - The string to evaluate.
 * @returns {boolean} True if the string is a palindrome.
 */
function isPalindrome(msg) {
  const cleaned = msg.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

/**
 * Handles palindrome validation when the user interacts
 * with the check button.
 */
function checkPalindrome() {
  const message = textInput.value;

  if (message === '') {
    alert('Please input a value.');
    return;
  }

  resultMessage.textContent = isPalindrome(message)
    ? `${message} is a palindrome.`
    : `${message} is not a palindrome.`;

  textInput.value = '';
  textInput.focus();
}

// Event listeners
checkButton.addEventListener('click', checkPalindrome);

checkButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkPalindrome();
  }
});
