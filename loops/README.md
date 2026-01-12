# Loops Labs

## 📝 Description

This folder contains JavaScript exercises focused on using loops to repeat logic across multiple values. These labs emphasize iteration, tracking values over time, and building results step-by-step as a program processes data.

The goal of these exercises is to practice thinking about how repeated operations work, rather than solving a problem for a single value only.

---

## 📏 Longest Word Length Lab

**File:** `find-longest-word-length.js`

This lab finds the length of the longest word in a sentence. The program splits the sentence into individual words, loops through each word, and tracks the largest word length encountered.

### Concepts Practiced

- Iterating through a list of values using a loop
- Tracking a running maximum
- Working with string lengths
- Breaking a string into words using `trim()` and `split(" ")`

### Example Behavior

```
findLongestWordLength("The quick brown fox") → 5
```

---

## 🔢 Factorial Calculator Lab

**File:** `factorial-calculator.js`

This lab calculates the factorial of a given number by repeatedly multiplying values from 1 up to the provided number. The program uses loops to build the sequence of numbers and then compute the final result.

### Concepts Practiced

- Using a `while` loop to build a sequence of values
- Using a `for...of` loop to process each value
- Tracking a running product across iterations
- Understanding how loop-controlled repetition builds a result over time

### Example Behavior

```
factorialCalculator(5) → 120
```

---

## 🔤 Mutation (String Comparison) Lab

**File:** `string-character-inclusion.js`

This lab checks whether every character in one string exists within another string. The program loops through each character of the second string and verifies its presence in the first string using a case-insensitive comparison.

### Concepts Practiced

- Iterating through characters using a loop
- Comparing values across two data sets
- Using early returns to fail fast
- Case-insensitive string comparison
- Applying conditional logic within loops

### Example Behavior

```
mutation(["hello", "hey"]) → false

mutation(["Mary", "Army"]) → true
```

---

## 📦 Array Splitting Lab

**File:** `array-splitting.js`

This lab splits a larger array into smaller arrays of a specified size. The program uses a loop to step through the original array and group elements together into new sub-arrays.

### Concepts Practiced

- Iterating through an array using a loop
- Controlling loop increments based on a dynamic value
- Using array slicing to create sub-arrays
- Building a new array from processed results

### Example Behavior

```
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) → [[0, 1], [2, 3], [4, 5]]
```

---

## 🔁 String Repetition Function

**File:** `repeat-string.js`

This lab repeats a provided string a specific number of times and returns the resulting string. It produces the same outcome as the built-in JavaScript `String.repeat()` method, but uses explicit loop logic due to constraints prohibiting that method.

### Concepts Practiced

- Repeating string concatenation using a loop
- Building a result incrementally across iterations
- Input validation for zero and negative repeat counts
- Applying control flow to enforce problem constraints

### Example Behavior

```
repeatStringNumTimes("*", 3) → "***"
repeatStringNumTimes("abc", 4) → "abcabcabcabc"
repeatStringNumTimes("abc", -2) → ""
```

---

## 🔍 Missing Letter Finder

**File:** `missing-letter-finder.js`

This lab finds the first missing letter in a case-insensitive, alphabetical string of letters. The input string may contain uppercase letters, lowercase letters, or a combination of both. The string is standardized and compared against a master alphabet string to detect the first missing character in the sequence.

If no letters are missing from the provided string, the function returns `undefined`.

### Concepts Practiced

- Standardizing string input for accurate comparison
- Comparing expected versus actual character sequences
- Using dependent index values to detect missing elements
- Applying control flow to return early when a mismatch is found

### Example Behavior

```
fearNotLetter("abce") → "d"
fearNotLetter("abcdefghjklmno") → "i"
fearNotLetter("abcdefghijklmnopqrstuvwxyz") → "undefined"
fearNotLetter("a") → "undefined"
```

---

## 💡 Reflection

These labs helped reinforce how loops allow programs to perform the same operation repeatedly while tracking results as values change. Instead of writing repetitive code, loops make it possible to process collections of data or numeric ranges efficiently and clearly.

As more loop-based labs are added, this folder will continue to grow as practice for iteration, repetition, and building results step-by-step using JavaScript.
