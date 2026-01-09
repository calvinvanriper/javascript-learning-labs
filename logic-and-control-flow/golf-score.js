/**
 * Golf score label names (index aligns to FCC problem requirements).
 * 0: Hole-in-one!
 * 1: Albatross
 * 2: Eagle
 * 3: Birdie
 * 4: Par
 * 5: Bogey
 * 6: Double Bogey
 * 7: Go Home!
 */
const names = [
  "Hole-in-one!",
  "Albatross",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!"
];

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

  // Special case: a single stroke is always a hole-in-one.
  if (strokes === 1) return names[0];

  // Under par cases
  if (score === -3) return names[1]; // Albatross
  if (score === -2) return names[2]; // Eagle
  if (score === -1) return names[3]; // Birdie

  // Even par
  if (score === 0) return names[4]; // Par

  // Over par cases
  if (score === 1) return names[5]; // Bogey
  if (score === 2) return names[6]; // Double Bogey

  // 3+ over par
  return names[7]; // Go Home!
}

// Example quick tests (optional for your repo)
console.log(golfScore(5, 4)); // Birdie
console.log(golfScore(4, 1)); // Hole-in-one!
console.log(golfScore(4, 7)); // Go Home!
console.log(golfScore(5, 2)); // Albatross
console.log(golfScore(3, 3)); // Par
console.log(golfScore(4, 2)); // Eagle
console.log(golfScore(4, 5)); // Bogey
console.log(golfScore(5, 7)); // Double Bogey