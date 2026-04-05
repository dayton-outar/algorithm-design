# Philosophies

## Clean Architecture vs The Pragmatic Programmer

### Introduction

Both *[Clean Architecture](./clean/)* (Robert C. Martin) and *[The Pragmatic Programmer](./pragmatic/)* (Andy Hunt & Dave Thomas) are seminal works in software engineering, widely read by professional developers. They aim to improve the quality, maintainability, and reliability of software, but they come from subtly different mindsets and emphasize different tactics. Understanding their overlap and divergence is crucial for any development team striving for excellence and sustainability.

---

### Areas of Agreement

| Principle                          | Clean Architecture                          | The Pragmatic Programmer                                | Summary                                            |
| ---------------------------------- | -------------------------------------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| **Code Readability**               | Core value; naming, formatting, small functions    | Critical; developers should write for humans first      | Both treat readable code as non-negotiable         |
| **Avoiding Duplication (DRY)**     | Repeated logic is a code smell                     | Duplication = cost; use automation and centralization   | Shared emphasis on removing redundancy             |
| **Modularity**                     | Enforce clear boundaries via architecture layers   | Encourage separation of concerns and decoupling         | Both value loosely coupled, well-defined modules   |
| **Responsibility & Craftsmanship** | Programmers must take ownership of quality         | Developers should own their tools and code quality      | Strong belief in individual responsibility         |
| **Automation & Tooling**           | Advocates testing and automation to enforce design | Promotes scripting, tooling, and intelligent automation | Consistent encouragement to automate mundane tasks |
| **Maintainability**                | Design for change and evolution                    | Design for resilience and readability                   | Shared concern about future-proofing software      |

---

### Areas of Difference

