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

---

## Prime and Composite Numbers

A **prime number** is a positive integer ${p > 1}$ with exactly two positive divisors: ${1}$ and ${p}$.

A **composite number** is a positive integer greater than 1 that is not prime.

Examples:

* Prime: ${2, 3, 5, 7, 11, \ldots}$
* Composite: ${4, 6, 8, 9, \ldots}$

---

## Every Number Factors into Primes

Every integer ${n > 1}$ is either:

* prime, or
* a product of primes

If ${n}$ is composite, we can keep factoring it into smaller factors. This process must terminate, producing a factorization:

${n = p_1 p_2 \cdots p_k}$

where each ${p_i}$ is prime.

---

## Fundamental Theorem of Arithmetic

Every integer ${n > 1}$ can be written uniquely (up to order) as a product of prime powers:

$$\large{
  n = p_1^{a_1} p_2^{a_2} \cdots p_k^{a_k}
}$$

where:

* ${p_1 < p_2 < \cdots < p_k}$ are primes
* ${a_i > 0}$

This is the backbone of number theory: **prime factorization is unique**.

---

## Euclid’s Lemma

If a prime ${p}$ divides a product ${ab}$, then:

${p \mid a \quad \text{or} \quad p \mid b}$

This result is critical for proving uniqueness of factorization.

---

## The Sequence of Primes

The primes begin:

${2, 3, 5, 7, 11, 13, 17, 19, 23, \ldots}$

To generate primes efficiently, we use the **Sieve of Eratosthenes**:

1. List numbers from ${2}$ to ${N}$
2. Eliminate multiples of ${2}$, then ${3}$, then ${5}$, etc.
3. Continue up to ${\sqrt{N}}

The remaining numbers are primes.

---

## There Are Infinitely Many Primes

There is no largest prime. The set of primes is infinite.

---

## Patterns in Primes

Primes appear irregularly, but not randomly:

* Their density decreases as numbers grow larger
* Gaps between primes increase on average
* Long stretches of composite numbers exist

There are also special patterns:

* **Twin primes**: ${(p, p+2)}$
* **Prime triplets** and larger clusters

Many such patterns are conjectured to occur infinitely often.

---

## Asymptotic Notation

We describe growth using:

* ${f(x) = O(g(x))}$: bounded by ${g(x)}$
* ${f(x) = o(g(x))}$: grows slower than ${g(x)}$
* ${f(x) \sim g(x)}$: same asymptotic growth

These tools let us compare how functions behave as ${x \to \infty}$.

---

## Growth of Logarithms

The logarithm grows very slowly:

* ${\log x \to \infty}$ as ${x \to \infty}$
* but slower than any power of ${x}$

The function:

${\frac{x}{\log x}}$

plays a central role in prime distribution.

---

## Prime Number Theorem

Let ${\pi(x)}$ be the number of primes less than or equal to ${x}$.

Then:

${\pi(x) \sim \frac{x}{\log x}}$

This means:

* primes thin out,
* but in a predictable way.

---

## Size of the n-th Prime

Let ${p_n}$ be the ${n}$-th prime. Then:

${p_n \sim n \log n}$

So the size of primes grows roughly like ${n \log n}$.

---

## Key Takeaway

Primes:

* are the building blocks of integers
* appear irregular but follow deep statistical laws
* connect simple arithmetic with advanced analysis
