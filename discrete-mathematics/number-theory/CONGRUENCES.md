# Congruences and Residues

## Highest common divisor and least common multiple

We define the greatest common divisor of two integers ${a}$ and ${b}$ as the largest number that divides both. If we express ${a}$ and ${b}$ as products of prime powers:

${a = \prod p^{\alpha}}$,
${b = \prod p^{\beta}}$,

then their greatest common divisor is:

${(a,b) = \prod p^{\min(\alpha, \beta)}}$

and their least common multiple is:

${[a,b] = \prod p^{\max(\alpha, \beta)}}$

From this, we get the key identity:

${[a,b] = \frac{ab}{(a,b)}}$

If ${(a,b) = 1}$, then ${a}$ and ${b}$ are coprime, meaning they share no common factor greater than 1.

### Example: Find HCD and LCM of ${60}$ and ${84}$

#### Step 1: Prime factorization

${60 = 2^2 \cdot 3 \cdot 5}$
${84 = 2^2 \cdot 3 \cdot 7}$

#### Step 2: Highest Common Divisor (HCD)

Take the **minimum powers** of common primes:

* For ${2}$ → ${\min(2,2) = 2}$ → ${2^2}$
* For ${3}$ → ${\min(1,1) = 1}$ → ${3^1}$

So:

${(60,84) = 2^2 \cdot 3 = 4 \cdot 3 = 12}$

#### Step 3: Least Common Multiple (LCM)

Take the **maximum powers** of all primes:

* ${2^2}$, ${3^1}$, ${5^1}$, ${7^1}$

So:

${[60,84] = 2^2 \cdot 3 \cdot 5 \cdot 7 = 4 \cdot 3 \cdot 5 \cdot 7 = 420}$

#### Step 4: Check using identity

${[a,b] = \frac{ab}{(a,b)}}$

${\frac{60 \cdot 84}{12} = \frac{5040}{12} = 420}$ ✔️

#### Intuition

* **HCD = what they share** → overlap → ${12}$
* **LCM = everything needed to cover both** → ${420}$

If you think in systems or engineering terms:

* HCD = common structure
* LCM = full combined capacity

That mental model will stick better than the formula.

## Congruences

We say ${x}$ is congruent to ${a}$ modulo ${m}$ if ${m}$ divides ${x - a}$. We write:

${x \equiv a \ (\text{mod } m)}$

This means ${x}$ and ${a}$ leave the same remainder when divided by ${m}$.

For any modulus ${m}$, every integer belongs to one of ${m}$ residue classes:

${0, 1, 2, \dots, m - 1}$

Each class contains all numbers congruent to one of these values.

Congruences simplify arithmetic. For example, instead of working with large numbers, we can reduce them modulo ${m}$ and work with smaller representatives.

### Example: Work modulo ${7}$

We say:

${15 \equiv 1 \ (\text{mod } 7)}$

because:

${15 = 7 \cdot 2 + 1}$

So both ${15}$ and ${1}$ leave the same remainder when divided by ${7}$.

### Example: Simplifying calculations

Compute:

${38 + 45 \ (\text{mod } 7)}$

Reduce first:

${38 \equiv 3 \ (\text{mod } 7)}$
${45 \equiv 3 \ (\text{mod } 7)}$

Now add:

${3 + 3 = 6}$

So:

${38 + 45 \equiv 6 \ (\text{mod } 7)}$

### Example: Multiplication

Compute:

${38 \cdot 45 \ (\text{mod } 7)}$

Reduce:

${38 \equiv 3}$
${45 \equiv 3}$

Multiply:

${3 \cdot 3 = 9 \equiv 2 \ (\text{mod } 7)}$

### Example: Solving a congruence

Solve:

${2x \equiv 1 \ (\text{mod } 7)}$

Try small values:

* ${x = 1 \Rightarrow 2}$
* ${x = 2 \Rightarrow 4}$
* ${x = 3 \Rightarrow 6}$
* ${x = 4 \Rightarrow 8 \equiv 1}$ ✔️

So:

${x \equiv 4 \ (\text{mod } 7)}$

### What’s really going on

Modulo arithmetic just means:

* Ignore full multiples of ${m}$
* Only track the remainder

That’s why you can shrink big numbers into small ones and still get correct results.


## Properties of congruences

If:

${a \equiv a'}$ and ${b \equiv b'} \ (\text{mod } m)$

then:

* ${a + b \equiv a' + b'}$
* ${ab \equiv a'b'}$

More generally, any polynomial expression preserves congruence.

If a number is congruent modulo two moduli, then it is congruent modulo their greatest common divisor:

If ${a \equiv b \ (\text{mod } m)}$ and ${a \equiv b \ (\text{mod } n)}$, then
${a \equiv b \ (\text{mod } (m,n))}$

If ${(m,n) = 1}$, then:

${a \equiv b \ (\text{mod } mn)}$

## Linear congruences

Consider:

${kx \equiv l \ (\text{mod } m)}$

Let ${(k,m) = d}$.

* A solution exists if and only if ${d \mid l}$
* If a solution exists, there are exactly ${d}$ solutions modulo ${m}$

We can reduce the equation by dividing through by ${d}$ and solving a simpler congruence.

