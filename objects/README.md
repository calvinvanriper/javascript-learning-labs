# 🧱 Object Manipulation Labs

## 📝 Description

This folder contains JavaScript exercises focused on working with objects — including accessing properties, comparing object structures, and applying rule-based matching. These labs emphasize how objects store related data and how key/value relationships are evaluated programmatically.

More object-focused practice labs will be added here as learning progresses.

## 🔑 Matching Object Filter

This lab filters an array of objects and returns only those that contain all key/value pairs specified in a source object. It demonstrates how structured data can be evaluated using dynamic property comparison.

### 📌 Example Behavior

```
whatIsInAName(
  [{ first: "Romeo", last: "Montague" }, { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" }
)
→ [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }],
  { apple: 1, bat: 2 }
)
→ [{ apple: 1, bat: 2 }]
```

### 🛠️ Concepts Practiced

- Accessing object properties dynamically
- Using `Object.keys()` to extract property names
- Comparing object values using key matching
- Combining array filtering with object logic
- Evaluating structured data based on rule sets

### 💡 Reflection

This lab introduces deeper interaction with structured data by moving beyond simple values to key/value relationships. Instead of transforming array elements, the function evaluates whether objects meet a set of property requirements. This mirrors real-world tasks such as data filtering, query matching, and record validation.

---

## 💡 Topic Reflection

These labs focus on how objects organize related data and how programs reason about that structure. Working with keys and values builds an understanding of how JavaScript represents complex information, laying the foundation for handling APIs, configuration objects, and real application data models.
