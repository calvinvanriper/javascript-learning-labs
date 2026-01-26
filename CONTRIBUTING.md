# Repo Consistency Standard (Locked Baseline)

- This document defines the structural standards used to normalize the repository. The goal is consistency, not perfection or optimization.

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
  - 💡 Reflection
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

## 7. Out of Scope 🚫

- The following are intentionally deferred:
  - Adding Prettier, ESLint, EditorConfig
  - Refactoring working logic for style preference
  - Rewriting older labs for different approaches

# 🧭 Definition of Done

- The repository is normalized when every existing lab file and README satisfies all **Required** items above.
- Once this is achieved, the baseline is set and future labs follow this standard.
