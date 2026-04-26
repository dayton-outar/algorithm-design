# 🔖 Design Patterns

Below is a structured table of contents based on Refactoring.Guru’s design patterns catalog. ([Refactoring Guru][1])

Take note of the author/contributor's rating.

## 1. Creational Patterns

Patterns for controlling object creation.

1. **Factory Method**. ★★★★★ — Create objects through a common interface while letting subclasses decide the exact class.
2. **Abstract Factory**. ★★★☆☆ — Create families of related objects without tying code to concrete classes.
3. **Builder**. ★★★★★ — Build complex objects step by step.
4. **Prototype**. ★★★☆☆ — Clone existing objects instead of creating new ones from scratch.
5. **Singleton**. ★★★★☆ — Ensure only one instance of a class exists globally.

### Observations

The **Factory Method** is very useful in situations where parameters can be used to create a certain type of object. ...

## 2. Structural Patterns

Patterns for composing classes and objects cleanly.

6. **Adapter** — Make incompatible interfaces work together.
7. **Bridge** — Separate abstraction from implementation so both can evolve independently.
8. **Composite** — Treat individual objects and object groups the same way.
9. **Decorator** — Add behavior by wrapping an object.
10. **Facade** — Provide a simple interface over a complex subsystem.
11. **Flyweight** — Save memory by sharing repeated object state.
12. **Proxy** — Control access to another object through a stand-in.

### Observations

The **Adapter** structural pattern is used a lot for wrappers for interfaces that integrate two systems with different data structures. ...

## 3. Behavioral Patterns

Patterns for communication and responsibility between objects.

13. **Chain of Responsibility** — Pass a request through handlers until one handles it.
14. **Command** — Turn a request into an object so it can be queued, logged, or undone.
15. **Iterator** — Traverse a collection without exposing its internal structure.
16. **Mediator** — Centralize communication between related objects.
17. **Memento** — Save and restore object state safely.
18. **Observer** — Notify subscribers when an object changes.
19. **State** — Change behavior when internal state changes.
20. **Strategy** — Swap algorithms without changing the object using them.
21. **Template Method** — Define an algorithm skeleton and let subclasses fill in steps.
22. **Visitor** — Add operations to objects without changing their classes.

### Observations

...

[1]: https://refactoring.guru/design-patterns/ "Design Patterns in Java"