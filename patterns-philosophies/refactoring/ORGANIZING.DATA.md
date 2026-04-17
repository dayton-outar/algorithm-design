# Organizing Data

The risks of using variables or fields for multiple purposes are emphasized, the power of precise naming is highlighted, and separating, removing, or recalculating data is demonstrated to reduce bugs and make code more self-explanatory. Techniques such as splitting variables with mixed responsibilities, renaming fields for clarity, replacing derived data with queries, and choosing between value and reference types all serve to align the structure and meaning of data with its use in the program. These refactorings promote clearer intent, enhance maintainability, and reduce opportunities for error.

---

## 1. Split Variable

**Main Point**
If a variable serves more than one purpose (assigned different concepts), split it into distinct variables, each with a single responsibility.

**Before**

```cpp
double temp = 2 * (height + width);
std::cout << temp << std::endl;
temp = height * width;
std::cout << temp << std::endl;
```

**After**

```cpp
const double perimeter = 2 * (height + width);
std::cout << perimeter << std::endl;
const double area = height * width;
std::cout << area << std::endl;
```

---

## 2. Rename Field / Variable

**Main Point**
Clear, precise names for fields and variables make data structures self-explanatory and the codebase easier to navigate.

**Before**

```cpp
struct Organization {
    std::string name;
    std::string country;
};
```

**After**

```cpp
struct Organization {
    std::string title;
    std::string country;
};
```

Or using a class with encapsulation:

```cpp
class Organization {
public:
    Organization(std::string title, std::string country)
        : title_(std::move(title)), country_(std::move(country)) {}
    const std::string& title() const { return title_; }
    const std::string& country() const { return country_; }
private:
    std::string title_;
    std::string country_;
};
```

---

## 3. Replace Derived Variable with Query

**Main Point**
If a variable is always derived from other data, replace it with a function that calculates the value on demand, eliminating the need for manual updates.

**Before**

```cpp
class ProductionPlan {
public:
    int getProduction() const { return production_; }
    void applyAdjustment(int adjustment) {
        adjustments_.push_back(adjustment);
        production_ += adjustment;
    }
private:
    int production_ = 0;
    std::vector<int> adjustments_;
};
```

**After**

```cpp
class ProductionPlan {
public:
    int getProduction() const {
        return std::accumulate(adjustments_.begin(), adjustments_.end(), 0);
    }
    void applyAdjustment(int adjustment) {
        adjustments_.push_back(adjustment);
    }
private:
    std::vector<int> adjustments_;
};
```

---

## 4. Change Reference to Value

**Main Point**
If an object’s value is best expressed as an immutable concept (rather than shared and mutable), treat it as a value object. Any update creates a new instance.

**Before** (mutating the referenced object)

```cpp
class Money {
public:
    void applyDiscount(double d) { amount_ -= d; }
    double amount() const { return amount_; }
private:
    double amount_;
};
```

**After** (replacing with a new value)

```cpp
class Money {
public:
    Money(double amount, std::string currency)
        : amount_(amount), currency_(std::move(currency)) {}
    Money applyDiscount(double d) const {
        return Money(amount_ - d, currency_);
    }
    double amount() const { return amount_; }
    const std::string& currency() const { return currency_; }
private:
    double amount_;
    std::string currency_;
};
```

---

## 5. Change Value to Reference

**Main Point**
If you need to share and update a single object instance (so all users see changes), use a shared reference and a repository pattern.

**Before** (each order gets its own customer copy)

```cpp
class Customer {
public:
    explicit Customer(int id) : id_(id) {}
    int id() const { return id_; }
private:
    int id_;
};
class Order {
public:
    Order(int number, int customerId) : number_(number), customer_(Customer(customerId)) {}
    const Customer& customer() const { return customer_; }
private:
    int number_;
    Customer customer_;
};
```

**After** (orders reference a shared customer)

```cpp
class CustomerRepository {
public:
    std::shared_ptr<Customer> find(int id) {
        auto it = customers_.find(id);
        if (it != customers_.end()) return it->second;
        auto customer = std::make_shared<Customer>(id);
        customers_[id] = customer;
        return customer;
    }
private:
    std::unordered_map<int, std::shared_ptr<Customer>> customers_;
};

class Order {
public:
    Order(int number, std::shared_ptr<Customer> customer)
        : number_(number), customer_(std::move(customer)) {}
    std::shared_ptr<Customer> customer() const { return customer_; }
private:
    int number_;
    std::shared_ptr<Customer> customer_;
};

// Usage:
CustomerRepository repo;
auto cust = repo.find(123);
Order order1(1, cust);
Order order2(2, cust);
```
