# Boundaries

![Mother in Towel](/.attachments/mother.in.towel.jpg)

---

> **“Code at boundaries needs clear separation and careful handling to avoid contaminating your core logic with external details.”**

This chapter focuses on how to safely integrate and isolate external code like libraries, frameworks, and third-party APIs.

---

## 1. **Boundaries Are Dangerous**

External code (e.g., third-party libraries) is outside your control. If it changes, your code might break.

**Solution**: Encapsulate it behind well-defined interfaces.

---

## 2. **Use the Adapter Pattern**

Wrap external APIs in your own interfaces so you don’t depend directly on their types.

### Bad – Direct Dependency on a Library

```cpp
#include <nlohmann/json.hpp>

void printName(const nlohmann::json& user) {
    std::cout << user["name"] << '\n';
}
```

**Problem**: Now your entire codebase depends on `nlohmann::json`.

### Good – Use an Adapter

```cpp
class UserData {
public:
    virtual std::string getName() const = 0;
    virtual ~UserData() = default;
};

class JsonUserAdapter : public UserData {
public:
    JsonUserAdapter(const nlohmann::json& data) : data(data) {}
    std::string getName() const override {
        return data.at("name");
    }
private:
    const nlohmann::json& data;
};

void printName(const UserData& user) {
    std::cout << user.getName() << '\n';
}
```

Now the rest of your code knows nothing about the JSON library.

---

## 3. **Write Boundary Tests**

When wrapping third-party code, write focused tests on just the wrapper so that:

* If the external library changes, only the wrapper and its tests are affected.
* You don’t have to rewrite all business logic tests.

---

## 4. **Keep Core Logic Independent**

Treat libraries and frameworks as **plugins** to your system.

Don’t let them **drive** your architecture—**use them, don’t become them.**

---

## 5. **Minimize Direct Use of External APIs**

Use third-party libraries only at **well-contained boundaries** of your system (e.g., file loading, JSON parsing, HTTP requests).

---

## Summary

* Treat third-party code as volatile and isolate it behind interfaces
* Use adapters to abstract away external dependencies
* Keep your core code decoupled from external libraries
* Test the boundary code thoroughly, not the internals of the external tools
* Design your system so it can survive changes at the boundaries

---

## 🧠 Summary Quote

> **“We should avoid letting too much of our code know about external libraries. Instead, we isolate and test the boundary, and keep the rest of our system clean and independent.”**
> — *Robert C. Martin*
