const books = [
  { title: 'The First Confessor', authorName: 'Terry Goodkind', releaseYear: 2012 },
  { title: 'Debt of Bones', authorName: 'Terry Goodkind', releaseYear: 1998 },
  { title: "The Wizard's First Rule", authorName: 'Terry Goodkind', releaseYear: 1994 },
  { title: 'Stone of Tears', authorName: 'Terry Goodkind', releaseYear: 1995 },
  { title: 'Blood of the Fold', authorName: 'Terry Goodkind', releaseYear: 1996 },
  { title: 'Temple of the Winds', authorName: 'Terry Goodkind', releaseYear: 1998 },
  { title: 'Soul of the Fire', authorName: 'Terry Goodkind', releaseYear: 1999 },
  { title: 'Faith of the Fallen', authorName: 'Terry Goodkind', releaseYear: 2000 },
  { title: 'Pillars of Creation', authorName: 'Terry Goodkind', releaseYear: 2001 },
  { title: 'Naked Empire', authorName: 'Terry Goodkind', releaseYear: 2003 },
  { title: 'Chainfire', authorName: 'Terry Goodkind', releaseYear: 2004 },
  { title: 'Phantom', authorName: 'Terry Goodkind', releaseYear: 2006 },
  { title: 'Confessor', authorName: 'Terry Goodkind', releaseYear: 2007 },
  { title: 'The Omen Machine', authorName: 'Terry Goodkind', releaseYear: 2011 },
  { title: 'The Third Kingdom', authorName: 'Terry Goodkind', releaseYear: 2012 },
  { title: 'Severed Souls', authorName: 'Terry Goodkind', releaseYear: 2014 },
  { title: 'Warheart', authorName: 'Terry Goodkind', releaseYear: 2015 },
];
/**
 * Compares two book objects by release year for sorting purposes.
 * Used as a callback for Array.prototype.sort().
 *
 * @param {{ title: string, authorName: string, releaseYear: number}} bookOne - First book to compare.
 * @param {{ title: string, authorName: string, releaseYear: number}} bookTwo - Second book to compare.
 * @returns {number} Negative if bookOne is older, positive if newer, 0 if same year.
 */

function sortByYear(bookOne, bookTwo) {
  const sortResult = bookOne.releaseYear - bookTwo.releaseYear;

  if (sortResult < 0) {
    return -1;
  }
  if (sortResult > 0) {
    return 1;
  }

  return 0;
}

const filteredBooks = books.filter((book) => book.releaseYear <= 2003);

filteredBooks.sort(sortByYear);

// ---- Test calls (manual validation) ----
console.log(filteredBooks.length); // 10
console.log(filteredBooks[0].title); // The Wizard's First Rule
console.log(filteredBooks[filteredBooks.length - 1].title); // Naked Empire
console.log(sortByYear(books[2], books[3])); // -1
console.log(sortByYear({ releaseYear: 2000 }, { releaseYear: 2000 })); // 0
