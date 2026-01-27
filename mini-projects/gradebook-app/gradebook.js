/**
 * Calculates the average of an array of test scores.
 *
 * @param {number[]} testScores - Array of numeric test scores.
 * @returns {number} The average score.
 */
function getAverage(testScores) {
  let totalScore = 0;

  for (let i = 0; i < testScores.length; i++) {
    totalScore += testScores[i];
  }

  return totalScore / testScores.length;
}

/**
 * Converts a numeric score into a letter grade.
 *
 * @param {number} score - A numeric student score (0–100).
 * @returns {string} The letter grade ("A+", "A", "B", "C", "D", or "F").
 */
function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

/**
 * Determines whether a numeric score is a passing grade.
 * Passing is anything other than "F".
 *
 * @param {number} score - A numeric student score (0–100).
 * @returns {boolean} True if passing, false if failing.
 */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/**
 * Generates a student message including class average, student's grade,
 * and whether they passed the course.
 *
 * @param {number[]} studentScores - Array of all student scores for the class.
 * @param {number} individualScore - A numeric student score (0–100).
 * @returns {string} A formatted message about class average and student status.
 */
function studentMsg(studentScores, individualScore) {
  let classAverage = getAverage(studentScores);
  let studentGrade = getGrade(individualScore);
  let passed = hasPassingGrade(individualScore);

  return `Class average: ${classAverage}. Your grade: ${studentGrade}. ${
    passed ? "You passed the course." : "You failed the course."
  }`;
}

// ---- Test calls (manual validation) ----
const classScores = [100, 92, 84, 71, 67, 59];

console.log(getAverage(classScores));     // 78.83333333333333
console.log(getGrade(100));              // "A+"
console.log(getGrade(59));               // "F"
console.log(hasPassingGrade(60));        // true
console.log(studentMsg(classScores, 59)); // Class average: 78.83333333333333. Your grade: F. You failed the course.

