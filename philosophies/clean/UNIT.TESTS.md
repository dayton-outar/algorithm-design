# Unit Tests

![Choir Singing](/.attachments/choir.jpg)

---

> **“Clean code works. But to make sure it works, you need clean tests.”**

Clean, fast, and reliable tests are essential to ensure that code stays maintainable over time.

---

## 1. **Three Laws of TDD (Test-Driven Development)**

1. You may not write production code unless you have a failing test.
2. You may not write more of a test than is sufficient to fail.
3. You may not write more production code than necessary to pass the test.

This enforces tight feedback loops and simple design.

---

## 2. **A Clean Test Should Be:**

* **Readable** – Easy to understand at a glance.
* **Fast** – Run frequently.
* **Independent** – One test failing shouldn’t cause others to fail.
* **Repeatable** – Same result every time.
* **Self-validating** – Should assert outcomes clearly.
* **Timely** – Written before production code (in TDD).

---

## 3. **Use Descriptive Names**

**Bad:**

```cpp
TEST(AccountTest, Test1) {
    // ?
}
```

**Good:**

```cpp
TEST(AccountTest, ThrowsIfWithdrawalExceedsBalance) {
    // clear intent
}
```

---

## 4. **One Assert per Test**

Each test should verify one behavior.

**Bad:**

```cpp
TEST(AccountTest, DepositAndWithdraw) {
    Account acc;
    acc.deposit(100);
    ASSERT_EQ(acc.getBalance(), 100);
    acc.withdraw(30);
    ASSERT_EQ(acc.getBalance(), 70);
}
```

**Good:**

Split into two focused tests:

```cpp
TEST(AccountTest, UpdatesBalanceAfterDeposit) { ... }
TEST(AccountTest, UpdatesBalanceAfterWithdraw) { ... }
```

---

## 5. **Keep Test Code Clean**

Test code is just as important as production code. Refactor it. DRY it up.

**Use helpers, factories, and setup functions** to avoid repetition.

---

## 6. **Avoid Logic in Tests**

Tests should be simple. Don’t put complex conditionals or loops in them.

**Bad:**

```cpp
for (int i = 0; i < 100; ++i) {
    if (i % 2 == 0) {
        ASSERT_TRUE(obj.doSomething(i));
    }
}
```

**Good:**

Test specific cases with clear expectations.

---

## 7. **Treat Tests as First-Class Code**

* Apply same standards: naming, formatting, design.
* Don’t let test suites rot.
* Clean tests help keep production code clean.

---

## Summary

* Write tests before production code when possible
* Make each test focused and independent
* Use clear, expressive names
* Keep tests fast, readable, and deterministic
* Maintain test code as seriously as production code

---

## 🧠 Summary Quote

> **“Clean tests are readable, maintainable, and fast. They give us the courage to keep our code clean.”**
> — *Robert C. Martin*
