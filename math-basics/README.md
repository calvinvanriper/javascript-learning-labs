# Math Basics Labs

## 📝 Description

This folder contains JavaScript exercises that focus on math fundamentals and numeric operations. Each lab is built as a small, reusable function that performs a real-world style calculations. These exercises reinforce function structure, return values, and working with mathematical expressions in JavaScript.

More math-focused practice labs will be added here as I continue learning 🙂

---

## 🌡 Convert Celsius to Fahrenheit

This lab builds a function that converts a temperature from Celsius to Fahrenheit using the standard conversion formula. It reinforces how mathematical expressions can be translated directly into program logic.

### 📌 Example Behavior (C2F)

```bash
convertCtoF(0) → 32
convertCtoF(-30) → -22
convertCtoF(30) → 86
```

### 🛠️ Concepts Practiced (C2F)

- Writing reusable functions
- Returning values
- Using math operations in JavaScript
- Testing with multiple inputs

### 💡 Reflection (C2F)

This lab reinforced how mathematical formulas can be expressed directly in code. It emphasized the importance of correct operator order and returning values so functions remain reusable rather than tied to console output.

---

## ❄️ Convert Fahrenheit to Celsius

This lab performs the inverse temperature conversion, turning Fahrenheit values into Celsius. It demonstrates how reversing a formula still follows the same principles of function design and mathematical accuracy.

### 📌 Example Behavior (F2C)

```bash
convertFtoC(32) → 0
convertFtoC(14) → -10
convertFtoC(86) → 30
```

### 🛠️ Concepts Practiced (F2C)

- Mathematical order of operations
- Variable naming clarity
- Consistent function design
- Manual output validation

### 💡 Reflection (F2C)

This lab emphasized the need to carefully apply arithmetic order of operations. It reinforced how small mistakes in math logic can lead to incorrect results, highlighting the value of validating outputs with multiple test cases.

---

## 📅 Leap Year Checker

Determines whether a given year is a leap year based on the Gregorian calendar rule. This lab practices nested conditional logic along with mathematical operators such as modulo `%`.

### 📌 Example Behavior (Leap Year Checker)

```bash
isLeapYear(1920) → 1920 is a leap year.
isLeapYear(1900) → 1900 is not a leap year.
isLeapYear(1600) → 1600 is a leap year.
```

### 🛠️ Concepts Practiced (Leap Year Checker)

- Nested conditional logic
- Applying rule precedence in decision-making
- Using modulo (`%`) for divisibility checks
- Translating real-world rules into program logic

### 💡 Reflection (Leap Year Checker)

This lab reinforced how multiple conditions can interact to produce a final outcome. It highlighted the importance of rule ordering and how real-world logic often requires layered decision-making rather than a single check.

---

## ➕ Sum All Numbers in a Range

This exercise calculates the sum of all numbers within a numeric range defined by two input values. The function ensures the numbers are processed in the correct order and then iterates through the range, accumulating the total.

### 📌 Example Behavior (Sum All Numbers)

```bash
sumAll([1, 4]) → 10
sumAll([4, 1]) → 10
sumAll([5, 10]) → 45
```

### 🛠️ Concepts Practiced (Sum All Numbers)

- Working with numeric ranges
- Looping with dynamic start and end points
- Using an accumulator variable to build totals
- Handling unordered input values
- Applying basic arithmetic in programmatic form

### 💡 Reflection (Sum All Numbers)

This lab demonstrates how mathematical operations often rely on structured iteration in programming. While the arithmetic itself is simple, the exercise reinforces how loops can be used to generate sequences and progressively build a result. It also highlights the importance of validating or normalizing input before processing.

---

## 💡 Topic Reflection

These labs strengthened the connection between mathematical reasoning and program logic. Each exercise demonstrated how formulas and numeric rules can be implemented in code through clear function design and structured decision-making.

Together, they reinforced several foundational skills:

- translating math formulas into program instructions
- returning values rather than relying on console output
- validating results with varied test cases
- structuring logic so functions remain reusable

Although simple in scope, these labs build the precision and discipline needed before tackling more complex algorithmic problems.
