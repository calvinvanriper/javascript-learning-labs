/**
 * @typedef {object} questionItem
 * @property {string} category - The topic area (e.g., "Science", "History").
 * @property {string} question - The question text.
 * @property {string[]} choices - List of answer choices.
 * @property {string} answer - The correct answer (must match one of the choices).

 * Collection of quiz questions.
 * Keeping this as an array makes it easy to pick a random question,
 * filter by category or expand question bank later
 * @type {questionItem[]}
 */
const questions = [];

/** @type {questionItem} */
const questionItem1 = {
  category: "Geography",
  question: "What is the largest continent on Earth by land area?",
  choices: ["North America", "Europe", "Asia", "Antarctica"],
  answer: "Asia"
};

/** @type {questionItem} */
const questionItem2 = {
  category: "Science",
  question: "What planet is known as the Red Planet?",
  choices: ["Mars", "Saturn", "Jupiter", "Uranus"],
  answer: "Mars"
};

/** @type {questionItem} */
const questionItem3 = {
  category: "History",
  question: "In which year did the United States declare independence?",
  choices: ["1776", "1812", "1492", "1865"],
  answer: "1776"
};

/** @type {questionItem} */
const questionItem4 = {
  category: "Literature",
  question: "Who wrote the play Romeo and Juliet?",
  choices: ["Mark Twain", "Charles Dickens", "Jane Austen", "William Shakespeare"],
  answer: "William Shakespeare"
};

/** @type {questionItem} */
const questionItem5 = {
  category: "General Knowledge",
  question: "How many sides does a standard hexagon have?",
  choices: ["5", "6", "7", "8"],
  answer: "6"
};

// Seed the question bank (easy to add more later)
questions.push(
    questionItem1,
    questionItem2,
    questionItem3,
    questionItem4,
    questionItem5
);

/**
 * Returns a random question from the provided array.
 * Uses the array length so it scales as you add/remove questions.
 * 
 * @param {questionItem[]} questionBank - Array of questions to choose from.
 * @returns {questionItem} One randomly selected question. 
 */
function getRandomQuestion(questionBank) {
  const randomNum = Math.floor(Math.random() * questionBank.length);
  return questionBank[randomNum];
}

/**
 * Returns a random answer choice from the provided choices array.
 * Uses the array length so it supports any number of choices.
 * 
 * @param {string[]} choices - The list of possible choices. 
 * @returns {string} One randomly selected choice.
 */
function getRandomComputerChoice(choices) {
  const randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

/**
 * Evaluates whether the computer's choice matches the correct answer.
 * 
 * @param {questionItem} question - The question being answered. 
 * @param {string} computerChoice - The choice selected by the computer.
 * @returns {string} Human-readable result message.
 */
function getResults(question, computerChoice) {
  const correctAnswer = question.answer;
  if (computerChoice === correctAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${correctAnswer}` 
  }
}

// ---- Test calls (manual validation) ----

// Deterministic validation (no randomness)
const testQuestion = {
  category: "Test",
  question: "Test question?",
  choices: ["A", "B"],
  answer: "A"
};

console.log(getResults(testQuestion, "A")); // "The computer's choice is correct!"
console.log(getResults(testQuestion, "B")); // "The computer's choice is wrong. The correct answer is: A"

// Random behavior validation (invariants, not exact values)
const randomQ = getRandomQuestion(questions);
console.log(randomQ.choices.includes(randomQ.answer)); // true

const randomChoice = getRandomComputerChoice(randomQ.choices);
console.log(randomQ.choices.includes(randomChoice)); // true
console.log(getResults(randomQ, randomChoice)); // Either "correct!" OR "wrong..."
