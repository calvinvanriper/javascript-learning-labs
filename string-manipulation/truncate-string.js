/**
 * Truncate a string if it exceeds the specified length.
 *
 * If the string is longer then `truncLength`,
 * the function returns the shortened string followed by "...".
 * Otherwise, it returns the string unchanged.
 *
 * @param {string} string - The text to be evaluated and truncated if needed
 * @param {number} truncLength - Maximum allowed length before truncation
 * @returns {string} The original or truncated string
 */
function truncateString(string, truncLength) {
  const strLength = string.length;

  // If the string is longer than the allowed length,
  // return the truncated version plus an ellipsis.
  if (strLength > truncLength) {
    return `${string.slice(0,truncLength)}...`;
  }

  // Otherwise return the original string unchanged
  return string;
}

// ---- Test calls ----
const string1 = "A-tisket a-tasket A green and yellow basket";
const string2 = "Peter Piper picked a peck of pickled peppers";
const string3 = "A-tisket a-tasket A green and yellow basket";
const string4 = "A-tisket a-tasket A green and yellow basket";
const string5 = "A-";
const string6 = "Absolutely Longer";

console.log(truncateString(string1,8));
console.log(truncateString(string2,11));
console.log(truncateString(string3,43));
console.log(truncateString(string4,45));
console.log(truncateString(string5,1));
console.log(truncateString(string6,2));
