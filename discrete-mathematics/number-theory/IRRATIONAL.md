# Irrational Numbers

## General ideas

The study of irrational numbers naturally extends arithmetic beyond integers and rational numbers into real and complex numbers. It focuses on relationships between integers, rationals, and expressions such as ${r + s\sqrt{2}}$ or ${r + s\sqrt{-5}}$, where ${r}$ and ${s}$ are rational.

Strictly speaking, arithmetic does not fully cover irrationality, but many results about irrational numbers can be expressed using integer equations. For example, the statement “${\sqrt{3}}$ is irrational” is equivalent to saying that the equation ${a^3 + b^3c^3 = 3b^3d^3}$ has no integer solutions (in appropriate form). In general, irrationality often appears as the impossibility of solving certain equations in integers.

For instance:

* Saying “${\sqrt{2}}$ is irrational” means
  ${a^2 = 2b^2}$ has no integer solutions (other than trivial ones).

This allows us to treat irrationality as an arithmetic property. Throughout, we focus on determining whether a given number is rational or irrational.

## Known irrational numbers

We define a number as irrational if it cannot be expressed as a ratio of two integers. Many important numbers fall into this category.

1. **Algebraic irrationals**
   These arise as roots of polynomial equations with integer coefficients. For example:

   * ${\sqrt{2}}$, ${\sqrt{3}}$, and other square roots (when not perfect squares)
   * More generally, ${\sqrt[m]{N}}$ is irrational unless ${N}$ is an exact ${m}$th power

2. **Transcendental numbers**
   These are not roots of any polynomial with integer coefficients. Examples include:

   * ${e}$
   * ${\pi}$

Other expressions such as ${e^{\sqrt{2}}}$, ${\log 2}$, and combinations like ${e + \pi}$ are also irrational in many cases.

## Irrationality of ${\sqrt{2}}$

We prove that ${\sqrt{2}}$ is irrational.

Assume the opposite: ${\sqrt{2} = a/b}$ where ${a}$ and ${b}$ are integers with no common factors.

Then:
${a^2 = 2b^2}$

So ${a^2}$ is even, which implies ${a}$ is even. Let ${a = 2c}$.

Substitute:
${(2c)^2 = 2b^2 \Rightarrow 4c^2 = 2b^2 \Rightarrow b^2 = 2c^2}$

Now ${b^2}$ is even, so ${b}$ is even.

This contradicts the assumption that ${a}$ and ${b}$ have no common factor. Therefore, ${\sqrt{2}}$ is irrational.

## Generalization

The same reasoning extends:

* ${\sqrt[m]{N}}$ is irrational unless ${N}$ is a perfect ${m}$th power.

More broadly:

If ${x}$ satisfies a polynomial equation
${x^m + c_1 x^{m-1} + \cdots + c_m = 0}$
with integer coefficients and leading coefficient 1, then ${x}$ is either an integer or irrational.

## Methods using divisibility

Many irrationality proofs rely on divisibility arguments.

Example: If a prime divides ${a^2}$, it must divide ${a}$. This idea drives many proofs by contradiction.

## Geometric insight (example: ${\sqrt{5}}$)

We can also prove irrationality geometrically using continued division.

Assume lengths correspond to rational multiples. Repeated subdivision produces an infinite descending sequence of smaller integer lengths, which is impossible. This contradiction shows ${\sqrt{5}}$ is irrational.

## Additional irrational numbers

We can construct many irrational numbers using expansions (decimal or continued fractions), though identifying them rigorously often requires deeper theorems.

Examples:

* ${\log 2}$ is irrational
* ${e}$ is irrational
* ${\pi}$ is irrational
* ${\pi^2}$ is also irrational

These proofs often use series expansions and bounds to reach contradictions.

## Key takeaway

Irrationality typically shows up as:

* Failure to solve an equation in integers
* Infinite non-repeating structure (in expansions)
* Contradictions from divisibility or approximation arguments

Once you see it that way, most proofs follow the same pattern: assume rational → derive a structural contradiction → conclude irrational.
