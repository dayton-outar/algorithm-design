
# Interception in C++

## 1. **Interception Concept**

Intercept a method call between a consumer and a service, allowing custom logic to execute **before and/or after** the original call.

**C++ Analogy**: Use of the **Decorator pattern** with interfaces and `std::unique_ptr` to wrap and extend behavior.

```cpp
class IService {
public:
    virtual void execute() = 0;
    virtual ~IService() = default;
};

class CoreService : public IService {
public:
    void execute() override {
        // core behavior
    }
};
```

---

## 2. **Decorator Pattern**

A **wrapper** that enhances behavior without modifying the core class.

```cpp
class AuditingService : public IService {
    std::unique_ptr<IService> inner;
public:
    AuditingService(std::unique_ptr<IService> s) : inner(std::move(s)) {}
    void execute() override {
        // Before
        std::cout << "Audit: Executing\n";
        inner->execute();
        // After
    }
};
```

---

## 3. **Cross-Cutting Concerns**

Concerns like auditing, logging, caching, and error handling **span across components**. Instead of putting them everywhere, use decorators or interceptors.

Examples:

* `AuditServiceDecorator`
* `LoggingServiceDecorator`
* `ErrorHandlingServiceDecorator`
* `CircuitBreakerDecorator`

---

## 4. **SOLID Principles via Interception**

| Principle | C++ Application                                                            |
| --------- | -------------------------------------------------------------------------- |
| SRP       | Each class handles **one** responsibility (e.g., `Auditor`, `CoreService`) |
| OCP       | Add behavior via Decorators without modifying core (`CoreService`)         |
| LSP       | Decorators use the same interface (`IService`)                             |
| ISP       | Prefer fine-grained interfaces (avoid fat base classes)                    |
| DIP       | Depend on `IService`, not `CoreService`                                    |

---

## 5. **Circuit Breaker Example**

Add resilience to out-of-process calls (e.g., network calls). In C++, encapsulate in a reusable `CircuitBreaker` and inject it via the decorator.

```cpp
class CircuitBreaker {
    bool open = false;
public:
    void guard() {
        if (open) throw std::runtime_error("Circuit open");
    }
    void trip() { open = true; }
    void succeed() { open = false; }
};

class CircuitBreakerService : public IService {
    std::unique_ptr<IService> inner;
    CircuitBreaker& breaker;
public:
    CircuitBreakerService(std::unique_ptr<IService> s, CircuitBreaker& b)
        : inner(std::move(s)), breaker(b) {}

    void execute() override {
        breaker.guard();
        try {
            inner->execute();
            breaker.succeed();
        } catch (...) {
            breaker.trip();
            throw;
        }
    }
};
```

---

## 6. **Error Handling Decorator**

```cpp
class ErrorHandlingService : public IService {
    std::unique_ptr<IService> inner;
public:
    ErrorHandlingService(std::unique_ptr<IService> s)
        : inner(std::move(s)) {}

    void execute() override {
        try {
            inner->execute();
        } catch (const std::exception& e) {
            std::cerr << "Handled: " << e.what() << '\n';
        }
    }
};
```

---

## 7. **Dynamic Interception (Simulated in C++)**

Though not native in C++, dynamic interception can be simulated via:

* **Factories that wrap services** based on rules
* **Function wrappers (lambdas)** if you need lightweight interception

```cpp
std::function<void()> intercepted = [&]() {
    breaker.guard();
    try {
        core.execute();
        breaker.succeed();
    } catch (...) {
        breaker.trip();
        throw;
    }
};
```

---

## 8. **Drawbacks of Attribute-Based AOP (in .NET)**

Not directly applicable to C++, but parallels exist:

* In C++, **static annotations** or **macros** can’t enforce behavior
* Prefer **composition over annotation**

---

## Summary

In Modern C++, you express **interception and cross-cutting concerns** through:

* Abstract interfaces
* The Decorator pattern with `std::unique_ptr`
* Policy-based design (e.g., strategies for error handling)
* Composition via factories or builders

This promotes **maintainable, testable, loosely-coupled code** in line with SOLID.
