# Record Collection Update

## 📝 Description

This mini project manages and updates a collection of music records stored as a nested JavaScript object. A single function applies a set of rules to update, add, or remove properties from the collection based on provided input values.

The purpose of this project is to practice reasoning through complex conditional logic while working with nested objects and arrays.

---

## 🧠 What This Project Does

- Stores a collection of music records as an object indexed by record ID
- Each record may contain:
  - an album title
  - an artist
  - a list of tracks
- Updates records according to a defined set of rules:
  - adds new properties when needed
  - updates existing values
  - removes properties when given an empty value
- Displays the state of the affected record after each update to clearly show how the data changes over time

---

## 🛠️ Concepts Practiced

- Working with nested objects
- Accessing and updating object properties dynamically
- Using arrays within objects
- Applying multiple conditional rules with `if / else if / else`
- Understanding how program state changes step-by-step
- Using console output to trace and verify logic

---

## 📌 Example Behavior

When the program runs, it applies several updates to the record collection. After each update, the modified record is displayed so the changes can be observed clearly.

Example output for a single update might look like:

```
--------------------------------------------------
Step 1: Set artist on 5439 to ABBA
{
  "albumTitle": "ABBA Gold",
  "artist": "ABBA"
}
--------------------------------------------------
```

This approach makes it easier to follow how each rule affects the data.

---

## 💡 Reflection

The project was more challenging than earlier labs due to the number of rules that had to be evaluated and the need to work with nested data structures. It required careful thought about the order of conditions and how different inputs should affect the record collection.

Completing this work helped strengthen my understanding of object manipulation and control flow, and highlighted the importance of testing and readable output when working with complex logic.

As additional JavaScript concepts are learned, this can be revisited and improved with more efficient or streamlined approaches.
