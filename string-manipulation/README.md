# 🧵 String Manipulation Labs

This folder contains JavaScript exercises focused on working with strings — including slicing, masking, formatting, and rebuilding text. Each lab practices real-world concepts such as input handling, UI-friendly formatting, and safe data display.

More labs will be added here as I continue learning 🙂

---

## 📌 Current Labs

### 1️⃣ Mask Email Function

This exercise practices JavaScript string manipulation by hiding part of an email address for privacy. The function returns a masked version where only the first and last character of the username are visible — the rest are replaced with `*`. The domain remains unchanged.

#### Example

```
jsmith@example.com -> j****h@example.com
```

#### Concepts Practiced

- Locating characters using `indexOf()`
- Extracting text using `slice()`
- Rebuilding strings with template literals
- Thinking about privacy-aware UI design
- Handling edge-case input safely

#### Reflection

This lab helped me practice breaking a problem into smaller steps, working with string indexes, and reconstructing text from multiple parts. It also introduced real-world privacy considerations — such as masking account details before displaying them to users.

---

### 2️⃣ Truncate String Function

This exercise truncates text when it exceeds a specified length and appends an ellipsis (`...`). If the string is already short enough, it returns the original value unchanged.

```
truncateString("Hello World",5) -> "Hello..."
```

#### Concepts Practiced

- Measuring string length with `.length`
- Extracting substrings with `.slice()`
- Conditional logic to handle multiple outcomes
- Writing small reusable utility functions

#### Reflection

This lab helped reinforce how conditional logic and string length checks work together. It also connects directly to real UI patterns — like shortening long titles or preview text without altering the underlying data.

---

## 🚀 Purpose of This Folder

- Practice working with text-based data
- Build clean, readable string functions
- Reinforce core JavaScript fundamentals
- Document growth and learning over time


#### Example

