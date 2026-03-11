# 🎮 RPSLS Game (Rock, Paper, Scissors, Lizard, Spock)

## 📝 Description

An interactive browser game built with vanilla JavaScript, where a player competes against the computer using the expanded Rock–Paper–Scissors–Lizard–Spock rule set.
This project emphasizes event-driven programming, state management, and scalable game logic.

## 🧠 What This Project Does

- Displays five selectable game options
- Randomly generates the computer’s choice
- Determines round winners using rule mapping
- Tracks and displays player and computer scores
- Ends the game when a player reaches the win score
- Prevents interaction after game over
- Allows the game to be reset without page reload

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Managing application state in the browser
- UI state transitions (active → game over → reset)
- Modeling logic with data structures (beats rule map)
- Defensive programming (guard clauses)
- Eliminating duplicated sources of truth

## 📌 Example Behavior

```text
Player selects Rock
Computer selects Scissors
→ Player wins! Rock beats Scissors

Player reaches 5 points
→ "Player has won the game!" message appears
→ Option buttons are hidden
→ Reset button becomes visible
```

## 💡 Reflection

This project demonstrates moving from simple conditional logic to data-driven rule modeling.
Using the beats object made the game scalable and easier to extend without increasing complexity.

Deriving the computer’s available options from the UI reduced duplication and improved maintainability.
Implementing a game-over guard reinforced the importance of protecting application state even when the interface prevents interaction.

## 🔗 Live Demo

[`Rock/Paper/Scissors/Lizard/Spock Game`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/rpsls-game/)

## 🧪 CodePen Version

[`CodePen - Rock/Paper/Scissors/Lizard/Spock Game`](https://codepen.io/calvinvanriper/full/dPXqgQy)
