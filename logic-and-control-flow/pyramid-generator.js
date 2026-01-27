/**
 * Generates a text-based pyramid using a specified character.
 *
 * @param {string} char - The character used to build the pyramid.
 * @param {number} rows - The number of rows in the pyramid.
 * @param {boolean} direction - If false, builds the pyramid bottom-up.
 *                              If true, builds the pyramid top-down.
 * @returns {string} A formatted string representing the pyramid.
 *
 * @example
 * pyramid("o", 4, false);
 * // →
 * //    o
 * //   ooo
 * //  ooooo
 * // ooooooo
 */
function pyramid(char, rows, direction) {
  let space = ' ';
  let indent = rows;
  let width = 1;
  let result = '';

  for (let i = 0; i < rows; i++) {
    indent -= 1;

    // Build a single row with proper indentation and width
    let row = space.repeat(indent) + char.repeat(width) + '\n';
    width += 2;

    // Append or prepend rows based on pyramid direction
    if (direction) {
      result = row + result;
    } else {
      result += row;
    }
  }

  // FCC requires the pyramid to start and end with a newline
  return '\n' + result;
}

// ---- Test calls (manual validation) ----
console.log(pyramid('o', 4, false));
/* bottom-up pyramid
   o
  ooo
 ooooo
ooooooo
*/
console.log(pyramid('p', 5, true));
/* top-down pyramid
ppppppppp
 ppppppp
  ppppp
   ppp
    p
*/
console.log(pyramid('*', 3, false));
/* small pyramid
 *
 ***
 *****
 */
console.log(pyramid('#', 1, false));
/* single row
#
*/
