# 🥁 Drum Machine

## 📝 Description

This project is an interactive drum machine that allows users to trigger audio samples using both mouse clicks and keyboard input. Each drum pad plays a unique sound and updates a display to reflect the active audio clip.

The project focuses on coordinating DOM interaction, event handling, and UI feedback in a responsive interface.

## 🧠 What This Project Does

- Displays a grid of drum pads mapped to keyboard keys (Q, W, E, A, S, D, Z, X, C)
- Plays a corresponding audio clip when a pad is clicked
- Supports keyboard input to trigger sounds using mapped keys
- Updates a display panel with the name of the active sound
- Resets audio playback to allow rapid repeated triggering
- Prevents errors from unrelated key presses

## 🛠️ Concepts Practiced

- DOM selection with `getElementById` and `querySelectorAll`
- Event handling for both `click` and `keydown` events
- Using `event.currentTarget` for reliable element targeting
- DOM traversal with `parentElement`
- Reusable function design for shared interaction logic
- Guard clauses to prevent invalid input handling
- Synchronizing UI updates with user interaction
- CSS Grid layout for structured component design
- UI state feedback through dynamic text updates

## 📌 Example Behavior

```text
User clicks pad "Q":
→ Plays "Heater 1"
→ Display updates to: Heater 1

User presses key "A":
→ Plays "Heater 4"
→ Display updates to: Heater 4

User presses an unrelated key:
→ No sound plays
→ No display update occurs
```

## 💡 Reflection

This project reinforced the importance of structuring interaction logic through reusable functions rather than duplicating behavior across event handlers. By centralizing the core interaction in a single trigger function, both mouse and keyboard inputs share the same execution path, improving maintainability and consistency.

It also highlighted how DOM traversal methods like `parentElement` simplify element relationships, and how user interface state can be directly managed through the DOM. This pattern mirrors the event-driven architecture used in modern front-end development.

## 🔗 Live Demo

[`Drum Machine`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/drum-machine/)

## 🧪 CodePen Version

[`CodePen - Drum Machine`](https://codepen.io/calvinvanriper/full/qEamQpL)
