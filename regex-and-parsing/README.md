# RegEx & Parsing

## 📝 Description

This section focuses on using **regular expressions (RegEx)** to analyze,
match, transform, and validate text data in JavaScript.

The labs explore how pattern matching can be used for tasks such as
filtering content, validating input, converting text formats, and
building simple parsing utilities.

Some labs focus purely on **string transformation functions**, while
others demonstrate how RegEx can power **interactive DOM-based tools**
that process user input in real time.

---

## Labs

## 🛡️ Spam Filter

A DOM-based project that scans user input and detects banned or
suspicious patterns using regular expressions.

### 📌 Example Behavior (Spam Filter)

```javascript
Input:
"Buy cheap crypto now for free money!!!"

Output:
Spam detected
```

### 🛠️ Concepts Practiced (Spam Filter)

- RegEx pattern matching
- Detecting banned keywords
- DOM input handling
- Conditional UI feedback

### 💡 Reflection (Spam Filter)

This lab demonstrates how regular expressions can be used to build
simple content moderation tools. It also reinforces how pattern
matching integrates with real-time user input in the browser.

---

## 🔁 Palindrome Checker

A small interactive tool that determines whether a given word or phrase
is a palindrome.

### 📌 Example Behavior (Palindrome Checker)

```javascript
Input:
"A man, a plan, a canal, Panama"

Output:
Palindrome detected
```

### 🛠️ Concepts Practiced (Palindrome Checker)

- RegEx text normalization
- Removing punctuation and whitespace
- String reversal logic
- DOM interaction

### 💡 Reflection (Palindrome Checker)

This project highlights how regular expressions simplify input
normalization by stripping characters that should not affect
palindrome validation.

---

## 🧪 RegEx Sandbox

An interactive environment for experimenting with regular expressions
against arbitrary text input.

### 📌 Example Behavior (RegEx Sandbox)

```javascript
Pattern:
\d+

Input:
"There are 42 apples and 13 oranges"

Matches:
42
13
```

### 🛠️ Concepts Practiced (RegEx Sandbox)

- Dynamic RegEx construction
- Pattern testing
- DOM rendering of matches
- Interactive input handling

### 💡 Reflection (RegEx Sandbox)

This project provides a safe environment for experimenting with
regular expressions and observing how different patterns behave
against sample text.

---

## 🔗 Spinal Case Converter

A utility function that converts strings into **spinal-case** format.

### 📌 Example Behavior (Spinal Case Converter)

```javascript
spinalCase('This Is Spinal Tap');

Output: 'this-is-spinal-tap';
```

### 🛠️ Concepts Practiced (Spinal Case Converter)

- RegEx replacement patterns
- Detecting word boundaries
- String normalization

### 💡 Reflection (Spinal Case Converter)

This lab reinforces how regular expressions can identify and transform
text patterns when converting between naming conventions.

---

## 🐷 Pig Latin Translator

A function that converts English words into **Pig Latin** following
common transformation rules.

### 📌 Example Behavior (Pig Latin Translator)

```javascript
translatePigLatin('glove');

Output: 'oveglay';
```

### 🛠️ Concepts Practiced (Pig Latin Translator)

- RegEx pattern detection
- Conditional transformations
- String slicing and concatenation

### 💡 Reflection (Pig Latin Translator)

This lab demonstrates how pattern matching can guide conditional
string transformations based on the structure of the input.

---

## 🔄 Smart Replace

A function that replaces a target word while preserving the original
word’s capitalization.

### 📌 Example Behavior (Smart Replace)

```javascript
smartReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');

Output: 'He is Sitting on the couch';
```

### 🛠️ Concepts Practiced (Smart Replace)

- RegEx search and replace
- Case detection
- Conditional text transformation

### 💡 Reflection (Smart Replace)

This exercise illustrates how RegEx can be combined with string
analysis to preserve formatting while modifying text content.

---

## 💡 Topic Reflection

Regular expressions are a powerful tool for analyzing and transforming
text. These labs demonstrate how pattern matching can simplify complex
string operations that would otherwise require verbose parsing logic.

Through these exercises, RegEx becomes a practical tool for building
input validation, text filters, format converters, and lightweight
parsing utilities in JavaScript.
