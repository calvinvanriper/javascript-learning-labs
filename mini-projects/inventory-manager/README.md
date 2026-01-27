# Inventory Management Program

## 📝 Description

This mini project simulates a basic inventory management system using an array of product objects. Each product contains a name and a quantity, and a set of functions allow the program to locate, add, update, and remove products from inventory.

The purpose of this project is to practice working with shared program state, applying conditional logic across multiple functions, and modeling real-world behavior using structured data.

---

## 🧠 What This Project Does

- Stores an inventory as an array of objects

```
{ name: 'productName', quantity: number}
```

- Allows products to be located using a case-insensitive search
- Adds new products when they do not already exist
- Updates quantities when products already exist
- Removes product quantities when items are used or sold
- Deletes a product entirely when its quantity reaches zero
- Returns descriptive status messages to show how the inventory changes after each operation

---

## 📌 Example Behavior

When the program runs, it performs a sequence of inventory operations. Each function returns a message describing what happened, making it easy to follow changes in inventory state.

```
flour quantity updated; current quantity: 25
grain added to inventory; current quantity: 10
Remaining flour pieces: 20
rice's quantity has reached 0, it has been removed from inventory.
```

## These messages help visualize how the system responds to different inputs and edge cases.

## 🛠️ Concepts Practiced

- Working with arrays of objects
- Managing shared state across multiple functions
- using `.map()` to extract object properties
- Searching arrays using `.includes()` and `.indexOf()`
- Applying multi-branch conditional logic
- Handling edge cases (not found items, insufficient quantity, zero stock)
- Converting input values for safe, consistent comparison
- Designing functions that model real-world processes

---

## 💡 Reflection

This project was more complex than earlier labs because it required multiple functions to work together while modifying shared data. Instead of performing a single transformation, the program models a system with ongoing state changes.

It reinforced how important it is to think about edge cases and the order or conditions, especially when dealing with quantities and deletion logic. Returning descriptive messages also highlighted the value of readable output when tracking how data evolves over time.

As additional JavaScript concepts are learned, this project can be improved by introducing methods like `.filter()`, `.find()` or more structured return values, but this version serves as a strong foundation for understanding stateful logic and program design.
