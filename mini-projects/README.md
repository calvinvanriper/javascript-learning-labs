# Mini Projects

## 📝 Description

This folder contains small, self-contained JavaScript projects that combine multiple concepts into a single working program. These projects go beyond individual drills and focus on applying logic, data structures, and functions together to solve a problem.

Each mini project is designed to reinforce foundational JavaScript skills while moving toward real-world program behavior.

---

## 🎯 Trivia — Random Computer Answer

A simple trivia simulation that randomly selects a question and an answer choice, then evaluates whether the computer's selection is correct.

### 📌 Expected Behavior (Trivia)

```text
Category: Geography
Question: What is the largest continent on Earth by land area?
Computer picked: Antarctica
The computer’s choice is wrong. The correct answer is: Asia
```

### 🛠️ Concepts Practiced (Trivia)

- Arrays of objects
- Random selection using `Math.random()`
- Function composition
- Conditional logic and control flow

### 💡 Reflection (Trivia)

This project helped reinforce how structured data (objects within arrays) can be used to represent real-world information. It also introduced randomness into program behavior, requiring careful thinking about how to validate outcomes that are not deterministic.

Working through this project highlighted how separating logic into small functions makes it easier to test, expand, and understand how each part contributes to the overall program.

---

## 📊 Grade Book App

A small grade book system that calculates a class average, converts numeric scores into letter grades, determines pass/fail status, and generates a student-facing summary message.

### 📌 Expected Behavior (Grade Book App)

```text
Class average: 78.83333333333333. Your grade: B. You passed the course.
```

### 🛠️ Concepts Practiced (Grade Book App)

- Function composition and reuse
- Iterating over arrays to compute aggregates
- Conditional logic and grading rules
- Boolean logic for pass/fail evaluation
- Producing formatted, user-readable output

### 💡 Reflection (Grade Book App)

This project emphasized the value of composing small, single-responsibility functions into a larger workflow. Each function performed a simple task, but together they created meaningful program behavior.

It reinforced how consistent function contracts, clear logic flow, and thoughtful testing make multi-function programs easier to reason about and maintain.

---

## 💿 Record Collection Update

A rule-driven record collection update system that modifies nested object properties and arrays based on specific conditions.

### 📌 Expected Behavior (Record Collection)

```text
Step: Set artist on 5439 to ABBA
{
  "albumTitle": "ABBA Gold",
  "artist": "ABBA"
}
```

### 🛠️ Concepts Practiced (Record Collection)

- Working with nested objects and arrays
- Conditional logic with multiple branches
- Updating and deleting object properties
- Reasoning about state changes step-by-step

### 💡 Reflection (Record Collection)

This project was more logic-heavy than earlier work and required careful evaluation of rule order and conditional branches. Managing nested objects and arrays highlighted how small logic errors can cascade into larger state issues.

Completing this project strengthened understanding of object manipulation, state changes, and how structured rules can drive complex updates predictably.

---

## 📦 Inventory Manager

A basic inventory management system using an array of product objects.

### 📌 Expected Behavior (Inventory Manager)

```bash
addProduct('flOUR', 5) → flour quantity updated; current quantity: 25
addProduct('GRAIN', 10) → grain added to inventory; current quantity: 10
removeProduct('flour', 5) → Remaining flour pieces: 20
removeProduct('RiCe', 10) → rice's quantity has reached 0, it has been removed from inventory.
```

### 🛠️ Concepts Practiced (Inventory Manager)

- Working with arrays of objects
- Managing shared state across multiple functions
- Using advanced methods like `.map()`, `.includes()`, and `.indexOf()`
- Handling edge cases (not found items, insufficient quantity, zero stock)

### 💡 Reflection (Inventory Manager)

This project reinforced how important it is to think about edge cases and the order of conditions, especially when dealing with quantities and deletion logic. It more closely replicated real-world situations with modifying shared data with ongoing state changes across multiple functions. It also highlighted the value of readable output when tracking how data evolves over time by returning descriptive messages.

---

## 🍨 Sweet Cart

An interactive shopping cart application that allows users to add items, manage cart contents, and view calculated totals in real time.

### 📌 Expected Behavior (Sweet Cart)

```text
User adds items to the cart →
Cart updates with item list, quantity, and totals →
Cart can be cleared or closed →
UI reflects empty and populated states dynamically
```

### 🛠️ Concepts Practiced (Sweet Cart)

- State-driven UI updates
- DOM manipulation and event handling
- Managing collections of objects
- Calculating derived values (subtotal, tax, total)
- Conditional rendering based on application state
- UI/UX patterns (empty state, disabled controls, toggles)

### 💡 Reflection (Sweet Cart)

This project marked a transition from logic-only exercises to building interactive user interfaces. It required thinking about application state as the source of truth and ensuring the UI consistently reflects that state.

Refactoring the initial implementation into a more structured system highlighted the importance of separating logic from event listeners and centralizing UI updates. It also reinforced how small UX improvements—such as empty states, button disabling, and animations—can significantly improve usability.

---

## 🧠 Project Idea Board

A dynamic project management interface that allows users to create, edit, and track ideas with persistent storage and real-time UI updates.

### 📌 Expected Behavior (Project Idea Board)

```text
User creates a new idea →
Idea appears as a card on the board →
User can expand details, edit, update status, or delete →
Changes persist after page refresh
```

### 🛠️ Concepts Practiced (Project Idea Board)

- Class-based state management
- Dynamic rendering from application state
- Event delegation for scalable interaction handling
- Form validation and submission workflows
- Persistent storage using `localStorage`
- Conditional UI rendering and state synchronization
- Keyboard interaction and accessibility patterns
- Component-based UI structure and styling

### 💡 Reflection (Project Idea Board)

This project builds on earlier work by introducing a more complete application architecture, including persistent state and more advanced interaction patterns. Expanding a logic-only lab into a full UI required careful coordination between state, rendering, and user input.

It reinforced the value of treating application data as the single source of truth and using rendering functions to keep the UI predictable. The addition of features such as editing, status updates, and keyboard shortcuts highlighted how thoughtful interaction design can elevate a simple concept into a more polished application.

---

## 💡 Topic Reflection

These mini projects help bridge the gap between individual concept labs and more complete programs. Rather than focusing on one idea in isolation, each project requires combining multiple concepts to produce meaningful output.

As additional mini projects are added, this folder will continue to grow to reflect increasing complexity and confidence in JavaScript fundamentals.
