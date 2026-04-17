# Functions

![Caterpillar smoking a Hookah](/.attachments/caterpillar.jpg)

---

## 1. **Small!**

**Functions should be small. Really small. Aim for 5–10 lines max.**

* **Bad**

  ```cpp
  void process_order(Order& order) {
      if (!order.is_valid()) {
          log("Invalid order");
          return;
      }
      apply_discount(order);
      update_inventory(order);
      notify_customer(order);
  }
  ```
* **Good**

  ```cpp
  void process_order(Order& order) {
      if (!is_valid(order)) return;
      apply(order);
      update(order);
      notify(order);
  }

  bool is_valid(const Order& order) { /*...*/ }
  void apply(Order& order) { /*...*/ }
  void update(Order& order) { /*...*/ }
  void notify(const Order& order) { /*...*/ }
  ```

---

## 2. **Do One Thing**

**Each function should do one thing and do it well.**

* **Bad**

  ```cpp
  void save_user(User& user) {
      if (!user.is_valid()) return;
      db.save(user);
      email.send_welcome(user.email);
  }
  ```
* **Good**

  ```cpp
  void save_user(User& user) {
      if (!is_valid(user)) return;
      persist_user(user);
      send_welcome_email(user.email);
  }
  ```

---

## 3. **One Level of Abstraction per Function**

**Don't mix high- and low-level operations in the same function.**

* **Bad**

  ```cpp
  void render_page() {
      std::cout << "<html>\n";
      std::cout << "<head>...</head>\n";
      std::cout << "<body>\n";
      render_body();
      std::cout << "</body>\n</html>";
  }
  ```
* **Good**

  ```cpp
  void render_page() {
      render_header();
      render_body();
      render_footer();
  }
  ```

---

## 4. **Use Descriptive Names**

**Function names should say what they do. Prefer `find_user_by_email` over `handle`.**

* **Bad**

  ```cpp
  void handle() { /* what does this do? */ }
  ```
* **Good**

  ```cpp
  void load_customer_profile() { /* clear purpose */ }
  ```

---

## 5. **Function Arguments — The Fewer the Better**

**0–2 arguments is ideal. Avoid flag arguments and long parameter lists.**

* **Bad**

  ```cpp
  void create_user(std::string name, std::string email, bool is_admin);
  ```
* **Good**

  ```cpp
  struct UserOptions {
      std::string name;
      std::string email;
      bool is_admin = false;
  };

  void create_user(const UserOptions& options);
  ```

---

## 6. **No Flag Arguments**

**A flag means the function does more than one thing.**

* **Bad**

  ```cpp
  void render(bool is_detailed);
  ```
* **Good**

  ```cpp
  void render_summary();
  void render_detailed();
  ```

---

## 7. **Have No Side Effects**

**A function should do what it says and nothing more (no hidden writes or I/O unless stated).**

* **Bad**

  ```cpp
  bool is_valid_user(const User& user) {
      log_to_file(user); // side effect
      return !user.name.empty();
  }
  ```
* **Good**

  ```cpp
  bool is_valid_user(const User& user) {
      return !user.name.empty();
  }
  ```

---

## 8. **Command–Query Separation**

**A function should either do something (command) or answer something (query), but not both.**

* **Bad**

  ```cpp
  bool save_user(User& user); // returns success AND saves (violates CQS)
  ```
* **Good**

  ```cpp
  bool is_user_valid(const User& user);
  void save_user(const User& user);
  ```

---

## 9. **Prefer Exceptions to Returning Error Codes**

**Use RAII and exceptions for error handling, not manual checks.**

* **Bad**

  ```cpp
  int open_file(const std::string& name) {
      if (!file_exists(name)) return -1;
      // open logic...
  }
  ```
* **Good**

  ```cpp
  void open_file(const std::string& name) {
      if (!file_exists(name)) throw std::runtime_error("File not found");
      // open logic...
  }
  ```

---

## 10. **Don't Repeat Yourself (DRY)**

**Duplicate code leads to bugs. Refactor into shared functions.**

* **Bad**

  ```cpp
  void log_info(const std::string& msg) {
      std::cout << "[INFO] " << msg << std::endl;
  }

  void log_error(const std::string& msg) {
      std::cout << "[ERROR] " << msg << std::endl;
  }
  ```
* **Good**

  ```cpp
  enum class LogLevel { Info, Error };

  void log(LogLevel level, const std::string& msg) {
      std::cout << "[" << to_string(level) << "] " << msg << std::endl;
  }
  ```