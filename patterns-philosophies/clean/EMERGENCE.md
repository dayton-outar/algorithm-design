# Emergence

![Butterfly](/.attachments/butterfly.jpg)

---

> **“Clean code emerges from good design decisions, not grand architectures.”**

This chapter promotes the idea that good software design can emerge by following a small set of guiding principles consistently.

---

## Four Rules of Simple Design (by Kent Beck)

These rules help guide your design decisions toward clean, maintainable code.

---

## 1. **Passes All the Tests**

> Working code comes first.

* Your code must be tested and correct before you can claim it’s clean.
* Clean code without correctness is useless.

**Example:**

Use unit tests to drive design:

```cpp
TEST(CalculatorTest, AddsTwoNumbers) {
    Calculator calc;
    EXPECT_EQ(calc.add(2, 3), 5);
}
```

---

## 2. **Reveals Intention**

> Code should clearly express what it does.

* Names, structure, and organization should make the code's purpose obvious.

**Bad:**

```cpp
int d; // what is d?
```

**Good:**

```cpp
int daysSinceLastLogin;
```

---

## 3. **No Duplication**

> Duplication is the enemy of clarity and flexibility.

* Duplicate logic should be extracted into functions or classes.
* DRY (Don't Repeat Yourself) leads to easier maintenance.

**Bad:**

```cpp
if (user.role == "admin" || user.role == "superadmin") { ... }
// Repeated role logic elsewhere
```

**Good:**

```cpp
bool isPrivilegedUser(const User& user) {
    return user.role == "admin" || user.role == "superadmin";
}
```

---

## 4. **Minimal Number of Classes and Methods**

> Don’t overcomplicate. Keep it as simple as possible, but no simpler.

* Avoid overengineering or adding layers prematurely.
* Aim for clarity, not cleverness.

**Bad:**

```cpp
class Helper {
    // full of static utilities not bound to any domain
};
```

**Good:**

Only create abstractions when the complexity demands it.

---

## Design Emerges Through Refactoring

* Don’t aim to get the design perfect upfront.
* Start with something simple.
* Continuously refactor to improve structure, reduce duplication, and increase clarity.

---

## When in Doubt: Test, Then Refactor

* Tests are a safety net that gives you freedom to refactor.
* Clean design and clean code are iterative outcomes, not instant results.

---

## Summary

* Follow the four rules of simple design:

  * Pass all tests
  * Reveal intention
  * Eliminate duplication
  * Keep it simple
* Allow design to evolve through refactoring
* Let the need for flexibility guide abstraction—not prediction

---

## 🧠 Summary Quote

> **“Clean code always looks like it was written by someone who cares.”**
> — *Michael Feathers*
