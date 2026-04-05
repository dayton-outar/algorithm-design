# Moving Features

Moving features is a fundamental tool for adapting code structure as understanding deepens, making it easier to modify, optimize, or extend software while preserving correctness.

---

## 1. Move Function

**Main Point:**
Move a function to the class or module where it fits best, often to improve encapsulation or reduce dependency.

**Before**
`overdraftCharge()` is in `Account`, but belongs in `AccountType`:

```cpp
class Account {
public:
    double overdraftCharge() const {
        if (type_.isPremium()) {
            return (daysOverdrawn_ <= 7)
                ? 10
                : 10 + (daysOverdrawn_ - 7) * 0.85;
        }
        return daysOverdrawn_ * 1.75;
    }
private:
    AccountType type_;
    int daysOverdrawn_;
};
```

**After**
Move logic into `AccountType`:

```cpp
class AccountType {
public:
    double overdraftCharge(int daysOverdrawn) const {
        if (isPremium_) {
            return (daysOverdrawn <= 7)
                ? 10
                : 10 + (daysOverdrawn - 7) * 0.85;
        }
        return daysOverdrawn * 1.75;
    }
private:
    bool isPremium_;
};

class Account {
public:
    double overdraftCharge() const {
        return type_.overdraftCharge(daysOverdrawn_);
    }
private:
    AccountType type_;
    int daysOverdrawn_;
};
```

---

## 2. Move Field

**Main Point:**
Relocate a field to the class or struct where it is most relevant or consistently accessed.

**Before**
Discount rate is in `Customer`, but fits better in `CustomerContract`:

```cpp
class Customer {
public:
    double discountRate() const { return discountRate_; }
    void setDiscountRate(double r) { discountRate_ = r; }
private:
    double discountRate_;
    CustomerContract contract_;
};
```

**After**
Move `discountRate` into `CustomerContract`:

```cpp
class CustomerContract {
public:
    double discountRate() const { return discountRate_; }
    void setDiscountRate(double r) { discountRate_ = r; }
private:
    double discountRate_;
};

class Customer {
public:
    double discountRate() const { return contract_.discountRate(); }
    void setDiscountRate(double r) { contract_.setDiscountRate(r); }
private:
    CustomerContract contract_;
};
```

---

## 3. Move Statements into Function / Move Statements to Callers

**Main Point:**
Move related or repetitive statements into a function, or move specialized logic from a function to its callers.

**Before**
Duplicate code outside and inside function:

```cpp
void renderPhoto(const Photo& photo) {
    std::cout << "<p>title: " << photo.title << "</p>\n";
    emitPhotoData(photo);
}

void emitPhotoData(const Photo& photo) {
    std::cout << "<p>location: " << photo.location << "</p>\n";
    std::cout << "<p>date: " << photo.date << "</p>\n";
}
```

**After**
Move the statement into the function:

```cpp
void emitPhotoData(const Photo& photo) {
    std::cout << "<p>title: " << photo.title << "</p>\n";
    std::cout << "<p>location: " << photo.location << "</p>\n";
    std::cout << "<p>date: " << photo.date << "</p>\n";
}
```

Or, move a statement out to callers for customization.

---

## 4. Replace Inline Code with Function Call

**Main Point:**
If code duplicates a function’s logic, replace it with a function call.

**Before**

```cpp
bool appliesToMass = false;
for (const auto& state : states) {
    if (state == "MA") appliesToMass = true;
}
```

**After**

```cpp
bool appliesToMass = std::find(states.begin(), states.end(), "MA") != states.end();
```

---

## 5. Slide Statements

**Main Point:**
Move statements so that related logic is grouped, often as a preparatory step for other refactorings.

**Before**

```cpp
auto pricingPlan = retrievePricingPlan();
auto order = retrieveOrder();
double chargePerUnit = pricingPlan.unit;
```

**After**

```cpp
auto pricingPlan = retrievePricingPlan();
double chargePerUnit = pricingPlan.unit;
auto order = retrieveOrder();
```

---

## 6. Split Loop

**Main Point:**
When a loop does multiple things, split it into several loops each with a single responsibility.

**Before**

```cpp
double totalSalary = 0;
int youngest = INT_MAX;
for (const auto& person : people) {
    if (person.age < youngest) youngest = person.age;
    totalSalary += person.salary;
}
```

**After**

```cpp
double totalSalary = 0;
for (const auto& person : people) {
    totalSalary += person.salary;
}

int youngest = INT_MAX;
for (const auto& person : people) {
    if (person.age < youngest) youngest = person.age;
}
```

---

## 7. Replace Loop with Pipeline

**Main Point:**
Use STL algorithms (`std::transform`, `std::copy_if`, `std::accumulate`, etc.) for clarity and expressiveness instead of raw loops.

**Before**

```cpp
std::vector<std::string> programmers;
for (const auto& person : people) {
    if (person.job == "programmer") programmers.push_back(person.name);
}
```

**After**

```cpp
std::vector<std::string> programmers;
std::copy_if(people.begin(), people.end(), std::back_inserter(programmers),
    [](const Person& p) { return p.job == "programmer"; }
);
std::transform(programmers.begin(), programmers.end(), programmers.begin(),
    [](const std::string& name) { return name; }
);
```

Or, more modern (C++20):

```cpp
auto programmers = people
    | std::views::filter([](const Person& p){ return p.job == "programmer"; })
    | std::views::transform([](const Person& p){ return p.name; });
```

---

## 8. Remove Dead Code

**Main Point:**
Delete unused code to reduce clutter and confusion.

**Example**

```cpp
// Before
void unusedFunction() {
    // ...
}

// After
// (Function deleted)
```
