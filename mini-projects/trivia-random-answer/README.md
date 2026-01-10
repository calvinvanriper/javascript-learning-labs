# Trivia — Random Computer Answer

## 📝 Description

This mini project simulates a simple trivia round by randomly selecting a question and then randomly selecting an answer choice to represent a computer’s guess. The program evaluates whether the computer’s choice matches the correct answer and reports the result.

The goal of this project is to practice working with structured data, randomness, and conditional logic while combining multiple JavaScript fundamentals into a single program.

---

## 🧠 What This Project Does

- Stores trivia questions as objects containing:
  - a category
  - the question text
  - a list of possible choices
  - the correct answer
- Groups multiple questions into a collection
- Randomly selects one question from the collection
- Randomly selects one answer choice for that question
- Compares the selected answer to the correct answer and outputs the result

Because the selections are random, the outcome can change each time the program runs.

---

## 🛠️ Concepts Practiced

- Arrays of objects
- Accessing object properties
- Random selection using `Math.random()` and `Math.floor()`
- Writing reusable functions
- Conditional logic and control flow
- Organizing data for readability and reuse

---

## 📌 Example Behavior

When the program runs, it may output something like:

```
Category: Geography
Question: What is the largest continent on Earth by land area?
Computer chose: Antarctica
The computer’s choice is wrong. The correct answer is: Asia
```

Actual output will vary each time due to random selection.

---

## 💡 Reflection

This project helped reinforce how multiple JavaScript fundamentals can work together in a single program. Instead of focusing on one concept in isolation, it required organizing data, selecting values at random, and applying logic to evaluate results.

It also served as an introduction to thinking about how small programs can simulate real behavior, such as making selections and validating outcomes.

Future updates may expand this project with additional features as new concepts are learned.
