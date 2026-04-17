# Formatting

![Drunken Sailors](/.attachments/drunken.sailors.jpg)

---

Formatting isn't just aesthetics—it expresses structure, guides the reader, and reduces cognitive load. The code should tell a story, and formatting determines how easily that story is understood.

---

## 📏 Vertical Formatting

### 1. **Code Should Fit in a Screen**

**Aim to keep files short and focused—ideally under 200–500 lines.**

* **Bad**: 1500-line file with 20 unrelated classes
* **Good**: Split into focused headers/source files per responsibility

---

### 2. **Vertical Openness Signals Separation**

**Use blank lines to separate distinct sections or ideas.**

* **Bad**

  ```cpp
  void init() { ... }
  void run() { ... }
  void shutdown() { ... }
  ```

* **Good**

  ```cpp
  void init() { ... }

  void run() { ... }

  void shutdown() { ... }
  ```

---

### 3. **Related Code Belongs Together**

**Keep closely related code vertically close.**

* **Bad**

  ```cpp
  void validate();
  ...
  void read();
  ...
  void setup();
  ...
  void validate() { ... }
  ```

* **Good**

  ```cpp
  void validate() { ... }
  void setup() { ... }
  void read() { ... }
  ```

---

### 4. **Variable Declarations Should Be Near Their Use**

**Declare variables as close as possible to where they’re needed.**

* **Bad**

  ```cpp
  int result;
  ...
  result = compute();
  ```

* **Good**

  ```cpp
  int result = compute();
  ```

---

### 5. **Instance Variables at the Top**

**Declare member variables at the top of class definitions.**

* **Good**

  ```cpp
  class Timer {
  public:
      void start();
      void stop();

  private:
      bool running = false;
      std::chrono::steady_clock::time_point start_time;
  };
  ```

---

### 6. **Dependent Functions Should Be Close**

**Place functions that call each other near each other.**

* Helps readers trace logic without scrolling

---

### 7. **Conceptual Order**

**Public → Protected → Private. High-level → low-level.**

* Start with broad interface and drill into detail

---

## 📐 Horizontal Formatting

### 1. **Keep Line Length Under Control (\~100–120 characters)**

**Avoid horizontal scrolling. Break long lines sensibly.**

* **Bad**

  ```cpp
  if (user.isAdmin() && user.hasPermission("WRITE") && !user.isBanned() && system.isWritable(path)) {
  ```

* **Good**

  ```cpp
  if (user.isAdmin() &&
      user.hasPermission("WRITE") &&
      !user.isBanned() &&
      system.isWritable(path)) {
  ```

---

### 2. **Use Consistent Indentation**

**4 spaces is common. Be consistent with your team/project style.**

---

### 3. **Use Spaces Around Operators**

* **Bad**

  ```cpp
  x=3+4;
  ```
* **Good**

  ```cpp
  x = 3 + 4;
  ```

---

### 4. **Don't Pack Too Much Into One Line**

**One statement per line improves clarity and diff readability.**

* **Bad**

  ```cpp
  if (done) return; log("Finished");
  ```
* **Good**

  ```cpp
  if (done) return;

  log("Finished");
  ```

---

### 5. **Function Declarations Should Be Clear**

**Use line breaks for long signatures.**

* **Good**

  ```cpp
  void send_email(const std::string& to,
                  const std::string& subject,
                  const std::string& body);
  ```

---

### 6. **Align for Readability (Sparingly)**

**Sometimes vertical alignment helps, but overuse can hurt maintainability.**

* **Acceptable**

  ```cpp
  int    width    = 120;
  double opacity  = 0.75;
  bool   enabled  = true;
  ```

* **Avoid aligning across distant blocks—it becomes fragile**

---

### 7. **Chain Method Calls Vertically for Clarity**

**Modern C++ with fluent interfaces (e.g. ranges):**

* **Bad**

  ```cpp
  auto result = vec | std::views::filter(f) | std::views::transform(g) | std::views::take(5);
  ```

* **Good**

  ```cpp
  auto result = vec
              | std::views::filter(f)
              | std::views::transform(g)
              | std::views::take(5);
  ```

---

## 🧠 Summary Quote

> **"The purpose of formatting is to make the code easier to read."**
> — *Robert C. Martin*
