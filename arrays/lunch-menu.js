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
  console.log(`${item} added to the end of the lunch menu.`);
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
  console.log(`${item} added to the start of the lunch menu.`);
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
    console.log("No lunches to remove.");
    return menu;
  }

  const item = menu.pop();
  console.log(`${item} removed from the end of the lunch menu.`);
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
    console.log("No lunches to remove.");
    return menu;
  }

  const item = menu.shift();
  console.log(`${item} removed from the start of the lunch menu.`);
  return menu;
}

/**
 * Log a randomly selected lunch item from the menu.
 *
 * @param {string[]} menu - The lunch menu array to choose from
 * @returns {void}
 */
function getRandomLunch(menu) {
  if (menu.length === 0) {
    console.log("No lunches available.");
    return menu;
  }

  // Math.floor ensures the index is always between 0 and menu.length - 1
  const randomIndex = Math.floor(Math.random() * menu.length);
  console.log(`Randomly selected lunch: ${menu[randomIndex]}`);
}

/**
 * Display the current lunch menu.
 *
 * @param {string[]} menu - The lunch menu array to display
 * @returns {void}
 */
function showLunchMenu(menu) {
  if (menu.length === 0) {
    console.log("The menu is empty.");
    return menu;
  }

  console.log(`Menu items: ${menu.join(", ")}`);
}

// ---- Test calls / demo sequence ----
removeFirstLunch(lunches);
removeLastLunch(lunches);
console.log(lunches);

addLunchToEnd(lunches, "Tacos");
console.log(lunches);

addLunchToEnd(lunches, "Pizza");
console.log(lunches);

addLunchToEnd(lunches, "Burger");
console.log(lunches);

addLunchToStart(lunches, "Sushi");
console.log(lunches);

removeLastLunch(lunches);
console.log(lunches);

addLunchToEnd(lunches, "Stew");
console.log(lunches);

removeFirstLunch(lunches);
console.log(lunches);

addLunchToStart(lunches, "Soup");
console.log(lunches);

getRandomLunch(lunches);
showLunchMenu(lunches);
