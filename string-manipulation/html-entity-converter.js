/**
 * Converts reserved HTML characters in a string into their corresponding
 * HTML entity representations (&, <, >, ", ').
 *
 * @param {string} sourceString - String that may contain characters requiring HTML escaping.
 * @returns {string} A new string with HTML entities replacing reserved characters.
 */
function convertHTML(sourceString) {
  const symbolArray = ['&', '<', '>', '"', "'"];
  const htmlArray = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];
  let convertedString = '';

  for (let i = 0; i < sourceString.length; i++) {
    const char = sourceString[i];

    if (!symbolArray.includes(char)) {
      convertedString += char;
    } else {
      const symbolIndex = symbolArray.indexOf(char);
      convertedString += htmlArray[symbolIndex];
    }
  }

  return convertedString;
}

// ---- Test calls (manual validation) ----
console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML('Sixty > twelve'));
console.log(convertHTML('Stuff in "quotation marks"'));
