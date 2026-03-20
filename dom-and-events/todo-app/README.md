# ✅ Todo App (Local Storage Task Manager)

## 📝 Description

A dynamic todo application that allows users to create, edit, and delete tasks with persistent storage using the browser’s localStorage API.
This project focuses on managing application state through the DOM while synchronizing data with local storage.

## 🧠 What This Project Does

- Allows users to create tasks with title, date, and description
- Persists tasks across sessions using localStorage
- Supports editing existing tasks with pre-filled form data
- Prevents accidental loss of unsaved changes using a confirmation dialog
- Dynamically renders task data to the DOM
- Updates UI state in response to user actions (add, edit, delete)
- Uses event delegation to handle interactions on dynamically created elements

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Event delegation for dynamic elements
- Managing application state with arrays and objects
- Persisting data using localStorage (JSON serialization/deserialization)
- Conditional UI rendering based on state
- Form handling and validation
- Synchronizing DOM state with stored data
- Using semantic HTML and accessible dialog elements

## 📌 Example Behavior

```text
User clicks "Add New Task"
→ Task form appears

User submits a task
→ Task is added to the list
→ Task is saved to localStorage

User clicks "Edit" on a task
→ Form opens with existing task data
→ Button updates to "Update Task"

User modifies and submits
→ Task updates in UI and localStorage

User attempts to close form with unsaved changes
→ Confirmation dialog appears

User clicks "Delete"
→ Task is removed from UI and localStorage
```

## 💡 Reflection

This project demonstrates how a frontend application manages and persists state across user interactions.
Instead of relying solely on in-memory data, the application synchronizes its state with localStorage, allowing data to persist between sessions.

Implementing edit and delete functionality reinforces how UI state and data structures must remain aligned.
The use of event delegation highlights how dynamic DOM elements can be managed efficiently without attaching multiple event listeners.

This lab represents a shift from isolated DOM manipulation toward building interactive, state-driven applications that resemble real-world frontend systems.

## 🔗 Live Demo

[`Todo App`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/todo-app/)

## 🧪 CodePen Version

[`CodePen – Todo App`](https://codepen.io/calvinvanriper/full/gbwxXZV)
