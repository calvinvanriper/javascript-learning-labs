// A simple array that represents the current lunch menu (mutable state)
let lunches = [];

/**
 * Add a lunch item to the end of the menu.
 *
 * @param {string[]} menu - The lunch menu array to modify
 * @param {string} item - The lunch item to add
 * @returns {string[]} The updated menu
 */
function addLunchToEnd(menu, item) {
  menu.push(item);
  return menu;
}

/**
 * Add a lunch item to the start of the menu.
 *
 * @param {string[]} menu - The lunch menu array to modify
 * @param {string} item - The lunch item to add
 * @returns {string[]} The updated menu
 */
function addLunchToStart(menu, item) {
  menu.unshift(item);
  return menu;
}

/**
 * Remove the last lunch item from the menu (if any).
 *
 * @param {string[]} menu - The lunch menu array to modify
 * @returns {string[]|undefined} The updated menu, or undefined if the menu is empty
 */
function removeLastLunch(menu) {
  if (menu.length === 0) {
    return undefined;
  }

  menu.pop();
  return menu;
}

/**
 * Remove the first lunch item from the menu (if any).
 *
 * @param {string[]} menu - The lunch menu array to modify
 * @returns {string[]|undefined} The updated menu, or undefined if the menu is empty
 */
function removeFirstLunch(menu) {
  if (menu.length === 0) {
    return undefined;
  }

  menu.shift();
  return menu;
}

/**
 * Returns a randomly selected lunch item from the menu.
 *
 * @param {string[]} menu - The lunch menu array to choose from
 * @returns {string|undefined} A random lunch item, or undefined if the menu is empty.
 */
function getRandomLunch(menu) {
  if (menu.length === 0) {
    return undefined;
  }

  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
}

/**
 * Creates a formatted string representing the current lunch menu.
 *
 * @param {string[]} menu - The lunch menu array to display
 * @returns {string} A formatted menu string, or a message if empty.
 */
function showLunchMenu(menu) {
  if (menu.length === 0) {
    return 'The menu is empty.';
  }

  return `Menu items: ${menu.join(', ')}`;
}

// ---- Test calls (manual validation) ----
console.log(removeFirstLunch([])); // undefined
console.log(addLunchToEnd(lunches, 'Tacos')); // ["Tacos"]
console.log(addLunchToStart(lunches, 'Sushi')); // ["Sushi", "Tacos"]
console.log(removeLastLunch(lunches)); // ["Sushi"]
console.log(showLunchMenu(['Soup', 'Pizza'])); // "Menu items: Soup, Pizza"

// Random output note: result should be either "Soup" or "Pizza"
console.log(getRandomLunch(['Soup', 'Pizza'])); // "Soup" OR "Pizza"
