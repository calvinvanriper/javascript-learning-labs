// A list of contacts used for profile lookup
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
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
  const firstNameValues = contacts.map(obj => obj.firstName);

  if (!firstNameValues.includes(searchString)) {
    return "No such contact";  // Fail fast contact doesn't exist
  } else {
    const firstNameIndex = firstNameValues.indexOf(searchString);

    if (!contacts[firstNameIndex].hasOwnProperty(searchProp)) {
      return "No such property";  // Fail fast if property doesn't exist
    } else {
      return contacts[firstNameIndex][searchProp];
    }
  }
}

/* --------------------------------------------------
   Test cases (3–5 different results)
-------------------------------------------------- */

console.log("Profile Lookup Tests");
console.log("--------------------------------------------------");

let searchString = "Kristian";
let searchProp = "lastName";
let searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 1: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`);  // Expected: "Vos"
console.log("--------------------------------------------------");

searchString = "Sherlock";
searchProp = "likes";
searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 2: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`);  // Expected: ["Intriguing Cases","Violin"]
console.log("--------------------------------------------------");

searchString = "Harry";
searchProp = "likes";
searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 3: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`);  // Expected: ["Hogwarts","Magic","Hagrid"]
console.log("--------------------------------------------------");

searchString = "Bob";
searchProp = "number";
searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 4: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`); // Expected: "No such contact"
console.log("--------------------------------------------------");

searchString = "Bob";
searchProp = "potato";
searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 5: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`);  // Expected: "No such contact"
console.log("--------------------------------------------------");

searchString = "Akira";
searchProp = "address";
searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 6: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`);  // Expected: "No such property"
console.log("--------------------------------------------------");

searchString = "Akira";
searchProp = "number";
searchResults = lookUpProfile(searchString, searchProp);
console.log(`Test 7: Return ${searchProp} field of ${searchString}: ${JSON.stringify(searchResults)}`);
console.log("--------------------------------------------------");