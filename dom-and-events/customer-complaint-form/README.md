# 📝 Customer Complaint Form

## 📝 Description

This project is an interactive customer complaint form that validates user input in real time and provides immediate visual feedback. The form enforces structured input rules for fields such as email, order number, product code, and grouped inputs like complaint reasons and desired solutions.

The project focuses on event-driven validation and dynamically updating UI state based on user interaction.

## 🧠 What This Project Does

- Captures structured user input across multiple form sections
- Validates fields using regex patterns and conditional logic
- Provides real-time feedback using `change` and `submit` events
- Applies validation states to both individual inputs and grouped fields
- Enforces conditional validation (e.g., requiring descriptions when "Other" is selected)
- Prevents submission when validation fails
- Allows users to reset the form and clear validation states

## 🛠️ Concepts Practiced

- DOM selection and structured element mapping
- Event handling (`submit`, `change`, and custom actions)
- Form validation using regular expressions
- Conditional validation logic based on user input
- Iterating over collections (`NodeList`, arrays)
- Guard clauses and validation pipelines
- UI state management using CSS classes (`valid` / `invalid`)
- Separation of concerns (validation logic vs UI updates)

## 📌 Example Behavior

```text
Initial state:
All fields neutral (no validation applied)

User submits empty form:
All required fields highlighted in red

User enters valid email and order number:
Those fields turn green

User selects "Other" complaint without description:
Complaint description field turns red

User corrects description (20+ characters):
Field turns green

User clicks "Clear":
All inputs reset and validation styles removed
```

## 💡 Reflection

This project reinforced the importance of treating the DOM as a source of truth for application state. Validation is not stored separately, but derived from the current UI values, processed through logic, and reflected back into the interface.

A key takeaway was handling grouped inputs (checkboxes and radio buttons) as a single validation unit. This required mapping logical validation results to multiple related DOM elements and ensuring consistent feedback.

Refactoring validation styling from inline styles to reusable CSS classes improved maintainability and aligned better with scalable UI patterns used in modern applications.

## 🔗 Live Demo

[`Drum Machine`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/customer-complaint-form/)

## 🧪 CodePen Version

[`CodePen - Drum Machine`](https://codepen.io/calvinvanriper/full/NPRjeZO)
