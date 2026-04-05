# Simplifying Logic

The risks and complexity of conditional logic are emphasized, the power of decomposing and consolidating conditionals is highlighted, and techniques for refactoring conditionals—such as guard clauses, polymorphism, and special case handling—are demonstrated to clarify code and reduce bugs. This chapter presents a suite of strategies to simplify branching logic, making intent clear, reducing duplication, and enabling easier extension or maintenance. Techniques covered include extracting and consolidating conditionals, replacing nested conditionals with guard clauses, using polymorphism instead of complex switch statements, introducing special case or null objects to eliminate repetitive checks, and leveraging assertions to document and enforce program assumptions.

---

## 1. Decompose Conditional

**Main Point**
Complex conditionals can obscure intent. Split the condition and each branch into clearly named functions, so the purpose and reasoning are obvious.

**Before**

```cpp
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
```

**After**

```cpp
if (isSummer(aDate, plan))
    charge = summerCharge(quantity, plan);
else
    charge = regularCharge(quantity, plan);

bool isSummer(const Date& date, const Plan& plan) {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
}

double summerCharge(int quantity, const Plan& plan) {
    return quantity * plan.summerRate;
}

double regularCharge(int quantity, const Plan& plan) {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}
```

---

## 2. Consolidate Conditional Expression

**Main Point**
When multiple checks lead to the same result, combine them into a single, expressive condition.

**Before**

```cpp
if (employee.seniority < 2) return 0;
if (employee.monthsDisabled > 12) return 0;
if (employee.isPartTime) return 0;
```

**After**

```cpp
if (isNotEligibleForDisability(employee)) return 0;

bool isNotEligibleForDisability(const Employee& employee) {
    return employee.seniority < 2 ||
           employee.monthsDisabled > 12 ||
           employee.isPartTime;
}
```

---

## 3. Replace Nested Conditional with Guard Clauses

**Main Point**
Use guard clauses to handle exceptional or early-return cases first, flattening deep nesting and highlighting normal logic flow.

**Before**

```cpp
double payAmount(const Employee& employee) {
    if (employee.isSeparated) {
        return 0;
    } else {
        if (employee.isRetired) {
            return 0;
        } else {
            // Normal pay calculation
            return calculateNormalPay(employee);
        }
    }
}
```

**After**

```cpp
double payAmount(const Employee& employee) {
    if (employee.isSeparated) return 0;
    if (employee.isRetired) return 0;
    return calculateNormalPay(employee);
}
```

---

## 4. Replace Conditional with Polymorphism

**Main Point**
Use inheritance and virtual functions to handle condition-dependent behavior, reducing complex switch or if/else trees.

**Before**

```cpp
switch (bird.type) {
    case BirdType::EuropeanSwallow:
        return "average";
    case BirdType::AfricanSwallow:
        return bird.numberOfCoconuts > 2 ? "tired" : "average";
    case BirdType::NorwegianBlueParrot:
        return bird.voltage > 100 ? "scorched" : "beautiful";
    default:
        return "unknown";
}
```

**After**

```cpp
class Bird {
public:
    virtual std::string plumage() const { return "unknown"; }
    virtual ~Bird() = default;
};

class EuropeanSwallow : public Bird {
public:
    std::string plumage() const override { return "average"; }
};

class AfricanSwallow : public Bird {
public:
    AfricanSwallow(int coconuts) : numberOfCoconuts(coconuts) {}
    std::string plumage() const override {
        return numberOfCoconuts > 2 ? "tired" : "average";
    }
private:
    int numberOfCoconuts;
};

class NorwegianBlueParrot : public Bird {
public:
    NorwegianBlueParrot(int voltage) : voltage(voltage) {}
    std::string plumage() const override {
        return voltage > 100 ? "scorched" : "beautiful";
    }
private:
    int voltage;
};
```

---

## 5. Introduce Special Case (Null Object)

**Main Point**
Encapsulate special cases (such as “null” or “unknown”) in dedicated objects to eliminate repetitive checks and centralize default behavior.

**Before**

```cpp
std::string customerName;
if (customer == nullptr) customerName = "occupant";
else customerName = customer->name();
```

**After**

```cpp
class Customer {
public:
    virtual std::string name() const = 0;
    virtual ~Customer() = default;
};

class RealCustomer : public Customer {
public:
    RealCustomer(std::string name) : name_(std::move(name)) {}
    std::string name() const override { return name_; }
private:
    std::string name_;
};

class UnknownCustomer : public Customer {
public:
    std::string name() const override { return "occupant"; }
};

std::shared_ptr<Customer> getCustomer(bool known) {
    if (known) return std::make_shared<RealCustomer>("Alice");
    return std::make_shared<UnknownCustomer>();
}

// Usage
auto customer = getCustomer(false);
std::string customerName = customer->name();
```

---

## 6. Introduce Assertion

**Main Point**
Use assertions to make program assumptions explicit and catch programming errors early.

**Before**

```cpp
double applyDiscount(double amount, double discountRate) {
    if (discountRate)
        return amount - (discountRate * amount);
    else
        return amount;
}
```

**After**

```cpp
#include <cassert>

double applyDiscount(double amount, double discountRate) {
    if (!discountRate) return amount;
    assert(discountRate >= 0);
    return amount - (discountRate * amount);
}
```