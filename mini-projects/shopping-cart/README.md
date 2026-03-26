# 🍨 Sweet Cart

## 📝 Description

Sweet Cart is an interactive shopping cart application that allows users to browse products, add items to a cart, and view dynamically updated totals. The project began as a basic FCC lab and was refactored into a state-driven UI system with improved structure, separation of concerns, and user experience.

The application manages cart data independently from the UI and derives all visual updates from the current state. This approach ensures predictable behavior and simplifies future enhancements.

---

## 🔄 Before vs After Refactor

This project began as a guided FCC lab with a more procedural, DOM-driven approach. The original implementation focused on directly updating the UI as actions occurred.

### Before (FCC Lab Approach)

- Cart UI updated incrementally within event handlers
- Rendering logic mixed with state logic
- DOM manipulation spread across multiple functions
- No clear separation between data and UI layers

### After (Refactored Implementation)

- Introduced a **state-driven architecture** using a `ShoppingCart` class
- Centralized all UI updates through a single `updateCartUI()` function
- Extracted cart rendering into `renderCartItems()` for predictable updates
- Eliminated direct DOM manipulation from data logic
- Improved event handling with named handler functions
- Added UX enhancements (cart toggle, outside click, Escape key handling)

### Key Improvement

The refactor shifts the application from:

> “Update the UI as things happen”

to:

> “UI is a direct reflection of application state”

This results in more predictable behavior, cleaner structure, and easier future extension.

---

## 🧠 What This Project Does

- Displays a catalog of dessert products in a responsive grid layout
- Allows users to add items to a shopping cart
- Tracks cart state using a centralized data structure
- Dynamically updates:
  - Total item count
  - Subtotal, tax, and total price
  - Cart item list with quantity aggregation
- Supports multiple quantities of the same product with grouped display (e.g., `2x`, `3x`)
- Provides interactive cart behavior:
  - Toggle cart visibility
  - Close cart via outside click
  - Close cart using the Escape key
- Displays an empty cart message when no items are present
- Disables the "Clear Cart" button when the cart is empty
- Shows a live item count badge on the cart button

---

## 🧩 Parsing Approach / Architecture

The application uses a **state-driven architecture**, where all UI updates are derived from a single source of truth (`cart.items`).

### Structure

- **ShoppingCart (Class)**
  - Manages cart state and pricing calculations
  - Contains no DOM manipulation
- **updateCartUI()**
  - Centralized UI synchronization function
  - Updates totals, visibility states, and triggers rendering
- **renderCartItems()**
  - Rebuilds the cart item list from current state
  - Aggregates duplicate items into a single row with counts
- **Event Handlers**
  - Coordinate user interactions and trigger state/UI updates

### Flow

1. User interaction triggers an event handler
2. Cart state is updated via the `ShoppingCart` class
3. `updateCartUI()` is called
4. UI is fully synchronized from current state

This eliminates incremental DOM updates and ensures consistent rendering.

---

## 📌 Example Behavior

When the user adds items to the cart:

```text
User adds:
- French Macaron
- French Macaron
- Chocolate Pretzels

Cart displays:
2x French Macaron        $3.99
Chocolate Pretzels       $10.99

Total number of items: 3
Subtotal: $18.97
Taxes: $1.56
Total: $20.53
```

When the cart is cleared:

- All items are removed
- Totals reset to `$0.00`
- Empty cart message is displayed
- Clear Cart button becomes disabled

---

## 🛠️ Concepts Practiced

- State-driven UI design
- Separation of concerns (data vs UI vs rendering)
- DOM manipulation and event handling
- Aggregating data for display (grouping duplicate items)
- Order-independent UI rendering from state
- Keyboard and click-based interaction handling
- CSS layout systems (Grid, Flexbox)
- CSS variables for design system implementation
- UI/UX patterns (badges, empty states, disabled controls)
- Incremental refactoring from procedural to structured code

---

## ⚠️ Scope & Limitations

- Uses `innerHTML` for rendering (sufficient for small-scale applications but not optimal for large datasets)
- Product lookup uses a simple `.find()` approach instead of optimized indexing
- No persistence (cart state resets on page reload)
- No backend integration or checkout functionality

---

## 💡 Reflection

This project highlights the transition from direct DOM manipulation to a state-driven architecture. Refactoring the original implementation revealed the importance of separating data logic from UI updates and consolidating rendering into a single, predictable flow.

It also reinforced how grouping logic and rendering order affect UI correctness, particularly when handling duplicate items. While the implementation uses simple data structures and rendering methods, the architectural approach mirrors patterns used in modern frameworks.

---

## 🔗 Live Demo

[Sweet Cart](https://calvinvanriper.dev/javascript-learning-labs/mini-projects/shopping-cart/)

## 🧪 CodePen Version

[CodePen – Sweet Cart](https://codepen.io/calvinvanriper/full/pvEdPLO)
