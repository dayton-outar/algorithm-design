# The Interface Segregation Principle

![Car Accident](/.attachments/accident.jpg)

---

**“Clients should not be forced to depend on interfaces they do not use.”**

In other words: **prefer many small, specific interfaces over large, general-purpose ones**.

---

## The Problem

When interfaces are too broad, implementing classes are forced to include methods they don’t need. This leads to:

* Unused code
* Fragile implementations
* Violation of the Single Responsibility Principle (SRP)

---

## Bad Example – Fat Interface

```cpp
class Machine {
public:
    virtual void print() = 0;
    virtual void scan() = 0;
    virtual void fax() = 0;
    virtual ~Machine() = default;
};

class OldPrinter : public Machine {
public:
    void print() override { /* works */ }
    void scan() override { throw std::runtime_error("Not supported"); }
    void fax() override  { throw std::runtime_error("Not supported"); }
};
```

**What’s wrong?**

* `OldPrinter` must implement `scan()` and `fax()` even though it only prints.
* Clients relying on `Machine` can’t be sure what’s actually supported.

---

## Good Example – Split Interfaces

```cpp
class Printer {
public:
    virtual void print() = 0;
    virtual ~Printer() = default;
};

class Scanner {
public:
    virtual void scan() = 0;
    virtual ~Scanner() = default;
};

class Fax {
public:
    virtual void fax() = 0;
    virtual ~Fax() = default;
};

class OldPrinter : public Printer {
public:
    void print() override { /* print implementation */ }
};

class MultiFunctionPrinter : public Printer, public Scanner, public Fax {
public:
    void print() override { /* ... */ }
    void scan() override  { /* ... */ }
    void fax() override   { /* ... */ }
};
```

Now:

* Each class only depends on what it needs.
* Clients can work with focused interfaces without being burdened by extra responsibilities.

---

## Summary

* Keep interfaces **narrow and focused**
* Let clients **depend only on what they use**
* This leads to **more reusable and maintainable** systems

---

## 🧠 Summary Quote

> **"Fat interfaces are harmful. They require classes to implement things that are irrelevant to them."**
> — *Robert C. Martin*
