// Poll data structure mapping options to unique voter IDs
const poll = new Map();

/**
 * Adds a new voting option to the poll.
 *
 * @param {string} option - The option to add
 * @returns {string} Result message indicating success or duplication
 */
function addOption(option) {
  if (!option) return 'Option cannot be empty.';

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  }

  return `Option "${option}" already exists.`;
}

/**
 * Registers a vote for a given option by a voter.
 * Prevents duplicate votes for the same option.
 *
 * @param {string} option - The option being voted for
 * @param {number|string} voterId - Unique identifier for the voter
 * @returns {string} Result message indicating success or failure
 */
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

/**
 * Generates a formatted string showing poll results.
 *
 * @returns {string} Multiline string of vote counts per option
 */
function displayResults() {
  let result = 'Poll Results:\n';

  for (const [option, voters] of poll) {
    result += `${option}: ${voters.size} votes\n`;
  }

  return result.trim();
}

// ---- Test calls (manual validation) ----

// Test 1: Add options
console.log(addOption('Turkey'));
// Expected: Option "Turkey" added to the poll.

console.log(addOption('Morocco'));
// Expected: Option "Morocco" added to the poll.

console.log(addOption('Japan'));
// Expected: Option "Japan" added to the poll.

// Test 2: Duplicate option
console.log(addOption('Turkey'));
// Expected: Option "Turkey" already exists.

// Test 3: Voting
console.log(vote('Turkey', 1));
// Expected: Voter 1 voted for "Turkey".

console.log(vote('Turkey', 2));
// Expected: Voter 2 voted for "Turkey".

console.log(vote('Morocco', 3));
// Expected: Voter 3 voted for "Morocco".

// Test 4: Duplicate vote
console.log(vote('Turkey', 1));
// Expected: Voter 1 has already voted for "Turkey".

// Test 5: Invalid option
console.log(vote('Spain', 4));
// Expected: Option "Spain" does not exist.

// Test 6: Display results
console.log(displayResults());
// Expected:
// Poll Results:
// Turkey: 2 votes
// Morocco: 1 votes
// Japan: 0 votes
