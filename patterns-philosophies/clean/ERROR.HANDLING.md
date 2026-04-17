# Error Handling

![Car Accident](/.attachments/another.accident.jpg)

---

> **“Clean code handles errors gracefully without obscuring the logic of the code.”**

Error handling should be deliberate, clear, and separate from the main logic whenever possible.

---

## 1. **Use Exceptions Instead of Error Codes**

**Bad – Returning error codes:**

```cpp
int readFile(const std::string& filename) {
    if (!fileExists(filename)) return -1;
    // read logic
    return 0;
}

int result = readFile("data.txt");
if (result != 0) {
    // handle error
}
```

**Good – Throwing exceptions:**

```cpp
void readFile(const std::string& filename) {
    if (!fileExists(filename)) throw std::runtime_error("File not found");
    // read logic
}

try {
    readFile("data.txt");
} catch (const std::runtime_error& e) {
    std::cerr << "Error: " << e.what() << '\n';
}
```

* Cleaner separation of main logic and error handling.
* Avoids deeply nested conditionals.

---

## 2. **Write Your `try` Blocks to Be Clean**

Keep `try-catch` blocks minimal and focused:

**Bad:**

```cpp
try {
    doThis();
    doThat();
    doSomethingElse();
} catch (...) {
    // which function failed?
}
```

**Good:**

```cpp
try {
    doThis();
} catch (...) {
    // handle failure from doThis
}
```

Handle only what’s necessary in each block.

---

## 3. **Provide Context With Exceptions**

Use exception messages that help debug the issue quickly.

**Good:**

```cpp
throw std::runtime_error("Unable to open config file: config.json");
```

Avoid vague errors like:

```cpp
throw std::runtime_error("Failed");
```

---

## 4. **Define Custom Exception Types if Needed**

For domain-level errors:

```cpp
class InvalidTransaction : public std::exception {
public:
    const char* what() const noexcept override {
        return "Transaction amount exceeds limit";
    }
};
```

This makes error handling expressive and semantically meaningful.

---

## 5. **Don’t Return `null` (or `nullptr` or optional with no value) Unless You Must**

Returning null forces callers to check manually:

```cpp
User* getUser(int id) {
    if (!exists(id)) return nullptr;
    return new User(id);
}

// Now every call site must check for null
```

Prefer `std::optional<User>` or exceptions if absence is exceptional.

---

## 6. **Don’t Pass Null**

Avoid APIs where `nullptr` is a valid input unless it’s clearly documented and handled.

---

## Summary

* Prefer **exceptions** over error codes
* Keep error handling logic **separate** from main logic
* Provide **meaningful context** in exception messages
* Define **custom exceptions** for domain errors
* Avoid using or passing **null** unnecessarily

---

## 🧠 Summary Quote

> **"Error handling is important, but if it obscures logic, it's wrong."**
> — *Robert C. Martin*
