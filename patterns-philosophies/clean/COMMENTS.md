# Comments

![Women Gossiping over Coffee](/.attachments/women.gossiping.jpg)

---

## 1. **Comments are a Failure**

**Ideally, your code should explain itself. Comments are a last resort.**

* **Bad**

  ```cpp
  // increment i by 1
  i = i + 1;
  ```
* **Good**

  ```cpp
  ++index; // advancing to next item
  ```

Use clear names instead:

```cpp
int current_index = 0;
++current_index;
```

---

## 2. **Good Comments Explain Why, Not What**

**Explain the rationale behind the code, not what the code is doing.**

* **Bad**

  ```cpp
  // Check if file exists
  if (fs::exists(path)) { ... }
  ```
* **Good**

  ```cpp
  // Skip processing if the output file already exists from a previous run
  if (fs::exists(path)) { ... }
  ```

---

## 3. **Bad Comments: Avoid Them**

**Avoid these types of comments:**

### a. **Mumbling**

* **Bad**

  ```cpp
  // do stuff
  process_data();
  ```

### b. **Redundant Comments**

* **Bad**

  ```cpp
  // Constructor
  MyClass::MyClass() { }
  ```

### c. **Misleading Comments**

* **Bad**

  ```cpp
  // Free memory
  shared_ptr<int> ptr = std::make_shared<int>(5);
  ```

### d. **Mandated Headers (that nobody updates)**

* **Bad**

  ```cpp
  /*
   * Author: Alice
   * Date: 2008
   * Modified: Never
   */
  ```

---

## 4. **Explain Intent When the Why Isn’t Obvious**

**Use comments to explain *why* something non-obvious is done.**

* **Good**

  ```cpp
  // Avoid integer overflow by using 64-bit multiplication
  auto result = static_cast<int64_t>(a) * b;
  ```

---

## 5. **Use TODOs for Future Work**

**Mark incomplete work clearly with `TODO`, `FIXME`, etc.**

* **Good**

  ```cpp
  // TODO: Support multithreaded parsing in future
  parse_file(file_path);
  ```

Prefer tracking in issue trackers, but when in code, be clear and searchable.

---

## 6. **Commented-Out Code Is Dead Weight**

**Don't keep old code in comments. Use version control.**

* **Bad**

  ```cpp
  // int x = get_value();
  // process(x);
  ```
* **Good**

  ```cpp
  int value = get_value();
  handle(value);
  ```

---

## 7. **Clarify Public APIs or Complex Logic**

**If you're writing library code, brief doc-comments are helpful.**

* **Good**

  ```cpp
  /**
   * Calculates the standard deviation of the dataset.
   * @throws std::invalid_argument if the dataset is empty.
   */
  double standard_deviation(const std::vector<double>& data);
  ```

---

## 8. **Use Self-Documenting Constructs First**

**If a comment is required, consider if a better name or structure can eliminate the need.**

* **Bad**

  ```cpp
  // flag means retry if failed
  process_data(input, true);
  ```
* **Good**

  ```cpp
  constexpr bool retry_on_failure = true;
  process_data(input, retry_on_failure);
  ```

---

## 9. **Legal Comments Are Sometimes Necessary**

**Some comments are unavoidable for licenses or regulatory needs.**

* **Good**

  ```cpp
  /*
   * Copyright (c) 2024 MyCompany
   * Licensed under MIT License.
   */
  ```

---

## Summary Quote

> **“Don’t comment bad code—rewrite it.”**
> — *Robert C. Martin*
