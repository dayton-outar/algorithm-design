# Pragmatic Paranoia

Build safer, more reliable software by being cautious, verifying assumptions, and managing resources carefully.

---

## 1. **Design by Contract**

* Treat software modules like formal agreements.
* Define clear **preconditions** (what inputs must be), **postconditions** (expected output), and **invariants** (conditions that always hold true).
* Enforce contracts with explicit checks to detect violations early.

---

## 2. **Dead Programs Tell No Lies**

* When an error occurs, it’s better for a program to crash or halt than to continue running incorrectly.
* Silent failures or corrupted states are far worse.
* Crashing quickly (“fail fast”) exposes problems immediately so they can be fixed.

---

## 3. **Assertive Programming**

* Use assertions to express and verify assumptions within code.
* Assertions serve as internal self-checks that catch bugs at the point of failure.
* Unlike error handling, assertions document what *should never happen*.

---

## 4. **How to Balance Resources**

* Manage resources (memory, files, connections) carefully to avoid leaks.
* Always pair resource acquisition with release; use techniques like RAII (Resource Acquisition Is Initialization) where possible.
* Don’t rely solely on garbage collection or OS cleanup — be explicit.
* Design resource management to handle exceptions and early exits gracefully.

---

## 5. **Don’t Outrun Your Headlights**

* Don’t code so far ahead that you lose track of the current problem.
* Work in manageable steps — don’t try to solve too much at once.
* This approach reduces complexity and errors by focusing attention on what you can currently see and understand.

---

## Summary

*Pragmatic paranoia* means trusting your code but verifying everything rigorously. It’s about writing software that fails loudly on errors, manages resources carefully, and advances in small, manageable steps to avoid mistakes.