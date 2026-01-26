# 📚 Array Manipulation Labs

## 📝 Description

This folder contains JavaScript exercises focused on working with arrays — including adding, removing, selecting, and displaying items. These labs practice real-world array operations, state management, and defensive programming techniques.

More array-focused practice labs will be added here as I continue learning.

---

## 1️⃣ Lunch Menu Manager

This exercise simulates managing a lunch menu using an array. The program allows items to be added or removed from both the beginning and end of the menu, randomly selects an item, and displays the current menu contents.

### Example Actions

```
"Tacos" added to the end of the lunch menu.
"Sushi" added to the start of the lunch menu.
"Burger" removed from the end of the lunch menu.
Randomly selected lunch: Pizza
Menu items: Soup, Tacos, Pizza
```

### Concepts Practiced

- Adding items with `push()` and `unshift()`
- Removing items with `pop()` and `shift()`
- Accessing array length for safety checks
- Selecting random elements using `Math.random()`
- Displaying array contents with `join()`
- Mutating shared state intentionally and safely

## 💡 Reflection

This lab reinforced how arrays can be used to manage collections of data that change over time. It also emphasized the importance of handling empty arrays safely and writing clear, readable functions that modify shared state in predictable ways.

---

## 🔢 Largest Number Finder

This exercise builds a function that accepts an array of arrays and returns a new array containing the largest number from each sub-array.

### Example

```
largestOfAll([[1, 2, 3], [4, 5], [9, 0]]) → [3, 5, 9]
```

### Concepts Practiced

- Iterating over nested arrays
- Working with multidimensional data structures
- Using the spread operator with `Math.max()`
- Aggregating results into a new array
- Keeping functions pure and predictable

### Reflection

This lab reinforced how to work with nested arrays and extract meaningful values from each sub-collection. It highlighted how built-in utilities like `Math.max()` can simplify logic when combined with array traversal, while still keeping the core problem focused on data structure manipulation.

---

## 🧬 Slice and Splice Algorithm

This exercise builds a function that inserts the elements of one array into another array at a specified index, returning a new array without modifying either source array.

### Example

```
frankenSplice([1, 2], ["a", "b"], 1) → ["a", 1, 2, "b"]
```

### Concepts Practiced

- Working with array copies to preserve immutability
- Using `splice()` for controlled insertion
- Managing insertion indexes during iteration
- Combining arrays without mutating source data
- Understanding how array methods affect structure

### Reflection

This lab reinforced the importance of preserving original data when combining arrays. It highlighted how array methods like `splice()` can be safely used when operating on copies, and how careful index management ensures elements are inserted in the correct order.
