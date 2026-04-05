# Classes

![Students in Class with Teacher](/.attachments/class.in.session.jpg)

---

> **“Classes should be small. The smaller the class, the better.”**

This chapter emphasizes cohesive, well-named, and compact classes with a single responsibility.

---

## 1. **Classes Should Be Small**

### Rule 1: The name should describe the class's responsibility

If you struggle to name the class without using "and", it probably does too much.

**Bad:**

```cpp
class AccountManagerAndEmailSender {
    // Too many responsibilities
};
```

**Good:**

```cpp
class AccountManager { ... };
class EmailSender { ... };
```

---

## 2. **The Single Responsibility Principle (SRP)**

Each class should have one reason to change. That means one responsibility.

**Bad Example:**

```cpp
class Report {
public:
    void generate();
    void print();
    void saveToFile();
};
```

**Good Refactor:**

```cpp
class Report {
public:
    std::string generate();
};

class ReportPrinter {
public:
    void print(const std::string& report);
};

class ReportSaver {
public:
    void saveToFile(const std::string& report);
};
```

---

## 3. **Organize for Readability**

* Class variables first
* Then constructors
* Then public methods
* Then private methods

```cpp
class BankAccount {
    double balance;

public:
    BankAccount();
    void deposit(double amount);
    void withdraw(double amount);

private:
    void logTransaction(const std::string& msg);
};
```

---

## 4. **Encapsulation Matters**

Keep implementation details private. Expose only what’s necessary.

**Bad:**

```cpp
class User {
public:
    std::string name;
    std::string email;
};
```

**Good:**

```cpp
class User {
private:
    std::string name;
    std::string email;

public:
    User(const std::string& name, const std::string& email);
    std::string getName() const;
    std::string getEmail() const;
};
```

---

## 5. **Cohesion**

Methods and variables in a class should be tightly related. A cohesive class does one thing and does it well.

Use extract-class refactoring when methods feel unrelated.

---

## 6. **Prefer Composition Over Inheritance**

Use composition to share behavior between classes instead of relying too much on inheritance.

**Bad Inheritance Abuse:**

```cpp
class LoggingAccount : public BankAccount {
    // might mix concerns
};
```

**Good Composition:**

```cpp
class Logger {
public:
    void log(const std::string& msg);
};

class BankAccount {
    Logger logger;
    // composition
};
```

---

## Summary

* Classes should be small and focused
* Follow SRP—one responsibility, one reason to change
* Order class contents for clarity
* Keep data private and behavior public
* Prefer composition over inheritance
* Maintain high cohesion

---

## 🧠 Summary Quote

> **“The smaller and more focused a class is, the easier it is to understand and maintain.”**
> — *Robert C. Martin*