# Bend or Break

Designing software that’s flexible, adaptable, and resilient to change—so it can bend without breaking under real-world demands.

---

### 1. **Decoupling**

* Aim to reduce dependencies between components.
* Loosely coupled modules are easier to change and reuse.
* Use interfaces, abstractions, and design patterns to minimize tight coupling.
* Avoid “spaghetti code” where everything depends on everything else.

---

### 2. **Juggling the Real World**

* Software must adapt to unpredictable real-world constraints like evolving requirements, hardware changes, and user behavior.
* Design with change in mind; expect requirements to evolve.
* Build systems that tolerate variability and remain maintainable.

---

### 3. **Transforming Programming**

* Programming is about transformation—turning requirements into running software.
* Use modularity and abstraction to isolate changes and limit their impact.
* Employ automation and refactoring to continuously improve code.

---

### 4. **Inheritance Tax**

* Inheritance can introduce “taxes” in complexity and maintenance.
* Deep inheritance hierarchies often create fragile code.
* Favor composition over inheritance to build flexible, maintainable systems.

  > **Prefer encapsulating behaviors (encapsulation) in components you compose** rather than inheriting behavior in a fixed class hierarchy.

* Keep inheritance shallow and purposeful.

---

### 5. **Configuration**

* Separate configuration from code to make your system adaptable without changing source.
* Use configuration files, environment variables, or dependency injection.
* Avoid hard-coding values that are likely to change.
* Proper configuration management helps deploy the same code in different environments easily.

---

## Summary

To keep software “bending” instead of “breaking,” focus on decoupling, expect and handle real-world changes, carefully manage inheritance, and externalize configuration. This leads to systems that are easier to maintain, extend, and evolve.