# Spam Filter

## 📝 Description

This project demonstrates how regular expressions can be used to
identify and flag suspicious or unwanted content in user-provided
text. The interface allows users to enter a message and evaluate it
against predefined spam detection patterns.

The project highlights how pattern matching can power simple
moderation tools commonly used in messaging systems, comment sections,
and form validation.

---

## 🧠 What This Project Does

The application accepts text input from the user and evaluates it
against a set of regular expression patterns designed to detect spam.

When a match is found, the interface notifies the user that spam-like
content has been detected.

Core functionality includes:

- Reading user input from the DOM
- Applying RegEx pattern matching
- Determining whether spam indicators exist
- Updating the UI with the detection result

---

## 🛠️ Concepts Practiced

- Regular expression pattern matching
- Text scanning and validation
- DOM element selection
- Event listeners for user interaction
- Conditional UI updates

---

## 📌 Example Behavior

```javascript
Input:
"Buy cheap crypto now!!! Free money!!"

Output:
Spam detected

Input:
"Hey, are we still meeting for lunch tomorrow?"

Output:
No spam detected
```

---

## 💡 Reflection

This project illustrates how regular expressions can be applied to
real-world problems such as spam detection and content filtering.

By combining pattern matching with DOM interaction, the application
demonstrates how user input can be analyzed and responded to in
real time within a web interface.
