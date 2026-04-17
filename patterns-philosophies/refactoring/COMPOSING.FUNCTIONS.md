# Composing Functions

Hiding the details of data structures and the connections between modules makes code more maintainable, flexible, and resilient to change. Techniques like encapsulating records and collections, replacing primitive types with small objects, and structuring classes to reveal intent are all advocated to protect internal details and control how data and behavior are accessed or modified. The chapter also covers when to split or merge classes, how to minimize unnecessary dependencies through delegation, and how to safely substitute algorithms. The underlying message is that strong encapsulation allows for safer, incremental changes and paves the way for continual, low-risk improvement of a codebase.

---

## 1. Encapsulate Record

**Main Point:**
Replace raw structs or records with classes to hide data, control access, and make changes easier.

**Before**

```cpp
struct Organization {
    std::string name;
    std::string country;
};
Organization organization{"Acme Gooseberries", "GB"};
std::cout << organization.name << std::endl;
organization.name = "NewName";
```

**After**

```cpp
class Organization {
public:
    Organization(std::string name, std::string country)
        : name_(std::move(name)), country_(std::move(country)) {}

    const std::string& name() const { return name_; }
    void set_name(const std::string& n) { name_ = n; }
    const std::string& country() const { return country_; }
    void set_country(const std::string& c) { country_ = c; }

private:
    std::string name_;
    std::string country_;
};

Organization org("Acme Gooseberries", "GB");
std::cout << org.name() << std::endl;
org.set_name("NewName");
```

---

## 2. Encapsulate Collection

**Main Point:**
Collections should not be directly modifiable by clients. Add/remove elements via methods and expose only read-only views or copies.

**Before**

```cpp
class Person {
public:
    std::vector<std::string> courses;
};
Person person;
person.courses.push_back("Math");
```

**After**

```cpp
class Person {
public:
    void add_course(const std::string& course) { courses_.push_back(course); }
    void remove_course(const std::string& course) {
        courses_.erase(std::remove(courses_.begin(), courses_.end(), course), courses_.end());
    }
    std::vector<std::string> courses() const { return courses_; } // Returns a copy

private:
    std::vector<std::string> courses_;
};

Person person;
person.add_course("Math");
// person.courses().push_back("Physics"); // Not allowed: can't mutate
```

---

## 3. Replace Primitive with Object

**Main Point:**
Wrap primitives in classes to attach behavior and validation.

**Before**

```cpp
class Order {
public:
    std::string priority;
};
```

**After**

```cpp
class Priority {
public:
    explicit Priority(std::string value) : value_(std::move(value)) {
        if (std::find(legal_values().begin(), legal_values().end(), value_) == legal_values().end())
            throw std::invalid_argument("Invalid priority");
    }
    std::string to_string() const { return value_; }
    bool higher_than(const Priority& other) const {
        return index() > other.index();
    }
private:
    std::string value_;
    static const std::vector<std::string>& legal_values() {
        static const std::vector<std::string> vals{"low", "normal", "high", "rush"};
        return vals;
    }
    int index() const {
        auto it = std::find(legal_values().begin(), legal_values().end(), value_);
        return static_cast<int>(std::distance(legal_values().begin(), it));
    }
};

class Order {
public:
    Priority priority;
    explicit Order(std::string p) : priority(std::move(p)) {}
};
Order order("high");
```

---

## 4. Replace Temp with Query

**Main Point:**
Turn temporary variables (especially those for intermediate calculation) into class methods for better composability and extraction.

**Before**

```cpp
class Order {
public:
    double price() const {
        double basePrice = quantity_ * itemPrice_;
        double discount = (basePrice > 1000) ? basePrice * 0.05 : 0.0;
        return basePrice - discount;
    }
private:
    int quantity_;
    double itemPrice_;
};
```

**After**

```cpp
class Order {
public:
    double price() const {
        return base_price() - discount();
    }
private:
    int quantity_;
    double itemPrice_;

    double base_price() const { return quantity_ * itemPrice_; }
    double discount() const { return (base_price() > 1000) ? base_price() * 0.05 : 0.0; }
};
```

---

## 5. Extract Class

**Main Point:**
If a class does too much, split out a cluster of data and related behavior into its own class.

**Before**

```cpp
class Person {
public:
    std::string name;
    std::string office_area_code;
    std::string office_number;
};
```

**After**

```cpp
class TelephoneNumber {
public:
    TelephoneNumber(std::string area, std::string number)
        : area_code_(std::move(area)), number_(std::move(number)) {}
    const std::string& area_code() const { return area_code_; }
    const std::string& number() const { return number_; }
    std::string to_string() const { return "(" + area_code_ + ") " + number_; }
private:
    std::string area_code_;
    std::string number_;
};

class Person {
public:
    Person(std::string name, TelephoneNumber tn)
        : name_(std::move(name)), telephone_number_(std::move(tn)) {}
    std::string name() const { return name_; }
    std::string telephone() const { return telephone_number_.to_string(); }
private:
    std::string name_;
    TelephoneNumber telephone_number_;
};
```

---

## 6. Inline Class

**Main Point:**
If a class has become too trivial, merge it back into its owner class.

**Example**
Suppose `TrackingInformation` only has two fields and is only used by `Shipment`. Move its data and logic into `Shipment` and remove the class.

---

## 7. Hide Delegate

**Main Point:**
Minimize coupling by exposing only what clients need—hide indirect relationships.

**Before**

```cpp
manager = person.department().manager();
```

**After**

```cpp
class Person {
public:
    Manager* manager() const { return department_.manager(); }
private:
    Department department_;
};
manager = person.manager();
```

---

## 8. Remove Middle Man

**Main Point:**
If your class is just forwarding too much, stop hiding the delegate—let clients call it directly.

**Before**

```cpp
manager = person.manager(); // person.manager() just returns department_.manager()
```

**After**

```cpp
manager = person.department().manager();
```

---

## 9. Substitute Algorithm

**Main Point:**
Replace a complicated algorithm with a simpler or more efficient one.

**Before**

```cpp
std::string found_person(const std::vector<std::string>& people) {
    for (const auto& p : people) {
        if (p == "Don" || p == "John" || p == "Kent")
            return p;
    }
    return "";
}
```

**After**

```cpp
std::string found_person(const std::vector<std::string>& people) {
    static const std::vector<std::string> candidates{"Don", "John", "Kent"};
    auto it = std::find_first_of(people.begin(), people.end(),
                                 candidates.begin(), candidates.end());
    return it != people.end() ? *it : "";
}
```
