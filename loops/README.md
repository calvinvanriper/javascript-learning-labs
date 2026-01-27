# Loops Labs

## 📝 Description

This folder contains JavaScript exercises focused on using loops to repeat logic across multiple values. These labs emphasize iteration, tracking values over time, and building results step-by-step as a program processes data.

The goal of these exercises is to practice thinking about how repeated operations work, rather than solving a problem for a single value only.

---

## 📏 Longest Word Length Lab

This lab finds the length of the longest word in a sentence. The program splits the sentence into individual words, loops through each word, and tracks the largest word length encountered.

### 📌 Example Behavior

```
findLongestWordLength("The quick brown fox") → 5
```

### 🛠️ Concepts Practiced

- Iterating through a list of values using a loop
- Tracking a running maximum
- Working with string lengths
- Breaking a string into words using `trim()` and `split(" ")`

### 💡 Reflection

This lab reinforced how loops can be used to track a value that changes conditionally over time. Instead of checking each word manually, the program maintains a running maximum, demonstrating how iterative comparison allows a solution to scale naturally with input size.

---

## 🔢 Factorial Calculator Lab

This lab calculates the factorial of a given number by repeatedly multiplying values from 1 up to the provided number. The program uses loops to build the sequence of numbers and then compute the final result.

### 📌 Example Behavior

```
factorialCalculator(5) → 120
```

### 🛠️ Concepts Practiced

- Using a `while` loop to build a sequence of values
- Using a `for...of` loop to process each value
- Tracking a running product across iterations
- Understanding how loop-controlled repetition builds a result over time

### 💡 Reflection

This exercise emphasized how loops can build results through repeated accumulation. It demonstrated how a single value can evolve step-by-step within a loop, highlighting how iteration allows mathematical processes to be translated into program logic.

---

## 🔤 Mutation (String Comparison) Lab

This lab checks whether every character in one string exists within another string. The program loops through each character of the second string and verifies its presence in the first string using a case-insensitive comparison.

### 📌 Example Behavior

```
mutation(["hello", "hey"]) → false
mutation(["Mary", "Army"]) → true
```

### 🛠️ Concepts Practiced

- Iterating through characters using a loop
- Comparing values across two data sets
- Using early returns to fail fast
- Case-insensitive string comparison
- Applying conditional logic within loops

### 💡 Reflection

This lab showed how loops can be used to compare two data sets element by element. It reinforced the usefulness of early returns inside loops, where the program can stop as soon as a rule fails, improving both clarity and efficiency.

---

## 📦 Array Splitting Lab

This lab splits a larger array into smaller arrays of a specified size. The program uses a loop to step through the original array and group elements together into new sub-arrays.

### 📌 Example Behavior

```
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) → [[0, 1], [2, 3], [4, 5]]
```

### 🛠️ Concepts Practiced

- Iterating through an array using a loop
- Controlling loop increments based on a dynamic value
- Using array slicing to create sub-arrays
- Building a new array from processed results

### 💡 Reflection

This lab reinforced how loops can move through data in controlled increments rather than one step at a time. It demonstrated how iteration can be combined with slicing to restructure data, a pattern frequently used when transforming or grouping information.

---

## 🔁 String Repetition Lab

This lab repeats a provided string a specific number of times and returns the resulting string. It produces the same outcome as the built-in JavaScript `String.repeat()` method, but uses explicit loop logic due to constraints that prohibit that method.

### 📌 Example Behavior

```
repeatStringNumTimes("*", 3) → "***"
repeatStringNumTimes("abc", 4) → "abcabcabcabc"
repeatStringNumTimes("abc", -2) → ""
```

### 🛠️ Concepts Practiced

- Repeating string concatenation using a loop
- Building a result incrementally across iterations
- Input validation for zero and negative repeat counts
- Applying control flow to enforce problem constraints

### 💡 Reflection

This lab emphasized how loops allow repeated construction of output from a single input. It also reinforced how iteration can enforce constraints and handle edge cases, ensuring the program behaves predictably even with unusual inputs.

---

## 🔍 Missing Letter Finder Lab

This lab finds the first missing letter in a case-insensitive, alphabetical string of letters. The input string may contain uppercase letters, lowercase letters, or a combination of both. The string is standardized and compared against a master alphabet string to detect the first missing character in the sequence.

If no letters are missing from the provided string, the function returns `undefined`.

### 📌 Example Behavior

```
fearNotLetter("abce") → "d"
fearNotLetter("abcdefghjklmno") → "i"
fearNotLetter("abcdefghijklmnopqrstuvwxyz") → undefined
fearNotLetter("a") → undefined
```

### 🛠️ Concepts Practiced

- Standardizing string input for accurate comparison
- Comparing expected versus actual character sequences
- Using dependent index values to detect missing elements
- Applying control flow to return early when a mismatch is found

### 💡 Reflection

This lab highlighted how loops can be used to compare expected versus actual sequences. It reinforced how tracking index relationships allows a program to detect inconsistencies and exit early when a mismatch is found.

---

## 💡 Topic Reflection

These labs strengthened my understanding of how loops drive program flow by enabling repeated operations over data. Each exercise demonstrated how iteration allows values to evolve over time, whether tracking a maximum, building a product, comparing datasets, or restructuring collections.

Together, they reinforced several foundational patterns:

- maintaining running values across iterations
- detecting conditions within sequences
- building results incrementally
- using early exits to simplify logic

These skills form the backbone of many real-world programs that process data in stages rather than all at once.
