# 🥗 Calorie Counter

## 📝 Description

This project is an interactive calorie counter that allows users to add food and exercise entries dynamically, calculate total consumed and burned calories, and determine whether they are in a calorie deficit or surplus.

The project focuses on dynamic form generation, input validation, and DOM-driven UI updates based on user-entered data.

## 🧠 What This Project Does

- Lets users add meal and exercise entries dynamically
- Calculates total calories consumed across breakfast, lunch, dinner, and snacks
- Calculates calories burned through exercise
- Compares total consumed and burned calories against a daily calorie budget
- Displays whether the user is in a calorie deficit or surplus
- Validates numeric input and blocks invalid scientific notation entries
- Clears all generated entries and resets the form state

## 🛠️ Concepts Practiced

- DOM selection with `getElementById`, `querySelector`, and `querySelectorAll`
- Event handling for button clicks and form submission
- Dynamic DOM insertion using `insertAdjacentHTML`
- Input sanitization and validation with regular expressions
- Iterating over input collections to calculate totals
- Managing UI state with conditional rendering
- Reusable helper functions for validation and calculation
- Form reset behavior and DOM cleanup

## 📌 Example Behavior

```text
User selects "Lunch" and clicks "Add Entry":
→ New lunch name and calorie inputs are added

User enters:
Breakfast: 400
Lunch: 650
Dinner: 700
Snacks: 150
Exercise: 300
Budget: 2000

Calculation result:
→ 150 Calories Deficit
→ 2000 Calories Budgeted
→ 1900 Calories Consumed
→ 300 Calories Burned

User enters invalid scientific notation:
→ Alert displays invalid input warning
→ Calculation stops

User clicks "Clear":
→ Dynamic entries are removed
→ Form resets to default state
→ Output is cleared and hidden
```

## 💡 Reflection

This project reinforced how form-driven applications often combine several core front-end patterns at once: dynamic UI generation, input validation, calculation logic, and conditional output rendering.

A key takeaway was separating responsibilities into helper functions for cleaning input, validating values, and calculating totals. This made the overall workflow easier to reason about and kept the event handlers focused on orchestration instead of doing everything inline.

The project also highlighted how the DOM can serve as both the source of user input and the surface for immediate feedback, which is a foundational pattern in interactive web applications.

## 🔗 Live Demo

[`Calorie Counter`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/calorie-counter/)

## 🧪 CodePen Version

[`CodePen - Calorie Counter`](https://codepen.io/calvinvanriper/full/YPGVBWE)
