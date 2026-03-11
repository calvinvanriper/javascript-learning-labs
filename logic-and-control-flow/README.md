# Logic & Control Flow Labs

## 📝 Description

This folder contains JavaScript exercises that focus on program logic, decision-making, and state management. These labs go beyond simple calculations and start working with branching, conditionals, and the flow of execution in a program.

The goal of these exercises is to practice thinking through how a program behaves step-by-step — especially as values change over time.

---

## ⛳ Golf Score Lab

This lab determines a golfer’s score label based on the hole’s par value and the number of strokes taken. It follows standard golf scoring rules and returns a descriptive result such as `"Birdie"` or `"Bogey"`.

### 📌 Example Behavior (Golf Score)

```javascript
    golfScore(5, 4) ➜ Birdie
    golfScore(4, 1) ➜ Hole-in-one!
    golfScore(4, 7) ➜ Go Home!
    golfScore(5, 2) ➜ Albatross
    golfScore(3, 3) ➜ Par
    golfScore(4, 2) ➜ Eagle
    golfScore(4, 5) ➜ Bogey
```

### 🛠️ Concepts Practiced (Gold Score)

- Conditional logic and ordered rule evaluation
- Guard clauses for special cases
- Mapping real-world rules to program logic
- Using a lookup array to centralize output values
- Ensuring clean control flow with clear fall-through behavior

### 💡 Reflection (Golf Score)

This lab reinforced the importance of ordering conditions correctly, since the output depends entirely on rule precedence. It highlighted how real-world scoring systems can be modeled in code using structured decision trees, and how early guard conditions prevent incorrect matches later in the flow.

---

## 📇 Contact Profile Lookup Lab

This lab searches a list of contact objects to retrieve a specific property value based on a provided first name. The program follows a clear set of rules to determine whether the contact exists and whether the requested property is valid.

Rather than iterating unnecessarily, the logic prioritizes validation and early exits to ensure predictable and readable behavior.

### 📌 Example Behavior (Contact Lookup)

```javascript
lookUpProfile("Kristian", "lastName") ➜ "Vos"
lookUpProfile("Sherlock", "likes") ➜ ["Intriguing Cases", "Violin"]
lookUpProfile("Bob", "number") ➜ "No such contact"
lookUpProfile("Akira", "address") ➜ "No such property"
```

### 🛠️ Concepts Practiced (Contact Lookup)

- Conditional branching with clear precedence rules
- Early returns to fail fast and simplify control flow
- Validating data existence before access
- Working with arrays of objects
- Mapping program logic to real-world lookup behavior

---

## 💡 Reflection (Contact Lookup)

This lab reinforced the importance of validating data in the correct order before attempting to access it. It highlighted how checking for the existence of a contact must come before checking for a property, and how early returns make decision logic easier to read and reason about.

It also demonstrated how real-world lookup behavior can be modeled in code using structured conditional branches, ensuring the program produces clear and predictable responses even when data is missing.

---

## 🔍 First Element Finder

This exercise builds a function that returns the first element in an array that satisfies a provided truth test function.

### 📌 Example Behavior (First Element Finder)

```javascript
findElement([1, 3, 5, 8, 9], num => num % 2 === 0) → 8
```

### 🛠️ Concepts Practiced (First Element Finder)

- Higher-order functions
- Passing functions as arguments
- Predicate (truth test) logic
- Early returns for efficient control flow
- Re-creating built-in behavior (`Array.prototype.find`)

### 💡 Reflection (First Element Finder)

This lab introduced the concept of higher-order functions by allowing behavior to be passed into a function as an argument. It reinforced how control flow can be delegated using predicate functions, and how early returns can be used to efficiently stop iteration once a condition is met.

---

## 🔺 Pyramid Generator

This exercise builds a function that generates a text-based pyramid using a specified character, number of rows, and direction flag.

### 📌 Example Behavior (Pyramid Generator)

```javascript
pyramid('o', 4, false);

o;
ooo;
ooooo;
ooooooo;
```

### 🛠️ Concepts Practiced (Pyramid Generator)

- Nested control flow using loops and conditionals
- Building dynamic string output
- Managing layout with calculated spacing
- Using parameters to alter execution paths
- Avoiding trailing whitespace in formatted output

### 💡 Reflection (Pyramid Generator)

This lab required careful planning and incremental debugging to manage spacing, alignment, and execution order. It reinforced the importance of breaking complex output problems into smaller steps and reasoning through how control flow affects final results.

---

## 🃏 Card Counter Lab

This lab simulates a simplified Blackjack card-counting system. The program keeps track of a running count and returns a suggestion based on whether the current count is positive or not.

### 📌 Example Behavior (Card Counter)

```text
    2 Bet
    0 Hold
    -1 Hold
```

### 🛠️ Concepts Practiced (Card Counter)

- Using `if / else if / else` branching
- Tracking state using a global variable
- Returning formatted string output
- Understanding how repeated function calls build on each other
- Thinking about program logic instead of only math

### 💡 Reflection (Card Counter)

This lab introduced the concept of state persistence across function calls, where each call affects the next outcome. It emphasized thinking about program flow over time rather than a single execution, and showed how simple conditional logic can drive decision-making systems.

---

### 🌀 Sum Odd Fibonacci Numbers

This exercise generates Fibonacci numbers up to a specified limit and calculates the sum of only the odd values in the sequence. The function builds the sequence step-by-step while ensuring numbers do not exceed the provided limit.

### 📌 Example Behavior (Sum Odd Fibonacci Numbers)

```javascript
sumFibs(4) → 5        // 1 + 1 + 3
sumFibs(10) → 10      // 1 + 1 + 3 + 5
sumFibs(75025) → 135721
```

### 🛠️ Concepts Practiced (Sum Odd Fibonacci Numbers)

- Generating number sequences using iterative logic
- Controlling loop termination based on dynamic conditions
- Using conditional checks within loops
- Filtering values based on numeric properties (odd numbers)
- Accumulating totals using an accumulator variable

### 💡 Reflection (Sum Odd Fibonacci Numbers)

This lab reinforces the importance of control flow and condition placement when generating sequences. It highlights how a small shift in where a condition is evaluated can significantly change program behavior. The exercise also demonstrates how multiple stages of logic—generation, filtering, and accumulation—can be combined to produce a final result.

---

## 💡 Topic Reflection

These labs strengthened my ability to think in terms of **program flow rather than isolated operations**. Each exercise required reasoning about how conditions interact, how rule order affects results, and how state can evolve during execution.

Together, they introduced several core programming patterns:

- prioritizing rule evaluation
- using early exits to simplify logic
- modeling real-world systems with condition trees
- maintaining and updating state across calls

This folder marks the transition from simple syntax practice to structured logical thinking — a foundational skill for building reliable applications.
