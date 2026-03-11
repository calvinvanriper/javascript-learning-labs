# Palindrome Checker

## 📝 Description

This project determines whether a word or phrase is a palindrome.
A palindrome reads the same forward and backward when punctuation,
spacing, and letter casing are ignored.

The interface allows users to enter text and evaluate whether the
normalized string satisfies the palindrome condition.

---

## 🧠 What This Project Does

The application reads text entered by the user and normalizes it
by removing punctuation, whitespace, and capitalization differences.

The cleaned string is then compared with its reversed form to
determine whether the input is a palindrome. The result is displayed
to the user through the interface.

Core functionality includes:

- Reading user input from the DOM
- Using regular expressions to normalize text
- Reversing and comparing strings
- Displaying validation results in the UI

---

## 🛠️ Concepts Practiced

- Regular expression text normalization
- Removing non-alphanumeric characters
- String reversal techniques
- DOM interaction and event handling
- Conditional UI updates

---

## 📌 Example Behavior

```javascript
Input:
"A man, a plan, a canal, Panama"

Output:
Palindrome detected

Input:
"JavaScript"

Output:
Not a palindrome
```

---

## 💡 Reflection

This project demonstrates how regular expressions simplify input
normalization before performing logical checks on text data.

By combining RegEx preprocessing with string comparison and DOM
interaction, the application provides a practical example of how
user input can be validated in real time within a web interface.
