# Congruences to Composite Moduli

## Linear Congruences

So far, many results assumed that the modulus ${m}$ was prime. We now study congruences for general moduli. When ${m}$ is composite, the theory becomes less simple.

Consider the linear congruence

${ax \equiv b \pmod m}$

This congruence has a solution only when

${d=(a,m)}$

divides ${b}$.

If this condition holds, then the congruence has exactly ${d}$ solutions:

${\xi,; \xi+\frac{m}{d},; \xi+2\frac{m}{d},;\dots,;\xi+(d-1)\frac{m}{d}}$

where ${\xi}$ is the unique solution of

${\frac{a}{d}x \equiv \frac{b}{d} \pmod{\frac{m}{d}}}$

---

## Systems of Linear Congruences

Now consider the system

${a_1x \equiv b_1 \pmod{m_1}}$

${a_2x \equiv b_2 \pmod{m_2}}$

${\dots}$

${a_kx \equiv b_k \pmod{m_k}}$

where the moduli ${m_1,m_2,\dots,m_k}$ are pairwise coprime.

Each congruence can be solved separately. This reduces the problem to solving

${x\equiv c_1 \pmod{m_1}}$

${x\equiv c_2 \pmod{m_2}}$

${\dots}$

${x\equiv c_k \pmod{m_k}}$

Let

${m=m_1m_2\cdots m_k}$

and define

${M_i=\frac{m}{m_i}}$

Since ${(m_i,M_i)=1}$, there exists a unique integer ${n_i}$ modulo ${m_i}$ such that

${n_iM_i\equiv 1\pmod{m_i}}$

Then

${x=n_1M_1c_1+n_2M_2c_2+\cdots+n_kM_kc_k}$

satisfies every congruence in the system.

Therefore, when the moduli are pairwise coprime, the system has one unique solution modulo ${m}$.

---

## Example: Scheduling Problem

Six professors begin lecture series on Monday through Saturday. Their lecture intervals are:

* Monday professor: every 2 days
* Tuesday professor: every 3 days
* Wednesday professor: every 4 days
* Thursday professor: every 1 day
* Friday professor: every 6 days
* Saturday professor: every 5 days

Sunday lectures are not allowed.

We ask: when will all six professors lecture on the same day?

Let ${x}$ be the day number counting from the first Monday. Then:

${x\equiv 1\pmod 2}$

${x\equiv 2\pmod 3}$

${x\equiv 3\pmod 4}$

${x\equiv 4\pmod 1}$

${x\equiv 5\pmod 6}$

${x\equiv 6\pmod 5}$

${x\equiv 0\pmod 7}$

These reduce to:

${x\equiv 11\pmod{12}}$

${x\equiv 6\pmod 5}$

${x\equiv 0\pmod 7}$

or equivalently:

${x\equiv -1\pmod{12}}$

${x\equiv 1\pmod 5}$

${x\equiv 0\pmod 7}$

Now take:

${m_1=12,\quad m_2=5,\quad m_3=7,\quad m=420}$

${M_1=35,\quad M_2=84,\quad M_3=60}$

Choose:

${n_1=-1,\quad n_2=-1,\quad n_3=2}$

Then

${x=(-1)(-1)35+(-1)(1)84+2(0)60=-49\equiv 371\pmod{420}}$

So the first day satisfying all conditions is:

${x=371}$

---

## Congruences of Higher Degree

We now consider polynomial congruences of the form

${f(x)\equiv 0\pmod m}$

Suppose

${m=m_1m_2\cdots m_k}$

where no two factors share a common divisor.

Then every solution of the congruence must satisfy

${f(x)\equiv 0\pmod{m_i}}$

for each ${i}$.

# Polynomial Congruences and Factorized Moduli

Suppose

${m=m_1m_2\cdots m_k}$

where the factors are pairwise coprime.

If

${c_1,c_2,\dots,c_k}$

are solutions of

${f(x)\equiv 0\pmod{m_1}},;
f(x)\equiv 0\pmod{m_2}},;
\dots,;
f(x)\equiv 0\pmod{m_k}}$

and ${x}$ is the unique solution of

${x\equiv c_i\pmod{m_i}}$

for all ${i}$, then

${f(x)\equiv f(c_i)\equiv 0\pmod{m_i}}$

for each ${i}$, so

${f(x)\equiv 0\pmod m}$

Thus every choice of separate roots gives one root modulo ${m}$, and every root modulo ${m}$ arises this way.

Therefore, the number of roots modulo ${m}$ equals the product of the numbers of roots modulo the separate factors.

If

${m=p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k}}$

then we may choose

${m_i=p_i^{a_i}}$

So solving polynomial congruences modulo a composite number reduces to solving them modulo prime powers.

---

# Congruences Modulo a Prime Power

