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
These labs document my journey learning JavaScript through small, focused practical exercises.

### 🧵 String Manipulation
Exercises that work with slicing, formatting, masking, and rebuilding text.

- Mask Email - privacy-safe username masking  
  [`string-manipulation/mask-email.js`](./string-manipulation/mask-email.js)

- Truncate String - shorten long strings & append "..."  
  [`string-manipulation/truncate-string.js`](./string-manipulation/truncate-string.js)

📁 Folder: [`string-manipulation/`](./string-manipulation)
---

### ➗ Math Basics
Practical exercises using arithmetic, formulas, and logical rules.

- Celsius → Fahrenheit conversion  
  [`math-basics/convert-c-to-f.js`](./math-basics/convert-c-to-f.js)

- Fahrenheit → Celsius conversion  
  [`math-basics/convert-f-to-c.js`](./math-basics/convert-f-to-c.js)

- Leap Year Checker - logic & modulo math  
  [`math-basics/is-leap-year.js`](./math-basics/is-leap-year.js)

📁 Folder: [`math-basics/`](./math-basics)
---

### 🔁 [Logic & Control Flow](./logic-and-control-flow/)

Exercises focused on decision-making, branching, and tracking state across multiple function calls.

Current labs include:

- Blackjack-style card counting with a running count  
  [`logic-and-control-flow/card-counter.js`](./logic-and-control-flow/card-counter.js)

---

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
4. Select **"Run Code"** (requires *Code Runner* extension)

or us the built-in terminal:

```bashi 
    node filename.js
```

---

### ℹ️ No Frameworks Required

These labs run using **plain JavaScript only** - no browser libraries, build tools, or frameworks are needed. The goal is to practice core language concepts in the simplest way possible.

## ✅ Status

This repo will continue to grow as I learn more — stay tuned 🙂