| Topic                    | Clean Architecture                                                        | The Pragmatic Programmer                                                    |
| ------------------------ | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Philosophical Tone**   | Rigid, idealistic; often “one right way”                                         | Flexible, pragmatic; “it depends”                                           |
| **Architecture**         | Heavy emphasis on layered architecture, boundaries (e.g., interactor, presenter) | Light on formal architecture; prefers adaptable design patterns             |
| **Testing**              | Strong focus on TDD and testability shaping code design                          | Emphasizes testing, but not dogmatic about test-first or 100% coverage      |
| **Code Structure**       | Advocates for small functions, single responsibility per file/class              | More tolerant of context-specific structure; warns against over-abstraction |
| **Refactoring**          | Encourages continuous refactoring toward perfection                              | Warns against unnecessary rewrites or churn; focus on value delivery        |
| **Language-Agnosticism** | Rooted in OOP (Java, C#); less transferable to functional paradigms              | Stresses language-agnostic and paradigm-neutral advice                      |

---

### Main Goals of Each Camp

#### [Clean Architecture](./clean/) (Uncle Bob)

* **Goal**: Craft highly structured, maintainable systems with clear boundaries and testable components.
* **Ideal**: A codebase that is elegant, loosely coupled, and easy to reason about, even for newcomers.
* **Philosophy**: Code is a craft; bad code is unethical and costly.

#### [The Pragmatic Programmer](./pragmatic/) (Hunt & Thomas)

* **Goal**: Empower developers to make smart, flexible decisions based on context and long-term value.
* **Ideal**: A developer who is self-reliant, constantly learning, and able to adapt without dogma.
* **Philosophy**: Use judgment over rigid rules; aim for practical excellence.

---

### Challenges of Maintaining Code

Regardless of your philosophical preference, the real world imposes shared challenges:

#### 1. **Onboarding New Developers**

* Without consistent coding standards, ramp-up takes longer.
* Clean Architecture’s emphasis on clarity and structure helps here—but may overwhelm if over-applied.

#### 2. **Knowledge Silos**

* Pragmatic devs who rely on personal judgment may write “clever” code that’s hard for others to follow.
* Clean Architecture disciplines can reduce silos—but only if universally understood and applied.

#### 3. **Inconsistent Practices**

* A team mixing both philosophies may clash on refactoring, design patterns, or abstraction levels.
* Resolving this requires team-wide guidelines and shared review processes.

#### 4. **Evolving Requirements**

* Code needs to adapt to business change.
* Pragmatic approach favors agility and iteration.
* Clean Architecture favors flexible design up-front—but may introduce more scaffolding than needed.

#### 5. **Tech Debt Accumulation**

* Lack of refactoring leads to decay.
* Excessive refactoring wastes time.
* Striking the balance requires shared judgment and a “boy scout” approach (leave the code better than you found it).

---

Both philosophies aim for **code that endures**, but they chart different paths:

* **Clean Architecture**: Idealistic, structure-first, code as a moral duty.
* **Pragmatic Programmer**: Context-sensitive, flexibility-first, code as a practical tool.

A healthy development culture doesn’t have to choose one or the other—it can adopt **Clean Architecture discipline** as a baseline, while still **practicing Pragmatic flexibility** when business realities demand it.

The **real core issue Clean Architecture resolves** is **change over time**.

More specifically:

* **Business rules outlive tools**
  Frameworks, UI libraries, and databases go out of fashion quickly. Your business rules (the *why* of the system) usually last much longer. Clean Architecture makes those rules less dependent on volatile technology choices.

* **Reducing ripple effects**
  Without clear separation, a small change in the UI or database layer can ripple all the way through your system. Clean Architecture isolates concerns so changes stay local.

* **Testability**
  When logic is tangled with frameworks or external systems, testing requires bootstrapping a ton of stuff (e.g., full database, HTTP server). With Clean Architecture, core rules can be tested in isolation.

* **Team scaling**
  In large teams, coupling creates bottlenecks: frontend devs can’t move without backend changes, backend can’t move without DB migrations, etc. Clean Architecture defines boundaries so parallel work is easier.

If I boil it down to one sentence:

👉 **It protects the heart of your software (the business logic) from being held hostage by frameworks, databases, or external systems, so the system can evolve safely.**

That’s why it shines in enterprise and long-lived systems. For smaller apps, that level of insulation may not be worth the ceremony.

Here’s the breakdown of the **practical tension** between *Clean Architecture’s dependency rule* and the productivity you get from framework tooling:

1. **The Dependency Rule refresher**

The rule says: **source code dependencies must point inwards** (toward your business rules), never outwards (toward frameworks, UI, DB).

That means your **entities** (the heart of the business rules) should not know about Doctrine, Symfony annotations, or any persistence mechanism.

2. **Where the tension lies**

Doctrine makes life easier with:

* Entity classes annotated for persistence (`@ORM\Entity`, `@Column`, etc.)
* Lifecycle hooks (prePersist, postUpdate)
* Lazy-loading relationships

But those conveniences couple your domain directly to Doctrine. If Doctrine changes, or if you migrate away, your core models change too. That’s what Clean Architecture tries to prevent.

3. **How teams resolve it**

There are two broad approaches:

a) **Pragmatic (common in Symfony apps)**

Accept that Doctrine annotations live inside entities, but keep **business rules free of Doctrine APIs**.

* Business logic = pure methods and invariants on the entity
* Doctrine annotations are metadata, but not “used” in the rules themselves
* Migrations, repositories, and persistence details stay in the Infrastructure layer

This gives you 80% of the benefits with minimal overhead.

b) **Strict (Clean Architecture purist)**

Keep entities **completely persistence-agnostic**.

* Entities = plain PHP classes (no Doctrine annotations, no traits from Doctrine)
* Define **interfaces** for repositories in the domain layer (`UserRepositoryInterface`)
* Implement those repositories in the Infrastructure layer using Doctrine (`DoctrineUserRepository implements UserRepositoryInterface`)
* Use **mapping layers** (Doctrine XML/YAML mapping, or attributes in separate metadata files) to map persistence models to domain models

This way, if you swap Doctrine for another ORM or raw SQL, the core domain doesn’t change — only the Infrastructure implementation does.

---

4. **The trade-off**

* **Productivity vs Purity**
  Doctrine annotations are fast, explicit, and supported. Stripping them away means more boilerplate (extra mapping configs, data mappers).
* **Longevity vs Pragmatism**
  If the system is expected to last 10–20 years and outlive Doctrine, strict separation may be worth it.
  If the system has a shorter horizon, pragmatic coupling is usually fine.

---

