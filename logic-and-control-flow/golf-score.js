const names = ["Hole-in-one!", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

/**
 * Returns a golf score label based on par and strokes.
 *
 * Rules:
 * - Strokes === 1 -> "Hole-in-one!"
 * - Strokes === par - 3 "Albatross"
 * - Strokes === par - 2 -> "Eagle"
 * - Strokes === par - 1 -> "Birdie"
 * - Strokes === par -> "Par"
 * - Strokes === par + 1 -> "Bogey"
 * - Strokes === par + 2 -> "Double Bogey"
 * - Strokes >= par + 3 -> "Go Home!"
 *
 * @param {number} par - The expected number of strokes for the hole.
 * @param {number} strokes - The actual number of strokes taken.
 * @returns {string} The corresponding golf score label.
 */
function golfScore(par, strokes) {
  // Difference from par: negative is under par, positive is over par.
  const score = strokes - par;

  // Cases block
  if (strokes === 1) return names[0];

  if (score === -3) return names[1];
  if (score === -2) return names[2];
  if (score === -1) return names[3];

  if (score === 0) return names[4];

  if (score === 1) return names[5];
  if (score === 2) return names[6];

  return names[7];
}

// ---- Test calls (manual validation) ----
console.log(golfScore(5, 4)); // Birdie
console.log(golfScore(4, 1)); // Hole-in-one!
console.log(golfScore(4, 7)); // Go Home!
console.log(golfScore(5, 2)); // Albatross
console.log(golfScore(3, 3)); // Par
console.log(golfScore(4, 2)); // Eagle
console.log(golfScore(4, 5)); // Bogey