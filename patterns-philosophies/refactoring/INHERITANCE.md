# Dealing with Inheritance

The risks of duplication, poor abstraction, and brittle hierarchies are emphasized, the power of judicious use and refactoring of inheritance is highlighted, and techniques for restructuring class hierarchies—such as pulling up or pushing down methods and fields, extracting or collapsing superclasses, and replacing inheritance with delegation—are demonstrated to clarify intent, reduce coupling, and make code more adaptable. This chapter presents a range of strategies to evolve inheritance structures, eliminate redundancy, and use composition or delegation where inheritance no longer fits, ultimately making object-oriented designs more robust and maintainable.

---

## 1. Pull Up Method

**Main Point**
Move duplicate methods from subclasses to a superclass when they represent common behavior.

**Before**

```cpp
class Salesman : public Employee {
public:
    double annualCost() const { return monthlyCost_ * 12; }
private:
    double monthlyCost_;
};

class Engineer : public Employee {
public:
    double annualCost() const { return monthlyCost_ * 12; }
private:
    double monthlyCost_;
};
```

**After**

```cpp
class Employee {
public:
    double annualCost() const { return monthlyCost_ * 12; }
protected:
    double monthlyCost_;
};

class Salesman : public Employee {};
class Engineer : public Employee {};
```

---

## 2. Pull Up Field

**Main Point**
When subclasses share a data member with the same purpose, move it to the superclass.

**Before**

```cpp
class Salesman : public Employee {
protected:
    std::string name_;
};

class Engineer : public Employee {
protected:
    std::string name_;
};
```

**After**

```cpp
class Employee {
protected:
    std::string name_;
};

class Salesman : public Employee {};
class Engineer : public Employee {};
```

---

## 3. Pull Up Constructor Body

**Main Point**
Factor out common parts of subclass constructors and move them to the superclass constructor.

**Before**

```cpp
class Employee : public Party {
public:
    Employee(std::string name, int id, double monthlyCost)
        : Party(), id_(id), name_(name), monthlyCost_(monthlyCost) {}
private:
    int id_;
    std::string name_;
    double monthlyCost_;
};

class Department : public Party {
public:
    Department(std::string name, std::vector<Employee> staff)
        : Party(), name_(name), staff_(std::move(staff)) {}
private:
    std::string name_;
    std::vector<Employee> staff_;
};
```

**After**

```cpp
class Party {
public:
    explicit Party(std::string name) : name_(std::move(name)) {}
protected:
    std::string name_;
};

class Employee : public Party {
public:
    Employee(std::string name, int id, double monthlyCost)
        : Party(std::move(name)), id_(id), monthlyCost_(monthlyCost) {}
private:
    int id_;
    double monthlyCost_;
};

class Department : public Party {
public:
    Department(std::string name, std::vector<Employee> staff)
        : Party(std::move(name)), staff_(std::move(staff)) {}
private:
    std::vector<Employee> staff_;
};
```

---

## 4. Push Down Method / Push Down Field

**Main Point**
Move a method or field from a superclass to the relevant subclass(es) when only those subclasses use it.

**Before**

```cpp
class Employee {
public:
    int quota() const { return quota_; }
protected:
    int quota_;
};

class Engineer : public Employee {};
class Salesman : public Employee {};
```

**After**

```cpp
class Employee {};

class Engineer : public Employee {};

class Salesman : public Employee {
public:
    int quota() const { return quota_; }
private:
    int quota_;
};
```

---

## 5. Replace Type Code with Subclasses

**Main Point**
Replace a field representing a type code with subclasses, allowing polymorphism to handle behavior instead of conditionals.

**Before**

```cpp
class Employee {
public:
    enum class Type { Engineer, Salesman, Manager };
    Employee(std::string name, Type type) : name_(std::move(name)), type_(type) {}
    std::string toString() const { return name_ + " (" + typeToString(type_) + ")"; }
    // Conditional logic on type
private:
    std::string name_;
    Type type_;
};
```

**After**

```cpp
class Employee {
public:
    explicit Employee(std::string name) : name_(std::move(name)) {}
    virtual std::string typeString() const = 0;
    virtual std::string toString() const { return name_ + " (" + typeString() + ")"; }
protected:
    std::string name_;
};

class Engineer : public Employee {
public:
    using Employee::Employee;
    std::string typeString() const override { return "engineer"; }
};

class Salesman : public Employee {
public:
    using Employee::Employee;
    std::string typeString() const override { return "salesman"; }
};

class Manager : public Employee {
public:
    using Employee::Employee;
    std::string typeString() const override { return "manager"; }
};
```

---

## 6. Remove Subclass

**Main Point**
If a subclass does too little, remove it and use a field on the superclass to represent its difference.

**Before**

```cpp
class Person {
public:
    virtual char genderCode() const { return 'X'; }
};

class Male : public Person {
public:
    char genderCode() const override { return 'M'; }
};

class Female : public Person {
public:
    char genderCode() const override { return 'F'; }
};
```

**After**

```cpp
class Person {
public:
    explicit Person(std::string name, char genderCode)
        : name_(std::move(name)), genderCode_(genderCode) {}
    char genderCode() const { return genderCode_; }
private:
    std::string name_;
    char genderCode_;
};
```

---

## 7. Extract Superclass / Collapse Hierarchy

**Main Point**
Create a new superclass for classes with common features, or merge two classes into one if the hierarchy is no longer justified.

**Extract Superclass Example**

```cpp
class Party {
public:
    explicit Party(std::string name) : name_(std::move(name)) {}
    virtual double annualCost() const = 0;
    std::string name() const { return name_; }
protected:
    std::string name_;
};

class Employee : public Party {
public:
    Employee(std::string name, int id, double monthlyCost)
        : Party(std::move(name)), id_(id), monthlyCost_(monthlyCost) {}
    double annualCost() const override { return monthlyCost_ * 12; }
private:
    int id_;
    double monthlyCost_;
};

class Department : public Party {
public:
    Department(std::string name, std::vector<Employee> staff)
        : Party(std::move(name)), staff_(std::move(staff)) {}
    double annualCost() const override {
        double total = 0;
        for (const auto& e : staff_) total += e.annualCost();
        return total;
    }
private:
    std::vector<Employee> staff_;
};
```

**Collapse Hierarchy Example**
If `Salesman` and `Employee` are no longer different, merge all into `Employee`.

---

## 8. Replace Subclass/Superclass with Delegate

**Main Point**
Replace inheritance with delegation (composition) when inheritance creates rigid coupling or no longer fits the domain.

**Before**

```cpp
class List { /* ... */ };
class Stack : public List { /* ... */ };
```

**After**

```cpp
class List { /* ... */ };

class Stack {
public:
    void push(int value) { storage_.push_back(value); }
    void pop() { storage_.pop_back(); }
    // Only expose stack operations, not list operations
private:
    List storage_;
};
```
