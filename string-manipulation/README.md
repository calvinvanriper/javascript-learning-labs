# String Manipulation Labs

## 📝 Description

This folder contains JavaScript exercises focused on working with strings — including slicing, masking, formatting, and rebuilding text. Each lab practices real-world concepts such as input handling, UI-friendly formatting, and safe data display.

More string-focused labs will be added here as I continue learning.

---

## 📧 Mask Email Function

This exercise practices JavaScript string manipulation by hiding part of an email address for privacy. The function returns a masked version where only the first and last character of the username are visible — the rest are replaced with `*`. The domain remains unchanged.

### 📌 Example Behavior (Mask Email)

```text
jsmith@example.com → j****h@example.com
```

### 🛠️ Concepts Practiced (Mask Email)

- Locating characters using `indexOf()`
- Extracting text using `slice()`
- Rebuilding strings with template literals
- Thinking about privacy-aware UI design

### 💡 Reflection (Mask Email)

This lab helped me practice breaking a problem into smaller steps, working with string indexes, and reconstructing text from multiple parts. It also introduced real-world privacy considerations — such as masking account details before displaying them to users.

---

## 🔁 Reverse String Function

This exercise builds a function that reverses a string character-by-character without using JavaScript’s built-in `.reverse()` method. The goal is to practice manual string traversal and reconstruction using core language features.

### 📌 Example Behavior (Reverse String)

```bash
reverseString("hello") → "olleh"
reverseString("JavaScript") → "tpircSavaJ"
```

### 🛠️ Concepts Practiced (Reverse String)

- Iterating over strings using loops
- Accessing characters by index
- Rebuilding strings immutably
- Understanding string traversal order
- Avoiding built-in shortcuts to reinforce fundamentals

### 💡 Reflection (Reverse String)

This lab reinforced how strings can be traversed like arrays and how new strings must be constructed explicitly due to string immutability in JavaScript. It also helped solidify loop control and index-based access — foundational skills that apply across many algorithms and UI-related string transformations.

---

## ✂️ Truncate String Function

This exercise truncates text when it exceeds a specified length and appends an ellipsis (`...`). If the string is already short enough, it returns the original value unchanged.

### 📌 Example Behavior (Truncate String)

```bash
truncateString("Hello World",5) → "Hello..."
```

### 🛠️ Concepts Practiced (Truncate String)

- Measuring string length with `.length`
- Extracting substrings with `.slice()`
- Conditional logic to handle multiple outcomes
- Writing small reusable utility functions

### 💡 Reflection (Truncate String)

This lab helped reinforce how conditional logic and string length checks work together. It also connects directly to real UI patterns — like shortening long titles or preview text without altering the underlying data.

---

## ✅ Confirm String Ending

This exercise checks whether a given string ends with a specified target string. The solution was implemented without using `.endsWith()`, relying instead on string slicing and length comparison.

### 📌 Example Behavior (Confirm String Ending)

```javascript
confirmEnding("Bastian", "n") → true
confirmEnding("Open Sesame", "sage") → false
```

### 🛠️ Concepts Practiced (Confirm String Ending)

- Extracting substrings using negative indexes
- Comparing string segments for equality
- Re-creating built-in behavior using core methods
- Writing clear boolean-returning functions

### 💡 Reflection (Confirm String Ending)

This lab helped solidify my understanding of how string indexing works and how built-in methods can be recreated using fundamental operations. It also reinforced the importance of reading problem constraints carefully and choosing simple, direct solutions.

---

## 🔠 Title Case Converter

This exercise converts an input string into **title case**, meaning the first letter of every word is capitalized while the remaining letters are lowercase.

The solution normalizes the string, breaks it into individual words, transforms each word, and then reconstructs the final result.

### 📌 Example Behavior (Title Case Converter)

```bash
titleCase("a little teapot") → "A Little Teapot"
titleCase("sHoRt AnD sToUt") → "Short And Stout"
titleCase("HERE IS MY HANDLE") → "Here Is My Handle"
```

### 🛠️ Concepts Practiced (Title Case Converter)

- String normalization with `.toLowerCase()`
- Converting strings to arrays using `.split()`
- Iterating over arrays to transform elements
- Accessing and modifying specific characters in a string
- Rebuilding strings using `.join()`
- Preventing errors from empty substrings (basic input safety)

### 💡 Reflection (Title Case Converter)

This lab introduced a **multi-step transformation workflow**, moving beyond single-method string operations. It reinforced how strings and arrays can work together to process text data, a pattern that appears frequently in real-world applications such as formatting user input, cleaning data, and preparing for text display. It also emphasized the importance of thinking about edge cases like extra spaces or inconsistent capitalization.

---

## 🔐 Random Password Generator

This mini project generates a random password of a specified length using a predefined set of uppercase letters, lowercase letters, numbers, and symbols.

### 📌 Example Behavior (Password Generator)

```bash
generatePassword(8) → "aZ3$kL9!"
generatePassword(15) → "Qf2@Lm9!xZ1#pRt"
```

### 🛠️ Concepts Practiced (Password Generator)

- Generating random values with `Math.random()`
- Using string indexing to select random characters
- Constructing strings dynamically
- Loop control with numeric input
- Understanding pseudo-randomness in JavaScript

### 💡 Reflection (Password Generator)

This lab demonstrates how randomness can be used to generate dynamic output based on user input. It also highlights the difference between simple pseudo-random generation and more secure random generation methods used in real-world applications.

---

## 🧾 HTML Entity Converter

This exercise replaces reserved HTML characters in a string with their corresponding HTML entity representations. The function scans the input string character-by-character and substitutes only the characters that require escaping.

### 📌 Example Behavior (HTML Entity Converter)

```bash
convertHTML("Dolce & Gabbana") → "Dolce &amp; Gabbana"
convertHTML("Hamburgers < Pizza < Tacos") → "Hamburgers &lt; Pizza &lt; Tacos"
convertHTML('Stuff in "quotation marks"') → "Stuff in &quot;quotation marks&quot;"
```

### 🛠️ Concepts Practiced (HTML Entity Converter)

- Iterating through strings character-by-character
- Replacing specific characters using lookup mapping
- Constructing new strings dynamically
- Understanding HTML entity encoding
- Preventing unintended interpretation of special characters

### 💡 Reflection (HTML Entity Converter)

This lab introduces the concept of HTML escaping, an important real-world string processing task. It reinforces how strings can be transformed safely by mapping specific characters to alternate representations. The exercise also highlights how controlled character replacement is used in web development to ensure text is displayed correctly without being interpreted as markup.

---

## 💡 Topic Reflection

These labs focused on practical string manipulation patterns commonly used in real-world applications. Each exercise reinforced how small, focused string operations can be combined with conditional logic to safely format, validate, and display text.

Together, these labs helped build confidence working with user-facing data while maintaining clarity, readability, and intent in string-based logic.