5. **A guiding heuristic**

👉 If your **entities contain business rules** (not just data bags), keep those rules independent of Doctrine.
👉 If your **entities are mostly data structures**, you can afford to let Doctrine annotations creep in — just don’t call Doctrine APIs directly in them.

Perfect — let’s deep dive into **#3a (pragmatic approach)** where we acknowledge Doctrine’s annotations/attributes but keep the *business rules* independent.

---

### Core Idea

* **Entities** may have Doctrine attributes/annotations for persistence.
* **Business logic** lives in **methods** on the entities or in **domain services**.
* The business rules must **not** use Doctrine APIs (`EntityManager`, `QueryBuilder`, `LazyCollection`, etc.).

That way, the business logic can be unit tested and reasoned about without touching Doctrine.

---

### Example: Symfony with Doctrine

#### 1. A Doctrine-backed Entity with business rules

```php
<?php
namespace App\Domain\User;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: "App\Infrastructure\DoctrineUserRepository")]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private ?int $id = null;

    #[ORM\Column(type: "string", length: 100)]
    private string $email;

    #[ORM\Column(type: "boolean")]
    private bool $isActive = false;

    public function __construct(string $email)
    {
        $this->email = $email;
    }

    // ---- Business rules (no Doctrine here!) ----

    public function activate(): void
    {
        if ($this->isActive) {
            throw new \DomainException("User already active");
        }
        $this->isActive = true;
    }

    public function changeEmail(string $newEmail): void
    {
        if (!filter_var($newEmail, FILTER_VALIDATE_EMAIL)) {
            throw new \InvalidArgumentException("Invalid email format");
        }
        $this->email = $newEmail;
    }

    // Getters for testing / usage
    public function getEmail(): string { return $this->email; }
    public function isActive(): bool { return $this->isActive; }
}
```

✅ The entity has Doctrine mappings.

✅ Business rules (`activate`, `changeEmail`) are **pure PHP**, no Doctrine calls.

✅ Easy to test without booting Symfony or Doctrine.

**But ... even this would not pass as Clean Architecture by a purist**

Why a purist would say this is coupled

* The `User` class has Doctrine attributes (`#[ORM\Entity]`, `#[ORM\Column]`).
* Therefore, the class itself is coupled to Doctrine’s persistence layer.
* Even if the methods `activate()` and `changeEmail()` don’t call Doctrine APIs, the fact that the class *is a Doctrine entity* means it cannot exist without Doctrine being in the project.
* By strict Clean Architecture standards, this is a violation because your domain shouldn’t know about persistence at all.

So, yes — a purist would say that’s not truly “clean.”

---

#### 2. Repository abstraction

```php
<?php
namespace App\Domain\User;

interface UserRepository
{
    public function findByEmail(string $email): ?User;
    public function save(User $user): void;
}
```

---

#### 3. Doctrine-specific implementation

```php
<?php
namespace App\Infrastructure;

use App\Domain\User\User;
use App\Domain\User\UserRepository;
use Doctrine\ORM\EntityManagerInterface;

class DoctrineUserRepository implements UserRepository
{
    public function __construct(private EntityManagerInterface $em) {}

    public function findByEmail(string $email): ?User
    {
        return $this->em->getRepository(User::class)->findOneBy(['email' => $email]);
    }

    public function save(User $user): void
    {
        $this->em->persist($user);
        $this->em->flush();
    }
}
```

---

#### 4. Using business rules in application layer

```php
<?php
namespace App\Application;

use App\Domain\User\UserRepository;

class ActivateUserService
{
    public function __construct(private UserRepository $users) {}

    public function execute(string $email): void
    {
        $user = $this->users->findByEmail($email);
        if (!$user) {
            throw new \RuntimeException("User not found");
        }

        $user->activate(); // Business rule (independent of Doctrine)
        $this->users->save($user);
    }
}
```

---

### Why this works

* Entities are **not independent** of Doctrine metadata, but that’s tolerated for speed.
* Business rules (`activate`, `changeEmail`) have **no Doctrine calls**.
* Testing `User`’s business rules doesn’t require Doctrine.
* Testing `ActivateUserService` only needs a fake `UserRepository`.

---

