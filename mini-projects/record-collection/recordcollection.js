/**
 * A collection of music records indexed by ID.
 * Each record may contain an album title, artist, and/or a list of tracks.
 */
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
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
  if (value === '') {
    delete records[id][prop];
  } else if (prop !== 'tracks') {
    records[id][prop] = value;
  } else {
    if (!records[id].prototype.hasOwnProperty.call('tracks')) {
      records[id].tracks = [];
    }
    records[id].tracks.push(value);
  }

  return records;
}

// ---- Test calls (manual validation) ----
console.log(JSON.stringify(recordCollection[5439], null, 2)); // initial 5439 (no artist/tracks)

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(JSON.stringify(recordCollection[5439], null, 2)); // artist added

updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
console.log(JSON.stringify(recordCollection[5439], null, 2)); // tracks created + 1 item

updateRecords(recordCollection, 5439, 'tracks', 'Dancing Queen');
console.log(JSON.stringify(recordCollection[5439], null, 2)); // tracks now has 2 items

updateRecords(recordCollection, 5439, 'artist', '');
console.log(JSON.stringify(recordCollection[5439], null, 2)); // artist removed
