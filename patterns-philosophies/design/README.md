# Design Patterns

Below is a structured table of contents based on Refactoring.Guru’s design patterns catalog. ([Refactoring Guru][1])

The typescript files within this folder can be executed with the following command.

```bash
npx tsx app.ts
```

Given that `tsx` is installed. `tsx` is installed using the following command.

```bash
npm install -D tsx
```

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
15. **[Iterator](https://refactoring.guru/design-patterns/iterator/typescript/example)**. ★★★★☆ — Traverse a collection without exposing its internal structure.
16. **[Observer](https://refactoring.guru/design-patterns/observer/typescript/example)**. ★★★★★ — Notify subscribers when an object changes.
17. **[Strategy](https://refactoring.guru/design-patterns/strategy/typescript/example)**. ★★★★☆ — Swap algorithms without changing the object using them.
18. **[Template Method](https://refactoring.guru/design-patterns/template-method/typescript/example)**. ★★★★★ — Define an algorithm skeleton and let subclasses fill in steps.
19. **[Mediator](https://refactoring.guru/design-patterns/mediator/typescript/example)**. ★★★★☆ — Centralize communication between related objects.
20. **[Memento](https://refactoring.guru/design-patterns/memento/typescript/example)**. ★★★★★ — Save and restore object state safely.
21. **[State](https://refactoring.guru/design-patterns/state/typescript/example)**. ★★★★★ — Change behavior when internal state changes.
22. **[Visitor](https://refactoring.guru/design-patterns/visitor/typescript/example)**. ★★★★☆ — Add operations to objects without changing their classes.

### Observations

The **Chain of Responsibility** pattern is one of the craftiest patterns that makes efficient use of polymorphism. I love it. It shines when a request can be handled by multiple candidates, but you don’t want to hard-code which one handles it. It fits best in systems where responsibilities are flexible, ordered, or conditional—like event handling, middleware pipelines, or approval workflows. It helps you decouple the sender from the receiver, so you can add, remove, or reorder handlers without touching the calling code. I give it 5 stars.

The **Command** pattern makes strong use of polymorphism, but it doesn’t impose a specific data structure like linked lists or trees, unlike the *Chain of Responsibility* and *Composite* patterns. This is a very useful pattern that I’ve seen in UI frameworks (menus, buttons, undo/redo), as well as in compilers and interpreters. I give it 5 stars.

I’ve seen the **Iterator** pattern used extensively in C++ collections and the algorithms library. It provides a structured way to traverse collections through loops while decoupling traversal logic from the underlying container implementation. Iterators are important because they provide a common abstraction over different data structures. Algorithms like `sort`, `find`, and `copy` can operate on vectors, lists, sets, and even custom containers without needing to know how those containers store their data internally. It comes in handy in functional programming philosophy to write algorithms independently from data structures. It makes excellent use of generics (or templates as it is called in C++). I'm not an extremist when designing separation of concerns. I don't like to go overboard. It may not be necessary in all cases. I give it a 4 star.

I’ve never directly implemented the **Observer** pattern myself, but I’ve used event-driven frameworks that rely heavily on it. I strongly believe in event-driven architectures, and this pattern is one of the key mechanisms that makes them possible. I’d give it 5 stars.

I make use of the **Strategy** pattern when injecting services into classes, especially when using IoC containers. It is a very elegant pattern that allows behaviour to be swapped dynamically. I’d give it 5 stars.

The **Template Method** was the first design pattern I learned when I started programming with object-oriented languages. It allows the behaviour of objects to be modified through inheritance, sometimes by requiring certain functions to be overridden. It is an extremely powerful pattern. I give it 5 stars.

The **[Mediator](#the-mediator-pattern)** pattern is not immediately intuitive to me but I do I use it in separating the UI from the API and data layer in a controller within an MVC architecture. The main benefit is reducing coupling between components so that changes remain localized instead of rippling unpredictably throughout the system. By routing communication through a central coordinator, components become easier to replace, test, debug, and reason about because each part depends on fewer things directly. This also helps prevent circular dependencies and makes large applications and teams more manageable as the codebase grows in complexity. I give it 4 stars.

The **Memento** pattern is a behavioral design pattern used to capture and restore an object’s previous state without exposing its internal details. It is commonly used in features like undo/redo systems, transaction rollbacks, save-game functionality, version control systems such as Git, and application state snapshots. The pattern typically involves three roles: the originator (the object whose state is saved), the memento (the stored snapshot), and the caretaker (the component that manages the snapshots). I have rarely used it in my career so far because I have mostly built business applications that depend on libraries that use these patterns. It's not very popular but it is very very useful. I give it 5 stars.

The **State** and _Template Method_ patterns often overlap because both use polymorphism to replace conditional logic and type checking. The State pattern changes an object’s behavior dynamically based on its current state, while the Template Method pattern defines a fixed algorithm structure and allows subclasses to customize certain steps. In practice, both patterns help software engineers build extensible systems by delegating behavior to specialized classes instead of relying on large `if` or `switch` statements. I rate it just the same as the _Template Method_. I give it 5 stars.

The **Visitor** pattern externalizes operations that would otherwise accumulate inside the original classes. Instead of continuously adding methods such as `optimize()`, `generateCode()`, or `prettyPrint()` to an object hierarchy, specialized visitor classes are created to perform these operations externally. The original classes primarily expose their structure and data, while visitor classes contain the algorithms that operate on them. This approach is especially useful when the object structure is stable but new operations or processing passes need to be added frequently, such as in compiler AST or IR traversals. Very useful but since I have always control to add function to a class or use the _Decorator_ or _Facade_ pattern, I haven't had much need to use this pattern. I give it 4 stars.


## The Mediator Pattern

> “The most popular usage of the **Mediator** pattern is facilitating communications between GUI components of an app. The synonym of the Mediator is the Controller part of MVC pattern.”

Think of the Model–View–Controller Controller as a **traffic cop** between UI elements and application logic.

Without a mediator/controller:

* Button talks directly to textbox
* Textbox talks directly to list
* List talks directly to dialog
* Everything becomes tightly coupled

That creates a mess.

The Mediator pattern says:

> “UI components should not communicate directly with each other.
> They should communicate through a central object.”

Example without Mediator:

```js
button.onclick = () => {
    textbox.clear();
    list.reload();
    dialog.show();
};
```

Now the button knows too much.

With Mediator:

```js
button.onclick = () => {
    mediator.notify("button_clicked");
};
```

Mediator:

```js
class Mediator {
    notify(event) {
        if (event === "button_clicked") {
            textbox.clear();
            list.reload();
            dialog.show();
        }
    }
}
```

Now:

* button only knows mediator
* textbox only knows mediator
* list only knows mediator

This reduces coupling.

Why MVC Controller is similar:

* View sends user action to Controller
* Controller decides what happens
* Views don’t directly manipulate each other

Example:

* User clicks “Save”
* View tells Controller
* Controller validates data
* Controller updates model
* Controller refreshes views

The Controller is mediating coordination.

The key mental model:

> Mediator = central communication hub.

Like:

* airport control tower
* WhatsApp group admin
* orchestra conductor

The participants don’t coordinate directly with everyone else.
They coordinate through the mediator.

### Why is this important?

Because software complexity compounds brutally.

The Mediator pattern is not about “clean architecture aesthetics.” It’s about controlling the *rate at which complexity explodes*.

Without mediation, relationships between components grow roughly like this:

* 2 components → 1 relationship
* 5 components → 10 relationships
* 10 components → 45 relationships
* 20 components → 190 relationships

That’s the real problem.

Every direct dependency creates:

* assumptions
* timing expectations
* side effects
* update risks
* debugging paths

The system becomes fragile.

A tiny change in one component unexpectedly breaks others because they’re all entangled.

Example:

Suppose your app has:

* form
* validation panel
* save button
* notification popup
* analytics tracker
* autosave system
* audit logger

If each talks directly to others:

```txt
button → form
button → popup
button → logger
form → validator
validator → popup
autosave → logger
popup → analytics
...
```

Now imagine changing validation rules.

You suddenly break notifications.

Why?

Because hidden coupling accumulated.

That’s what the mediator prevents.

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