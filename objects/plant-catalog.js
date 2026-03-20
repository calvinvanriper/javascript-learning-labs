// Plant definitions
const ballerina = {
  commonName: 'Spanish lavender',
  scientificName: 'Lavandula stoechas',
  cultivar: 'Ballerina',
};

const prettyPolly = {
  commonName: 'Spanish lavender',
  scientificName: 'Lavandula stoechas',
  cultivar: 'Pretty Polly',
};

const willowVale = {
  commonName: 'Spanish lavender',
  scientificName: 'Lavandula stoechas',
  cultivar: 'Willow Vale',
};

const hidcote = {
  commonName: 'English lavender',
  scientificName: 'Lavandula angustifolia',
  cultivar: 'Hidcote',
};

const imperialGem = {
  commonName: 'English lavender',
  scientificName: 'Lavandula angustifolia',
  cultivar: 'Imperial Gem',
};

const royalCrown = {
  commonName: 'French lavender',
  scientificName: 'Lavandula dentata',
  cultivar: 'Royal Crown',
};

// Catalog maps plant objects to inventory counts by size
const catalog = new Map();

catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

/**
 * Updates the catalog by selling a specified number of plants of a given size.
 * Prevents overselling and validates that the plant exists in the catalog.
 *
 * @param {Object} plant - Plant object used as the key in the catalog Map
 * @param {"small"|"medium"|"large"} size - Size category to sell from
 * @param {number} potsNo - Number of pots to sell
 * @returns {string} Result message indicating success or failure reason
 */
const sellPlants = (plant, size, potsNo) => {
  if (!catalog.has(plant)) return 'Item not found.';

  const name = `${plant.scientificName} '${plant.cultivar}'`;
  const pots = catalog.get(plant);

  if (pots[size] - potsNo < 0) {
    return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left.`;
  }

  pots[size] -= potsNo;
  return 'Catalog successfully updated.';
};

/**
 * Removes a plant from the catalog.
 *
 * @param {Object} plant - Plant object to remove
 * @returns {boolean} True if removed, false if not found
 */
const removePlant = (plant) => catalog.delete(plant);

/**
 * Generates a formatted string representing the current catalog inventory.
 *
 * @returns {string} Multiline string of plant inventory counts
 */
const displayCatalog = () => {
  let catalogString = '';

  catalog.forEach((val, key) => {
    catalogString += `${key.scientificName} '${key.cultivar}': ${val.small} S, ${val.medium} M, ${val.large} L\n`;
  });

  return catalogString;
};

/**
 * Returns a Set of unique plant common names from the catalog.
 *
 * @returns {Set<string>} Set of unique common names
 */
const displayPlantsSet = () => {
  const commonNameArray = [];

  catalog.forEach((val, key) => {
    commonNameArray.push(key.commonName);
  });

  return new Set(commonNameArray);
};

// ---- Test calls (manual validation) ----

// Test 1: Successful sale
console.log(sellPlants(ballerina, 'small', 5));
// Expected: "Catalog successfully updated."

// Test 2: Attempt to oversell
console.log(sellPlants(willowVale, 'large', 1));
// Expected: "Not enough large size pots for Lavandula stoechas 'Willow Vale'. Only 0 left."

// Test 3: Remove plant
console.log(removePlant(royalCrown));
// Expected: true

// Test 4: Display catalog
console.log(displayCatalog());
// Expected: Multiline string showing updated inventory

// Test 5: Unique plant types
console.log(displayPlantsSet());
// Expected: Set { "Spanish lavender", "English lavender" }
