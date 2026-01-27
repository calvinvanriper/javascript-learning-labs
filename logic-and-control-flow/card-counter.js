// Global count value shared across cardCounter calls
let count = 0;

/**
 * Adjust the running card count based on the card value and
 * returns a betting recommendation
 *
 * Low cards (2-6) increase the count -> good for the player
 * Neutral cards (7-9) do not affect the count
 * High cards (10-A) decrease the count -> good for the house
 *
 * If count > 0 -> "Bet"
 * Otherwise -> "Hold"
 * 
 * @param {number|string} card - The card value drawn (2-10 or "J", "Q", "K", "A").
 * @returns {string} A string containing the updated count and betting advise (e.g., "1 Bet", "0 Hold").
 */
function cardCounter(card) {
  const betMsg = "Bet";
  const holdMsg = "Hold";

  // Update running count based on card value
  if (card <= 6) {
    ++count;               
  } else if (card > 6 && card <= 9) {
    // Neutral cards intentionally cause no change
    count = count + 0;     
  } else if (card > 9 || card == "J" || card == "Q" || card == "K" || card == "A") {
    --count;               
  }

  if (count > 0) {
    return `${count} ${betMsg}`;
  } else {
    return `${count} ${holdMsg}`;
  }
}

// ---- Test calls (manual validation) ----
console.log(cardCounter(4));    // "1 Bet"
console.log(cardCounter(6));    // "2 Bet"
console.log(cardCounter(10));   // "1 Bet"
console.log(cardCounter("J"));  // "0 Hold"
console.log(cardCounter("Q"));  // "-1 Hold"
