# Logic & Control Flow Labs

## 📝 Description

This folder contains JavaScript exercises that focus on program logic, decision-making, and state management. These labs go beyond simple calculations and start working with branching, conditionals, and the flow of execution in a program.

The goal of these exercises is to practice thinking through how a program behaves step-by-step — especially as values change over time.

---

## 🃏 Card Counter Lab

**File:** `card-counter.js`

This lab simulates a simplified Blackjack card-counting system. The program keeps track of a running count and returns a suggestion based on whether the current count is positive or not.

### Card Rules

    2–6   ➜ Increase the count (good for the player)
    7–9   ➜ No change
    10–A  ➜ Decrease the count (good for the house)

### Output Rule

If the count is positive → return `"Bet"`  
Otherwise                 → return `"Hold"`

Example output format:

    2 Bet
    0 Hold
    -1 Hold

### Concepts Practiced

- Using `if / else if / else` branching
- Tracking state using a global variable
- Returning formatted string output
- Understanding how repeated function calls build on each other
- Thinking about program logic instead of only math

---

## 💡 Reflection

This lab helped me understand how a program can maintain state across multiple function calls using a shared variable. It also gave me more practice structuring conditional logic so the program behaves differently depending on input values.

Even though this is a simple simulation, it reflects a real-world programming pattern:  
track something over time → update it → make decisions based on it.

More logic-focused practice labs will be added here as I continue learning 🙂
