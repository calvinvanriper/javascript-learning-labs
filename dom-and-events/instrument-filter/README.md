# 🎺 Student Instruments Filter

## 📝 Description

A small product filtering interface that displays instrument cards based on the selected category in a dropdown menu. The UI updates immediately when the selection changes.

## 🧠 What This Project Does

- Displays a dropdown with instrument categories
- Filters a dataset of instruments by category
- Renders matching items as reusable “card” components
- Updates the product list on every selection change

## 🛠️ Concepts Practiced

- DOM selection and event listeners (change event)
- Filtering arrays with `.filter()`
- Transforming data into markup with `.map()`
- Rendering dynamic content with `innerHTML`
- Keeping UI behavior driven by a data source

## 📌 Example Behavior

```text
User selects "brass"
→ Only brass instruments render as cards

User selects "all"
→ All instruments render as cards
```

## 💡 Reflection

This project reinforced the “data → filter → render” flow common in front-end development. Instead of hardcoding UI elements, the interface is generated from a data array, making the product list easy to update by changing the dataset rather than rewriting markup.

## 🔗 Live Demo

[`Student Instrument Filter`](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/instrument-filter/)

## 🧪 CodePen Version

[`CodePen - Student Instrument Filter`](https://codepen.io/calvinvanriper/full/qENMJKG)
