// initial state of the inventory array of objects
let inventory = [
  { name: 'flour', quantity: 20 },
  { name: 'rice', quantity: 5 },
];

/**
 * Accepts a product name, normalizes it, and returns a descriptive message
 * indicating the index of that product in the inventory (case-insensitive).
 *
 * @param {string} findProductName - Name of the product to search for.
 * @returns {string} A message containing the product's index, or -1 if the product is not found.
 */
function findProductIndex(findProductName) {
  const findInventoryNames = inventory.map((item) => item.name);
  findProductName = String(findProductName).toLowerCase();

  if (findInventoryNames.includes(findProductName)) {
    return `${findProductName} has an index of ${findInventoryNames.indexOf(findProductName)}`;
  } else {
    return `${findProductName} was not found and so has an index of -1`;
  }
}

/**
 * Accepts a product object, normalizes the product name, and either updates the
 * quantity of an existing product or adds a new product to the inventory.
 *
 * @param {{ name: string, quantity: number}} addProductObject - Product data to add or update.
 * @returns {string} A message describing the results of the addition operation.
 */
function addProduct(addProductObject) {
  const addProductName = String(addProductObject.name).toLowerCase();
  const addProductQuantity = addProductObject.quantity;
  const addInventoryNames = inventory.map((item) => item.name);
  const addProductIndex = addInventoryNames.indexOf(addProductName);

  if (addInventoryNames.includes(addProductName)) {
    inventory[addProductIndex].quantity += addProductQuantity;
    return `${addProductName} quantity updated; current quantity: ${inventory[addProductIndex].quantity}`;
  } else {
    inventory.push({ name: addProductName, quantity: addProductQuantity });
    return `${addProductName} added to inventory; current quantity: ${addProductQuantity}`;
  }
}

/**
 * Accepts a product name and quantity, normalizes the product name (case-insensitive),
 * and attempts to remove the specified quantity from the inventory.
 *
 * If the product does not exist, a message is returned. If the requested removal
 * quantity exceeds the available stock, the operation is rejected. When the updated
 * wuantity reaches 0, the product is removed from the inventory entirely.
 *
 * @param {string} removeProductName - Name of the product to remove
 * @param {number} removeProductQuantity - Number of items to remove
 * @returns {string} A message describing the results of the removal operation
 */
function removeProduct(removeProductName, removeProductQuantity) {
  removeProductName = String(removeProductName).toLowerCase();
  const removeInventoryNames = inventory.map((item) => item.name);
  const removeProductIndex = removeInventoryNames.indexOf(removeProductName);

  if (removeProductIndex < 0) {
    return `${removeProductName} was not found`;
  }
  if (inventory[removeProductIndex].quantity < removeProductQuantity) {
    return `Not enough ${removeProductName} available, remaining pieces: ${inventory[removeProductIndex].quantity}`;
  }
  if (inventory[removeProductIndex].quantity === removeProductQuantity) {
    inventory = inventory.filter((item) => item.name !== removeProductName);
    return `${removeProductName}'s quantity has reached 0, it has been removed from inventory.`;
  }

  inventory[removeProductIndex].quantity -= removeProductQuantity;
  return `Remaining ${removeProductName} pieces: ${inventory[removeProductIndex].quantity}`;
}

// ---- Test calls (edge cases) ----
console.log(findProductIndex('grain')); // grain was not found and so has an index of -1
console.log(removeProduct('Beans', 10)); // beans was not found
console.log(removeProduct('rice', 15)); // Not enough rice available, remaining pieces: 5

// ---- Test calls (manual validation) ----
console.log(findProductIndex('RiCe')); // rice has an index of 1
console.log(addProduct({ name: 'FLOUR', quantity: 5 })); // flour quantity updated; current quantity: 25
console.log(addProduct({ name: 'GRAIN', quantity: 10 })); // grain added to inventory; current quantity: 10
console.log(removeProduct('flour', 5)); // Remaining flour pieces: 20
console.log(removeProduct('rice', 5)); // rice's quantity has reached 0, it has been removed from inventory.

// ---- Test calls (final inventory dump) ----
console.log(inventory); // [{ name: 'flour', quantity: 20}, { name: 'grain', quantity: 10}]
