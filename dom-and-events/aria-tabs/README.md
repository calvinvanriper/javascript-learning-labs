# 🪐 ARIA Tabs (Accessible Planets Interface)

## 📝 Description

An accessible tab interface built with vanilla JavaScript that displays information about the planets in our solar system.  
This project focuses on synchronizing UI state with ARIA attributes to create a keyboard-navigable, screen reader–friendly tab pattern.

## 🧠 What This Project Does

- Displays a horizontal tab list of planets and an overview
- Shows the associated content panel when a tab is selected
- Updates `aria-selected`, `aria-controls`, and `tabindex` dynamically
- Ensures only one tab panel is visible at a time
- Maintains proper accessibility relationships between tabs and panels
- Updates visual state and accessibility state together

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Updating accessibility attributes dynamically
- Managing UI state using DOM as the source of truth
- Synchronizing visual state with semantic state
- Using ARIA roles (`tablist`, `tab`, `tabpanel`)
- Guarding against invalid UI states

## 📌 Example Behavior

```
User clicks "Mars" tab
→ Mars tab receives aria-selected="true"
→ All other tabs receive aria-selected="false"
→ Mars panel becomes visible
→ All other panels become hidden
→ Mars tab becomes keyboard-focusable (tabindex="0")
```

## 💡 Reflection

This project reinforces how accessible UI components require explicit synchronization between user interaction and semantic state.  
Unlike purely visual interfaces, ARIA-based components rely on accurate attribute updates to communicate structure and state to assistive technologies.

Managing visibility through the `hidden` attribute while updating `aria-selected` and `tabindex` ensured both visual and accessibility states remained consistent.

This lab demonstrated how the DOM can serve as the single source of truth for UI state, reducing complexity and improving reliability without introducing unnecessary abstraction.

## 🔗 Live Demo

[`ARIA Tabs – Planets Interface`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/aria-tabs/)

## 🧪 CodePen Version

[`CodePen – ARIA Tabs Planets Interface`](https://codepen.io/calvinvanriper)
