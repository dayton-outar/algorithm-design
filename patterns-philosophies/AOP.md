# Aspect-Oriented Programming

**Aspect-Oriented Programming (AOP)** is a programming paradigm that separates **cross-cutting concerns** from your core business logic.

A **cross-cutting concern** is functionality that's needed in many different parts of an application, such as:

* Logging
* Authentication and authorization
* Transaction management
* Caching
* Error handling
* Performance monitoring
* Auditing

Without AOP, you often end up repeating the same code across many classes.

## Without AOP

```java
public class PaymentService {

    public void processPayment(Payment payment) {
        logger.info("Starting payment");

        if (!currentUser.hasPermission("PAY")) {
            throw new UnauthorizedException();
        }

        database.beginTransaction();

        // Business logic
        ...

        database.commit();

        logger.info("Payment complete");
    }
}
```

The actual payment logic is mixed together with logging, security, and transaction code.

---

## With AOP

Your business logic becomes much cleaner:

```java
public class PaymentService {

    public void processPayment(Payment payment) {
        // Only payment logic
        ...
    }
}
```

Then you define aspects separately:

```java
@Aspect
public class LoggingAspect {

    @Before("execution(* com.company.service.*.*(..))")
    public void logStart() {
        logger.info("Method started");
    }
}
```

Another aspect:

```java
@Aspect
public class SecurityAspect {

    @Before("@annotation(RequiresPermission)")
    public void checkPermission() {
        ...
    }
}
```

The framework automatically "weaves" these aspects into the appropriate methods.

---

## Core Concepts

## 1. Aspect

A module containing cross-cutting functionality.

Examples:

* LoggingAspect
* SecurityAspect
* TransactionAspect

---

## 2. Join Point

A point during execution where an aspect can be applied.

Examples:

* Before a method executes
* After a method returns
* When an exception is thrown

---

## 3. Advice

The code that runs at a join point.

Common advice types:

```text
@Before
```

Runs before a method.

```text
@After
```

Runs after a method.

```text
@AfterReturning
```

Runs only if the method succeeds.

```text
@AfterThrowing
```

Runs only if the method throws an exception.

```text
@Around
```

Wraps the method and has full control over execution.

---

## 4. Pointcut

Defines **where** advice should run.

Example:

```java
execution(* com.company.service.*.*(..))
```

Meaning:

* any method
* in any class
* inside the `service` package

---

## 5. Weaving

The process of combining aspects with your application.

This can happen:

* At compile time
* At class-load time
* At runtime (common in frameworks)

---

## Real-world Example

Suppose you have:

```
CustomerService
OrderService
PaymentService
InvoiceService
```

Every method should:

* Log entry
* Check permissions
* Measure execution time
* Start a transaction

Without AOP:

```
CustomerService
    logging
    auth
    timing
    transaction
    business logic

OrderService
    logging
    auth
    timing
    transaction
    business logic

PaymentService
    logging
    auth
    timing
    transaction
    business logic
```

Thousands of duplicated lines.

With AOP:

```
LoggingAspect
SecurityAspect
TimingAspect
TransactionAspect

↓

CustomerService
    business logic only

OrderService
    business logic only

PaymentService
    business logic only
```

---

## Popular AOP Frameworks

## Java

* Spring AOP (most common)
* AspectJ (more powerful)
* Jakarta EE interceptors

## .NET

Although C# doesn't have built-in AOP, common libraries include:

* PostSharp
* Fody
* Castle DynamicProxy

---

## Benefits

* Cleaner business logic
* Less duplicated code
* Easier maintenance
* Centralized policies
* Better separation of concerns
* Easier testing of business logic

---

## Drawbacks

* Can make control flow harder to follow because behavior is injected automatically.
* Debugging can be more complex.
* Overuse can make a codebase harder to understand.
* Runtime proxy-based implementations can add a small performance overhead.

---

## When to Use AOP

AOP is a good fit when the same behavior needs to be applied consistently across many parts of an application, such as:

* Logging every API request
* Recording audit trails
* Enforcing authorization checks
* Starting and committing database transactions
* Caching method results
* Measuring performance
* Exception handling and retry policies

If the behavior is specific to one feature or class, it's usually better to keep it in the business logic rather than introduce an aspect.

In enterprise applications—particularly those built with Java and frameworks like Spring Framework—AOP is widely used under the hood. For example, many methods annotated with `@Transactional`, `@Cacheable`, or security annotations rely on AOP to add those behaviors without requiring the developer to write the plumbing code in every method.
