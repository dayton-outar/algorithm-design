# The Power of Ten - Rules for Developing Safety Critical Code

> Most serious software development projects use coding guidelines. These guidelines are
meant to state what the ground rules are for the software to be written: how it should be
structured and which language features should and should not be used. Curiously, there is
little consensus on what a good coding standard is. Among the many that have been
written there are remarkable few patterns to discern, except that each new document
tends to be longer than the one before it. The result is that most existing guidelines
contain well over a hundred rules, sometimes with questionable justification. Some rules,
especially those that try to stipulate the use of white-space in programs, may have been
introduced by personal preference; others are meant to prevent very specific and unlikely
types of error from earlier coding efforts within the same organization. Not surprisingly,
the existing coding guidelines tend to have little effect on what developers actually do
when they write code. The most dooming aspect of many of the guidelines is that they
rarely allow for comprehensive tool-based compliance checks. Tool-based checks are
important, since it is often infeasible to manually review the hundreds of thousands of
lines of code that are written for larger applications.
>
> The benefit of existing coding guidelines is therefore often small, even for critical
applications. A verifiable set of well-chosen coding rules could, however, make critical
software components more thoroughly analyzable, for properties that go beyond
compliance with the set of rules itself. To be effective, though, the set of rules has to be
small, and must be clear enough that it can easily be understood and remembered. The
rules will have to be specific enough that they can be checked mechanically. To put an
easy upper-bound on the number of rules for an effective guideline, I will argue that we
can get significant benefit by restricting to no more than ten rules. Such a small set, of
course, cannot be all-encompassing, but it can give us a foothold to achieve measurable
effects on software reliability and verifiability. To support strong checking, the rules are
somewhat strict – one might even say Draconian. The trade-off, though, should be clear.
When it really counts, especially in the development of safety critical code, it may be
worth going the extra mile and living within stricter limits than may be desirable. In
return, we should be able to demonstrate more convincingly that critical software will
work as intended.

- _Gerard J. Holzmann, NASA/JPL Laboratory for Reliable Software Pasadena, CA 91109_

## 1. Simple Control Flow

* **Do not use**:

  * `goto`
  * `setjmp` / `longjmp`
  * Direct or indirect recursion
* **Rationale**: Promotes predictable, analyzable, and bounded execution. Enables acyclic function call graphs.

---

## 2. Loops Must Have Fixed Upper-Bound

* **Loops** must have statically provable iteration limits.
* **Non-terminating loops** (e.g., schedulers) must have provable infinite iterations.
* **Use assertions** to detect boundary violations.

---

## 3. No Dynamic Memory Allocation After Initialization

* Avoid:

  * `malloc`
  * Garbage collectors
* Only use stack memory post-initialization.
* **Rationale**: Prevents fragmentation and memory errors. Enables static bounds on memory usage.

---

## 4. Function Length Limit

* Max: **60 lines per function**
* Printed on a single sheet in standard format.
* **Rationale**: Supports modularity and clarity.

---

## 5. Assertion Density

* **Minimum 2 assertions per function**
* Assertions must:

  * Be side-effect free
  * Be Boolean expressions
  * Trigger explicit recovery on failure
* **Example**:

  ```c
  if (!c_assert(p >= 0) == true) {
    return ERROR;
  }
  ```

  ```c
  #define c_assert(e) ((e) ? (true) : \
    tst_debugging("%s,%d: assertion '%s' failed\n", \
    __FILE__, __LINE__, #e), false)
  ```

---

## 6. Smallest Scope for Data

* **Declare data in the smallest needed scope**
* **Rationale**: Minimizes unintended access and simplifies debugging.

---

## 7. Validate Return Values and Parameters

* **All return values must be checked**
* **All parameters must be validated**
* Acceptable:

  ```c
  (void)printf("Done");
  ```

  when errors are irrelevant.
* **Rationale**: Ensures error propagation and catches unexpected behavior.

---

## 8. Limit Preprocessor Use

* Only for:

  * Header inclusion
  * Simple macro definitions
* **Do not use**:

  * Token pasting
  * Recursive macros
  * Ellipses (variadic macros)
* Conditional compilation should be rare.
* **Rationale**: Prevents obfuscation and untestable code variants.

---

## 9. Restrict Pointer Use

* Max **one level** of dereferencing
* **No**:

  * Hidden dereferences in macros or typedefs
  * Function pointers
* **Rationale**: Eases analysis and reduces error potential.

---

## 10. Compile with All Warnings and Use Static Analysis

* **Enable all compiler warnings** at strictest level.
* **Zero warnings allowed**
* **Daily checks** with at least one static analyzer.
* **Rewrite code** to remove even false positives.
* **Rationale**: Ensures continuous verifiability and correctness.

---

## Summary

These rules support:

* Clear control flow (Rules 1–2)
* Memory safety (Rule 3)
* Readability and modularity (Rules 4–6)
* Robust error handling (Rule 7)
* Maintainability (Rules 8–10)
