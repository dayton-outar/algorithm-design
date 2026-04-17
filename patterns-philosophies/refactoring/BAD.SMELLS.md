# Bad Smells

| #  | **Code Smell**                                    | **What It Means**                                            | **Suggested Refactorings**                        | **Clean Architecture / Pragmatic Programmer** |
| -- | ------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | --------------------------------------------------------- |
| 1  | **Mysterious Name**                               | Names don’t clearly express intent.                          | Rename Variable, Rename Function                  | ✅ Naming is a core principle in both.                     |
| 2  | **Duplicated Code**                               | Same logic exists in more than one place.                    | Extract Function, Pull Up Method                  | ✅ DRY is foundational to both.                            |
| 3  | **Long Function**                                 | Method does too much and is hard to read.                    | Extract Function, Replace Temp with Query         | ✅ Violates SRP and reduces readability.                   |
| 4  | **Long Parameter List**                           | Too many parameters reduce clarity.                          | Introduce Parameter Object, Preserve Whole Object | ✅ Both prefer small, meaningful interfaces.               |
| 5  | **Global Data**                                   | State shared across wide scope leads to hidden dependencies. | Encapsulate Variable, Introduce Class             | ✅ Violates encapsulation and predictability.              |
| 6  | **Mutable Data**                                  | Uncontrolled changes to data structures.                     | Encapsulate Variable, Remove Setting Method       | ✅ Immutability is preferred in both philosophies.         |
| 7  | **Divergent Change**                              | One class is changed for multiple unrelated reasons.         | Extract Class                                     | ✅ Breaks SRP, discouraged in both.                        |
| 8  | **Shotgun Surgery**                               | A small change requires many scattered edits.                | Move Method, Inline Class                         | ✅ Indicates tight coupling and weak cohesion.             |
| 9  | **Feature Envy**                                  | A method uses another class’s data more than its own.        | Move Method, Extract Function                     | ✅ Encourages encapsulation and locality.                  |
| 10 | **Data Clumps**                                   | Repeated groups of variables appear together.                | Introduce Parameter Object, Extract Class         | ✅ Hidden abstractions; violates cohesion.                 |
| 11 | **Primitive Obsession**                           | Using basic types instead of meaningful objects.             | Replace Data Value with Object                    | ✅ Discouraged; domain modeling is preferred.              |
| 12 | **Repeated Switches**                             | Many conditional statements on the same variable.            | Replace Conditional with Polymorphism             | ✅ Polymorphism preferred over conditionals.               |
| 13 | **Loops**                                         | Traditional loops obscure logic intent.                      | Replace Loop with Pipeline (e.g. `map`, `filter`) | ✅ Encourages expressive, declarative code.                |
| 14 | **Lazy Class**                                    | Class is underutilized and adds complexity.                  | Inline Class                                      | ✅ Simplicity and minimalism encouraged.                   |
| 15 | **Speculative Generality**                        | Code anticipates needs that never arrive.                    | Collapse Hierarchy, Remove Dead Code              | ✅ Strong YAGNI alignment.                                 |
| 16 | **Temporary Field**                               | Field is set only under certain conditions.                  | Extract Class, Introduce Special Case             | ✅ SRP and class coherence violated.                       |
| 17 | **Message Chains**                                | Chained calls expose internal structure (`a.b().c().d()`).   | Hide Delegate, Move Method                        | ✅ Violates encapsulation.                                 |
| 18 | **Middle Man**                                    | A class only delegates and adds no value.                    | Remove Middle Man                                 | ✅ Favors directness and meaningful abstraction.           |
| 19 | **Insider Trading**                        | Classes access each other's internals too much.              | Move Method, Encapsulate Field                    | ✅ High coupling discouraged.                              |
| 20 | **Large Class**                                   | Class has too many fields and responsibilities.              | Extract Class, Extract Subclass                   | ✅ Breaks SRP and increases complexity.                    |
| 21 | **Alternative Classes with Different Interfaces** | Similar classes offer inconsistent APIs.                     | Rename Method, Extract Interface                  | ✅ Encourages uniformity.                                  |
| 22 | **Data Class**                                    | Class contains only fields and accessors, no behavior.       | Add Behavior, Encapsulate Field                   | ✅ Rich behavior modeling preferred.                       |
| 23 | **Refused Bequest**                               | Subclass doesn’t need all inherited behavior.                | Replace Inheritance with Delegation               | ✅ Breaks Liskov and adds fragility.                       |
| 24 | **Comments**                                      | Excessive comments often cover bad code.                     | Extract Function, Rename for clarity              | ✅ Code should be self-expressive.                         |


## Code Smells

### Mysterious Name

