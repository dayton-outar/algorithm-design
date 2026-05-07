# Design Patterns

Below is a structured table of contents based on Refactoring.Guru’s design patterns catalog. ([Refactoring Guru][1])

Take note of the author/contributor's rating.

## 1. Creational Patterns

Patterns for controlling object creation.

1. **[Factory Method](https://refactoring.guru/design-patterns/factory-method/typescript/example)**. ★★★★★ — Create objects through a common interface while letting subclasses decide the exact class.
2. **[Abstract Factory](https://refactoring.guru/design-patterns/abstract-factory/typescript/example)**. ★★★☆☆ — Create families of related objects without tying code to concrete classes.
3. **[Builder](https://refactoring.guru/design-patterns/builder/typescript/example)**. ★★★★★ — Build complex objects step by step.
4. **[Prototype](https://refactoring.guru/design-patterns/prototype/typescript/example)**. ★★★☆☆ — Clone existing objects instead of creating new ones from scratch.
5. **[Singleton](https://refactoring.guru/design-patterns/singleton/typescript/example)**. ★★★★☆ — Ensure only one instance of a class exists globally.

### Observations

The **Factory Method** is useful when parameters determine which type of object to create. When different implementations of a class exist, their behavior is encapsulated and accessed through a common interface. The **Factory Method** helps select the appropriate class before instantiation. It is particularly relevant during object creation.

The **Abstract Factory** provides an interface for creating families of related or dependent objects without specifying their concrete classes. It enforces consistency by ensuring that only compatible types are created together and allows stricter control over the objects produced. I gave it 3 stars out of 5 because I rarely find need for it.

I like the **Builder** design pattern because it provides a structured way to construct complex objects step by step. The pizza example fits well, as it allows users to configure different toppings while keeping the construction process organized.

The **Prototype** design pattern provides a way to create new objects by copying an existing instance, rather than constructing them from scratch. This is useful when object creation is expensive or when many similar objects with slight variations are needed. By cloning a prototype, you can efficiently produce new instances while preserving the structure and behavior of the original, allowing for flexible and performant object creation. This design pattern is also not very urgent or practical to use. So, I give it 3 out of 5 stars.

The **Singleton** pattern ensures that a class has only one instance and provides a global point of access to it. It is often used for shared services such as configuration managers, logging systems, or connection pools. In some cases, it maintains a single shared state that is accessed and updated by multiple parts of the application. This is useful when consistency is required and creating multiple instances would lead to conflicts, duplication, or unnecessary resource usage.


## 2. Structural Patterns

Patterns for composing classes and objects cleanly.

6. **[Adapter](https://refactoring.guru/design-patterns/adapter/typescript/example)**. ★★★★☆ — Make incompatible interfaces work together.
7. **[Bridge](https://refactoring.guru/design-patterns/bridge/typescript/example)**. ★★★★☆ — Separate abstraction from implementation so both can evolve independently.
8. **[Composite](https://refactoring.guru/design-patterns/composite/typescript/example)**. ★★★★★ — Treat individual objects and object groups the same way.
9. **[Decorator](https://refactoring.guru/design-patterns/decorator/typescript/example)**. ★★★★☆ — Add behavior by wrapping an object.
10. **[Facade](https://refactoring.guru/design-patterns/facade/typescript/example)**. ★★★★☆ — Provide a simple interface over a complex subsystem.
11. **[Flyweight](https://refactoring.guru/design-patterns/flyweight/typescript/example)**. ★★☆☆☆ — Save memory by sharing repeated object state.
12. **[Proxy](https://refactoring.guru/design-patterns/proxy/typescript/example)**. ★★★★☆ — Control access to another object through a stand-in.

### Observations

The **Adapter** structural pattern is used a lot for wrappers for interfaces that integrate two systems with different data structures. I give it 4 stars.

I find that the **Bridge** pattern makes use of dependency inversion and open-closed patterns. I think it is very useful when alternate implementations of different tools that are managed by different teams has to be considered. Most structural patterns are useful for divisional of labour to give latitude for separation of concerns. I give it a 4 stars because I have seen where it is very useful especially when using frameworks like Symfony. Symfony enforces SOLID principles. So, this pattern definitely helps OOP languages to achieve separation of concerns.

I gave the **Composite** pattern 5 stars. It’s widely used in UI frameworks like Flutter, where everything that renders is a widget. Widgets are composed into a tree structure, allowing individual widgets and groups of widgets to be treated uniformly. This starts with simple building blocks and scales naturally to more complex interfaces.

The **Decorator** pattern is structurally similar to the *Composite* pattern in that both use composition, but they serve different purposes. The *Decorator* dynamically adds new behavior to an object by wrapping it, without modifying the original implementation. I gave it 4 stars because it’s especially useful when you can’t change a library’s code but can extend its functionality through wrapping. It’s a practical and flexible workaround.

I think I have used the **Facade** pattern as a workaround to interface with a system that I cannot control, or when I want to enforce separation of concerns. It seems to overlap somewhat with the ideas behind the *Adapter* and *Bridge* patterns. Because of its practicality, I give it 4 stars.

The **Flyweight** pattern seems more about using shared data structures than relying on polymorphism between objects. It enforces a design where many logical objects share a smaller number of physical instances. I struggle to see how this is an object-oriented pattern rather than just a data structure design. I give it 2 stars.

While the **Proxy** pattern isn’t a frequent guest in most applications, it’s still very useful in certain cases. It’s especially valuable when you want to add behavior around an object of an existing class without changing the client code. It resembles the *Decorator* pattern. To be honest, it can be hard to see the difference between them. The *Proxy* pattern focuses on controlling access (e.g., lazy loading, security, caching, remote access), while the *Decorator* pattern focuses on dynamically adding responsibilities or behavior to an object. I give it 4 stars.


## 3. Behavioral Patterns

Patterns for communication and responsibility between objects.

13. **[Chain of Responsibility](https://refactoring.guru/design-patterns/chain-of-responsibility/typescript/example)**. ★★★★★ — Pass a request through handlers until one handles it.
14. **[Command](https://refactoring.guru/design-patterns/command/typescript/example)**. ★★★★★ — Turn a request into an object so it can be queued, logged, or undone.
15. **Iterator** — Traverse a collection without exposing its internal structure.
16. **Mediator** — Centralize communication between related objects.
17. **Memento** — Save and restore object state safely.
18. **Observer**. ★★★★★ — Notify subscribers when an object changes.
19. **State** — Change behavior when internal state changes.
20. **[Strategy](https://refactoring.guru/design-patterns/strategy/typescript/example)**. ★★★★☆ — Swap algorithms without changing the object using them.
21. **Template Method**. ★★★★☆ — Define an algorithm skeleton and let subclasses fill in steps.
22. **Visitor** — Add operations to objects without changing their classes.

### Observations

The **Chain of Responsibility** pattern is one of the craftiest patterns that makes efficient use of polymorphism. I love it. It shines when a request can be handled by multiple candidates, but you don’t want to hard-code which one handles it. It fits best in systems where responsibilities are flexible, ordered, or conditional—like event handling, middleware pipelines, or approval workflows. It helps you decouple the sender from the receiver, so you can add, remove, or reorder handlers without touching the calling code. I give it 5 stars.

The **Command** pattern makes strong use of polymorphism, but it doesn’t impose a specific data structure like linked lists or trees, unlike the *Chain of Responsibility* and *Composite* patterns. This is a very useful pattern that I’ve seen in UI frameworks (menus, buttons, undo/redo), as well as in compilers and interpreters. I give it 5 stars.

## A Great Example: Serilog

**[Serilog](https://github.com/serilog/serilog?utm_source=chatgpt.com)** leans on a small set of patterns rather than a huge catalog. The important ones:

### Core patterns you’ll see

* **Builder (fluent configuration)**

  * `LoggerConfiguration().WriteTo.File(...).Enrich.With(...)`
  * Clear, chainable setup of a complex object.

* **Pipeline / Chain of Responsibility (processing flow)**

  * Events flow through enrichment → filtering → sinks.
  * Each stage can modify or drop the event.

* **Strategy (pluggable behavior)**

  * Different sinks (file, console, Seq), formatters, filters.
  * Swap behavior without changing calling code.

* **Composite (fan-out to multiple sinks)**

  * A logger can write to many sinks at once.

* **Decorator (enrichers wrap events)**

  * Enrichers add properties (timestamp, user, correlation id) without changing core logging.

* **Factory (creation behind configuration)**

  * `CreateLogger()` builds the final logger from config.

* **Adapter (integration layer)**

  * Bridges to other logging systems (e.g., Microsoft.Extensions.Logging).

Serilog is basically a **configurable pipeline of strategies**, built with a fluent builder and composed into a composite logger. That’s why it feels flexible instead of rigid. It’s **not heavily inheritance-driven**; it’s more composition + pipeline. The power comes from **composing small behaviors**, not deep class hierarchies.


[1]: https://refactoring.guru/design-patterns/ "Design Patterns"