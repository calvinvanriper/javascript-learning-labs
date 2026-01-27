/**
 * Masks the username portion of an email address.
 * Only the first and last character remain visible.
 *
 * Example:
 *   "jsmith@example.com" -> "j****h@example.com"
 *
 * @param {string} email - source email to be masked
 * @returns {string} Masked email address with only the first and last username characters visible.
 */
function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const mask = '*';

  // Extract username + domain portions
  const firstLetter = email.slice(0, 1);
  const lastLetter = email.slice(atIndex - 1, atIndex);
  const domain = email.slice(atIndex);

  // Number of characters to mask
  const maskLength = atIndex - 2;

  // Build masked username
  const masked = `${firstLetter}${mask.repeat(maskLength)}${lastLetter}`;

  return masked + domain;
}

// ---- Test calls (manual validation) ----
console.log(maskEmail('calvin.vanriper.ii@gmail.com')); //"c****************i@gmail.com"
console.log(maskEmail('calvin.s.vanriper.mil@army.mil')); // "c*******************l@army.mil"
console.log(maskEmail('calvin@calvinvanriper.dev')); // "c****n@calvinvanriper.dev"
console.log(maskEmail('abc@gmail.com')); // "a*c@gmail.com"
console.log(maskEmail('ab@yahoo.com')); // "ab@yahoo.com"
