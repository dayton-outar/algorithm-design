# The Series of Primes

## Divisibility of Integers

We work with integers:
${\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots}$

We distinguish:

* **Non-negative integers**: ${0, 1, 2, 3, \ldots}$
* **Positive integers**: ${1, 2, 3, \ldots}$

Unless stated otherwise, we focus on **positive integers**.

We say an integer ${a}$ is divisible by ${b}$ (with ${b \neq 0}$) if there exists an integer ${c}$ such that:

${a = bc}$

We write this as:

* ${b \mid a}$ (b divides a)
* ${b \nmid a}$ (b does not divide a)

Basic properties:

* If ${b \mid a}$ and ${b \mid c}$, then ${b \mid (a + c)}$
* If ${b \mid a}$, then ${b \mid ac}$ for any integer ${c}$

Or

* If ${k \mid a}$ and ${k \mid b}$, then ${k \mid (a - q·b)}$ for any integer ${q}$

Remember,

* ${a \mod b = a - q \dot r}$, where ${ r }$ is the remainder and ${ q }$ is some integer greater than or equal to 0.

For example,

* ${ 20 \mod 8 = 20 - 2 \dot 8 }$
* ${ 9 \mod 6 = 9 - 1 \dot 6 }$

## Prime and Composite Numbers

A **prime number** is a positive integer ${p > 1}$ with exactly two positive divisors: ${1}$ and ${p}$.

A **composite number** is a positive integer greater than 1 that is not prime.

Examples:

* Prime: ${2, 3, 5, 7, 11, \ldots}$
* Composite: ${4, 6, 8, 9, \ldots}$

## Every Number Factors into Primes

Every integer ${n > 1}$ is either:

* prime, or
* a product of primes

If ${n}$ is composite, we can keep factoring it into smaller factors. This process must terminate, producing a factorization:

${n = p_1 p_2 \cdots p_k}$

where each ${p_i}$ is prime.

## Fundamental Theorem of Arithmetic

Every integer ${n > 1}$ can be written uniquely (up to order) as a product of prime powers:

$\large{
  n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}
}$

where:

* ${p_1 < p_2 < \cdots < p_k}$ are primes
* ${a_i > 0}$

This is the backbone of number theory: **prime factorization is unique**.

## Euclid’s Lemma

If a prime ${p}$ divides a product ${ab}$, then:

${p \mid a \quad \text{or} \quad p \mid b}$

This result is critical for proving uniqueness of factorization.

## The Sequence of Primes

The primes begin:

${2, 3, 5, 7, 11, 13, 17, 19, 23, \ldots}$

To generate primes efficiently, we use the **Sieve of Eratosthenes**:

1. List numbers from ${2}$ to ${N}$
2. Eliminate multiples of ${2}$, then ${3}$, then ${5}$, etc.
3. Continue up to ${\sqrt{N}}$

The remaining numbers are primes.

## Proof That Primes Are Infinite

Let ${2, 3, 5, \ldots, p}$ be all primes up to ${p}$, and define:

${q = 2 \cdot 3 \cdot 5 \cdots p + 1}$

Now:

* ${q}$ is not divisible by any of these primes
* So either ${q}$ is prime, or it has a prime factor greater than ${p}$

In both cases, a larger prime exists.

**Conclusion:** primes never end.

> Euclid’s proof is a **proof by contradiction** because it starts by assuming the opposite of what it wants to prove:
> 
> * Assume there are only **finitely many** primes.
> * List them all: ${p_1, p_2, \dots, p_n}$.
> * Form the number ${N = p_1p_2\cdots p_n + 1}$.
> 
> Now every prime in the list leaves remainder ${1}$ when dividing ${N}$, so **none of them divides ${N}$**.
> 
> That creates the contradiction:
> 
> * either ${N}$ itself is prime, so there is a prime not in the list, or
> * ${N}$ is composite, so it has a prime factor not in the list.
> 
> Either way, the claim that the list contained **all** primes is false.
> 
> So the conclusion is that there must be **infinitely many primes**.

### Videos

