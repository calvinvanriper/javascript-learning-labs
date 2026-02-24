# 📝 Note Taking App (Accessible Content Editor)

## 📝 Description

An accessible note-taking interface built using a contenteditable region and dynamic status updates.  
This project focuses on managing editable DOM content, detecting state changes, and providing accessible feedback using ARIA live regions.

## 🧠 What This Project Does

- Provides an editable note area using the contenteditable attribute
- Detects when the user finishes editing the note
- Tracks note content state to prevent unnecessary updates
- Displays a confirmation message when changes are saved
- Uses an ARIA live region to announce status updates to assistive technologies
- Clears outdated status messages when editing begins

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Managing editable content using contenteditable
- Tracking application state using DOM as the source of truth
- Detecting and responding to focus and blur events
- Using ARIA live regions (aria-live) for accessible status updates
- Preventing unnecessary UI updates through state comparison

## 📌 Example Behavior

```
User clicks inside note editor
→ Status message clears

User edits note content and clicks outside editor
→ "Note saved successfully!" message appears
→ Screen readers announce status update via aria-live region

User clicks editor again without changes
→ No new status message appears
```

## 💡 Reflection

This project demonstrates how editable DOM elements can serve as both user input and application state.  
Tracking content changes and responding to blur events reinforces how UI state transitions occur in response to user interaction.

Using an ARIA live region ensures status updates remain accessible, allowing assistive technologies to interpret changes without requiring visual feedback.

This lab reinforces the importance of synchronizing user actions, DOM state, and accessibility semantics to create responsive and inclusive interfaces.

## 🔗 Live Demo

[`Note Taking App`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/note-taking-app/)

## 🧪 CodePen Version

[`CodePen – Note Taking App`](https://codepen.io/calvinvanriper/full/yyaBmLW)
