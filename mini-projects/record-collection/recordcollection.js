/**
 * A collection of music records indexed by ID.
 * Each record may contain an album title, artist, and/or a list of tracks.
 */
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

/**
 * Updates the record collection based on the provided rules
 * 
 * Rules:
 * - If value is an empty string, delete the given property from the record.
 * - If prop is not "tracks" and value is not empty, set or update that property.
 * - If prop is "tracks" and the record does not have a tracks property, create the tracks array and add the value.
 * - If prop is "tracks" and the tracks property already exists, add the value to the tracks array.
 * 
 * @param {Object} records - The full record collection object. 
 * @param {number} id - The ID of the record to update. 
 * @param {string} prop - The property to update ("artist", "albumTitle", or "tracks"). 
 * @param {string} value - The value to assign or add. An empty string removes the property. 
 * @returns {Object} The updated record collection. 
 */
function updateRecords(records, id, prop, value) {
  // If the value is an empty string, remove the property from the record
  if(value === "") {
    delete records[id][prop];

  // If the property is not "tracks", set or update the property
  } else if(prop !== "tracks" && value !== "") {
    records[id][prop] = value;

  // If the property is "tracks" and the record does not yet have a tracks list
  } else if(prop === "tracks" && value !== "" && !records[id].hasOwnProperty("tracks")) {
    records[id].tracks = [];

    // Add the track to the newly created tracks list
    if(prop === "tracks" && value !== "") {
    records[id].tracks.push(value);
  }

  // If the property is "tracks" and the tracks list already exists
  } else if(prop === "tracks" && value !== "") {
    records[id].tracks.push(value);
  }

  // Return the updated collection
  return records;

}

/* --------------------------------------------------
   Test cases and output
-------------------------------------------------- */

console.log("Here is the original record collection:");
console.log(JSON.stringify(recordCollection, null, 2));

console.log("--------------------------------------------------");
console.log("Step 1: Set artist on 5439 to ABBA");
updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(JSON.stringify(recordCollection[5439], null, 2));

console.log("--------------------------------------------------");
console.log("Step 2: Create Tracks property on 5439 and add value");
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(JSON.stringify(recordCollection[5439], null, 2));

console.log("--------------------------------------------------");
console.log("Step 3: Remove the artist property from 2548");
updateRecords(recordCollection, 2548, "artist", "");
console.log(JSON.stringify(recordCollection[2548], null, 2));

console.log("--------------------------------------------------");
console.log("Step 4: Add the track Addicted to Love to 1245");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(JSON.stringify(recordCollection[1245], null, 2));

console.log("--------------------------------------------------");
console.log("Step 5: Add the track Free to 2468");
updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(JSON.stringify(recordCollection[2468], null, 2));

console.log("--------------------------------------------------");
console.log("Step 6: Remove the tracks list from 2548");
updateRecords(recordCollection, 2548, "tracks", "");
console.log(JSON.stringify(recordCollection[2548], null, 2));

console.log("--------------------------------------------------");
console.log("Step 7: Add an album title to 1245");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(JSON.stringify(recordCollection[1245], null, 2));

console.log("--------------------------------------------------");
console.log("Here is the final version of the record collection:")
console.log(JSON.stringify(recordCollection, null, 2));