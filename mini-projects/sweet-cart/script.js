const cartContainer = document.getElementById('cart-container');
const productsContainer = document.getElementById('products-container');
const dessertCards = document.getElementById('dessert-card-container');
const cartBtn = document.getElementById('cart-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const totalNumberOfItems = document.getElementById('total-items');
const cartSubTotal = document.getElementById('subtotal');
const cartTaxes = document.getElementById('taxes');
const cartTotal = document.getElementById('total');
const showHideCartSpan = document.getElementById('show-hide-cart');
const emptyCartMessage = document.getElementById('empty-cart-message');
const cartCountBadge = document.getElementById('cart-count-badge');
let isCartShowing = false;

const products = [
  { id: 1, name: 'Vanilla Cupcakes (6 Pack)', price: 12.99, category: 'Cupcake' },
  { id: 2, name: 'French Macaron', price: 3.99, category: 'Macaron' },
  { id: 3, name: 'Pumpkin Cupcake', price: 3.99, category: 'Cupcake' },
  { id: 4, name: 'Chocolate Cupcake', price: 5.99, category: 'Cupcake' },
  { id: 5, name: 'Chocolate Pretzels (4 Pack)', price: 10.99, category: 'Pretzel' },
  { id: 6, name: 'Strawberry Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 7, name: 'Chocolate Macarons (4 Pack)', price: 9.99, category: 'Macaron' },
  { id: 8, name: 'Strawberry Pretzel', price: 4.99, category: 'Pretzel' },
  { id: 9, name: 'Butter Pecan Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 10, name: 'Rocky Road Ice Cream', price: 2.99, category: 'Ice Cream' },
  { id: 11, name: 'Vanilla Macarons (5 Pack)', price: 11.99, category: 'Macaron' },
  { id: 12, name: 'Lemon Cupcakes (4 Pack)', price: 12.99, category: 'Cupcake' },
];

const categoryIcons = {
  'Ice Cream': '🍦',
  Cupcake: '🧁',
  Pretzel: '🥨',
  Macaron: '🍪',
};

products.forEach(({ name, id, price, category }) => {
  dessertCards.innerHTML += `
    <div class="dessert-card">
      <h2>${categoryIcons[category]} ${name}</h2>
      <p class="dessert-price">$${price}</p>
      <button
        id="${id}"
        class="btn add-to-cart-btn"
        type="button"
      >
        Add to cart
      </button>
    </div>
  `;
});

/**
 * Manages shopping cart state and pricing calculations.
 */
class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }

  /**
   * Adds a product to the cart by its ID.
   *
   * @param {number} id - The selected product ID.
   * @param {Array<Object>} products - The full list of available products.
   * @returns {void}
   */
  addItem(id, products) {
    const product = products.find((item) => item.id === id);

    if (!product) return;

    this.items.push(product);
  }

  /**
   * Returns the total number of items currently in the cart.
   *
   * @returns {number} The total cart item count.
   */
  getCounts() {
    return this.items.length;
  }

  /**
   * Clears all items from the cart after user confirmation.
   *
   * @returns {void}
   */
  clearCart() {
    if (!this.items.length) {
      return;
    }

    const isCartCleared = confirm(
      'Are you sure you want to clear all items from your shopping cart?'
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
    }
  }

  /**
   * Calculates tax for a given subtotal amount.
   *
   * @param {number} amount - The subtotal amount before tax.
   * @returns {number} The calculated tax amount.
   */
  calculateTaxes(amount) {
    return parseFloat(((this.taxRate / 100) * amount).toFixed(2));
  }

  /**
   * Calculates subtotal, tax, and total for the current cart contents.
   *
   * @returns {{ total: number, subTotal: number, tax: number }} The calculated cart totals.
   */
  calculateTotal() {
    const subTotal = this.items.reduce((total, item) => total + item.price, 0);
    const tax = this.calculateTaxes(subTotal);
    const total = subTotal + tax;

    return { total, subTotal, tax };
  }
}

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName('add-to-cart-btn');

/**
 * Renders the cart item list based on the current cart state.
 *
 * @returns {void}
 */
function renderCartItems() {
  productsContainer.innerHTML = '';

  const totalCountPerProduct = {};

  cart.items.forEach((dessert) => {
    totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
  });

  Object.entries(totalCountPerProduct).forEach(([id, count]) => {
    const product = cart.items.find((item) => item.id === Number(id));
    const { name, price } = product;

    productsContainer.innerHTML += `
      <div id="dessert${id}" class="product">
        <div class="product-info">
          <span class="product-count">
            ${count > 1 ? `${count}x` : ''}
          </span>
          <span class="product-name">${name}</span>
        </div>
        <span class="product-price">$${price}</span>
      </div>
    `;
  });
}

/**
 * Synchronizes cart summary values, visibility states, and rendered cart items
 * with the current cart state.
 *
 * @returns {void}
 */
function updateCartUI() {
  const itemCount = cart.getCounts();
  const hasItems = itemCount > 0;
  const { total, subTotal, tax } = cart.calculateTotal();

  emptyCartMessage.classList.toggle('hidden', hasItems);
  clearCartBtn.disabled = !hasItems;

  cartCountBadge.textContent = itemCount;
  cartCountBadge.classList.toggle('hidden', !hasItems);

  totalNumberOfItems.textContent = itemCount;
  cartSubTotal.textContent = `$${subTotal.toFixed(2)}`;
  cartTaxes.textContent = `$${tax.toFixed(2)}`;
  cartTotal.textContent = `$${total.toFixed(2)}`;

  renderCartItems();
}

/**
 * Handles add-to-cart button clicks and updates the cart UI.
 *
 * @param {Event} event - The click event from an add-to-cart button.
 * @returns {void}
 */
function handleAddToCart(event) {
  cart.addItem(Number(event.currentTarget.id), products);
  updateCartUI();
}

[...addToCartBtns].forEach((btn) => {
  btn.addEventListener('click', handleAddToCart);
});

/**
 * Toggles the cart panel open and closed.
 *
 * @returns {void}
 */
function handleCartToggle() {
  isCartShowing = !isCartShowing;
  cartContainer.classList.toggle('cart-closed', !isCartShowing);
  showHideCartSpan.textContent = isCartShowing ? 'Hide Cart' : 'Show Cart';
}

cartBtn.addEventListener('click', handleCartToggle);

/**
 * Handles clearing the cart and refreshing the cart UI.
 *
 * @returns {void}
 */
function handleClearCart() {
  cart.clearCart();
  updateCartUI();
}

clearCartBtn.addEventListener('click', handleClearCart);

/**
 * Closes the cart when the user clicks outside of the cart panel and cart button.
 *
 * @param {Event} event - The document click event.
 * @returns {void}
 */
function handleOutsideClick(event) {
  if (!isCartShowing) return;

  const clickedInsideCart = cartContainer.contains(event.target);
  const clickedCartButton = cartBtn.contains(event.target);

  if (!clickedInsideCart && !clickedCartButton) {
    handleCartToggle();
  }
}

document.addEventListener('click', handleOutsideClick);

/**
 * Closes the cart when the Escape key is pressed while the cart is open.
 *
 * @param {KeyboardEvent} event - The keyboard event.
 * @returns {void}
 */
function handleEscapeKey(event) {
  if (!isCartShowing) return;

  if (event.key === 'Escape') {
    handleCartToggle();
  }
}

document.addEventListener('keydown', handleEscapeKey);

updateCartUI();
