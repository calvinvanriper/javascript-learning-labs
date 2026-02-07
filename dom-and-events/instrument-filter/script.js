const instrumentsArr = [
  { category: 'woodwinds', instrument: 'Flute', price: 500 },
  { category: 'woodwinds', instrument: 'Clarinet', price: 200 },
  { category: 'woodwinds', instrument: 'Oboe', price: 4000 },
  { category: 'brass', instrument: 'Trumpet', price: 200 },
  { category: 'brass', instrument: 'Trombone', price: 300 },
  { category: 'brass', instrument: 'French Horn', price: 4300 },
  { category: 'percussion', instrument: 'Drum Set', price: 500 },
  { category: 'percussion', instrument: 'Xylophone', price: 3000 },
  { category: 'percussion', instrument: 'Cymbals', price: 200 },
  { category: 'percussion', instrument: 'Marimba', price: 3000 },
];

const selectContainer = document.querySelector('select');
const productsContainer = document.querySelector('.products-container');

/**
 * Builds the product card markup for a given instrument category.
 * Filters the dataset and returns HTML used to render the product list.
 *
 * @param {string} instrumentCategory - Selected category ("all", "woodwinds", "brass", "percussion").
 * @returns {string} HTML string containing instrument cards for the selected category.
 */
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === 'all'
      ? instrumentsArr
      : instrumentsArr.filter(({ category }) => category === instrumentCategory);

  return instruments
    .map(({ instrument, price }) => {
      return `
          <div class="card">
            <h2>${instrument}</h2>
            <p>$${price}</p>
          </div>
        `;
    })
    .join('');
}
selectContainer.addEventListener('change', () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
