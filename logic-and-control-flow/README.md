# Logic & Control Flow Labs

## 📝 Description

This folder contains JavaScript exercises that focus on program logic, decision-making, and state management. These labs go beyond simple calculations and start working with branching, conditionals, and the flow of execution in a program.

The goal of these exercises is to practice thinking through how a program behaves step-by-step — especially as values change over time.

---

## ⛳ Golf Score Lab

**File:** `golf-score.js`

This lab determines a golfer’s score label based on the hole’s par value and the number of strokes taken. It follows standard golf scoring rules and returns a descriptive result such as `"Birdie"` or `"Bogey"`.

### Scoring Rules

    Strokes === 1       ➜ Hole-in-one!
    Par - 3             ➜ Albatross
    Par - 2             ➜ Eagle
    Par - 1             ➜ Birdie
    Par                 ➜ Par
    Par + 1             ➜ Bogey
    Par + 2             ➜ Double Bogey
    ≥ Par + 3           ➜ Go Home!

### Example Outputs

    golfScore(5, 4) ➜ Birdie
    golfScore(4, 1) ➜ Hole-in-one!
    golfScore(4, 7) ➜ Go Home!
    golfScore(5, 2) ➜ Albatross
    golfScore(3, 3) ➜ Par
    golfScore(4, 2) ➜ Eagle
    golfScore(4, 5) ➜ Bogey
    golfScore(5, 7) ➜ Double Bogey

### Concepts Practiced

- Conditional logic and ordered rule evaluation
- Guard clauses for special cases
- Mapping real-world rules to program logic
- Using a lookup array to centralize output values
- Ensuring clean control flow with clear fall-through behavior

---

## 📇 Contact Profile Lookup Lab

**File:** `contact-profile-lookup.js`

This lab searches a list of contact objects to retrieve a specific property value based on a provided first name. The program follows a clear set of rules to determine whether the contact exists and whether the requested property is valid.

Rather than iterating unnecessarily, the logic prioritizes validation and early exits to ensure predictable and readable behavior.

### Lookup Rules

- If the contact does not exist → return `"No such contact"`
- If the contact exists but the property does not → return `"No such property"`
- If both exist → return the requested property value

### Example Outputs

```
lookUpProfile("Kristian", "lastName") ➜ "Vos"
lookUpProfile("Sherlock", "likes") ➜ ["Intriguing Cases", "Violin"]
lookUpProfile("Bob", "number") ➜ "No such contact"
lookUpProfile("Akira", "address") ➜ "No such property"
```

### Concepts Practiced

- Conditional branching with clear precedence rules
- Early returns to fail fast and simplify control flow
- Validating data existence before access
- Working with arrays of objects
- Mapping program logic to real-world lookup behavior

---

## 💡 Reflection

These labs helped reinforce how important **logic and control flow** are in real-world programs. Rather than focusing only on calculations, each exercise required thinking about how values change, how rules are prioritized, and how decisions affect output.

These labs demonstrate common programming patterns:

- tracking and updating state over time
- evaluating conditions in the correct order
- producing consistent, meaningful results from user input

More logic-focused practice labs will be added here as I continue learning 🙂

---

## 🔍 First Element Finder

This exercise builds a function that returns the first element in an array that satisfies a provided truth test function.

### Example

```
findElement([1, 3, 5, 8, 9], num => num % 2 === 0) → 8
```

### Concepts Practiced

- Higher-order functions
- Passing functions as arguments
- Predicate (truth test) logic
- Early returns for efficient control flow
- Re-creating built-in behavior (`Array.prototype.find`)

### Reflection

This lab introduced the concept of higher-order functions by allowing behavior to be passed into a function as an argument. It reinforced how control flow can be delegated using predicate functions, and how early returns can be used to efficiently stop iteration once a condition is met.

---

## 🔺 Pyramid Generator

This exercise builds a function that generates a text-based pyramid using a specified character, number of rows, and direction flag.

### Example

```
pyramid("o", 4, false)

   o
  ooo
 ooooo
ooooooo
```

### Concepts Practiced

- Nested control flow using loops and conditionals
- Building dynamic string output
- Managing layout with calculated spacing
- Using parameters to alter execution paths
- Avoiding trailing whitespace in formatted output

### Reflection

This lab required careful planning and incremental debugging to manage spacing, alignment, and execution order. It reinforced the importance of breaking complex output problems into smaller steps and reasoning through how control flow affects final results.

---

## 🃏 Card Counter Lab

**File:** `card-counter.js`

This lab simulates a simplified Blackjack card-counting system. The program keeps track of a running count and returns a suggestion based on whether the current count is positive or not.

### Card Rules

    2–6   ➜ Increase the count (good for the player)
    7–9   ➜ No change
    10–A  ➜ Decrease the count (good for the house)

### Output Rule

If the count is positive → return `"Bet"`  
Otherwise → return `"Hold"`

Example output format:

```
    2 Bet
    0 Hold
    -1 Hold
```

### Concepts Practiced

- Using `if / else if / else` branching
- Tracking state using a global variable
- Returning formatted string output
- Understanding how repeated function calls build on each other
- Thinking about program logic instead of only math
