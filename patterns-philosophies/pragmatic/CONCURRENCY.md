# Chapter 6: Concurrency

Challenges of writing concurrent software and strategies to avoid common pitfalls like race conditions and deadlocks.

---

## 1. **Breaking Temporal Coupling**

* Temporal coupling occurs when actions must happen in a specific order or timing.
* To reduce bugs, design components that don’t rely on precise timing or sequencing.
* Use techniques like event-driven programming or asynchronous messaging to decouple timing dependencies.

---

## 2. **Shared State Is Incorrect State**

* Sharing mutable state between concurrent processes or threads leads to data races and subtle bugs.
* Avoid shared mutable data; prefer immutable data structures or message passing.
* If shared state is unavoidable, protect it rigorously with synchronization mechanisms (locks, mutexes).

---

## 3. **Actors and Processes**

* The Actor model isolates state by encapsulating it within actors (independent processes).
* Actors communicate only via asynchronous message passing.
* This model avoids shared state problems and simplifies reasoning about concurrency.

---

## 4. **Blackboards**

* Blackboard architecture uses a shared “blackboard” or data space where multiple processes post and read information.
* Useful for cooperative problem solving or scenarios requiring collaboration.
* Requires careful synchronization to prevent conflicts or inconsistencies.

---

## Summary

Concurrency introduces complexity primarily due to temporal dependencies and shared state. Breaking temporal coupling, avoiding shared mutable state, and using models like actors or blackboards help build correct, maintainable concurrent systems.