👉 This is the sweet spot: you get **Doctrine’s productivity** (mappings, migrations, lazy loading) while **shielding business logic from ORM details**.

## The Elephant in the Room

If a team switches to a framework in **another language** (say, Symfony/PHP → Spring Boot/Java), the idea that you can “carry over” all your business rules *by just swapping infrastructure* isn’t realistic.

That’s the **elephant in the room** when people talk about Clean Architecture in the strictest sense.

Here’s why:

---

### 1. Language boundaries are harder than framework boundaries

* Even if your entities are framework-agnostic, they’re still tied to PHP syntax, PHP typing, PHP exceptions.
* Moving to Java, Go, or Rust means rewriting them — at best, the structure and rules are portable, but the *code itself* isn’t.

So, **Clean Architecture protects you from framework churn within the same ecosystem** (Doctrine → Eloquent, Symfony → Laravel, Hibernate → JPA), but not from language migrations.

---

### 2. What survives across languages

* **The business model** → the concepts, rules, and invariants (“User can’t activate twice”, “Order must have at least one item”).
* **The structure** → layering, boundaries, repository interfaces, service abstractions.
* **Documentation/tests** → specs, acceptance tests, and especially executable tests (if written in Gherkin, for example).

The code gets re-implemented, but the *knowledge* lives on.

---

### 3. Why strict isolation can still help

Even though you can’t “copy-paste” the entities into another language, strict separation means:

* Business logic is **not polluted by framework glue code**, so when rewriting, you have a clearer “pure domain” to port.
* You avoid “Doctrineisms” (lazy proxies, magic collections) creeping into your rules, which makes conceptual migration easier.

It reduces the friction of a rewrite, even if it doesn’t eliminate it.

---

### 4. Pragmatic takeaway

* **Strict isolation** is most useful for long-lived systems expected to migrate across frameworks **within the same language ecosystem**.
* If you anticipate a **cross-language rewrite**, Clean Architecture won’t save you from rewriting — but it gives you a clearer, rule-driven domain model that’s easier to *translate*.
* The real “savings” come from **tests, use-case documentation, and domain language** that survive beyond the code.

---

⚖️ In practice, you’re right: no one keeps a PHP codebase for 20 years and then magically “plugs it into” a Java framework. They rewrite. Clean Architecture just reduces how painful that rewrite is by keeping the **business rules explicit, portable, and test-backed**, instead of buried in framework APIs.

---

## Why the dependency rule?

The **dependency rule** in software design—often phrased as "dependencies should point inward toward higher-level policies and abstractions, not outward toward lower-level details" (as in the **Dependency Inversion Principle** from SOLID)—can be understood from **first principles** if we strip it down to the basic reasons why software is hard to maintain and change. Here’s the reasoning:

---

### First Principles

1. **Change is inevitable**

   * Software requirements change. Libraries evolve. Hardware or environments change.
   * **Implication:** Any rigid coupling between parts of a system can cause widespread breakage when change occurs.

2. **Knowledge decay / cognitive load**

   * Developers have limited mental capacity. Systems that mix high-level logic with low-level details force you to think about many things at once.
   * **Implication:** Separating concerns reduces the cognitive burden and makes reasoning about the system easier.

3. **Abstractions capture intent**

   * High-level policies express *what* the system should do.
   * Low-level modules express *how* something is done.
   * **Implication:** High-level modules depend on abstractions so they aren’t tied to specific implementations. This protects the system’s core purpose from being dictated by low-level decisions.

4. **Minimizing the blast radius of change**

   * If high-level modules depend directly on low-level details, any change in the low-level module can cascade into high-level modules.
   * **Implication:** Inverting the dependency reduces the impact of change: high-level logic can remain untouched even if low-level implementations vary.

---

### Why Dependencies Should Point Inward

* **From first principles:** Software exists to fulfill a purpose (high-level intent). Implementation details are disposable and replaceable.
* If high-level modules depend on low-level details:

  * Core intent is fragile.
  * Refactoring becomes painful.
* If low-level modules depend on high-level abstractions:

  * The core policy is stable.
  * Implementations can vary, swap, or extend without breaking the system.

---

### Analogy

Think of building a house:

