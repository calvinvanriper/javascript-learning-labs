# 😀 Emoji Reactor

## 📝 Description

This project is an interactive emotion rating interface where users click emoji buttons to track how strongly they feel a particular emotion. Each click increments a visible counter, and the interface prevents counts from exceeding a defined maximum.

The project focuses on reading and updating UI state directly from the DOM.

## 🧠 What This Project Does

- Displays emoji buttons with visible count indicators (e.g., 0/10)
- Detects user clicks on emoji buttons
- Parses the current count from the displayed text
- Increments the count up to a maximum of 10
- Prevents additional increments once the maximum is reached
- Updates the count display dynamically

## 🛠️ Concepts Practiced

- DOM selection with `querySelector` and `querySelectorAll`
- Event handling and reusable event listeners
- Using the event object to determine the clicked element
- Parsing strings to extract numeric values
- Converting strings to numbers using unary `+`
- Guard clauses for conditional logic
- Updating DOM text content based on state

## 📌 Example Behavior

```
Initial state:
😊 0/10

After clicking three times:
😊 3/10

After reaching the maximum:
😊 10/10 (further clicks have no effect)
```

# 💡 Reflection

This project deepened understanding of how the DOM can serve as a source of application state. Instead of storing values only in variables, the current state is read from the interface, processed through logic, and written back to the DOM. This read–compute–render cycle mirrors the core behavior of modern front-end frameworks and strengthens event-driven programming skills.

## 🔗 Live Demo

[`Emoji Reactor`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/emoji-reactor/)

## 🧪 CodePen Version

[`CodePen - Emoji Reactor`](https://codepen.io/calvinvanriper/full/gbMdBer)
