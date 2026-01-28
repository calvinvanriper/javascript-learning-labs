/**
 * Generates a pseudo-random password string of a specified length using
 * uppercase letters, lowercase letters, numbers, and special characters.
 *
 * @param {number} passLen - Desired length of the password.
 * @returns {string} A randomly generated password string.
 */
function generatePassword(passLen) {
  const passSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let newPassword = [];

  for (let i = 0; i < passLen; i++) {
    const randomNum = Math.floor(Math.random() * passSource.length);

    newPassword.push(passSource[randomNum]);
  }

  return newPassword.join('');
}

// ---- Test calls (manual validation) ----
console.log(`Generated password length (2): ${generatePassword(2)}`);
console.log(`Generated password length (8): ${generatePassword(8)}`);
console.log(`Generated password length (15): ${generatePassword(15)}`);
console.log(`Generated password length (22): ${generatePassword(22)}`);
console.log(`Generated password length (48): ${generatePassword(48)}`);
