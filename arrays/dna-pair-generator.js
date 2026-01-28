/**
 * Accepts a string of DNA bases (A, T, C, G), normalizes the input to uppercase,
 * and returns a two-dimensional array where each base is paired with its
 * complementary base (A ↔ T, C ↔ G).
 *
 * @param {string} dnaString - String of DNA bases (case-insensitive).
 * @returns {Array,[string, string]>} An array of base-pair arrays.
 */
function pairElement(dnaString) {
  let dnaArray = [];
  dnaString = String(dnaString).toUpperCase();

  for (let i = 0; i < dnaString.length; i++) {
    let dnaPair = [];
    dnaPair.push(dnaString[i]);
    if (dnaString[i] === 'A') {
      dnaPair.push('T');
      dnaArray.push(dnaPair);
      continue;
    } else if (dnaString[i] === 'T') {
      dnaPair.push('A');
      dnaArray.push(dnaPair);
      continue;
    } else if (dnaString[i] === 'C') {
      dnaPair.push('G');
      dnaArray.push(dnaPair);
      continue;
    } else if (dnaString[i] === 'G') {
      dnaPair.push('C');
      dnaArray.push(dnaPair);
      continue;
    }
  }
  return dnaArray;
}

// ---- Test calls (manual validation) ----
console.log(pairElement('ATCGA')); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement('TTGAG')); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement('CTCTA')); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
console.log(pairElement()); // []
console.log(pairElement('atcat')); // [['A','T'],['T','A'],['C','G'],['A','T'],['T','A']]
