# Meaningful Names

![Parents read a book of Baby Names](/.attachments/beautiful-names.jpg)

---

## 1. Use Intention-Revealing Names

**Explain what the variable or function does.**

* **Bad**

  ```cpp
  int d; // what is d?
  ```
* **Good**

  ```cpp
  int elapsed_days;
  ```

---

## 2. Avoid Disinformation

**Don't use misleading names (e.g., `l`, `O`, or abbreviations).**

* **Bad**

  ```cpp
  int l = 1; // looks like '1' or 'I'
  ```
* **Good**

  ```cpp
  int line_count = 1;
  ```

---

## 3. Make Meaningful Distinctions

**Avoid names that only differ by numbers or vague terms.**

* **Bad**

  ```cpp
  int user, user1, user2;
  ```
* **Good**

  ```cpp
  int user_id;
  std::string user_name;
  ```

---

## 4. Use Pronounceable Names

**Names should be readable and speakable.**

* **Bad**

  ```cpp
  struct DtaRcrd102 {};
  ```
* **Good**

  ```cpp
  struct CustomerRecord {};
  ```

---

## 5. Use Searchable Names

**Avoid magic numbers or single-letter variables in large scopes.**

* **Bad**

  ```cpp
  for (int i = 0; i < 86400; ++i) { /*...*/ }
  ```
* **Good**

  ```cpp
  constexpr int seconds_in_day = 86400;
  for (int i = 0; i < seconds_in_day; ++i) { /*...*/ }
  ```

---

## 6. Avoid Encodings

**Don't embed type or scope into names (`m_`, `str_`, etc.). Let types and scopes speak for themselves.**

* **Bad**

  ```cpp
  std::string strName;
  ```
* **Good**

  ```cpp
  std::string name;
  ```

---

## 7. Use One Word per Concept

**Be consistent with terminology for the same action or idea.**

* **Bad**

  ```cpp
  auto fetch_user();  
  auto retrieve_user();  
  auto get_user(); // all do the same
  ```
* **Good**

  ```cpp
  auto get_user();
  ```

---

## 8. Use Solution Domain Names

**Use well-known CS terms in technical contexts.**

* **Bad**

  ```cpp
  class ThingManager {};
  ```
* **Good**

  ```cpp
  class JobScheduler {};
  ```

---

## 9. Use Problem Domain Names

**Use names relevant to the business or application domain.**

* **Bad**

  ```cpp
  class DataProcessor {};
  ```
* **Good**

  ```cpp
  class InvoiceGenerator {};
  ```

---

## 10. Add Meaningful Context

**Disambiguate names with context when needed.**

* **Bad**

  ```cpp
  std::string first;
  std::string last;
  ```
* **Good**

  ```cpp
  std::string customer_first_name;
  std::string customer_last_name;
  ```

---

## 11. Don’t Add Gratuitous Context

**Avoid redundancy when the context is already clear.**

* **Bad**

  ```cpp
  struct ProductInfo {
      std::string product_info_name;
  };
  ```
* **Good**

  ```cpp
  struct Product {
      std::string name;
  };
  ```
