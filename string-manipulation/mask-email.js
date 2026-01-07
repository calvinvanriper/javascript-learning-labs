/**
 * Masks the username portion of an email address.
 * Only the first and last character remain visible.
 *
 * Example:
 *   "jsmith@example.com" -> "j****h@example.com"
 */
function maskEmail(email) {
  const atIndex = email.indexOf("@");

  // Extract username + domain portions
  const firstLetter = email.slice(0,1);
  const lastLetter = email.slice((atIndex-1),atIndex);
  const domain = email.slice(atIndex);

  // Number of characters to mask
  const maskLength = at-index - 2;

  // Build masked username
  const masked = `${firstLetter}"*".repeat(maskLength)${lastLetter};

  return masked + domain;
  
}

const email = "calvin.vanriper.ii@gmail.com";
console.log(maskEmail(email));
