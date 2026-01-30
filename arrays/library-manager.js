const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

/**
 * Builds a newline-separated list of "title by author" entries for a catalog.
 * @param {Array<{title: string, author: string}>} catalog - The library catalog.
 * @returns {string} Newline-separated book info entries.
 */
function getBookInformation(catalog) {
  return catalog.map((book) => `${book.title} by ${book.author}`).join('\n');
}

/**
 * Builds a newline-separated list of book summary strings for a catalog.
 * @param {Array<{about: string}>} catalog - The library catalog.
 * @returns {string} Newline-separated summaries.
 */
function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join('\n');
}

/**
 * Returns all books whose author field exactly matches the provided author string.
 * @param {Array<{author: string}>} catalog - The library catalog.
 * @param {string} author - Author name to match exactly.
 * @returns {Array} Filtered list of matching books (may be empty).
 */
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

/**
 * Calculates the total number of pages across all books in a catalog.
 * @param {Array<{pages: number}>} catalog - The library catalog.
 * @returns {number} Total page count.
 */
function getTotalPages(catalog) {
  const pagesArray = catalog.map((book) => book.pages);
  return pagesArray.reduce((acc, curr) => acc + curr, 0);
}

// ---- Test calls (manual validation) ----
console.log(getBookInformation(library)); // 8 lines of "title by author"
console.log(getBookSummaries(library)); // 8 lines of summaries (about text)
console.log(getBooksByAuthor(library, 'Arvid Kahl')); // 2 book objects (Embedded Entrepreneur, Zero to Sold)
console.log(getBooksByAuthor(library, 'Nonexistent Author')); // [] (empty array)
console.log(getTotalPages(library)); // 2512
