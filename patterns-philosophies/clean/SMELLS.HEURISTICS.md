# Smells and Heuristics

![Landfill](/.attachments/landfill.jpg)

---

> **“Code smells are warning signs that something may be wrong. Heuristics are guiding principles to help clean it up.”**

This chapter is a large catalog of actionable code quality checks—patterns that suggest code could be improved.

---

## Selected Smells and Heuristics (Grouped by Category)

### 1. **Names**

* **Choose Descriptive Names**
  A name should tell you what it is and what it does.

  **Bad:**

  ```cpp
  int d;  // what does 'd' represent?
  ```

  **Good:**

  ```cpp
  int elapsedTimeInDays;
  ```

* **Avoid Encodings**
  Don’t prefix names with type info like `strName` or `iCount`.

---

### 2. **Functions**

* **Functions Should Be Small**
  Prefer functions of a few lines.

* **Do One Thing**
  Functions should do one thing and do it well.

  **Bad:**

  ```cpp
  void parseAndPrintReport() { ... }  // does parsing and printing
  ```

  **Good:**

  ```cpp
  void parseReport() { ... }
  void printReport() { ... }
  ```

* **Have No Side Effects**
  Side effects make functions harder to reason about.

---

### 3. **Comments**

* **Comments Do Not Make Up for Bad Code**
  Don’t use comments to excuse poor naming or design.

* **Explain “Why,” Not “What”**
  The code already shows what; comments should explain reasoning.

---

### 4. **Environment (Formatting & Structure)**

* **Vertical Openness Between Concepts**
  Use blank lines to separate different ideas or concepts.

* **Horizontal Alignment Hides Problems**
  Lining things up visually often leads to messy diffs and wasted effort.

* **Keep Related Code Together**
  Functions that call each other should be close together.

---

### 5. **Objects and Data Structures**

* **Data/Object Anti-Symmetry**
  Objects hide data behind behavior. Data structures expose it. Avoid mixing.

  **Bad:**

  ```cpp
  struct Point {
      double x, y;
  }

  double getDistance(Point p) { return sqrt(p.x*p.x + p.y*p.y); }
  ```

  **Good (OOP style):**

  ```cpp
  class Point {
      double x, y;
  public:
      double distanceFromOrigin() const;
  };
  ```

---

### 6. **General Principles**

* **Don’t Repeat Yourself (DRY)**
  Every piece of knowledge should have a single representation.

* **Encapsulate Conditionals**
  Extract conditional logic into a well-named function.

  **Bad:**

  ```cpp
  if (age > 65 && hasPension) { ... }
  ```

  **Good:**

  ```cpp
  if (isRetired()) { ... }
  ```

* **Use Polymorphism Instead of If/Else or Switch**
  Replace conditionals with polymorphic behavior when applicable.

* **Avoid Negative Conditionals**
  Positive logic is easier to understand.

  **Bad:**

  ```cpp
  if (!isValid()) { ... }
  ```

  **Good:**

  ```cpp
  if (isInvalid()) { ... }
  ```

---

### 7. **Code Smells**

* **Long Functions**
  Break into smaller, well-named chunks.

* **Long Parameter Lists**
  Prefer object grouping or function decomposition.

* **Feature Envy**
  When a method uses data from another class excessively, the logic likely belongs there.

* **Shotgun Surgery**
  A change that requires edits to many files. Indicates poor cohesion.

* **Inappropriate Intimacy**
  Classes overly reliant on each other’s internals.

---

## Summary

* Code smells are not bugs but signals that something could be wrong.
* Heuristics guide you to cleaner, more maintainable code.
* The goal: write code that’s readable, expressive, and low in duplication.

---

## 🧠 Summary Quote

> **“Clean code smells like good design. It is full of carefully chosen names, well-factored functions, and classes with a single responsibility.”**