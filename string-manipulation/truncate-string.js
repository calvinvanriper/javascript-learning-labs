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

// ---- Test calls (manual validation) ----
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));   // "A-tisket..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 42))   // "A-tisket a-tasket A green and yellow baske..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 45));  // "A-tisket a-tasket A green and yellow basket"
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));  // "A=tisket a-..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 1));   // "A..."
