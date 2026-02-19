# 🏈 Football Team Cards

## 📝 Description

A dynamic roster viewer that displays player cards for a football team and allows filtering by position group, starter status, or Pro Bowl selection using a dropdown menu.

## 🧠 What This Project Does

- Displays team information including team name, year, and head coach
- Renders player data as reusable card components
- Filters players based on dropdown selection
- Updates the displayed roster immediately when the selection changes
- Applies visual indicators for starters and Pro Bowl–selected players

## 🛠️ Concepts Practiced

- DOM selection and event listeners (`change` event)
- Filtering arrays with `.filter()`
- Transforming data into markup using `.map()`
- Rendering dynamic UI content with `innerHTML`
- Managing UI state based on user input
- Applying conditional classes for state-based styling

## 📌 Example Behavior

```
User selects "defense-line"
→ Only defensive line players render as cards

User selects "probowl"
→ Only Pro Bowl–selected players render

User selects "all"
→ Full team roster renders
```

## 💡 Reflection

This project reinforced the importance of separating data from presentation. The roster is stored as structured data and the interface is generated dynamically, allowing the UI to update automatically based on user interaction. This approach improves scalability, maintainability, and aligns with modern front-end development patterns.

## 🔗 Live Demo

[`Football Team Cards`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/football-team-cards/)

## 🧪 CodePen Version

[`CodePen - Football Team Cards`](https://codepen.io/calvinvanriper/full/ZYOdvoJ)