Now consider

${f(x)\equiv 0\pmod{p^a}}$

where ${p}$ is prime and ${a>1}$.

Suppose ${x}$ is a root with

${0\le x<p^a}$

Then ${x}$ also satisfies

${f(x)\equiv 0\pmod{p^{a-1}}}$

So every root modulo ${p^a}$ has the form

${x=\xi+sp^{a-1}\quad (0\le s<p)}$

where ${\xi}$ is a root modulo ${p^{a-1}}$ with

${0\le \xi<p^{a-1}}$

Now expand ${f(\xi+sp^{a-1})}$. This gives

${f(\xi+sp^{a-1})\equiv f(\xi)+sp^{a-1}f'(\xi)\pmod{p^a}}$

All higher terms vanish modulo ${p^a}$.

So we now split into two cases.

---

# Case 1: ${f'(\xi)\not\equiv 0\pmod p}$

Then ${\xi+sp^{a-1}}$ is a root modulo ${p^a}$ exactly when

${f(\xi)+sp^{a-1}f'(\xi)\equiv 0\pmod{p^a}}$

or

${sf'(\xi)\equiv -\frac{f(\xi)}{p^{a-1}}\pmod p}$

This linear congruence has exactly one solution for ${s}$ modulo ${p}$.

So each root ${\xi}$ modulo ${p^{a-1}}$ lifts to exactly **one** root modulo ${p^a}$.

---

# Case 2: ${f'(\xi)\equiv 0\pmod p}$

Then

${f(\xi+sp^{a-1})\equiv f(\xi)\pmod{p^a}}$

If

${f(\xi)\not\equiv 0\pmod{p^a}}$

then no lifted root exists.

If

${f(\xi)\equiv 0\pmod{p^a}}$

then every value of ${s}$ works, giving ${p}$ distinct roots:

${\xi,;\xi+p^{a-1},;\xi+2p^{a-1},\dots,\xi+(p-1)p^{a-1}}$

---

# Root Count Rule

For each root ${\xi}$ modulo ${p^{a-1}}$, the number of corresponding roots modulo ${p^a}$ is:

* **0 roots** if ${f'(\xi)\equiv 0\pmod p}$ and ${\xi}$ is not already a root modulo ${p^a}$
* **1 root** if ${f'(\xi)\not\equiv 0\pmod p}$
* **p roots** if ${f'(\xi)\equiv 0\pmod p}$ and ${\xi}$ is already a root modulo ${p^a}$

The new roots come either from solving one linear congruence or by adding multiples of ${p^{a-1}}$ to ${\xi}$. 

# Examples

## Fermat-Type Congruence

Consider

${x^{p-1}-1 \equiv 0 \pmod{p^a}}$

This congruence has exactly ${p-1}$ roots for every positive integer ${a}$.

It has ${p-1}$ roots modulo ${p}$, namely

${1,2,\dots,p-1}$

For each such root ${\xi}$,

${f'(\xi)=(p-1)\xi^{p-2}\not\equiv 0\pmod p}$

So each root lifts uniquely from modulus ${p}$ to ${p^2}$, then to ${p^3}$, and so on. Therefore the total number of roots always remains ${p-1}$.

---

## Quadratic Residues Modulo ${p^2}$

Now consider

${x^{\frac12 p(p-1)}-1 \equiv 0 \pmod{p^2}}$

where ${p}$ is an odd prime.

For every root ${\xi}$,

${f'(\xi)=\frac12 p(p-1)\xi^{\frac12 p(p-1)-1}\equiv 0\pmod p}$

So each root modulo ${p}$ gives ${p}$ roots modulo ${p^2}$.

By Euler’s criterion,

${x^{\frac12 (p-1)}\equiv \pm 1\pmod p}$

according as ${x}$ is a quadratic residue or non-residue modulo ${p}$.

Hence there are

${\frac12(p-1)}$

roots modulo ${p}$, and therefore

${\frac12 p(p-1)}$

roots modulo ${p^2}$.

These roots are exactly the quadratic residues modulo ${p^2}$.

So the number of quadratic residues modulo ${p^2}$ is

${\frac12 p(p-1)}$

---

## Square Root Congruence

Now consider

${x^2-c \equiv 0 \pmod{p^a}}$

where ${p\nmid c}$.

If ${p}$ is odd, then for any root ${\xi}$,

${f'(\xi)=2\xi\not\equiv 0\pmod p}$

So the number of roots modulo ${p^a}$ is the same as the number of roots modulo ${p}$.

Therefore:

* If ${c}$ is a quadratic residue modulo ${p}$, the congruence has **two** roots.
* If ${c}$ is not a quadratic residue modulo ${p}$, it has **no** roots.

When ${p=2}$, the situation is more complicated. Depending on ${a\ge 2}$, the congruence may have:

* no roots
* two roots
* four roots

---

# Bauer’s Identical Congruence

Let ${t(m)}$ denote the integers less than ${m}$ and coprime to ${m}$. Let ${\phi(m)}$ be the number of such integers.

Define

${f_m(x)=\prod_{t(m)}(x-t)}$

where the product runs over all numbers in ${t(m)}$.

When ${m}$ is prime, this becomes

${f_m(x)\equiv x^{\phi(m)}-1\pmod m}$

One might expect this to hold for all ${m}$, but it does not.

For example, when ${m=9}$, the coprime residues are

${\pm1,\pm2,\pm4}$

and

${f_9(x)\equiv (x^2-1)(x^2-2^2)(x^2-4^2)}$

${\equiv x^6-3x^4+3x^2-1\pmod 9}$

So a different general formula is needed.

---

# Bauer’s Formula for Odd Prime Factors

If ${p}$ is an odd prime divisor of ${m}$, and ${p^a}$ is the highest power of ${p}$ dividing ${m}$, then

${f_m(x)\equiv (x^{p-1}-1)^{\frac{\phi(m)}{p-1}}\pmod{p^a}}$

In particular,

${f_{p^a}(x)\equiv (x^{p-1}-1)^{p^{a-1}}\pmod{p^a}}$

---

# Bauer’s Formula for Powers of Two

If ${m}$ is even, ${m>2}$, and ${2^a}$ is the highest power of ${2}$ dividing ${m}$, then

${f_m(x)\equiv (x^2-1)^{\frac12\phi(m)}\pmod{2^a}}$

In particular, for ${a>1}$,

${f_{2^a}(x)\equiv (x^2-1)^{2^{a-2}}\pmod{2^a}}$

These identities complete the composite-modulus analogue of the prime-modulus case.

# Leudesdorf’s Theorem

We can use Bauer’s theorem to derive a broader version of Wolstenholme’s theorem.

Define

${S_m=\sum_{t(m)} \frac{1}{t}}$

where the sum runs over all positive integers less than ${m}$ that are coprime to ${m}$.

Then the following congruences hold.

* If ${2\nmid m}$ and ${3\nmid m}$, then

${S_m\equiv 0\pmod{m^2}}$

* If ${2\nmid m}$ and ${3\mid m}$, then

${S_m\equiv 0\pmod{\frac13 m^2}}$

* If ${2\mid m}$, ${3\nmid m}$, and ${m}$ is not a power of ${2}$, then

${S_m\equiv 0\pmod{\frac12 m^2}}$

* If ${2\mid m}$ and ${3\mid m}$, then

${S_m\equiv 0\pmod{\frac16 m^2}}$

* If ${m=2^a}$, then

${S_m\equiv 0\pmod{\frac14 m^2}}$

---

# Outline of the Proof

Write

${m=p^aq^br^c\cdots}$

where the prime factors of ${m}$ are separated into powers.

For odd primes ${p>2}$, Bauer’s identity gives a factorization involving the numbers coprime to ${m}$. By comparing coefficients, we obtain a congruence that implies

${S_m\equiv 0\pmod{p^{2a}}}$

Applying this to every odd prime divisor of ${m}$ yields the first result:

${S_m\equiv 0\pmod{m^2}}$

whenever ${m}$ is divisible by neither ${2}$ nor ${3}$.

---

# Special Case: When ${3\mid m}$

When ${p=3}$, the coefficient comparison changes slightly. This weaker divisibility gives

${S_m\equiv 0\pmod{3^{2a-1}}}$

Combining this with the previous odd-prime factors gives

${S_m\equiv 0\pmod{\frac13 m^2}}$

whenever ${3\mid m}$ but ${2\nmid m}$.

---

# Special Case: Powers of ${2}$

When ${p=2}$, Bauer’s theorem for even moduli applies instead.

If

${m=2^aM}$

where ${M}$ is odd and greater than ${1}$, then

${\frac12\phi(m)=2^{a-2}\phi(M)}$

is divisible by ${2^{a-1}}$, which leads to

${S_m\equiv 0\pmod{2^{2a-1}}}$

Combining this with the earlier odd-factor results gives:

* If ${2\mid m}$ but ${3\nmid m}$ and ${m}$ is not a power of ${2}$,

${S_m\equiv 0\pmod{\frac12 m^2}}$

* If ${2\mid m}$ and ${3\mid m}$,

${S_m\equiv 0\pmod{\frac16 m^2}}$

Finally, if ${m=2^a}$ alone, then

${S_m\equiv 0\pmod{2^{2a-2}}=\pmod{\frac14 m^2}}$

which gives the last case.

---

# Further Consequences of Bauer’s Theorem

Assume ${m>2}$ and write

${m=\prod p^a}$

Define

${u_2=\frac12\phi(m),\qquad u_p=\frac{\phi(m)}{p-1};(p>2)}$

Since ${\phi(m)}$ is even, comparing constant terms in Bauer’s formulas gives

${\prod_{t(m)} t \equiv (-1)^{u_p}\pmod{p^a}}$

From this we conclude:

${\prod_{t(m)} t \equiv \pm 1\pmod m}$

Choose the negative sign when ${m}$ is one of:

* ${4}$
* ${p^a}$
* ${2p^a}$ where ${p}$ is an odd prime

Choose the positive sign in all other cases.

For ${m=p}$, this reduces to Wilson’s theorem.

# Symmetric Sums Modulo Prime Powers

Let

${f(x)=\prod_{t(p^a)}(x-t)}$

where the product runs over all integers less than ${p^a}$ and coprime to ${p^a}$.

Expand this polynomial as

${f(x)=x^{\phi(p^a)}-A_1x^{\phi(p^a)-1}+A_2x^{\phi(p^a)-2}-\cdots}$

Because the reduced residues occur in complementary pairs, we have

${f(x)=f(p^a-x)}$

Using this symmetry and comparing derivatives gives strong divisibility properties for the odd-indexed coefficients.

In particular, if ${A_{2\nu+1}}$ is the sum of all products formed by choosing ${2\nu+1}$ residue numbers at a time, and if

${2\nu \not\equiv 0 \pmod{p-1}}$

then

${A_{2\nu+1}\equiv 0\pmod{p^{2a}}}$

Wolstenholme’s theorem appears as the special case:

${a=1,\quad 2\nu+1=p-2,\quad p>3}$

---

# Sums of Odd Reciprocal Powers

Now consider

${S_{2\nu+1}=\sum \frac{1}{t^{,2\nu+1}}}$

where the sum runs over all reduced residues modulo ${p}$.

Assume:

* ${a=1}$
* ${m=p}$
* ${p>2}$

Using the same polynomial symmetry and power-series expansions, we find a divisibility result for these sums.

If

${2\nu<p-3}$

then the numerator of ${S_{2\nu+1}}$ is divisible by ${p^2}$.

So for a prime ${p}$,

${S_{2\nu+1}=1+\frac1{2^{2\nu+1}}+\cdots+\frac1{(p-1)^{2\nu+1}}}$

has numerator divisible by ${p^2}$ whenever ${2\nu<p-3}$.

---

# Examples

## Wolstenholme’s Theorem

Take ${\nu=0}$. Then

${S_1=1+\frac12+\frac13+\cdots+\frac1{p-1}}$

Its numerator is divisible by ${p^2}$ for every prime ${p>3}$.

## Next Case

Take ${\nu=1}$. Then

${p>5}$ is required, and

${1+\frac1{2^3}+\frac1{3^3}+\frac1{4^3}}$

has numerator divisible by ${5}$ but not by ${5^2}$.

More advanced theorems of the same kind also exist.

---

## Residues of ${2^{p-1}}$ and ${(p-1)!}$ Modulo ${p^2}$

Fermat’s theorem shows

${2^{p-1}\equiv 1\pmod p}$

and Wilson’s theorem shows

${(p-1)!\equiv -1\pmod p}$

Their residues modulo ${p^2}$ are smaller corrections to these congruences and can be transformed into interesting formulas. 

## Residue of ${2^{p-1}}$ Modulo ${p^2}$

If ${p}$ is an odd prime, then

${\frac{2^{p-1}-1}{p}\equiv 1+\frac13+\frac15+\cdots+\frac1{p-2}\pmod p}$

So the residue of ${2^{p-1}}$ modulo ${p^2}$ can be written as

${2^{p-1}\equiv 1+p\left(1+\frac13+\frac15+\cdots+\frac1{p-2}\right)\pmod{p^2}}$

where each fraction means the modular inverse modulo ${p}$.

An equivalent form is

${\frac{2^{p-1}-1}{p}\equiv -\frac12-\frac14-\cdots-\frac1{p-1}\pmod p}$

---

# Residue of ${(p-1)!}$ Modulo ${p^2}$

If ${p}$ is an odd prime, then

${(p-1)!\equiv (-1)^{\frac12(p-1)}2^{2p-2}\left(\left(\frac{p-1}{2}\right)!\right)^2 \pmod{p^2}}$

This connects Wilson’s theorem modulo ${p^2}$ with the factorial of half the nonzero residues.

---

# Equivalent Even-Factorial Form

Let

${p=2n+1}$

Then

${(2n)! \equiv (-1)^n 4^n (n!)^2 \pmod{p^2}}$

This gives a compact expression for the full factorial in terms of the half-factorial.