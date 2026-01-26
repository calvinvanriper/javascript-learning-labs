# JavaScript Learning Labs

![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![Learning Repo](https://img.shields.io/badge/purpose-Learning-blueviolet)
![Status](https://img.shields.io/badge/status-Active-brightgreen)
![FreeCodeCamp](https://img.shields.io/badge/inspired%20by-FreeCodeCamp-0a0a23)

This repository is a collection of small JavaScript practice projects and learning exercises that I’ve completed while studying programming. Each lab focuses on a specific concept such as string manipulation, arrays, objects, functions, DOM interaction, and more.

The goal of this repo is not just to store code, but to document my learning process and growth as a developer. Wherever possible, I include explanations of what the exercise is doing and what I learned from it.

## 🧠 What You’ll Find Here

- Small, focused JavaScript exercises
- Clean, readable code
- Explanations and learning notes
- Incremental improvements over time
- Real-world style problem solving

## 📂 Repo Structure

Each topic area gets its own folder, containing one or more focused JavaScript labs.
Every lab includes clear code and (where helpful) an explination of reflection.

```
    /topic-area/
      exercise-name.js
      README.md   ← explanation & reflection
```

Example:

```
    string-manipulation/
      mask-email.js
      README.md
```

---

## 🗂 Current Labs

These labs document my JavaScript learning journey through small, focused practical exercises.

### 🔁 Logic & Control Flow

Exercises focused on decision-making, branching, and tracking state across multiple function calls.

- Golf Score - Golf score label based on hole's par value and number of strokes  
  [`Golf Score`](./logic-and-control-flow/golf-score.js)

Contact Profile Lookup - Looks up a contact by first name and returns a requested property using conditional logic and validation.  
 [`Contact Profile Lookup`](./logic-and-control-flow/contact-profile-lookup.js)

- First Element Finder - Returns the first number in a supplied array that returns `true` from the supplied function.  
  [`First Element Finder`](./logic-and-control-flow/first-element-finder.js)

- Pyramid Generator - Generates a text-based pyramid using configurable characters, row count, and directional logic.  
  [`Pyramid Generator`](./logic-and-control-flow/pyramid-generator.js)
- Card Counter - Blackjack-style card counting with a running count  
   [`Blackjack Card Counter`](./logic-and-control-flow/card-counter.js)
  > 📂 Folder: [`Logic & Control Flow`](./logic-and-control-flow)

### 🔁 Loops

Exercises focused on repeating logic across multiple values, tracking results over time, and processing collections step-by-step using loops.

- Find the length of the longest word in a sentence using iteration  
  [`Longest Word Length`](./loops/longest-word-length.js)

- Calculates the factorial of a number by iterating from 1 to the given value and multiplying each number together.  
  [`Factorial`](./loops/factorial.js)

- Uses a loop to check whether every character in one string appears in another string using a case-insensitive comparison (loop-focused solution).  
  [`String Character Inclusion`](./loops/string-character-inclusion.js)

- Splits a larger array into smaller arrays of a specified size using iterative grouping.  
  [`Array Splitting`](./loops/array-splitting.js)

- Repeats a provided string a specific number of times and returns the resulting string without using the JavaScript `String.repeat()` method.  
  [`Repeat String`](./loops/repeat-string.js)

- Finds the first letter from a case-insensitive, alphabetical string of letters.  
  [`Missing Letter Finder`](./loops/missing-letter-finder.js)

> 📂 Folder: [`Loops`](./loops)

### ➗ Math Basics

Practical exercises using arithmetic, formulas, and logical rules.

- Celsius → Fahrenheit conversion  
  [`Celsius to Fahrenheit`](./math-basics/convert-c-to-f.js)

- Fahrenheit → Celsius conversion  
  [`Fahrenheit to Celsius`](./math-basics/convert-f-to-c.js)

- Leap Year Checker - logic & modulo math  
  [`Leap Year Checker`](./math-basics/is-leap-year.js)

> 📂 Folder: [`Math Basics`](./math-basics)

### 🧵 String Manipulation

Exercises that work with slicing, formatting, masking, and rebuilding text.

- Mask Email - privacy-safe username masking  
  [`Mask Email`](./string-manipulation/mask-email.js)

- Reverse String - reverse the letters of a supplied string  
  [`Reverse String`](./string-manipulation/reverse-string.js)

- Truncate String - shorten long strings & append "..."  
  [`Truncate String`](./string-manipulation/truncate-string.js)

- Confirm String Ending - checks whether a string ends with a specified target substring using string slicing and length comparison.
  [`Confirm Ending`](./string-manipulation/confirm-ending.js)

> 📂 Folder: [`String Manipulation`](./string-manipulation)

### 📚 Arrays

Exercises focused on working with collections of data — including adding, removing, selecting, and displaying items while managing shared state safely.

Current labs include:

- Lunch Menu Manager — add, remove, display, and randomly select items from an array  
  [`Lunch Menu`](./arrays/lunch-menu.js)

- Largest Number Finder - finds the largest number in each sub-array and returns them in a new array.  
  [`Largest Number Finder`](./arrays/largest-number-finder.js)

- Slice and Splice Algorithm - Implements an algorithm that inserts the elements of one array into another at a specified index without mutating the original arrays.  
  [`Franken-Splice`](./arrays/franken-splice.js)

> 📂 Folder: [`Arrays`](./arrays)

## 🧩 Mini Projects

This section contains small, self-contained JavaScript programs that combine multiple concepts into a single working solution. These projects are designed to bridge the gap between individual concept labs and more complete, real-world program logic.

Current projects include:

- Trivia (Random Computer Answer) - A simple trivia simulation that randomly selects a question and an answer choice, then evaluates whether the computer's selection is correct.  
  [`Trivia`](./mini-projects/trivia-random-answer)

- Record Collection - Updates a nested record collection object based on a set of rules and test cases.  
  [`Record Collection`](./mini-projects/record-collection)

> 📂 Folder: [`Mini Projects`](./mini-projects)

## 🚀 Purpose

This repo exists so that I can:

- Practice writing JavaScript consistently
- Reinforce key programming concepts
- Build real problem-solving intuition
- Track progress over time
- Share my learning journey publicly

## 🛠️ Tools & Environment

- JavaScript (ES6+)
- Runs in browser console or Node.js

## 📚 Background

Many of these labs are inspired by:

- FreeCodeCamp
- LinkedIn Learning
- Coursera
- Personal exploration and practice challenges

---

## 🧭 Learning Roadmap

This repo will continue to grow as I work through more JavaScript concepts. Planned areas include:

- **Arrays & Iteration**
  - Looping patterns
  - Transforming lists of data
  - Searching and filtering

- **Objects & Structured Data**
  - Key–value pairs
  - Nested data structures
  - Basic data modeling

- **Functions & Reusability**
  - Parameter patterns
  - Default values
  - Composing small utilities

- **DOM Interaction (Later)**
  - Selecting and updating elements
  - Handling user events
  - Connecting logic to UI

- **Async & APIs (Longer-term)**
  - `fetch()` and working with APIs
  - Promises and async/await
  - Handling responses and errors

## ▶️ How to Run These Labs

These labs are written in plain JavaScript (ES6) and can be run in a few simple ways.

---

### ✅ Option 1 — Run in a Web Browser Console (Quick & Easy)

1. Open any web page
2. Right-click and select **Inspect** or **Developer Tools**
3. Go to the **Console** tab
4. Open any `.js` file from this repo
5. Copy the code and paste it into the console
6. Press **Enter**

You should see the output immediately.

This is the fastest way to experiment and modify values.

---

### 🖥 Option 2 — Run Using Node.js (Recommended for Practice)

If you have Node.js installed:

1. Download or clone this repo
2. Open a terminal in the project folder
3. Run a file like this:

```bash
    node math-basics/convert-c-to-f.js
```

or

```bash
    node logic-and-control-flow/card-counter.js
```

The console output will appear in your terminal

---

### 💡 Option 3 - Run in VS Code

1. Open the project folder in **VS Code**
2. Open any `.js` file
3. Right-click inside the file
4. Select **"Run Code"** (requires _Code Runner_ extension)

or us the built-in terminal:

```bash
    node filename.js
```

---

### ℹ️ No Frameworks Required

These labs run using **plain JavaScript only** - no browser libraries, build tools, or frameworks are needed. The goal is to practice core language concepts in the simplest way possible.

## ✅ Status

This repo will continue to grow as I learn more — stay tuned 🙂
