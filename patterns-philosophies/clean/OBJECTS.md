# Objects and Data Structures

![Data from Startrek](/.attachments/data.startrek.jpg)

---

> **"Objects hide their data behind abstractions and expose behavior. Data structures expose their data and have no meaningful behavior."**

Understanding this distinction helps guide how you design systems, particularly in how modules interact and evolve over time.

---

## 1. **Objects vs. Data Structures**

* **Objects**: Expose **functions** that operate on hidden data.
* **Data Structures**: Expose **data** but no significant behavior.

### Example

#### Object-Oriented Approach

```cpp
class Circle {
public:
    Circle(double r) : radius(r) {}
    double area() const { return 3.14159 * radius * radius; }

private:
    double radius;
};
```

#### Procedural Approach with Data Structures

```cpp
struct Circle {
    double radius;
};

double area(const Circle& c) {
    return 3.14159 * c.radius * c.radius;
}
```

---

## 2. **The Law of Demeter**

> **A module should not know about the structure or properties of the objects it manipulates.**

Violations typically show up as **train wrecks**:

```cpp
// Bad
auto zipCode = order.customer().address().zipCode();
```

Better:

```cpp
// Good
auto zipCode = order.getCustomerZipCode();
```

Encapsulate knowledge instead of exposing deep object graphs.

---

## 3. **Data/Object Anti-Symmetry**

* **OO code** is better for **adding new data types** (via polymorphism)
* **Procedural code** is better for **adding new functions** over data (via new free functions)

> Choose objects when behavior changes more often than data.
> Choose data structures when data changes more often than behavior.

---

## 4. **Hybrid Approaches are Risky**

Mixing behavior and public data leads to fragile designs:

```cpp
struct User {
    std::string name;
    void changeName(const std::string& newName) {
        name = newName;
    }
};
```

This violates encapsulation and SRP. Either keep `name` private and expose meaningful behavior, or treat `User` as a pure data structure.

---

## Summary

* Keep **objects** and **data structures** conceptually distinct.
* Use **objects** to encapsulate data and expose behavior.
* Use **data structures** to expose data and leave behavior external.
* Choose the right paradigm based on what is likely to change.
* Obey the **Law of Demeter** to preserve encapsulation.

---

## 🧠 Summary Quote

> **"Objects hide their data and expose behavior. Data structures expose their data and have no behavior. Mixing the two degrades both."**
> — *Robert C. Martin*
