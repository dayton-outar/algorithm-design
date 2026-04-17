# The Dependency Inversion Principle

![Acrobats in Motion](/.attachments/acrobatics.jpg)

---

**“High-level modules should not depend on low-level modules. Both should depend on abstractions.”**
**“Abstractions should not depend on details. Details should depend on abstractions.”**

DIP guides you to **invert the traditional direction of dependencies**, so business rules don’t depend on technical details.

---

## The Problem

Without DIP, high-level modules (like business logic) are tightly coupled to low-level modules (like databases, UIs, frameworks).

### Bad Example – High-Level Depends on Low-Level

```cpp
class MySQLDatabase {
public:
    void save(const std::string& data) {
        // Save to MySQL
    }
};

class ReportGenerator {
public:
    void generate() {
        MySQLDatabase db;
        db.save("Report Data");
    }
};
```

**What’s wrong?**

* `ReportGenerator` is tightly coupled to `MySQLDatabase`.
* Changing the database means changing business logic.
* No way to unit test `ReportGenerator` without a real DB.

---

## Good Example – Invert the Dependency

### Use Abstraction

```cpp
class Database {
public:
    virtual void save(const std::string& data) = 0;
    virtual ~Database() = default;
};

class MySQLDatabase : public Database {
public:
    void save(const std::string& data) override {
        // Save to MySQL
    }
};

class ReportGenerator {
public:
    ReportGenerator(Database& db) : db(db) {}

    void generate() {
        db.save("Report Data");
    }

private:
    Database& db;
};
```

Now:

* `ReportGenerator` depends on the `Database` abstraction.
* You can pass in any implementation (e.g., mock for testing).
* `MySQLDatabase` is a **detail** that depends on the interface.

---

## Summary

* High-level policy code **depends on interfaces**, not concrete details.
* Low-level details (DBs, UIs, frameworks) **implement those interfaces**.
* Inversion of dependency flow **preserves architectural boundaries** and makes testing easier.

---

## 🧠 Summary Quote

> **"The most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions."**
> — *Robert C. Martin*
