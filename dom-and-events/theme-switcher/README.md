# 🎨 Theme Switcher (Accessible Menu)

## 📝 Description

An accessible theme switcher that applies visual styles to the page using a dropdown menu pattern.  
This project focuses on synchronizing UI visibility with ARIA state while supporting keyboard navigation for menu interaction.

## 🧠 What This Project Does

- Toggles a theme menu using a button control
- Updates `aria-expanded` and `hidden` to reflect menu state
- Applies the selected theme by updating `theme-*` classes on the document body
- Announces theme changes using an ARIA live region
- Supports keyboard interaction:
  - Enter/Space/Arrow keys to open and navigate the menu
  - Home/End to jump to first/last option
  - Escape to close the menu and return focus to the button
- Closes the menu when clicking outside of the component

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Managing UI state through DOM attributes (`hidden`, `aria-expanded`)
- Event delegation using `currentTarget` and `closest`
- Keyboard accessibility patterns for menus
- Roving focus through programmatic `focus()` control
- Using ARIA roles (`menu`, `menuitem`) and live regions (`aria-live`)

## 📌 Example Behavior

```
User clicks "Switch Theme"
→ Menu becomes visible
→ aria-expanded="true"

User presses ArrowDown
→ Focus moves to the next menu item

User presses Enter on "Dark"
→ theme-dark class applied to <body>
→ Status message announces "Dark theme enabled"
→ Menu closes and focus returns to the button
```

## 💡 Reflection

This lab demonstrates how interactive UI components must synchronize both visual state and semantic state to remain accessible.  
Updating `hidden` and `aria-expanded` together ensures assistive technologies can interpret the menu correctly while keeping the interface predictable for keyboard users.

Adding minimal keyboard support reinforced that accessible design is not separate from functionality—accessibility is part of the behavior contract of the component.

## 🔗 Live Demo

[`Theme Switcher`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/theme-switcher/)

## 🧪 CodePen Version

[`CodePen – Theme Switcher`](https://codepen.io/calvinvanriper/full/WbGeVKV)