* High-level policy = "We need a house that shelters the family."
* Low-level detail = "Use a specific type of brick for walls."

You want the house’s design to **not change** every time a brick supplier changes their material. The dependency rule says: the design (high-level) should define what it needs abstractly (walls, structure), and the bricks (low-level) implement that abstraction. That way, you can swap bricks without redesigning the whole house.

---

In short, **the dependency rule exists to decouple intent from implementation, reducing fragility and cognitive load**. At the first-principles level, it’s about **preserving the invariance of core policies while allowing implementations to change freely**.

---

The article ["Clean Architecture: The Essence of the Dependency Rule"](https://medium.com/@aboutcoding/clean-architecture-the-essence-of-the-dependency-rule-969f1e8417f6) by Nicholas Ocket delves into the core principle of Clean Architecture—the Dependency Rule. Ocket emphasizes that the Dependency Rule is not merely about structuring code into layers but about managing the direction of dependencies to ensure maintainability and adaptability in software design.

### Understanding the Dependency Rule

The Dependency Rule posits that dependencies should only point inward, towards the center of concentric circles representing different layers of an application. This means that inner layers should not depend on outer layers. Ocket challenges the common misconception that Clean Architecture is solely about organizing code into folders. Instead, he argues that the essence lies in controlling dependency direction to prevent changes in outer layers from affecting inner layers, thereby reducing the risk of unintended side effects and facilitating easier maintenance.

### The Role of Dependencies in Change Management

Ocket explains that the direction of dependencies significantly impacts how changes propagate through the codebase. When code units depend on each other, changes in one unit may necessitate changes in the dependent units. By adhering to the Dependency Rule, developers can isolate core business logic from external concerns, ensuring that modifications in areas like user interfaces or databases do not ripple through and affect the core logic. This isolation is crucial for managing change effectively and maintaining a flexible and resilient architecture.

### Emergence of Layers Through Dependency Direction

The article further discusses how layers in an application emerge naturally from the direction of dependencies. Rather than imposing a rigid folder structure, layers should be a consequence of how dependencies are directed. This approach allows for a more organic and context-sensitive organization of code, aligning the architecture with the actual flow of dependencies and the needs of the application.

### Conclusion

Nicholas Ocket's article provides a nuanced perspective on Clean Architecture, urging developers to focus on the underlying principles, such as the Dependency Rule, rather than superficial structures. By understanding and applying the Dependency Rule, developers can create software architectures that are more adaptable to change, easier to maintain, and better aligned with the core business logic. This approach not only enhances the quality of the software but also empowers developers to make informed decisions that lead to more sustainable and effective solutions.


---

## Refactoring

_Refactoring_ is a technique to improve the internal structure of existing code without changing its external behavior to make it **maintainabile, readabile, and simple** through small, well-defined transformations.

---

### Key Concepts

#### 1. What is [Refactoring](./refactoring)

Refactoring is the disciplined technique of restructuring code, aiming to:

* Make code easier to understand
* Reduce complexity
* Improve extensibility
* Remove duplication

**It does not change what the program does—only how it is written.**

#### 2. Why Refactor

* To keep code clean as it evolves
* To reduce technical debt
* To make bug-fixing and feature additions easier
* To reveal design flaws early

**Bad code slows down teams**, and refactoring is a preventive measure.

#### 3. When to Refactor

* Before adding new features
* While fixing bugs
* During code reviews
* When encountering code smells

---

### Code Smells

These are signs that code might need refactoring. Common examples:

* **Duplicated code**
* **Long methods**
* **Large classes**
* **Feature envy** (a method that uses data from another class more than its own)
* **Data clumps**
* **Shotgun surgery** (many small changes needed in different places)

---

### Testing

Refactoring must be supported by a **solid suite of automated tests** to ensure behavior remains unchanged.

---

### Design Principles Reinforced

* **Single Responsibility Principle**
* **Encapsulation**
* **Modularity**
* **DRY (Don’t Repeat Yourself)**
* **KISS (Keep It Simple, Stupid)**


## See Also

1. [NASA's Power of Ten Coding Guide](./NASA.CODING.md)
2. [Refactoring](https://refactoring.guru/refactoring)
