# JavaScript Learning Labs

![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)
![Repository Type](https://img.shields.io/badge/type-Learning%20Archive-blue)
![Code Style: Prettier](https://img.shields.io/badge/code%20style-Prettier-ff69b4.svg)
![Linted with ESLint](https://img.shields.io/badge/linting-ESLint-4B32C3)

A structured collection of JavaScript labs and interactive projects documenting my progression from foundational language concepts to accessible, state-driven applications.

The repository emphasizes deliberate practice, clear implementation, consistent engineering standards, and the ability to apply individual concepts within complete user workflows.

## Featured Projects

### Project Idea Board

A state-driven idea-management application with editing, workflow statuses, keyboard shortcuts, validation, and persistent browser storage.

[View Source](./mini-projects/project-idea-board) · [Open Live Application](https://calvinvanriper.dev/javascript-learning-labs/mini-projects/project-idea-board/)

### Sweet Cart

An interactive shopping-cart application using centralized product data, dynamic rendering, derived totals, and synchronized interface updates.

[View Source](./mini-projects/sweet-cart) · [Open Live Application](https://calvinvanriper.dev/javascript-learning-labs/mini-projects/sweet-cart/)

### Markdown to HTML Converter

A custom parsing utility that transforms supported Markdown syntax into structured HTML through an ordered regular-expression pipeline.

[View Source](./mini-projects/markdown-to-html-converter) · [Open Live Application](https://calvinvanriper.dev/javascript-learning-labs/mini-projects/markdown-to-html-converter/)

### ARIA Tabs — Planets Interface

An accessible tabbed interface implementing semantic ARIA relationships, keyboard navigation, managed focus, and synchronized visual state.

[View Source](./dom-and-events/aria-tabs) · [Open Live Application](https://calvinvanriper.dev/javascript-learning-labs/dom-and-events/aria-tabs/)

## Explore the Labs

Many DOM exercises and mini projects are deployed for interactive use:

[Explore the JavaScript Learning Labs](https://calvinvanriper.dev/javascript-learning-labs/)

The deployed project index provides direct access to individual applications without requiring a local development environment.

## Repository Organization

Labs are grouped by the primary concept being practiced:

| Area                                                   | Focus                                                                    |
| ------------------------------------------------------ | ------------------------------------------------------------------------ |
| [Algorithms](./algorithms)                             | Structured problem-solving and input-to-output transformations           |
| [Arrays](./arrays)                                     | Collection operations, mutation, selection, and safe data handling       |
| [DOM and Events](./dom-and-events)                     | Interactive interfaces, event handling, accessibility, and browser state |
| [Logic and Control Flow](./logic-and-control-flow)     | Conditional behavior, branching, and program flow                        |
| [Loops](./loops)                                       | Iteration patterns and incremental result construction                   |
| [Math Basics](./math-basics)                           | Formulas, arithmetic operations, and numeric logic                       |
| [Mini Projects](./mini-projects)                       | Integrated applications combining multiple JavaScript concepts           |
| [Objects](./objects)                                   | Structured data modeling and property-based organization                 |
| [Regular Expressions and Parsing](./regex-and-parsing) | Pattern matching, validation, conversion, and text parsing               |
| [String Manipulation](./string-manipulation)           | Text analysis, formatting, reconstruction, and transformation            |

Individual project folders may contain dedicated HTML, CSS, JavaScript, and README files.

## Engineering Practices

Work in this repository follows a consistent set of standards:

- Descriptive names and focused functions
- Named event handlers rather than large anonymous callbacks
- Separation of state, behavior, and interface rendering where appropriate
- Semantic HTML and accessible interaction patterns
- Input validation and predictable error handling
- ESLint enforcement and Prettier formatting
- Project-level documentation for larger exercises
- Small, reviewable commits that preserve learning history

Repository conventions and contribution requirements are documented in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Technology

- JavaScript ES6+
- HTML5
- CSS3
- DOM and Web APIs
- Web Storage API
- Node.js for standalone scripts
- ESLint
- Prettier

The projects use vanilla JavaScript without a framework or required build system.

## Background

The exercises originated from structured coursework and independent practice involving FreeCodeCamp, LinkedIn Learning, Coursera, and additional self-directed development.

Implementations are written and maintained independently. Many projects were extended or refactored beyond their original requirements to reinforce architecture, accessibility, validation, state management, and documentation practices.

## Running the Projects

For browser-based projects:

1. Open the project directory.
2. Open its `index.html` file in a browser.
3. Alternatively, use the corresponding deployed application link.

For standalone JavaScript exercises:

```bash
node path/to/file.js
```

## Repository Status

This repository is maintained as a stable learning archive and portfolio reference demonstrating foundational JavaScript competency and progression toward application development.

Current application work is maintained separately in the [Front-End Applications](https://github.com/calvinvanriper/front-end-applications) repository.