Poorly named variables, functions, or classes make code hard to understand. Clear naming reduces confusion and guides future changes.
**Example**:
Instead of `calc()` → use `calculateInvoiceTotal()`.


### Duplicated Code

Repeating code in multiple places invites bugs and maintenance headaches. Consolidate into a shared method.
**Example**:

```js
// In two places:
if (user.age > 18) { ... }
// Refactor:
function isAdult(user) { return user.age > 18; }
```


### Long Function

Functions that try to do too much are hard to read and maintain. Break into smaller, named pieces.
**Example**:

```js
function processOrder() {
  calculateTotal(); applyDiscount(); sendEmail(); updateInventory();
}
```


### Long Parameter List

Passing many arguments makes functions fragile. Group related parameters or pass objects.
**Example**:
Instead of `createUser(name, age, city)` → use `createUser(userData)`.


### Global Data

Variables accessible from anywhere are hard to trace and prone to bugs. Encapsulate and limit access.
**Example**:
Avoid `window.config = {...}` in JS; use a config manager module instead.


### Mutable Data

Frequent changes to shared data can cause subtle bugs. Prefer immutability where practical.
**Example**:
Avoid mutating objects directly:

```js
user.age = 30;
// Better:
const updatedUser = { ...user, age: 30 };
```


### Divergent Change

A module is modified in many unrelated ways, indicating it's doing too much. Split responsibilities.
**Example**:
A `ReportGenerator` that handles database logic and PDF formatting should be split into two classes.


### Shotgun Surgery

One small change causes changes in many places. Group related behavior to reduce ripple effects.
**Example**:
Adding a new product type requires edits in 5 classes → consolidate logic into a central `ProductType` class.


### Feature Envy

A function heavily uses data/functions from another object. It likely belongs in that object.
**Example**:
If `InvoicePrinter` accesses many fields of `Invoice`, maybe some logic belongs in `Invoice`.


### Data Clumps

Groups of variables that always appear together suggest a missing object abstraction.
**Example**:
`street`, `city`, `zip` → create an `Address` class.


### Primitive Obsession

Using basic types instead of domain-specific objects reduces clarity and safety.
**Example**:
Use `Money` instead of a raw `float` to handle currencies properly.


### Repeated Switches

Having the same switch logic in multiple places invites errors. Use polymorphism instead.
**Example**:
Instead of `switch(paymentType)` in multiple places, create `PaymentProcessor` subclasses.


### Loops

Manual loops can obscure intent. Use higher-level constructs like `map`, `filter`, `reduce`.
**Example**:

```js
// Instead of:
for (let i = 0; i < items.length; i++) { ... }
// Use:
items.forEach(item => ...)
```


### Lazy Element

Classes or functions that serve no real purpose should be inlined or removed.
**Example**:
A class with only one method that just delegates → inline it.


### Speculative Generality

Code designed for future use that never comes adds complexity. Delete unused abstractions.
**Example**:
An abstract class with one subclass and unused hooks → collapse the hierarchy.


### Temporary Field

Fields used only in specific situations clutter a class. Move them to a more appropriate class.
**Example**:
A `Reservation` class with a `conferenceRoomProjector` field used only for certain room types → extract to a specialized subclass.


### Message Chains

Chaining multiple calls across objects couples clients to structure. Hide navigation behind a method.
**Example**:
Instead of `order.getCustomer().getAddress().getCity()` → use `order.getCustomerCity()`.


### Middle Man

A class that just delegates to another adds no value. Remove it.
**Example**:
If `Manager.getSchedule()` just returns `this.calendar.getSchedule()`, consider removing `Manager`.


### Insider Trading

Too much internal knowledge shared across modules creates tight coupling. Decouple responsibilities.
**Example**:
A subclass accessing many parent internals might be better off as a delegate.


### Large Class

A class with too many responsibilities is hard to maintain. Split into cohesive components.
**Example**:
A `User` class handling authentication, billing, and notifications → split into `Authenticator`, `BillingAccount`, etc.


### Alternative Classes with Different Interfaces

Classes meant to be interchangeable must have consistent interfaces. Unify them.
**Example**:
Two cache classes with different `get()` signatures → align them for consistency.


### Data Class

Classes with only getters/setters are passive. Move related behavior into the data class.
**Example**:
If `CustomerData` is just a container, but `InvoiceService` manipulates it heavily, move methods into `CustomerData`.


### Refused Bequest

A subclass that doesn’t use its parent’s behavior or violates its interface suggests poor inheritance.
**Example**:
A `Square` subclass of `Rectangle` that ignores width/height independently → refactor with composition.


### Comments

Comments may signal confusing code. Prefer self-explanatory code over excessive commenting.
**Example**:
Instead of

```js
// calculate tax
const t = price * 0.15;
// Better:
const tax = calculateTax(price);
```

