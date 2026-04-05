# The Liskov Substitution Principle

![Liskov](/.attachments/liskov.jpg)

---

**“Subtypes must be substitutable for their base types without altering the correctness of the program.”**
— Barbara Liskov

This means: **if `S` is a subtype of `T`, then `T` objects can be replaced with `S` objects without breaking functionality.**

---

## The Problem

When a subclass violates the expectations set by the base class, code that depends on the base class may break when a subclass is used.

---

## Bad Example – Violates LSP

```cpp
class Rectangle {
public:
    virtual void setWidth(int w) { width = w; }
    virtual void setHeight(int h) { height = h; }
    int area() const { return width * height; }

protected:
    int width, height;
};

class Square : public Rectangle {
public:
    void setWidth(int w) override {
        width = w;
        height = w;
    }

    void setHeight(int h) override {
        width = h;
        height = h;
    }
};
```

### What’s wrong?

Code using `Rectangle` expects that `setWidth()` affects only width. But when a `Square` is passed instead, it alters both dimensions. That breaks assumptions and violates LSP.

```cpp
void printArea(Rectangle& r) {
    r.setWidth(5);
    r.setHeight(10);
    std::cout << r.area() << "\n";  // Unexpected result with Square
}
```

---

## Good Example – Obeying LSP

Use **composition** or separate interfaces when subtype behavior diverges significantly from the base.

```cpp
class Shape {
public:
    virtual int area() const = 0;
    virtual ~Shape() = default;
};

class Rectangle : public Shape {
public:
    Rectangle(int w, int h) : width(w), height(h) {}
    int area() const override { return width * height; }

private:
    int width, height;
};

class Square : public Shape {
public:
    Square(int side) : side(side) {}
    int area() const override { return side * side; }

private:
    int side;
};
```

Now, `Rectangle` and `Square` are siblings, not forced into a parent-child relationship that violates expectations.

---

## Summary

* LSP is about **behavioral substitutability**
* Don't inherit just for code reuse—ensure the subtype **preserves the base class contract**
* Prefer **composition** or **interface segregation** when inheritance leads to broken behavior

---

## 🧠 Summary Quote

> **"A derived class must behave in such a way that it does not violate the expectations of clients that use the base class."**
> — *Robert C. Martin*
