# Simplifying Methods

The risks of unclear, rigid, or overly coupled APIs are emphasized, the power of separating data updates from queries is highlighted, and techniques for refining interfaces—such as parameterization, explicit intent, and the use of object boundaries—are demonstrated to improve clarity, flexibility, and maintainability. This chapter presents a suite of strategies to make APIs easier to understand and evolve, including separating queries from modifiers, eliminating confusing flag arguments, parameterizing similar functions, passing whole objects instead of fragments, adjusting dependencies through parameters or queries, enforcing immutability, and restructuring complex functions into command objects when needed.

---

## 1. Separate Query from Modifier

**Main Point**
A function should either answer a question (query) or change state (modifier), but not both. This separation simplifies reasoning, testing, and refactoring.

**Before**

```cpp
std::string findMiscreant(std::vector<std::string> people) {
    for (const auto& p : people) {
        if (p == "Don" || p == "John") {
            setOffAlarms();
            return p;
        }
    }
    return "";
}
```

**After**

```cpp
std::string findMiscreant(const std::vector<std::string>& people) {
    for (const auto& p : people) {
        if (p == "Don" || p == "John") return p;
    }
    return "";
}

void alertForMiscreant(const std::vector<std::string>& people) {
    if (findMiscreant(people) != "") setOffAlarms();
}
```

---

## 2. Parameterize Function

**Main Point**
When similar functions differ only by literal values, replace them with a single function that takes those values as parameters.

**Before**

```cpp
void tenPercentRaise(Employee& person) {
    person.salary *= 1.10;
}
void fivePercentRaise(Employee& person) {
    person.salary *= 1.05;
}
```

**After**

```cpp
void raise(Employee& person, double factor) {
    person.salary *= (1 + factor);
}
```

---

## 3. Remove Flag Argument

**Main Point**
Explicit function names are clearer than boolean or string flag arguments that dictate a function’s control flow.

**Before**

```cpp
Date deliveryDate(const Order& order, bool isRush) {
    if (isRush) {
        // Rush logic
    } else {
        // Regular logic
    }
    // ...
}

// Usage:
auto date = deliveryDate(order, true);
```

**After**

```cpp
Date rushDeliveryDate(const Order& order) {
    // Rush logic
}

Date regularDeliveryDate(const Order& order) {
    // Regular logic
}

// Usage:
auto date = rushDeliveryDate(order);
```

---

## 4. Preserve Whole Object

**Main Point**
Instead of passing individual values extracted from an object, pass the whole object to a function.

**Before**

```cpp
if (plan.withinRange(room.daysTempRange.low, room.daysTempRange.high)) {
    // ...
}
```

**After**

```cpp
if (plan.withinRange(room.daysTempRange)) {
    // ...
}

// And the function signature:
bool withinRange(const TemperatureRange& range) const;
```

---

## 5. Replace Parameter with Query

**Main Point**
If a function can determine a value by querying one of its parameters or internal state, remove the value from the argument list to reduce duplication.

**Before**

```cpp
double discountedPrice(double basePrice, int discountLevel) {
    switch (discountLevel) {
        case 1: return basePrice * 0.95;
        case 2: return basePrice * 0.90;
    }
    return basePrice;
}

// Call site:
auto price = discountedPrice(order.basePrice(), order.discountLevel());
```

**After**

```cpp
double discountedPrice(const Order& order) {
    double basePrice = order.basePrice();
    int discountLevel = order.discountLevel();
    switch (discountLevel) {
        case 1: return basePrice * 0.95;
        case 2: return basePrice * 0.90;
    }
    return basePrice;
}
```

---

## 6. Replace Query with Parameter

**Main Point**
Move responsibility for providing a value to the caller, reducing dependencies and making the function easier to test or move.

**Before**

```cpp
int targetTemperature(const HeatingPlan& plan) {
    int selected = thermostat.selectedTemperature();
    if (selected > plan.max()) return plan.max();
    if (selected < plan.min()) return plan.min();
    return selected;
}
```

**After**

```cpp
int targetTemperature(const HeatingPlan& plan, int selectedTemperature) {
    if (selectedTemperature > plan.max()) return plan.max();
    if (selectedTemperature < plan.min()) return plan.min();
    return selectedTemperature;
}

// Usage:
int temp = targetTemperature(plan, thermostat.selectedTemperature());
```

---

## 7. Remove Setting Method

**Main Point**
If a field should not change after initialization, remove its setter and enforce immutability via the constructor.

**Before**

```cpp
class Person {
public:
    void setId(std::string id) { id_ = std::move(id); }
    std::string id() const { return id_; }
private:
    std::string id_;
};
```

**After**

```cpp
class Person {
public:
    explicit Person(std::string id) : id_(std::move(id)) {}
    std::string id() const { return id_; }
private:
    std::string id_;
};
```

---

## 8. Replace Constructor with Factory Function

**Main Point**
For flexibility and clarity, use a named factory function instead of direct constructor calls, especially when instantiating based on context.

**Before**

```cpp
Employee leadEngineer(document.leadEngineer, "E");
```

**After**

```cpp
Employee createEngineer(const std::string& name) {
    return Employee(name, "E");
}

// Usage:
auto leadEngineer = createEngineer(document.leadEngineer);
```

---

## 9. Replace Function with Command

**Main Point**
Convert a complex function into a class (command object) when the function is unwieldy or needs to maintain state across steps.

**Before**

```cpp
int score(const Candidate& c, const MedicalExam& m, const ScoringGuide& s) {
    int result = 0;
    // Complex calculation
    return result;
}
```

**After**

```cpp
class Scorer {
public:
    Scorer(const Candidate& c, const MedicalExam& m, const ScoringGuide& s)
        : candidate(c), medicalExam(m), scoringGuide(s) {}

    int execute() {
        int result = 0;
        // Complex calculation using candidate, medicalExam, scoringGuide
        return result;
    }
private:
    Candidate candidate;
    MedicalExam medicalExam;
    ScoringGuide scoringGuide;
};

// Usage:
Scorer scorer(candidate, medicalExam, scoringGuide);
int score = scorer.execute();
```

---

## 10. Replace Command with Function

**Main Point**
When a command object is no longer justified by complexity, collapse it back into a simple function.

**Before**

```cpp
class ChargeCalculator {
public:
    ChargeCalculator(const Customer& c, int usage, const Provider& p)
        : customer(c), usage(usage), provider(p) {}
    double charge() const {
        return customer.baseRate() * usage + provider.connectionCharge();
    }
private:
    Customer customer;
    int usage;
    Provider provider;
};
```

**After**

```cpp
double charge(const Customer& customer, int usage, const Provider& provider) {
    return customer.baseRate() * usage + provider.connectionCharge();
}
```
