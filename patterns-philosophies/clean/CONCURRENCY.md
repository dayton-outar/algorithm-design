# Concurrency

![Two-headed Unicorn](/.attachments/two.headed.unicorn.jpg)

---

> **“Concurrency is an implementation detail, not a primary design goal.”**

Concurrency adds complexity. Clean code in concurrent systems requires clear abstractions and defensive programming.

---

## 1. **Why Write Concurrent Code?**

To improve performance by utilizing multiple cores or CPUs. Common scenarios include:

* Handling multiple clients or tasks
* Performing background work without blocking the main thread

---

## 2. **Challenges of Concurrency**

Concurrency introduces:

* **Race conditions**: multiple threads accessing/modifying shared data
* **Deadlocks**: circular waiting for resources
* **Starvation**: some threads never getting CPU time
* **Non-determinism**: bugs that don't always reproduce

---

## 3. **Single Responsibility Principle Applies**

Concurrency should be **isolated** from your core logic.

**Bad:**

```cpp
class Logger {
    void log(const std::string& message) {
        std::lock_guard<std::mutex> lock(mutex_);
        // log to file
    }
    std::mutex mutex_;
};
```

**Better:**

Wrap concurrency in a class specifically designed for synchronization:

```cpp
class ThreadSafeLogger {
public:
    void log(const std::string& message) {
        std::lock_guard<std::mutex> lock(mutex_);
        logger.log(message);
    }
private:
    Logger logger;
    std::mutex mutex_;
};
```

---

## 4. **Limit Scope of Data Sharing**

Avoid sharing data between threads. Prefer message passing or copy-on-write where possible.

**Example:**

Instead of shared data:

```cpp
sharedData.modify();  // requires synchronization
```

Use queues or futures:

```cpp
std::future<Result> result = std::async(std::launch::async, doWork);
```

---

## 5. **Use Thread-Safe Libraries and Language Features**

Modern C++ has tools like:

* `std::thread`
* `std::mutex`, `std::lock_guard`, `std::unique_lock`
* `std::async`, `std::future`, `std::promise`
* `std::atomic`

Prefer these over manual locking when possible.

---

## 6. **Treat Threads as Implementation Detail**

Don’t bake concurrency into your business logic.

**Good practice:**

* Write your application logic as if it were single-threaded.
* Wrap it with concurrency logic externally if needed.

---

## 7. **Write Tests for Concurrent Code**

Testing concurrency is hard but necessary. Use:

* Controlled concurrency (using mocks or test doubles)
* Timeouts and retries in tests (judiciously)
* Tools like Thread Sanitizers or Valgrind to detect races

---

## 8. **Avoid Premature Optimization**

Don’t introduce threads unless the performance benefit is measurable and necessary.

---

## Summary

* Concurrency is a tool for performance, not structure
* Keep core logic thread-agnostic
* Isolate synchronization to small, well-tested units
* Minimize shared state; use message passing when possible
* Use modern concurrency primitives in C++

---

## 🧠 Summary Quote

> **“The key to writing clean concurrent code is to keep concurrency-related code separate from the rest of the system.”**
> — *Robert C. Martin*
