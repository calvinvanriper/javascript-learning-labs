# Repo Consistency Standard (Locked Baseline)

- This document defines the structural standards used to normalize the repository. The goal is consistency, not perfection or optimization.

- Formatting, linting, and commit message structure are enforced to ensure long-term repository consistency and maintainability.

---

## 1. File Structure (✅ REQUIRED)

- Each lab file is placed in the folder that best matches its **primary learning concept**.

- Placement decisions are not revisited once normalized unless a lab is clearly misplaced.

---

## 2. Code File Standards (✅ Required)

- Every lab `.js` file must have:
  - JSDoc above the primary function(s)
    - Only required for exported / main lab functions - not for trivial helpers inside the same file.
  - A test-call block at the bottom labeled:

    ```
    // ---- Test calls (manual validation) ----
    ```

  - No `console.log()` outside the test block
  - Comments explain **intent ("why")**, not mechanics ("how").
  - Semicolons used consistently **(always)**

---

### 2B. HTML & CSS File Standards (✅ Required for DOM Projects)

These standards apply to all projects containing HTML and CSS files.

#### HTML Standards

- HTML documents must include:

```
<!doctype html>
<html lang="en">
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Note: DOCTYPE casing follows Prettier formatting. Lowercase <!doctype html> is the enforced standard.

- CSS must be linked in the <head> using:

```
<link rel="stylesheet" href="styles.css">
```

- JavaScript must be linked before the closing </body> tag:

```
<script src="script.js"></script>
```

- Buttons must include type="button" unless inside a form.
- Use semantic elements where appropriate (main, section, ul, button, etc.)
- Avoid inline styles and inline JavaScript.

#### CSS Standards

- CSS should be organized top-down:

1.  Reset / global styles
2.  Layout styles
3.  Component styles
4.  Utility / state classes

- Class names should be lowercase and hyphen-separated (favorite-icon, story-container)
- State classes should describe behavior or condition (filled, emoji-full)
- Avoid !important unless absolutely necessary.
- Use CSS variables for reusable colors and values where helpful.

#### JavaScript Interaction Standards (DOM Projects)

- DOM elements must be selected at the top of the file.
- Event listeners should be attached after DOM selection.
- Main interaction logic should be placed inside named functions.
- JSDoc is required above main DOM interaction functions.
- Use currentTarget when handling click events on groups of elements.
- UI state should be read from and written back to the DOM when applicable.

## 3. Test Calls Standards (🟡 Partially Required)

- **Required:**
  - Test block present
  - 3-5 test cases
  - Expected result comment on each line

- **Optional:**
  - Edge/outlier input (only when meaningful for the function's contract)
  - We do not rewrite functions to handle invalid types unless the lab explicitly requires it.

---

## 4. README Standards (✅ Required)

- Structure per category README
- Sections appear in this order:
  - 📝 Description
  - Labs (individual sections)
  - 💡 Topic Reflection
- Structure per lab section
  - Title (emoji allowed)
  - Short description
  - 📌 Example Behavior (code block)
  - 🛠️ Concepts Practiced
  - 💡 Reflection
- Additional rules
  - Tone is concise, explanatory, and consistent
  - Lab order flows from simpler → more complex
  - Emojis used consistently for section headers (not decorative overuse)

---

## 5. Naming Convention (✅ Required)

- File and folder names: lowercase kebab-case
  - `example-lab-name.js`

---

## 6. Mini-Project Standards (✅ Required)

- Mini-projects must include:
  - Folder structure
    ```
    mini-projects/project-name/
      project-name.js
      README.md
    ```
  - README structure
    1. 📝 Description
    2. 🧠 What This Project Does
    3. 🛠️ Concepts Practiced
    4. 📌 Example Behavior
    5. 💡 Reflection

---

## 7. Code Formatting & Quality Checks (✅ Required)

This repository enforces automated formatting and linting.  
All contributors must run these checks before committing.

### Formatting

We use **Prettier** to enforce consistent formatting.  
Run:

```
npm run format
```

### Linting

We use **ESLint** to enforce code quality and style consistency.  
Run:

```
npm run lint
```

If issues can be fixed automatically:

```
npm run lint:fix
```

Then re-run:

```
npm run lint
```

Commit only when **0 problems** are reported.

## 8. Commit Message Standards (✅ Required)

This repository uses a structured commit message format to maintain a clear, consistent, and searchable project history.

A commit message template is provided at the repository root:

.gitmessage.txt

To enable it locally, run:

git config commit.template .gitmessage.txt

This ensures every commit follows the repository’s standardized commit structure.

### Commit Format

<type>(<topic>): <summary>

Example:

feat(dom-and-events): add accessible ARIA tabs planets interface lab

### Allowed Types

- feat - new lab, feature, or project
- fix - bug fix
- refactor - code restructuring without behavior change
- docs - README or documentation updates
- style - formatting, CSS, or non-functional UI changes
- chore - tooling, configuration, or maintenance tasks

### Topic Scope

The topic must match an existing repository category folder exactly:

- algorithms
- arrays
- dom-and-events
- logic-and-control-flow
- loops
- math-basics
- mini-projects
- objects
- string-manipulation

### Summary Guidelines

- Use present tense ("add", not "added")
- Keep summary concise but descriptive
- Do not end summary with a period

### Body Guidelines

- Explain WHY the change exists, not just WHAT changed
- Wrap lines at approximately 72 characters
- Provide architectural or learning context when applicable

Commit messages are part of the repository’s structural consistency requirements.

### Notes

- Prettier handles spacing, quotes, line width, etc.
- ESLint enforces code correctness and safe patterns.
- Manual alignment of comments or custom spacing is not preserved by design.

## 9. Out of Scope 🚫

The following are intentionally deferred:

- Refactoring working logic for style preference
- Rewriting older labs for different approaches
- Over-engineering beyond the lab's learning goal

# 🧭 Definition of Done

- The repository is normalized when every existing lab file and README satisfies all **Required** items above.
- Once this is achieved, the baseline is set and future labs follow this standard.
- Formatting and lint checks pass (0 errors)
