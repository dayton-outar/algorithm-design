# Clean Architecture

> _The goal of software architecture is to minimize the human resources required to build and maintain the required system._

For decades, software systems were built around frameworks, databases, and user interfaces. Teams organized applications around web servers, database tables, and UI technologies because those were the most visible parts of the system. At first, this seemed practical. But over time, developers discovered a recurring problem: business logic became trapped inside technical infrastructure.

When frameworks changed, the application became expensive to maintain. When the database schema evolved, core business rules broke unexpectedly. Even simple UI redesigns often triggered cascading rewrites across the codebase. Systems became rigid, fragile, and tightly coupled to technologies that were supposed to be replaceable tools.

This frustration led software architects to search for a more durable structure. Over several decades, multiple architectural approaches emerged independently, including Hexagonal Architecture by Alistair Cockburn, DCI from James Coplien and Trygve Reenskaug, and BCE introduced by Ivar Jacobson. Although these models differed in terminology and implementation details, they were all attempting to solve the same underlying problem: how to separate business concerns from technical concerns in a way that keeps systems maintainable over time. 

What united these architectures was a shared belief that software should be divided into layers, with business rules protected from direct exposure to user interfaces, frameworks, databases, and external systems. Each approach emphasized separation of concerns and the isolation of core business logic from volatile implementation details. 

This philosophy produced systems with several important characteristics:

* **Framework independence** — Frameworks are treated as replaceable tools rather than foundations that dictate the structure of the application.
* **Testability** — Business rules can be tested independently without requiring databases, web servers, user interfaces, or external systems.
* **UI independence** — User interfaces can evolve or be replaced without impacting core business logic.
* **Database independence** — Business policies remain isolated from specific database technologies such as SQL Server, Oracle, or MongoDB.
* **External agency independence** — Core business rules remain unaware of external services, APIs, infrastructure, or delivery mechanisms. 

These ideas eventually converged into what became known as Clean Architecture.

## The Core Shift in Thinking

Clean Architecture reframed the way systems should be designed. Instead of treating the database or framework as the center of the application, it positioned business rules at the core.

The philosophy argues that the most important part of any software system is not the web framework, API layer, or persistence technology. Those things change frequently. The true long-term asset is the business logic — the rules, workflows, calculations, and decisions that define how the organization operates.

This led to a hierarchy of software concerns:

* Outer layers contain technical mechanisms and implementation details.
* Inner layers contain policies and business rules.
* Dependencies must always point inward toward higher-level policy. 

The result is a system where frameworks become replaceable tools instead of architectural prisons.

## The Dependency Rule

At the heart of Clean Architecture is a strict principle known as the Dependency Rule:

> Source code dependencies must point inward. 

This means code in the core of the system should not know anything about the database, web framework, UI technology, or external services.

A business rule should not care whether data comes from:

* MySQL,
* PostgreSQL,
* MongoDB,
* a REST API,
* or even a flat file.

Likewise, a use case should not know whether the application is being accessed through:

* a web browser,
* a mobile app,
* a CLI,
* or an automated integration.

The architecture intentionally isolates policy from delivery mechanisms.

### The Layered Structure

The architecture is organized into concentric circles, where each inner layer becomes more abstract and more business-focused. 

![The Dependency Rule Illustration](/.attachments/the.clean.architecture-the.dependency.rule.png)

### Entities

At the center are the entities. These contain the most critical business rules of the enterprise. They represent concepts that remain stable even as applications, interfaces, or technologies evolve. 

An entity might represent:

* a loan,
* an account,
* an invoice,
* or a customer policy.

These rules should survive changes in UI, databases, security systems, or deployment platforms.

### Use Cases

Around the entities sits the use case layer. This layer contains application-specific workflows and orchestrates how entities interact to accomplish business goals. 

For example:

* approving a loan,
* processing a payment,
* onboarding a customer,
* or generating a compliance report.

