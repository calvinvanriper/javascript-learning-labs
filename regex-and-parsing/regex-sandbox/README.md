# RegEx Sandbox

## 📝 Description

This project provides an interactive environment for experimenting
with regular expressions. Users can enter a pattern and test it
against a block of text to see which portions of the input match
the specified expression.

The sandbox allows developers to quickly evaluate how different
patterns behave without needing to write additional code.

---

## 🧠 What This Project Does

The application accepts a user-defined regular expression and
applies it to a sample text input. All matches are identified
and displayed in the interface.

Core functionality includes:

- Reading user-defined patterns from the DOM
- Creating dynamic regular expressions
- Executing pattern matching against input text
- Displaying detected matches in the UI

---

## 🛠️ Concepts Practiced

- Dynamic RegEx construction
- Pattern matching and text scanning
- DOM input handling
- Rendering match results in the interface
- Event-driven interaction

---

## 📌 Example Behavior

```javascript
Pattern:
\d+

Input:
"There are 42 apples and 13 oranges"

Matches:
42
13

Pattern:
[A-Z]\w+

Input:
"JavaScript powers the Web"

Matches:
JavaScript
Web
```

---

## 💡 Reflection

This project demonstrates how regular expressions can be built
dynamically and applied to arbitrary text input.

By allowing users to experiment with patterns and observe matches
in real time, the sandbox highlights how RegEx can be used as a
powerful tool for parsing, validation, and text analysis.
