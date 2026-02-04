# ❤️ Favorite Icon Toggler

## 📝 Description

This project allows users to mark items as favorites by clicking a heart icon next to each list item. When clicked, the heart toggles between an empty and filled state, visually indicating whether the item has been favorited.

The interaction is handled entirely with JavaScript event listeners and dynamic DOM updates.

## 🧠 What This Project Does

- Displays a list of items, each with a heart icon button
- Detects when a heart icon is clicked
- Toggles a filled class on the clicked button
- Changes the heart symbol between empty (♡) and filled (❤)
- Applies visual styling when an item is marked as favorite

## 🛠️ Concepts Practiced

- Selecting multiple DOM elements with `querySelectorAll`
- Attaching event listeners to multiple elements
- Using the event object to identify the clicked element
- Toggling classes with `classList.add()` and `classList.remove()`
- Updating DOM content dynamically
- Separating structure (HTML), style (CSS), and behavior (JS)

## 📌 Example Behavior

```
Initial state:
♡  Raindrops on Roses
♡  Whiskers on Kittens

After clicking a heart:
❤  Raindrops on Roses
♡  Whiskers on Kittens
```

# 💡 Reflection

This project reinforces event-driven programming and UI state management. Instead of relying on static content, the interface updates dynamically based on user interaction. It demonstrates how JavaScript can modify both styling and content to reflect changes in application state. This pattern of reading state, applying logic, and updating the DOM is foundational for interactive front-end development.

## 🔗 Live Demo

[`Favorite Icon Toggler`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/favorite-icon-toggler/)

## 🧪 CodePen Version

( Optional CodePen link )