## Suggested Refactorings

Here’s the list of suggested refactorings.

---

### Extract Function

![Extract Function](/.attachments/extract.function.png)

**Summary**
Move a block of code into its own function to name the intent clearly and reduce clutter.

**Before**

```cpp
void printOwing(const Invoice& invoice) {
    double outstanding = 0;

    std::cout << "**** Customer Owes ****\n";

    for (const auto& order : invoice.orders) {
        outstanding += order.amount;
    }

    Date dueDate = Clock::today().addDays(30);

    std::cout << "name: " << invoice.customer << "\n";
    std::cout << "amount: " << outstanding << "\n";
    std::cout << "due: " << dueDate.toString() << "\n";
}
```

**After**

```cpp
void printOwing(const Invoice& invoice) {
    printBanner();
    auto outstanding = calculateOutstanding(invoice);
    printDetails(invoice, outstanding);
}

void printBanner() {
    std::cout << "**** Customer Owes ****\n";
}

double calculateOutstanding(const Invoice& invoice) {
    double result = 0;
    for (const auto& order : invoice.orders) {
        result += order.amount;
    }
    return result;
}

void printDetails(const Invoice& invoice, double outstanding) {
    std::cout << "name: " << invoice.customer << '\n';
    std::cout << "amount: " << outstanding << '\n';
}
```

---

### Inline Function

![Inline Function](/.attachments/inline.functions.png)

**Summary**
Remove a function and replace its calls with the function’s body, typically when the name adds no value.

**Before**

```cpp
int getRating(const Driver& d) {
    return moreThanFiveLateDeliveries(d) ? 2 : 1;
}

bool moreThanFiveLateDeliveries(const Driver& d) {
    return d.lateDeliveries > 5;
}
```

**After**

```cpp
int getRating(const Driver& d) {
    return (d.lateDeliveries > 5) ? 2 : 1;
}
```

---

### Extract Variable

![Extract Variable](/.attachments/extract.variable.png)

**Summary**
Assign parts of a complex expression to named `const` variables to improve readability and facilitate reuse.

**Modern C++ Example**

```cpp
double price(const Order& order) {
    const double basePrice = order.quantity * order.itemPrice;
    const double discount = std::max(0.0, order.quantity - 500.0) * order.itemPrice * 0.05;
    const double shipping = std::min(basePrice * 0.1, 100.0);
    return basePrice - discount + shipping;
}
```

---

### Inline Variable

![Inline Variable](/.attachments/inline.variable.png)

**Summary**
Replace a variable with its expression when the variable adds no clarity or is used only once.

**Before**

```cpp
double basePrice = order.basePrice();
return (basePrice > 1000);
```

**After**

```cpp
return (order.basePrice() > 1000);
```

---

### Change Signature

![Change Signature](/.attachments/change.signature.png)

**Summary**
Rename functions or change their parameters to better express their purpose or reduce coupling.

**Modern C++ Example**

```cpp
// Before
double circum(double r);

// After
double circumference(double radius);  // clearer name
```

For parameter change:

```cpp
bool inNewEngland(const Customer& c);
bool inNewEngland(std::string_view state);
```

---

### Encapsulate Variable

![Encapsulate Variable](/.attachments/encapsulate.variable.png)

**Summary**
Use getter/setter to restrict direct access to a variable, enabling validation or future refactors.

**Modern C++ Example**

```cpp
class Owner {
public:
    std::string getName() const { return data.name; }
    void setName(const std::string& name) { data.name = name; }

private:
    struct Data { std::string name; } data;
};
```

---

### Rename Variable

![Rename Variable](/.attachments/rename.variable.png)

**Summary**
Give variables meaningful names to improve self-documentation and express intent.

**Before**

```cpp
int a = height * width;
```

**After**

```cpp
int area = height * width;
```

---

### Introduce Parameter Object

![Introduce Parameter](/.attachments/introduce.parameter.png)

**Summary**
Group related parameters into a class or struct to reduce argument lists and increase abstraction.

**Modern C++ Example**

```cpp
struct DateRange {
    Date start;
    Date end;
};

double amountInvoiced(const DateRange& range);
double amountReceived(const DateRange& range);
```

---

### Combine Functions into Class

![Combine Functions](/.attachments/combine.functions.png)

**Summary**
Bundle functions that operate on the same data into a class, reducing duplication and improving cohesion.

**Modern C++ Example**

```cpp
class Reading {
public:
    double baseCharge() const {
        return baseRate(month, year) * quantity;
    }

    double taxableCharge() const {
        return std::max(0.0, baseCharge() - taxThreshold(year));
    }

private:
    std::string customer;
    double quantity;
    int month;
    int year;
};
```