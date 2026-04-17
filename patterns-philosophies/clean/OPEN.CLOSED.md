# The Open-Closed Principle

![Opening Cereal Box](/.attachments/opening.cereal.jpg)

---

**“A software artifact should be open for extension but closed for modification.”**

This means you should be able to add new behavior **without changing existing code**.

---

## The Problem

When new features require changes to existing code, two issues arise:

1. **Risk of introducing bugs** in working code
2. **Violation of the Single Responsibility Principle (SRP)** — one class now handles multiple concerns

---

## Bad Example – Not Open-Closed

```cpp
enum class ShapeType { CIRCLE, SQUARE };

class Shape {
public:
    ShapeType type;
};

class AreaCalculator {
public:
    double area(const Shape& shape) {
        switch (shape.type) {
            case ShapeType::CIRCLE:
                // area of circle
                return 3.14 * 5 * 5;
            case ShapeType::SQUARE:
                // area of square
                return 4 * 4;
        }
        return 0;
    }
};
```

**What’s wrong?**

* You must **modify `AreaCalculator`** every time a new shape is added.
* This violates OCP.

---

## Good Example – Open for Extension, Closed for Modification

Use **polymorphism** so you can extend behavior without modifying existing logic.

```cpp
class Shape {
public:
    virtual double area() const = 0;
    virtual ~Shape() = default;
};

class Circle : public Shape {
public:
    double area() const override {
        return 3.14 * 5 * 5;
    }
};

class Square : public Shape {
public:
    double area() const override {
        return 4 * 4;
    }
};

class AreaCalculator {
public:
    double area(const Shape& shape) {
        return shape.area();
    }
};
```

Now, to add a new shape like `Triangle`, you just define a new class. No need to modify existing code.

---

## Summary

* OCP encourages **extensibility via abstraction** (interfaces, base classes)
* Reduces the risk of changes rippling across modules
* Helps meet SRP by isolating behaviors

---

## 🧠 Summary Quote

> **"You should be able to extend the behavior of a system without having to modify that system."**
> — *Robert C. Martin*
