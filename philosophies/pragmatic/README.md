# Pragmatic Programming

---

## A Pragmatic Philosophy

The pragmatic programmer's mindset: emphasizing personal responsibility, continuous learning, and effective communication.

### 1. **It's Your Life**

Take ownership of your career and personal growth. Being proactive in learning and adapting is crucial in the ever-evolving tech landscape.([MikeTsamis.com][2])

### 2. **The Cat Ate My Source Code**

Avoid making excuses. Instead, take responsibility for your work and provide solutions or alternatives when challenges arise.([DEV Community][3], [MikeTsamis.com][2])

### 3. **Software Entropy**

Neglecting small issues can lead to software decay. Address problems promptly to maintain code quality and team morale.

### 4. **Stone Soup and Boiled Frogs**

* **Stone Soup**: Initiate positive change by demonstrating value, encouraging others to contribute and collaborate.

* **Boiled Frogs**: Be vigilant about gradual negative changes. Regularly assess and adapt to prevent detrimental outcomes.([Denmercs][4])

### 5. **Good-Enough Software**

Strive for software that meets user needs without overengineering. Involve users in trade-off decisions to deliver timely and effective solutions.([Denmercs][4])

### 6. **Your Knowledge Portfolio**

Continuously invest in your skills and knowledge. Diversify your learning to stay adaptable and relevant in the industry.

### 7. **Communicate!**

Effective communication is vital. Understand your audience, convey ideas clearly, and ensure mutual understanding to foster collaboration.([Medium][5])

---

## A Pragmatic Approach

Practical strategies for software development, advocating for adaptability, simplicity, and continuous improvement.

### 1. **The Essence of Good Design**

* **Key Principle**: *Good design is easier to change than bad design.*
* **ETC Principle**: *Easier To Change* (ETC) serves as a guiding value, prompting developers to make decisions that facilitate future modifications.
* **Implementation**: Ensure that components are replaceable and that decisions are documented for future reference.

### 2. **The Evils of Duplication**

* **DRY Principle**: *Don’t Repeat Yourself.* Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.
* **Types of Duplication**:

  * **Imposed Duplication**: Necessitated by external constraints.
  * **Inadvertent Duplication**: Unintentional due to oversight.
  * **Impatient Duplication**: Resulting from time constraints.
  * **Interdeveloper Duplication**: Occurs when multiple developers unknowingly duplicate efforts.
* **Recommendation**: Strive to eliminate unnecessary duplication to enhance maintainability and clarity.

### 3. **Orthogonality**

* **Definition**: Components are orthogonal if changes in one do not affect others.
* **Benefits**:

  * Increased productivity due to localized changes.
  * Reduced risk as issues are confined to specific areas.
  * Enhanced reusability and easier testing.
* **Implementation**: Design systems where components are decoupled, avoiding shared mutable state and minimizing dependencies.

### 4. **Reversibility**

* **Concept**: Decisions should be reversible to accommodate future changes.
* **Application**: Avoid irreversible choices in architecture, third-party dependencies, and vendor commitments.
* **Strategy**: Implement abstraction layers and modular designs to facilitate adaptability.

### 5. **Tracer Bullets**

* **Definition**: A technique where a minimal, end-to-end implementation is developed to validate architecture and gather early feedback.
* **Benefits**:

  * Provides early visibility of progress.
  * Identifies integration issues early in the development process.
  * Allows for iterative refinement based on feedback.
* **Difference from Prototyping**: Unlike prototypes, tracer bullets are intended to be part of the final system and evolve into the complete solution.

### 6. **Prototypes and Post-it Notes**

* **Purpose**: Use prototypes to explore uncertainties and risks in the system.
* **Characteristics**:

  * Prototypes are disposable and not intended for production.
  * Focus on learning and validating assumptions.
  * Can be implemented using quick and simple tools, such as sketches or mockups.
* **Caution**: Clearly communicate the temporary nature of prototypes to stakeholders to manage expectations.

### 7. **Domain Languages**

* **Definition**: Domain-Specific Languages (DSLs) are tailored languages designed to express solutions within a specific problem domain.
* **Advantages**:

  * Improves communication with domain experts.
  * Increases clarity and reduces ambiguity.
  * Enhances maintainability by aligning code with domain concepts.
* **Considerations**: Ensure that the overhead of creating and maintaining a DSL is justified by the benefits it provides.

### 8. **Estimating**

* **Importance**: Accurate estimation is crucial for planning and managing expectations.
* **Techniques**:

  * Break down tasks into smaller, manageable components.
  * Use historical data and expert judgment to inform estimates.
  * Regularly revisit and adjust estimates as more information becomes available.
* **Caution**: Recognize the inherent uncertainty in estimates and communicate this to stakeholders.

---

## Tenets of Pragmatic Programming

1. [Basic Tools](./TOOLS.md)
2. [Pragmatic Paranoia](./PARANOIA.md)
3. [Bend or Break](./BEND.BREAK.md)
4. [Concurrency](./CONCURRENCY.md)
5. [Coding](./CODING.md)
6. [Project Management](./PROJECT.md)