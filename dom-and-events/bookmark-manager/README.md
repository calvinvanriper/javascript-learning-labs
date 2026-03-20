# 🔖 Bookmark Manager

## 📝 Description

A category-based bookmark manager that allows users to add, view, and delete saved links using the browser’s localStorage API.
This project focuses on organizing browser data by category, dynamically rendering filtered content, and persisting bookmark state across sessions.

## 🧠 What This Project Does

- Lets users select a bookmark category from a dropdown menu
- Allows users to add bookmarks with a name and URL
- Saves bookmarks to localStorage so they persist across page refreshes
- Filters and displays bookmarks by the selected category
- Allows users to select and delete an existing bookmark
- Updates section headings dynamically based on the active category
- Switches between main menu, form view, and category list view

## 🛠️ Concepts Practiced

- DOM selection and event listeners
- Form handling and input validation
- Managing UI state across multiple sections
- Persisting structured data with localStorage
- Parsing and validating stored JSON data
- Filtering arrays of objects by category
- Dynamically rendering bookmark lists to the DOM
- Using semantic HTML for forms and list-based content

## 📌 Example Behavior

```text
User selects "Work" category
→ Clicks "Add Bookmark"
→ Bookmark form opens with "Work" heading

User enters bookmark name and URL
→ Clicks "Add Bookmark"
→ Bookmark is saved to localStorage

User clicks "View Category"
→ Saved bookmarks in the selected category appear

User selects a bookmark and clicks "Delete Bookmark"
→ Bookmark is removed from the list
→ localStorage updates to reflect the deletion
```

## 💡 Reflection

This project demonstrates how browser storage can support simple content management workflows in a frontend application.
Instead of treating localStorage as a one-time save feature, the app uses it as a persistent data source that drives filtered rendering and deletion behavior.

Working across multiple interface sections reinforces how application state can be represented through both stored data and visible UI state.
Rendering bookmarks by category also introduces a practical pattern for filtering structured data and presenting only the relevant results to the user.

This lab helps bridge the gap between isolated DOM interactions and more complete user-facing applications that manage stored data over time.

## 🔗 Live Demo

[`Bookmark Manager`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/bookmark-manager/)

## 🧪 CodePen Version

[`CodePen – Bookmark Manager`](https://codepen.io/calvinvanriper/full/PwGKENP)