## Residues

A complete system of residues modulo ${m}$ is any set of ${m}$ integers where each residue class appears exactly once.

If ${(k,m) = 1}$, then multiplying each residue by ${k}$ rearranges the system but does not change it.

> Modulo ${m}$, every integer falls into one of these classes:
> 
> ${0, 1, 2, \dots, m-1}$
> 
> A **complete system of residues** just means:
> 
> a set of ${m}$ numbers that hits each of those classes exactly once.

### Example (mod ${5}$)

This is the standard system:

${{0,1,2,3,4}}$

But these are also valid:

${{5,6,7,8,9}}$ → same remainders
${{-2,-1,0,1,2}}$ → also same remainders

All of them cover **each remainder once** → complete system

> Now the key claim:
> 
> If ${(k,m) = 1}$ (coprime), then multiplying every element by ${k}$ just **reorders** the system.


## Euler’s function

Define ${\phi(m)}$ as the number of integers less than ${m}$ that are coprime to ${m}$.

If ${m = \prod p^{e}}$, then:

${\phi(m) = m \prod \left(1 - \frac{1}{p}\right)}$

This function is multiplicative:

If ${(m,n) = 1}$, then:

${\phi(mn) = \phi(m)\phi(n)}$

### Example: Coprime with 10

For ${m = 10}$

Numbers: ${1,2,3,4,5,6,7,8,9}$
Coprime with ${10}$: ${1,3,7,9}$

- ${(4, 10)}$ or ${\gcd(4, 10)}$ = ${2}$
- ${(5, 10)}$ or ${\gcd(5, 10)}$ = ${5}$
- ${(4, 10)}$ or ${\gcd(6, 10)}$ = ${2}$
- ${(4, 10)}$ or ${\gcd(8, 10)}$ = ${2}$

So:

${\phi(10) = 4}$

### (Euler’s theorem)

If ${(a,m) = 1}$, then:

${a^{\phi(m)} \equiv 1 \ (\text{mod } m)}$


#### Example

Take ${m = 10}$ → ${\phi(10) = 4}$
Pick ${a = 3}$ (coprime with 10)

${3^4 = 81 \equiv 1 \ (\text{mod } 10)}$

### The insight

This is where it becomes powerful:

#### (a) It lets you simplify big powers

Instead of computing:

${3^{100} \ (\text{mod } 10)}$

You use:

${3^4 \equiv 1}$

So:

${3^{100} = (3^4)^{25} \equiv 1^{25} = 1}$

#### (b) It guarantees structure

Among the “good” residues (coprime ones):

* Multiplication cycles back to 1
* Everything behaves predictably

#### (c) It generalizes Fermat’s Little Theorem

If ${p}$ is prime:

${\phi(p) = p - 1}$

So:

${a^{p-1} \equiv 1 \ (\text{mod } p)}$

> Euler’s function is really telling you:
> 
> * Which residues are **usable** (coprime ones)
> * How many such residues exist
> * That they form a **closed system under multiplication**

## Trigonometric sums and exponential form

We define:

${e(t) = e^{2\pi i t}}$

This allows us to express sums in a compact exponential form.

These sums depend only on values modulo ${n}$:

${e\left(\frac{m}{n}\right) = e\left(\frac{m'}{n}\right)} \quad \text{if } m \equiv m' \ (\text{mod } n)$

## Gauss sums

Define:

${S(m,n) = \sum e\left(\frac{h^2 m}{n}\right)}$

These sums have a multiplicative property:

If ${(n,n') = 1}$, then:

${S(mn,n') = S(m,n)S(m,n')}$

## Ramanujan sums

Define:

${c_q(m) = \sum e\left(\frac{hm}{q}\right)}$

where ${h}$ runs over numbers coprime to ${q}$.

These sums also satisfy multiplicative properties:

If ${(q,q') = 1}$, then:

${c_{qq'}(m) = c_q(m)c_{q'}(m)}$

## Kloosterman sums

Define:

${S(u,v,n) = \sum e\left(\frac{uh + v\bar{h}}{n}\right)}$

where ${\bar{h}}$ is the modular inverse of ${h}$ modulo ${n}$.

These sums also behave multiplicatively when moduli are coprime.

## General principle

Many results in number theory follow a simple pattern:

* Break numbers into residue classes
* Use modular arithmetic to simplify structure
* Rebuild results using multiplicative properties

## Constructing a regular polygon (17 sides)

We can construct a regular polygon with ${n}$ sides using only ruler and compass if ${n}$ has a special form involving primes.

For ${n = 17}$, this construction is possible.

The method reduces the problem to solving polynomial equations involving:

${x^{17} - 1 = 0}$

By grouping roots and forming sums (called periods), we reduce the problem step by step to solving quadratic equations.

Eventually, we express values like:

${2\cos \alpha}$

in terms of nested square roots. This makes geometric construction possible using classical tools.

The diagram on the last page shows how to translate these algebraic results into an actual geometric construction using circles and perpendicular lines. 

## Key takeaway

Modular arithmetic turns complicated integer problems into structured, manageable systems. Once you understand residue classes and how operations behave under congruence, you can solve equations, count solutions, and even build geometric objects from pure arithmetic.