# 🧠 Algorithmic Problem Solving Labs

## 📝 Description

This folder contains JavaScript exercises focused on algorithmic thinking and numerical problem solving. These labs emphasize logical reasoning, performance awareness, and step-by-step evaluation of conditions to produce correct results.

The focus moves beyond simple data manipulation and into designing procedures that efficiently solve computational problems.

More algorithm-focused practice labs will be added here as learning progresses.

## 🔢 Prime Number Summation

This lab calculates the sum of all prime numbers up to a given limit. It demonstrates how helper functions, mathematical rules, and loop-based evaluation combine to solve a number-theory problem efficiently.

### 📌 Example Behavior

```
sumPrimes(10) → 17
sumPrimes(5) → 10
sumPrimes(1) → 0
```

### 🛠️ Concepts Practiced

- Breaking problems into helper functions
- Prime number identification using square root optimization
- Loop-based range evaluation
- Conditional logic for mathematical rules
- Aggregating results using `.reduce()`

### 💡 Reflection

This lab introduces structured algorithm design where correctness and efficiency both matter. Instead of operating on provided data, the function generates results through systematic evaluation and rule-based logic. It reinforces the importance of decomposition, mathematical reasoning, and clear procedural flow — all foundational skills for advanced programming.

---

## 🧮 Smallest Common Multiple

This lab calculates the smallest number that is evenly divisible by every integer within a given inclusive range. It demonstrates how number theory concepts and helper functions work together to solve a compound divisibility problem efficiently.

### 📌 Example Behavior

```
smallestCommons([1, 5]) → 60
smallestCommons([2, 10]) → 2520
smallestCommons([5, 1]) → 60
```

### 🛠️ Concepts Practiced

- Using Euclid’s algorithm to compute the greatest common divisor (GCD)
- Calculating least common multiple (LCM) using the GCD relationship
- Building results iteratively across a numeric range
- Normalizing input before processing
- Applying mathematical reasoning in algorithm design

### 💡 Reflection

This lab strengthens algorithmic thinking by combining multiple mathematical operations into a single solution. Instead of evaluating values independently, the logic progressively builds a result that satisfies increasing constraints. The exercise reinforces decomposition, efficiency, and the relationship between mathematical rules and program structure.

---

## 🧵 Array Flattener

This lab flattens a nested array structure of any depth into a single-level array. It demonstrates how recursion can be used to traverse hierarchical data and extract values regardless of nesting level.

### 📌 Example Behavior

```
steamrollArray([[["a"]], [["b"]]]) → ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]) → [1, 2, 3, 4]
```

### 🛠️ Concepts Practiced

- Recursive function design
- Identifying base vs recursive cases
- Traversing nested data structures
- Using `Array.isArray()` for type checks
- Accumulating results across recursive calls

### 💡 Reflection

This lab builds algorithmic reasoning by requiring the function to process data whose structure is not fixed in depth. Instead of relying on iteration alone, recursion enables systematic traversal of nested layers until only individual values remain. The exercise reinforces call stack behavior, decomposition of complex input, and how recursive logic simplifies hierarchical data processing.

---

## ✔️ Truthiness Checker

This lab evaluates whether all objects in a collection contain a truthy value for a specified property. It demonstrates how higher-order functions and JavaScript’s truthiness rules can be combined to perform concise logical validation.

### 📌 Example Behavior

```
truthCheck([{ a: "hello" }, { a: 42 }, { a: [] }], "a") → true
truthCheck([{ score: 10 }, { score: 0 }, { score: 5 }], "score") → false
```

### 🛠️ Concepts Practiced

- Using `.every()` for logical validation
- Understanding truthy vs falsy values
- Dynamic object property access
- Implicit boolean evaluation
- Writing expressive, minimal logic

### 💡 Reflection

This lab highlights how powerful JavaScript’s higher-order functions can be when paired with a solid understanding of language semantics. Instead of looping and manually checking conditions, the solution relies on expressive built-in behavior to enforce a rule across a dataset. It reinforces how clarity and correctness often come from using the right abstraction rather than more code.

---

## 💡 Topic Reflection

These labs build algorithmic thinking by focusing on how problems are solved step-by-step rather than how data is stored. Working with numerical logic, helper functions, and efficiency considerations develops the reasoning skills needed for more advanced programming tasks, technical interviews, and performance-sensitive applications.
