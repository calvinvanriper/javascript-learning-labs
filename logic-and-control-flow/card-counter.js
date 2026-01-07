// Global count value shared across cardCounter calls
let count = 0;

/**
 * Adjust the running card count and return a betting decision
 *
 * Low cards (2-6) increase the count -> good for the player
 * Neutral cards (7-9) do not affect the count
 * High cards (10-A) decrease the count -> good for the house
 *
 * If count > 0 -> "Bet"
 * Otherwise -> "Hold"
 */
function cardCounter(card) {
  const betMsg = "Bet";
  const holdMsg = "Hold";

  // Update running count based on card value
  if (card <= 6) {
    ++count;               // Low card -> increase count
  } else if (card > 6 && card <= 9) {
    count = count + 0;     // Neutral card -> no change (kept for clarity)
  } else if (card > 9 || card == "J" || card == "Q" || card == "K" || card == "A") {
    --count;               // High card -> decrease count
  }

  // Decision message based on running count
  if (count > 0) {
    return `${count} ${betMsg}`;
  } else if (count >= 0) {
    return `${count} ${holdMsg}`;
  }
}

// Sample test calls
console.log(cardCounter(4));
console.log(cardCounter(6));
console.log(cardCounter(10));
console.log(cardCounter(8));
console.log(cardCounter("J"));
console.log(cardCounter("Q"));
