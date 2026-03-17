const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');

let isError = false;

/**
 * Removes plus signs, minus signs, and whitespace from an input string.
 * @param {string} str - The input string to clean.
 * @returns {string} The cleaned string.
 */
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

/**
 * Checks whether an input uses scientific notation, which is considered invalid.
 * @param {string} str - The input string to validate.
 * @returns {RegExpMatchArray | null} The regex match if invalid, otherwise null.
 */
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

/**
 * Adds a new name/calorie entry pair to the selected meal or exercise section.
 */
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;

  const htmlString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input
      type="text"
      id="${entryDropdown.value}-${entryNumber}-name"
      placeholder="Name"
    />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />
  `;

  targetInputContainer.insertAdjacentHTML('beforeend', htmlString);
}

/**
 * Calculates the total calories for a list of numeric inputs.
 * Sets the global error flag if invalid input is found.
 * @param {NodeList|Array<HTMLInputElement>} list - The calorie input elements.
 * @returns {number | null} The total calories, or null if invalid input is found.
 */
function getCaloriesFromInputs(list) {
  let calories = 0;

  for (const item of list) {
    const currentValue = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currentValue);

    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }

    calories += Number(currentValue);
  }

  return calories;
}

/**
 * Calculates consumed, burned, and remaining calories and displays the result.
 * @param {SubmitEvent} event - The form submission event.
 */
function calculateCalories(event) {
  event.preventDefault();
  isError = false;

  const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type="number"]');
  const lunchNumberInputs = document.querySelectorAll('#lunch input[type="number"]');
  const dinnerNumberInputs = document.querySelectorAll('#dinner input[type="number"]');
  const snacksNumberInputs = document.querySelectorAll('#snacks input[type="number"]');
  const exerciseNumberInputs = document.querySelectorAll('#exercise input[type="number"]');

  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

  if (isError) {
    return;
  }

  const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
  const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
  const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';

  output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">
      ${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}
    </span>
    <hr>
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
  `;

  output.classList.remove('hide');
}

/**
 * Clears all dynamically added entries and resets the form output.
 */
function clearForm() {
  const inputContainers = Array.from(document.querySelectorAll('.input-container'));

  for (const container of inputContainers) {
    container.innerHTML = '';
  }

  calorieCounter.reset();
  output.innerText = '';
  output.classList.add('hide');
}

addEntryButton.addEventListener('click', addEntry);
calorieCounter.addEventListener('submit', calculateCalories);
clearButton.addEventListener('click', clearForm);
