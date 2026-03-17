const currentDate = new Date();

/**
 * Formats a date as MM/DD/YYYY using US locale.
 * @param {Date} date - The date to format.
 * @returns {string} Formatted date string.
 */
function formatDateMMDDYYYY(date) {
  return date.toLocaleDateString('en-US');
}

/**
 * Formats a date as "Month Day, Year".
 * @param {Date} date - The date to format.
 * @returns {string} Formatted long date string.
 */
function formatDateLong(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}

// ---- Test calls (manual validation) ----
console.log(currentDate); // current date object
console.log(formatDateMMDDYYYY(currentDate)); // e.g. 03/17/2026
console.log(formatDateLong(currentDate)); // e.g. March 17, 2026
