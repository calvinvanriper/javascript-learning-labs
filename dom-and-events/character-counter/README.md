# ⌨️ Character Counter

## 📝 Description

An interactive text input tool that tracks the number of characters typed in real time. The interface enforces a maximum length and visually signals when the limit has been reached.

This project focuses on event-driven DOM interaction and UI state synchronization.

## 🧠 What This Project Does

- Displays a live character count
- Limits input to a configurable maximum
- Prevents excess input via JavaScript safeguard
- Updates UI dynamically as the user types
- Highlights the input when the limit is reached

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Handling the input event
- Reading and updating UI state from the DOM
- String length manipulation
- Guard clauses for input limits
- Class toggling for visual state
- Keeping configuration centralized (MAX constant)

## 📌 Example Behavior

```
Initial state:
Character Count: 0/50

User types "Hello":
Character Count: 5/50

User reaches 50 characters:
Character Count: 50/50
Text turns red and bold
Further typing is prevented
```

## 💡 Reflection

This project reinforces how UI elements can serve as both display and state containers. Instead of storing character count in separate variables, the DOM becomes part of the state cycle: read → compute → render.

Using both HTML attributes and JavaScript safeguards demonstrates layered input validation, a common pattern in real applications.

## 🔗 Live Demo

[`Character Counter`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/character-counter/)

## 🧪 CodePen Version

[`CodePen - Character Counter`](https://codepen.io/calvinvanriper/full/emzLPGr)