1. [Euclid's Proof by Contradiction](https://youtube.com/shorts/C9zAPotoSBY?si=WabkRQ9dz8kLXvQ1)
2. [Infinite Prime Numbers Proof](https://youtube.com/shorts/kHxe4I_mjSs?si=sFD0-oETHH-AptRt)


## Patterns in Primes

Primes appear irregularly, but not randomly:

* Their density decreases as numbers grow larger
* Gaps between primes increase on average
* Long stretches of composite numbers exist

There are also special patterns:

* **Twin primes**: ${(p, p+2)}$
* **Prime triplets** and larger clusters

Many such patterns are conjectured to occur infinitely often.

## Asymptotic Notation

We describe growth using:

* ${f(x) = O(g(x))}$: bounded by ${g(x)}$
* ${f(x) = o(g(x))}$: grows slower than ${g(x)}$
* ${f(x) \sim g(x)}$: same asymptotic growth

These tools let us compare how functions behave as ${x \to \infty}$.

## Growth of Logarithms

The logarithm grows very slowly:

* ${\log x \to \infty}$ as ${x \to \infty}$
* but slower than any power of ${x}$

The function:

${\frac{x}{\log x}}$

plays a central role in prime distribution.

## Prime Number Theorem

Let ${\pi(x)}$ be the number of primes less than or equal to ${x}$.

Then:

${\pi(x) \sim \frac{x}{\log x}}$

This means:

* primes thin out,
* but in a predictable way.


## Size of the ${n^{th}}$ Prime

Let ${p_n}$ be the ${n}$-th prime. Then:

${p_n \sim n \log n}$

So the size of primes grows roughly like ${n \log n}$.

## Growth of Primes

Let ${p_n}$ be the ${n}$-th prime.

From the construction above:

${p_{n+1} \leq p_1 p_2 \cdots p_n + 1}$

This gives a rough upper bound:

${p_n < 2^{2^n}}$

Now let ${\pi(x)}$ count primes ≤ ${x}. Then:

${\pi(x) \geq \log \log x}$

This is weak but important: primes grow slowly, but they never stop.

## Primes in Arithmetic Progressions

We can construct primes in specific forms.

### Form ${4n + 3}$

There are infinitely many primes of this form.

### Form ${6n + 5}$

Also infinitely many primes.

These results come from constructing numbers that force new primes in these patterns.

## More General Result (Dirichlet)

If:

* ${a}$ and ${b}$ share no common divisor

Then:

There are infinitely many primes of the form:

${an + b}$

This is a deep result: primes distribute across linear patterns.

## Fermat Numbers

Define:

${F_n = 2^{2^n} + 1}$

Examples:

* ${F_1 = 5}$
* ${F_2 = 17}$
* ${F_3 = 257}$
* ${F_4 = 65537}$

Key property:

* Any two Fermat numbers are coprime

So each introduces new prime factors → another proof of infinite primes.

## Fermat’s Conjecture (False)

Fermat guessed all ${F_n}$ are prime.

But:

* ${F_5}$ is composite

In fact, most Fermat numbers are composite.

## Mersenne Primes

Numbers of the form:

${2^p - 1}$

can be prime when ${p}$ is prime.

Examples:

* ${3, 7, 31, 127, \ldots}$

These are central to finding large primes.

## Another Proof of Infinite Primes

Count numbers ≤ ${x}$ not divisible by primes ≤ ${p}$.

Call this count ${N(x)}$.

We can bound it:

$\large{ N(x) \leq 2^{\sqrt{x}} }$

If only finitely many primes existed, this would force:

$\large{ x \leq 2^{\sqrt{x}} }$

which fails for large ${x}$.

**Conclusion:** infinitely many primes.

## Divergence of Prime Reciprocals

The series:

${\frac{1}{2} + \frac{1}{3} + \frac{1}{5} + \frac{1}{7} + \cdots}$

**diverges**.

Even though primes thin out, their reciprocals still add up without bound.

## Bounds on Prime Growth

We can sharpen earlier results:

* ${\pi(x) \geq \frac{\log x}{2 \log 2}}$
* ${p_n \leq 4^n}$

These bounds are crude but useful.

## Can We Generate All Primes?

You might ask for a formula ${f(n)}$ that produces only primes.

Reality:

* No simple formula generates only primes
* Polynomial formulas always fail eventually

## Polynomials and Primes

If ${f(n)}$ is a non-constant polynomial with integer coefficients:

It **cannot** produce primes for all large ${n}$.

However, some polynomials produce many primes for small ranges, e.g.:

${n^2 - n + 41}$

## Unsolved Problems

Some major open questions:

* Infinitely many primes of the form ${n^2 + 1}$?
* Infinitely many twin primes?
* Goldbach’s conjecture:

  * Every even number > 2 is the sum of two primes

These remain unsolved.

## Modular Arithmetic

We define a **modulus** ${S}$ as a set closed under addition and subtraction.

If ${a, b \in S}$, then:

* ${a + b \in S}$
* ${a - b \in S}$

Every modulus consists of multiples of some integer ${d}$:

${S = { \ldots, -2d, -d, 0, d, 2d, \ldots }}$

## Greatest Common Divisor

The greatest common divisor of ${a}$ and ${b}$ is:

${(a, b)}$

It is the largest integer dividing both.

## Linear Combinations

If ${d = (a, b)}$, then:

There exist integers ${x, y}$ such that:

${ax + by = d}$

This is a foundational result.

## Solving Linear Equations

The equation:

${ax + by = n}$

has integer solutions **iff**:

${d \mid n}$

where ${d = (a, b)}$.

## Fundamental Theorem of Arithmetic (Revisited)

We now fully justify:

* Every number factors into primes
* The factorization is unique

The proof relies on:

* divisibility properties
* linear combinations
* Euclid’s lemma

## Key Takeaway

Primes:

* are the building blocks of integers
* appear irregular but follow deep statistical laws
* connect simple arithmetic with advanced analysis
* are infinite
* follow structure (progressions, bounds)
