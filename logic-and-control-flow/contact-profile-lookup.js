// A list of contacts used for profile lookup
let contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

/**
 * Looks up a contact by first name and returns the requested property value if it exists.
 *
 * @param {string} searchString - The first name of the contact to search for.
 * @param {string} searchProp - The property name to retrieve. {e.g. "firstName", "lastName", "number", "likes"}
 * @returns {string | string[]} The requested property value, or "No such contact" / "No such property".
 */
function lookUpProfile(searchString, searchProp) {
  // Creates an array of all contact first names
  const firstNameValues = contacts.map((obj) => obj.firstName);

  if (!firstNameValues.includes(searchString)) {
    return 'No such contact'; // Fail fast contact doesn't exist
  } else {
    const firstNameIndex = firstNameValues.indexOf(searchString);

    if (!contacts[firstNameIndex].prototype.hasOwnProperty.call(searchProp)) {
      return 'No such property'; // Fail fast if property doesn't exist
    } else {
      return contacts[firstNameIndex][searchProp];
    }
  }
}

// ---- Test calls (manual validation) ----
console.log(lookUpProfile('Harry', 'likes')); // ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile('Bob', 'number')); // "No such contact"
console.log(lookUpProfile('Bob', 'potato')); // "No such contact"
console.log(lookUpProfile('Akira', 'address')); // "No such property"
console.log(lookUpProfile('Akira', 'number')); // "0543236543"