This layer coordinates the business process while remaining independent of external technologies.

### Interface Adapters

The next layer adapts internal business structures into forms usable by external systems. Controllers, presenters, views, database mappers, and API translators all belong here. 

This layer acts as a translation boundary between:

* the clean internal model,
* and the messy realities of external systems.

Its purpose is containment. Framework-specific code stays here instead of leaking inward.

### Frameworks and Drivers

The outermost layer contains technical infrastructure:

* web frameworks,
* databases,
* UI libraries,
* messaging systems,
* operating systems,
* and external APIs. 

Clean Architecture deliberately treats these as details rather than foundations.

This is one of the philosophy’s strongest statements:
the database is not the architecture.
The framework is not the architecture.
The business rules are the architecture.

## Why This Matters

The philosophy emerged because large software systems were becoming increasingly difficult to evolve safely. Teams realized they needed systems that could survive:

* framework replacements,
* UI redesigns,
* database migrations,
* infrastructure changes,
* and evolving business requirements.

Clean Architecture attempts to create that resilience.

A properly structured system gains several advantages:

* business rules become independently testable,
* technology choices become replaceable,
* systems become easier to maintain,
* and long-term change becomes less destructive. 

## Crossing Boundaries Safely

One challenge in layered systems is communication between layers. Clean Architecture solves this using interfaces and dependency inversion. 

Instead of the business layer depending directly on presenters or databases, it depends on abstractions defined inward. Outer layers implement those abstractions.

This allows:

* flow of control outward,
* while keeping source code dependencies inward.

The system remains flexible because high-level policy never becomes dependent on low-level implementation details.

## The Typical Flow

A typical request flow demonstrates the philosophy clearly:

1. A controller receives input from the web layer.
2. Input data is packaged into a simple structure.
3. A use case processes the request.
4. Entities execute core business rules.
5. Data is retrieved through interfaces.
6. Results are transformed into view models.
7. The UI renders the final response. 

![Typical Model-ViewModel-Controller Application Architecture](/.attachments/typical.mvm.application.architecture.png)

Throughout the process, dependencies still point inward toward the business rules.

## The Broader Philosophy

Clean Architecture is ultimately less about diagrams and more about protecting the business from technology volatility.

Technologies evolve rapidly:

* frameworks become obsolete,
* databases change,
* UI trends shift,
* infrastructure platforms come and go.

Business rules usually outlive all of them.

The architecture therefore treats technology as temporary and business policy as enduring. That inversion of priorities is the philosophical foundation behind the entire model. 


## Tenets of Clean Code

![Socrates by the Greek Temple](/.attachments/greek.temple.jpg)

---

> **"Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer’s intent but rather is full of crisp abstractions and straightforward lines of control."**

---

1. [Meaningful Names](./MEANINGFUL.NAMES.md)
2. [Functions](./FUNCTIONS.md)
3. [Comments](./COMMENTS.md)
4. [Formatting](./FORMATTING.md)
5. [Objects and Data Structures](./OBJECTS.md)
6. [Error Handling](./ERROR.HANDLING.md)
7. [Boundaries](./BOUNDARIES.md)
8. [Unit Tests](./UNIT.TESTS.md)
9. [Classes](./CLASSES.md)
10. [Systems](./SYSTEMS.md)
11. [Emergence](./EMERGENCE.md)
12. [Concurrency](./CONCURRENCY.md)
13. [Smells and Heuristics](./SMELLS.HEURISTICS.md)

### Design Principles

1. [S: The Single Responsibility Principle](./SINGLE.RESPONSIBILITY.md)
2. [O: The Open-Closed Principle](./OPEN.CLOSED.md)
3. [L: The Liskov Substitution Principle](./LISKOV.md)
4. [I: The Interface Segregation Principle](./INTERFACE.SEGREGATION.md)
5. [D: The Dependency Inversion Principle](./DEPENDENCY.INVERSION.md)