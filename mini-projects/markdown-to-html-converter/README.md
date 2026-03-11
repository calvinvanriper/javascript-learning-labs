# Markdown to HTML Converter

## 📝 Description

This mini project implements a lightweight Markdown parsing system that converts user-provided Markdown text into HTML. The application reads Markdown input, applies a sequence of pattern-based transformations, and generates both raw HTML output and a live preview of the rendered content.

The project demonstrates how regular expressions and structured processing steps can be combined to build a simple text parsing pipeline. Instead of relying on an existing Markdown library, the converter implements a small set of parsing rules manually to illustrate how Markdown syntax maps to HTML elements.

---

## 🧠 What This Project Does

- Accepts Markdown text input from the user
- Converts Markdown syntax into HTML using regular expressions
- Supports a subset of common Markdown elements, including:

```html
# Heading levels (H1–H3) **bold** and *italic* text `inline code` > blockquotes - unordered list
items 1. ordered list items [links](url) ![images](url) --- horizontal rules
```

- Processes text line-by-line to determine when lists should be wrapped in `<ul>` or `<ol>` containers
- Displays the generated HTML in two formats:
  - **Raw HTML Output** – the exact HTML produced by the converter
  - **HTML Preview** – the rendered version of the generated HTML
- Updates both views dynamically as the user edits the Markdown input

---

## 📌 Example Behavior

When the user enters Markdown text, the converter processes the input and generates HTML.

Example Markdown input:

```markdown
# Markdown Demo

This converter supports **bold**, _italic_, and `inline code`.

> This is a blockquote.

- Item one
- Item two

1. Ordered item one
2. Ordered item two
```

Generated HTML output:

```html
<h1>Markdown Demo</h1>
<p>This converter supports <strong>bold</strong>, <em>italic</em>, and <code>inline code</code>.</p>
<blockquote>This is a blockquote.</blockquote>
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>
<ol>
  <li>Ordered item one</li>
  <li>Ordered item two</li>
</ol>
```

The **HTML Preview panel** renders the generated HTML so the user can immediately see how the Markdown is interpreted.

---

## 🛠️ Concepts Practiced

- Text parsing using **regular expressions**
- Mapping Markdown syntax to HTML elements
- Structuring a multi-step transformation pipeline
- Processing text line-by-line to detect list boundaries
- Working with arrays and string manipulation
- Dynamically updating the DOM in response to user input
- Separating raw data output from rendered preview output
- Designing small parsing systems without external libraries

---

## 💡 Reflection

This project demonstrates how structured text formats can be interpreted through pattern matching and transformation rules. Rather than implementing the full Markdown specification, the converter focuses on a small but representative subset of syntax to illustrate how Markdown features translate into HTML elements.

Building the converter reinforced how regular expressions can be used as the foundation for lightweight parsing systems. It also highlighted the importance of processing order when multiple transformation rules interact, particularly when wrapping list items inside container elements.

Although production Markdown parsers are far more sophisticated, this project provides a clear demonstration of the underlying concepts used in text parsing and format conversion.

---

## 🔗 Live Demo

[`Markdown to HTML Converter`](https://calvinvanriper.dev/javascript-learning-labs/mini-projects/markdown-to-html-converter/)

## 🧪 CodePen Version

[`CodePen – Markdown to HTML Converter`](https://codepen.io/editor/calvinvanriper/pen/019cdba7-0ea8-7f0e-be61-fcf6c73eff9b)
