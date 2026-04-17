# Refactoring

Refactoring is making small changes to code that **improve its internal structure** without altering its behavior. It’s not just cleanup—it's a disciplined, systematic process.

---

## **The Two Hats**

When coding, you wear two metaphorical hats:

* **Feature hat**: Add new functionality without changing existing code.
* **Refactor hat**: Improve structure without adding functionality.

Always know which one you're wearing.

---

## **Why Should We Refactor**

* **Improves design**: Prevents architectural decay.
* **Easier to understand**: Helps future you (or others) read and modify code.
* **Helps find bugs**: Forces deeper understanding.
* **Speeds up development**: Clean code is faster to build on.

---

## **When Should We Refactor**

### **Rule of Three**

If you do the same thing a third time, **refactor** it.

### **Preparatory Refactoring**

Refactor **before** adding a new feature to make the addition easier.

### **Comprehension Refactoring**

If code is hard to understand, **refactor** to make it clearer.

### **Litter-Pickup Refactoring**

If you see messy code while working, clean it up a bit as you go.

### **Planned vs Opportunistic**

Most refactoring happens naturally during other tasks—not in isolated phases.

### **Long-Term Refactoring**

Some changes take weeks; approach them **gradually and incrementally**.

### **In Code Reviews**

Use code reviews to **refactor collaboratively**, improving clarity and understanding.

---

## **What Do I Tell My Manager**

* Refactoring is part of writing code **fast and well**.
* Don’t always call it out—just **do it**, especially when it helps meet deadlines.

---

## **When Should I Not Refactor**

* If code works fine and you don’t need to touch it—**leave it**.
* If refactoring is harder than rewriting—**consider rewriting**.

---

## **Problems with Refactoring**

* **Perceived slowdown** in adding features.
* Can be hindered by **code ownership boundaries** or **branching strategies**.
* Needs **tests** to ensure safety.
* Legacy code with no tests is **risky to refactor**.

---

## **Refactoring, Architecture, and YAGNI**

* Don't over-design for the future.
* Build for current needs, refactor as those needs change.
* This approach is part of **YAGNI**: *You Aren’t Gonna Need It*.

---

## **Refactoring and the Development Process**

Refactoring works best when combined with:

* **Self-testing code**
* **Continuous integration**
* **Agile/XP practices**

These reinforce and support one another.

---

## **Refactoring and Performance**

Refactoring may **temporarily slow** code but makes it easier to optimize later.
Measure performance before tuning. **Don’t guess—profile.**

---

## **Where Did Refactoring Come From**

* Originated in the Smalltalk community.
* Popularized by Ward Cunningham, Kent Beck, and later by this book.
* Became mainstream as tools improved and the value was proven.

---

## **Automated Refactorings**

Modern IDEs support automated refactoring, especially in statically typed languages.
Use tools that operate on **syntax trees**, not just text.
Good tools make refactoring faster, safer, and more reliable.

## Tenets of Refactoring

See [Bad Smells](./BAD.SMELLS.md)

### Testing

Testing should serve as a **safety net** that enables confident, incremental improvements to code. The core belief is that **tests validate behavior**, not implementation details, allowing internal changes (like refactoring) without fear of breaking the system.

The approach emphasizes:

* **Testing before refactoring**: Always have automated tests in place to detect unintended behavior changes.
* **Fast, repeatable unit tests**: They provide immediate feedback, making small-step refactoring safe and sustainable.
* **Behavioral testing**: Tests should assert what the system does, not how it's structured internally. This keeps tests resilient to internal design changes.
* **Incremental validation**: After each small code change, tests are run to ensure correctness, maintaining a constantly working system.
* **Refactor test code too**: Tests are part of the codebase and deserve clarity, structure, and maintainability.

In short, testing isn’t just for catching bugs — it’s a foundational tool for making safe, continuous design improvements.

## The Catalog of Refactorings

1. [Composing Functions](./COMPOSING.FUNCTIONS.md)
2. [Moving Features](./MOVING.FEATURES.md)
3. [Organizing Data](./ORGANIZING.DATA.md)
4. [Simplifying Logic](./SIMPLIFYING.LOGIC.md)
5. [Simplifying Methods](./SIMPLIFYING.METHODS.md)
6. [Dealing with Inheritance](./INHERITANCE.md)