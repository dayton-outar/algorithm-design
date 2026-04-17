# Systems

![The Bottled City of Kandor](/.attachments/bottled.city.of.kandor.jpg)

---

> **“A system is not just code—it’s behavior, architecture, and glue.”**

This chapter shifts focus from writing clean functions and classes to assembling them into robust systems.

---

## 1. **Separate Construction from Use**

Use factories or builders to encapsulate object creation. This keeps your system decoupled and flexible.

**Bad (tight coupling):**

```cpp
class App {
public:
    App() {
        db = new Database("config.json");
    }
};
```

**Good (separate construction):**

```cpp
class App {
public:
    App(std::shared_ptr<Database> db) : db(db) {}
};

auto db = std::make_shared<Database>("config.json");
App app(db);
```

---

## 2. **Use Factories to Assemble Components**

Encapsulate complex object creation logic in a dedicated location.

```cpp
class ServiceFactory {
public:
    static std::unique_ptr<AccountService> create() {
        auto repo = std::make_shared<AccountRepository>();
        auto emailer = std::make_shared<EmailService>();
        return std::make_unique<AccountService>(repo, emailer);
    }
};
```

---

## 3. **Prefer Dependency Injection**

Inject dependencies rather than hardcoding them inside components. This improves testability and flexibility.

**Bad:**

```cpp
class OrderService {
    EmailService emailService;
};
```

**Good:**

```cpp
class OrderService {
    std::shared_ptr<IEmailService> emailService;
public:
    OrderService(std::shared_ptr<IEmailService> emailService)
        : emailService(emailService) {}
};
```

---

## 4. **Use Plugins to Decouple Policies from Details**

Architect your system around high-level policies (business rules) and inject lower-level details like databases, UIs, or frameworks.

**Example:**

Define interfaces in your core logic:

```cpp
class IPaymentGateway {
public:
    virtual bool charge(double amount) = 0;
    virtual ~IPaymentGateway() = default;
};
```

Then inject real or mock implementations later.

---

## 5. **Develop Systems Top-Down, Not Bottom-Up**

Start with high-level behavior and defer implementation details. This allows rapid iteration and testing at the architectural level.

---

## 6. **Don’t Mix System Behavior with Construction**

Keep configuration code (wiring) separate from application logic.

* Use `main()` or a specific bootstrap file for wiring.
* Core logic should not know how it's wired together.

---

## 7. **Testing at the System Level**

Write integration tests for system-level interactions, but ensure they’re limited and not brittle. Most tests should remain at the unit level.

---

## Summary

* Separate object construction from application logic
* Use factories and dependency injection
* Architect systems around abstractions, not implementations
* Decouple policy from detail using interfaces and plugins
* Keep system wiring isolated from business logic

---

## 🧠 Summary Quote

> **“A good system architecture elevates use cases and policies above frameworks and tools.”**
> — *Robert C. Martin*
