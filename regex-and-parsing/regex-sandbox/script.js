const regexPatternInput = document.getElementById('pattern');
const testStringInput = document.getElementById('test-string');
const testButton = document.getElementById('test-btn');
const resultMessage = document.getElementById('result');
const caseInsensitiveFlag = document.getElementById('i');
const globalFlag = document.getElementById('g');

/**
 * Builds the selected regex flags string based on
 * the current checkbox state.
 *
 * @returns {string} The regex flags selected by the user.
 */
function getFlags() {
  let flags = '';

  if (caseInsensitiveFlag.checked) {
    flags += 'i';
  }

  if (globalFlag.checked) {
    flags += 'g';
  }

  return flags;
}

/**
 * Tests the user-defined regular expression against the
 * provided input string and displays the match results.
 */
function testRegex() {
  const pattern = regexPatternInput.value;
  const testString = testStringInput.value;

  if (pattern === '' || testString === '') {
    alert('Please enter both a regex pattern and a test string.');
    return;
  }

  try {
    const regex = new RegExp(pattern, getFlags());
    const matches = testString.match(regex);

    resultMessage.textContent = matches ? matches.join(', ') : 'No match';
  } catch {
    resultMessage.textContent = 'Invalid regular expression';
  }
}

testButton.addEventListener('click', testRegex);
