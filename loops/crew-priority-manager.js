const squad = [];

const firstAstronaut = {
  id: 1,
  name: 'Andy',
  role: 'Commander',
  isEVAEligible: true,
  priority: 3,
};

const remainingCrew = [
  { id: 2, name: 'Bart', role: 'Pilot', isEVAEligible: false, priority: 8 },
  { id: 3, name: 'Caroline', role: 'Engineer', isEVAEligible: true, priority: 4 },
  { id: 4, name: 'Diego', role: 'Scientist', isEVAEligible: false, priority: 1 },
  { id: 5, name: 'Elise', role: 'Medic', isEVAEligible: true, priority: 7 },
  { id: 6, name: 'Felix', role: 'Navigator', isEVAEligible: true, priority: 6 },
  { id: 7, name: 'Gertrude', role: 'Communications', isEVAEligible: false, priority: 4 },
  { id: 8, name: 'Hank', role: 'Mechanic', isEVAEligible: true, priority: 2 },
  { id: 9, name: 'Irene', role: 'Specialist', isEVAEligible: true, priority: 5 },
  { id: 10, name: 'Joan', role: 'Technician', isEVAEligible: false, priority: 1 },
];

/**
 * Adds an astronaut to the crew if the id is unique.
 * @param {Array<Object>} crew - The target crew array.
 * @param {Object} astronaut - The astronaut to add.
 * @returns {boolean} True if added successfully, otherwise false.
 */
function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      return false;
    }
  }

  crew.push(astronaut);
  return true;
}

addCrewMember(squad, firstAstronaut);

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

/**
 * Returns a new crew array with two members swapped by index.
 * @param {Array<Object>} crew - The crew array to copy and swap.
 * @param {number} fromIndex - The starting index.
 * @param {number} toIndex - The target index.
 * @returns {Array<Object> | null} A swapped copy of the crew, or null if indices are invalid.
 */
function swapCrewMembers(crew, fromIndex, toIndex) {
  if (fromIndex < 0 || toIndex < 0 || fromIndex >= crew.length || toIndex >= crew.length) {
    return null;
  }

  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew;
}

/**
 * Sorts a crew array in place by priority from highest to lowest.
 * @param {Array<Object>} crew - The crew array to sort.
 */
function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

/**
 * Returns EVA-eligible crew members sorted by descending priority.
 * @param {Array<Object>} crew - The full crew array.
 * @returns {Array<Object>} Sorted array of EVA-eligible crew members.
 */
function getEVAReadyCrew(crew) {
  const eligible = [];

  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) {
      eligible.push(astronaut);
    }
  }

  sortByPriorityDescending(eligible);
  return eligible;
}

/**
 * Splits a crew array into smaller groups of a given size.
 * @param {Array<Object>} crew - The crew array to chunk.
 * @param {number} size - The size of each chunk.
 * @returns {Array<Array<Object>> | null} Chunked crew groups, or null if size is invalid.
 */
function chunkCrew(crew, size) {
  if (size < 1) {
    return null;
  }

  const chunks = [];

  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

/**
 * Returns astronaut names sorted by descending priority.
 * @param {Array<Object>} crew - The crew array to summarize.
 * @returns {Array<string>} Sorted astronaut names.
 */
function printCrewSummary(crew) {
  const sorted = crew.slice();
  const names = [];

  sortByPriorityDescending(sorted);

  for (const astronaut of sorted) {
    names.push(astronaut.name);
  }

  return names;
}

const updatedSquad = swapCrewMembers(squad, 2, 5);
const evaReadySquad = updatedSquad ? getEVAReadyCrew(updatedSquad) : [];
const evaChunks = chunkCrew(evaReadySquad, 3);

// ---- Test calls (manual validation) ----
console.log(addCrewMember([], firstAstronaut)); // true
console.log(addCrewMember([{ id: 1, name: 'Andy' }], firstAstronaut)); // false
console.log(swapCrewMembers(squad, 2, 5)?.map((member) => member.name)); // swapped crew order
console.log(evaReadySquad.map((member) => member.name)); // EVA crew sorted by priority
console.log(evaChunks); // EVA crew split into groups of 3
console.log(printCrewSummary(updatedSquad || [])); // names sorted by descending priority
