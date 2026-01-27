# Mini Projects

## 📝 Description

This folder contains small, self-contained JavaScript projects that combine multiple concepts into a single working program. These projects go beyond individual drills and focus on applying logic, data structures, and functions together to solve a problem.

Each mini project is designed to reinforce foundational JavaScript skills while moving toward real-world program behavior.

---

## 🎯 Trivia — Random Computer Answer

A simple trivia simulation that randomly selects a question and an answer choice, then evaluates whether the computer's selection is correct.

### 📌 Expected Behavior

```
Category: Geography
Question: What is the largest continent on Earth by land area?
Computer picked: Antarctica
The computer’s choice is wrong. The correct answer is: Asia
```

### 🛠️ Concepts Practiced

- Arrays of objects
- Random selection using `Math.random()`
- Function composition
- Conditional logic and control flow

### 💡 Reflection

This project helped reinforce how structured data (objects within arrays) can be used to represent real-world information. It also introduced randomness into program behavior, requiring careful thinking about how to validate outcomes that are not deterministic.

Working through this project highlighted how separating logic into small functions makes it easier to test, expand, and understand how each part contributes to the overall program.

---

## 📊 Gradebook App

A small gradebook system that calculates a class average, converts numeric scores into letter grades, determines pass/fail status, and generates a student-facing summary message.

### 📌 Expected Behavior

```
Class average: 78.83333333333333. Your grade: B. You passed the course.
```

### 🛠️ Concepts Practiced

- Function composition and reuse
- Iterating over arrays to compute aggregates
- Conditional logic and grading rules
- Boolean logic for pass/fail evaluation
- Producing formatted, user-readable output

### 💡 Reflection

This project emphasized the value of composing small, single-responsibility functions into a larger workflow. Each function performed a simple task, but together they created meangingful program behavior.

It reinforced how consistent function contracts, clear logic flow, and thoughtful testing make multi-function programs easier to reason about and maintain.

---

## 💿 Record Collection Update

A rule-driven record collection update system that modifies nested object properties and arrays based on specific conditions.

### 📌 Expected Behavior

```
Step: Set artist on 5439 to ABBA
{
  "albumTitle": "ABBA Gold",
  "artist": "ABBA"
}
```

### 🛠️ Concepts Practiced

- Working with nested objects and arrays
- Conditional logic with multiple branches
- Updating and deleting object properties
- Reasoning about state changes step-by-step

### 💡 Reflection

This project was more logic-heavy than earlier work and required careful evaluation of rule order and conditional branches. Managing nested objects and arrays highlighted how small logic errors can cascade into larger state issues.

Completing this project strengthened understanding of object manipulation, state changes, and how structured rules can drive complex updates predictably.

---

## 📦 Inventory Manager

A basic inventory management system using an array of product objects.

### 📌 Expected Behavior

```
addProduct('flOUR', 5) → flour quantity updated; current quantity: 25
addProduct('GRAIN', 10) → grain added to inventory; current quantity: 10
removeProduct('flour', 5) → Remaining flour pieces: 20
removeProduct('RiCe', 10) → rice's quantity has reached 0, it has been removed from inventory.
```

### 🛠️ Concepts Practiced

- Working with arrays of objects
- Managing shared state across multiple functions
- Using advanced methods like `.map()`, `.includes()`, and `.indexOf()`
- Handling edge cases (not found items, insufficient quantity, zero stock)

### 💡 Reflection

This project reinforced how important it is to think about edge cases and the order of conditions, especially when dealing with quantities and deletion logic. It more closely replicated real-world situations with modifying shared data with ongoing state changes across multiple functions. It also highlighted the value of readable output when tracking how data evolves over time by returning descriptive messages.

---

## 💡 Topic Reflection

These mini projects help bridge the gap between individual concept labs and more complete programs. Rather than focusing on one idea in isolation, each project requires combining multiple concepts to produce meaningful output.

As additional mini projects are added, this folder will continue to grow to reflect increasing complexity and confidence in JavaScript fundamentals.
