# 📚 Array Manipulation Labs

## 📝 Description

This folder contains JavaScript exercises focused on working with arrays — including adding, removing, selecting, and displaying items. These labs practice real-world array operations, state management, and basic safety checks.

More array-focused practice labs will be added here as I continue learning.

---

## 🍽️ Lunch Menu Manager

This exercise simulates managing a lunch menu using an array. The program allows items to be added or removed from both the beginning and end of the menu, randomly selects an item, and displays the current menu contents.

### 📌 Example Behavior

```
"Tacos" added to the end of the lunch menu.
"Sushi" added to the start of the lunch menu.
"Burger" removed from the end of the lunch menu.
Randomly selected lunch: Pizza
Menu items: Soup, Tacos, Pizza
```

### 🛠️ Concepts Practiced

- Adding items with `push()` and `unshift()`
- Removing items with `pop()` and `shift()`
- Accessing array length for safety checks
- Selecting random elements using `Math.random()`
- Displaying array contents with `join()`
- Mutating shared state intentionally and safely

### 💡 Reflection

This lab reinforced how arrays can be used to manage collections of data that change over time. It also emphasized the importance of handling empty arrays safely and writing clear, readable functions that modify shared state in predictable ways.

---

## 🔢 Largest Number Finder

This exercise builds a function that accepts an array of arrays and returns a new array containing the largest number from each sub-array.

### 📌 Example Behavior

```
largestOfAll([[1, 2, 3], [4, 5], [9, 0]]) → [3, 5, 9]
```

### 🛠️ Concepts Practiced

- Iterating over nested arrays
- Working with multidimensional data structures
- Using the spread operator with `Math.max()`
- Aggregating results into a new array
- Keeping functions pure and predictable

### 💡 Reflection

This lab reinforced how to work with nested arrays and extract meaningful values from each sub-collection. It highlighted how built-in utilities like `Math.max()` can simplify logic when combined with array traversal, while still keeping the core problem focused on data structure manipulation.

---

## 🧬 Slice and Splice Algorithm

This exercise builds a function that inserts the elements of one array into another array at a specified index, returning a new array without modifying either source array.

### 📌 Example Behavior

```
frankenSplice([1, 2], ["a", "b"], 1) → ["a", 1, 2, "b"]
```

### 🛠️ Concepts Practiced

- Working with array copies to preserve immutability
- Using `splice()` for controlled insertion
- Managing insertion indexes during iteration
- Combining arrays without mutating source data
- Understanding how array methods affect structure

### 💡 Reflection

This lab reinforced the importance of preserving original data when combining arrays. It highlighted how array methods like `splice()` can be safely used when operating on copies, and how careful index management ensures elements are inserted in the correct order.

---

## 🧹 Falsy Remover (Bouncer)

This exercise filters an input array and returns a new array containing only **truthy** values. Any values that evaluate to `false` in a Boolean context are removed.

The solution manually iterates through the array, checks each value's truthiness, and builds a new array with only valid entries.

### 📌 Example Behavior

```
bouncer([7, 'ate', '', false, 9]) → [7, 'ate', 9]
bouncer([false, null, 0, NaN, undefined, '']) → []
bouncer([null, NaN, 1, 2, undefined]) → [1, 2]
```

### 🛠️ Concepts Practiced

- Iterating over arrays with loops
- Understanding **truthy vs falsy** values in JavaScript
- Using conditional logic to filter data
- Constructing new arrays without mutating the original
- Boolean evaluation in control flow

### 💡 Reflection

This lab introduced a core data-processing pattern: **scan, test, and keep/discard**. It reinforced how JavaScript evaluates values in Boolean contexts and how arrays can be filtered using conditional logic. This exercise serves as a foundational step toward more advanced array methods like `.filter()`, which automate this pattern in modern JavaScript.

---

## 🔗 Unite Unique Arrays

This exercise merges multiple arrays into a single array that contains only unique values, while preserving the order in which values first appear.

The solution manually iterates through each input array and builds a new array by adding values only if they have not already been included.

### 📌 Example Behavior

```
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) → [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1]) → [1, 2, 3, 5]
uniteUnique(['a', 1, true], [1, 'a', false]) → ['a', 1, true, false]
```

### 🛠️ Concepts Practiced

- Working with multiple arrays using rest parameters
- Iterating through nested arrays
- Checking for uniqueness with `.includes()`
- Preserving insertion order while filtering duplicates
- Understanding value comparison in JavaScript (including how NaN behaves)
- Building new arrays without mutating the originals

### 💡 Reflection

This lab reinforced a fundamental array-processing pattern: scan, check, and append. It also highlighted how JavaScript determines value equality, which is especially important when working with mixed data types. The approach taken here mirrors how higher-level tools like Set can be used for deduplication, but implementing it manually helps build a deeper understanding of how uniqueness is enforced step-by-step.

---

## 🧬 DNA Pair Generator

This exercise builds DNA base pairs from an input string of DNA bases. Each character in the string is paired with its complementary base according to biological pairing rules.

The function processes the sequence character by character and returns a two-dimensional array representing the paired structure.

### 📌 Example Behavior

```
pairElement("ATCGA") → [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("ttgag") → [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
```

### 🛠️ Concepts Practiced

- Iterating through strings character-by-character
- Building nested arrays (arrays within arrays)
- Applying rule-based conditional logic
- Normalizing input for consistent comparison
- Mapping single values to structured data

### 💡 Reflection

This lab introduces structured data construction by transforming a simple string into a two-dimensional array. It reinforces how rule-based logic can be used to map individual values into related pairs, and demonstrates how nested data structures are created programmatically. The exercise also highlights the importance of normalizing input before processing.

---

## ⏭️ Drop Elements Until Condition Met

This exercise removes elements from the beginning of an array until a specified condition is satisfied. The function uses a callback to test each element and returns the remaining portion of the array starting from the first element that passes the test.

### 📌 Example Behavior

```
dropElements([1, 2, 3, 4], n => n >= 3) → [3, 4]
dropElements([0, 1, 0, 1], n => n === 1) → [1, 0, 1]
dropElements([1, 2, 3, 4], n => n > 5) → []
```

### 🛠️ Concepts Practiced

- Iterating through arrays with loop control
- Using callback functions as parameters
- Conditional logic to determine stopping points
- Creating subarrays using `.slice()`
- Returning new arrays without mutating the original

### 💡 Reflection

This lab demonstrates how higher-order functions can influence control flow within array processing. It reinforces the concept of using callback functions to determine behavior dynamically and shows how array slicing can be used to efficiently return a portion of data based on a condition. The exercise also highlights the usefulness of early returns in simplifying logic.

---

## 💡 Topic Reflection

These labs focused on core array operations used in real applications — managing changing collections, extracting values from nested data, and combining arrays safely. Together, they reinforced the difference between mutating and non-mutating approaches and built confidence working with arrays as a primary data structure.
