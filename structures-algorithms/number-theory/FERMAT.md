# Fermat’s Theorem and Its Consequences

## Fermat’s Theorem

If ${ p }$ is prime, then:

${a^p \equiv a \pmod p}$

If ${ p }$ is prime and (p \nmid a), then:

${a^{p-1} \equiv 1 \pmod p}$

These two statements are equivalent when ${p \nmid a}$. If ${p \mid a}$, then ${a^p \equiv 0}$, so the first statement becomes immediate.

### Examples of Fermat’s Theorem

For a prime (p):

${a^p \equiv a \pmod p}$

If (p \nmid a), then:

${a^{p-1} \equiv 1 \pmod p}$

#### Example 1: (p=5,\ a=2)

${2^5=32}$

(32 \div 5) leaves remainder (2), so:

${2^5 \equiv 2 \pmod 5}$

Also:

${2^4=16 \equiv 1 \pmod 5}$

#### Example 2: (p=7,\ a=3)

${3^7=2187}$

Remainder when divided by 7 is 3:

${3^7 \equiv 3 \pmod 7}$

Also:

${3^6=729 \equiv 1 \pmod 7}$

#### Example 3: Fast Modular Power

Find remainder of:

${11^{100} \mod 13}$

Since 13 is prime:

${11^{12}\equiv1\pmod{13}}$

Now:

${100=12\cdot8+4}$

So:

${11^{100}=(11^{12})^8\cdot11^4}$

${\equiv1^8\cdot11^4\pmod{13}}$

Now:

${11^2=121\equiv4\pmod{13}}$

${11^4\equiv16\equiv3\pmod{13}}$

Answer:

${11^{100}\equiv3\pmod{13}}$

#### Example 4: Testing Divisibility

Show 17 divides ${3^{16}-1}$

Since 17 is prime:

${3^{16}\equiv1\pmod{17}}$

Therefore:

${3^{16}-1\equiv0\pmod{17}}$

So 17 divides it.

### Why It Matters

Fermat’s theorem helps with:

* finding remainders quickly
* modular arithmetic
* cryptography (RSA)
* primality testing
* simplifying huge powers


## The Fermat–Euler Theorem

If ${(a,m)=1}$, then:

${a^{\phi(m)} \equiv 1 \pmod m}$

Here, ${\phi(m)}$ counts the positive integers not exceeding ${m}$ that are relatively prime to ${m}$. This result fails when ${(a,m) > 1}$. 

---

# Properties of Binomial Coefficients

If (m) and (n) are positive integers, then:

${\binom{m}{n}=\frac{m(m-1)\cdots(m-n+1)}{n!}}$

is always an integer.

Also:

${\binom{-m}{n}=(-1)^n\frac{m(m+1)\cdots(m+n-1)}{n!}}$

is an integer. 

## Product of Consecutive Integers

The product of any (n) consecutive positive integers is divisible by (n!). 

---

# Prime Divisibility of Binomial Coefficients

If (p) is prime, then:

${\binom{p}{1}, \binom{p}{2}, \dots, \binom{p}{p-1}}$

are all divisible by (p). 

---

# Expansion Modulo a Prime

If (p) is prime, then all coefficients in the expansion of:

${(1-x)^{-p}}$

except the constant term are divisible by (p). 

---

# Freshman’s Dream Congruence

If (p) is prime, then:

${(x+y+\cdots+w)^p \equiv x^p+y^p+\cdots+w^p \pmod p}$

This follows because all mixed terms have coefficients divisible by (p). 

---

# Lifting Powers

If (\alpha>0) and:

${m \equiv 1 \pmod{p^\alpha}}$

then:

${m^p \equiv 1 \pmod{p^{\alpha+1}}}$ 

---

# Quadratic Residues

Let (p) be an odd prime and let (p \nmid a).

If the congruence:

${x^2 \equiv a \pmod p}$

has a solution, then (a) is called a **quadratic residue** modulo (p).

If it has no solution, then (a) is a **quadratic non-residue** modulo (p). 

---

# Legendre Symbol

For odd prime (p):

${\left(\frac{a}{p}\right)=1}$ if (a) is a quadratic residue mod (p)

${\left(\frac{a}{p}\right)=-1}$ if (a) is a quadratic non-residue mod (p)

Also:

${\left(\frac{a}{p}\right)=\left(\frac{b}{p}\right)}$

whenever:

${a \equiv b \pmod p}$ 

---

# Wilson’s Theorem

If (p) is prime, then:

${(p-1)! \equiv -1 \pmod p}$

This gives a characterization of primes:

A number (m>1) is prime exactly when:

${m \mid (m-1)!+1}$ 

---

# Residue of (-1)

For odd prime (p):

${\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}}$

So:

* If (p=4k+1), then (-1) is a quadratic residue mod (p)
* If (p=4k+3), then (-1) is a quadratic non-residue mod (p) 

---

# Euler’s Criterion

For odd prime (p):

${\left(\frac{a}{p}\right)\equiv a^{(p-1)/2} \pmod p}$ 

# Elementary Properties of Quadratic Residues and Non-Residues

For an odd prime (p), the numbers:

${1^2,2^2,3^2,\dots,\left(\frac{p-1}{2}\right)^2}$

are all incongruent modulo (p). Therefore there are exactly (\frac{p-1}{2}) quadratic residues and (\frac{p-1}{2}) quadratic non-residues modulo (p). 

## Products

If two numbers are both residues, or both non-residues, their product is a residue.

If one is a residue and the other a non-residue, their product is a non-residue. 

---

# Representation of Certain Primes

If (p=4k+1) is prime, then there exists an integer (x) such that:

${1+x^2=mp}$

for some integer (m) with (0<m<p). 

More generally, if (p) is an odd prime, there exist integers (x,y) such that:

${1+x^2+y^2=mp}$

with (0<m<p). 

---

# Order of a Number Modulo (m)

If ((a,m)=1), define the **order** of (a) modulo (m) as the smallest positive integer (x) such that:

${a^x \equiv 1 \pmod m}$

This order always divides (\phi(m)). Therefore:

${a^{\phi(m)} \equiv 1 \pmod m}$

If (p) is prime, then the order of (a) modulo (p) divides (p-1). 

---

# Converse of Fermat’s Theorem

The direct converse is false. A composite number (m) may satisfy:

${a^{m-1}\equiv 1 \pmod m}$

for some (a) relatively prime to (m).

Such numbers are called **pseudo-primes** to base (a). 

If the congruence holds for every (a) with ((a,m)=1), then (m) is called a **Carmichael number**. 

---

# Divisibility of ${2^{p-1}-1}$ by ${p^2}$

If (p>2) is prime, usually:

${2^{p-1}-1 \equiv 0 \pmod p}$

but only rarely:

${2^{p-1}-1 \equiv 0 \pmod{p^2}}$

There exists a prime (p) for which:

${2^{p-1}-1 \equiv 0 \pmod{p^2}}$ 

---

# Gauss’s Lemma

Let (p) be an odd prime and (a) not divisible by (p). Consider:

${a,2a,3a,\dots,\frac{p-1}{2}a}$

Reduce each modulo (p) to its least positive residue.

Let (\mu) be the number of these residues greater than (\frac{p}{2}). Then:

${\left(\frac{a}{p}\right)=(-1)^\mu}$ 

---

# Quadratic Character of 2

For odd prime (p):

${\left(\frac{2}{p}\right)=(-1)^{\left\lfloor\frac{p+1}{4}\right\rfloor}}$

Equivalent form:

${\left(\frac{2}{p}\right)=(-1)^{\frac{p^2-1}{8}}}$

So:

* If (p=8k\pm1), then (2) is a quadratic residue mod (p)
* If (p=8k\pm3), then (2) is a quadratic non-residue mod (p) 

---

# Quadratic Character of 3

For odd prime (p>3):

* If (p=6k+1), then (3) is a quadratic residue mod (p)
* If (p=6k+5), then (3) is a quadratic non-residue mod (p) 

---

# Quadratic Character of 7

For odd prime (p>7):

* If (p \equiv 1,3,9,19,25,27 \pmod{28}), then (7) is a quadratic residue mod (p)
* Otherwise it is a quadratic non-residue. 

---

# Law of Quadratic Reciprocity

If (p) and (q) are odd primes, then:

${\left(\frac{p}{q}\right)\left(\frac{q}{p}\right)=(-1)^{\frac{(p-1)(q-1)}{4}}}$

Equivalent statement:

* If either (p) or (q\equiv1\pmod4), then

${\left(\frac{p}{q}\right)=\left(\frac{q}{p}\right)}$

* If both (p,q\equiv3\pmod4), then

${\left(\frac{p}{q}\right)=-\left(\frac{q}{p}\right)}$ 

---

# Primality Tests from Fermat-Type Results

If (p>2), (h<p), and (n=hp+1) satisfies:

${2^h \not\equiv 1 \pmod n,\quad 2^{n-1}\equiv1\pmod n}$

then (n) is prime. 

If (m>2), (h<2^m), and (n=h2^m+1) is a quadratic non-residue modulo (n), then a necessary and sufficient condition for (n) to be prime is:

${2^{(n-1)/2}\equiv -1 \pmod n}$ 

---

# Factors of Mersenne Numbers

For numbers of the form:

${M_p=2^p-1}$

where (p) is prime, a necessary and sufficient condition for primality is:

${2^p \equiv 1 \pmod{2p+1}}$

when (2p+1) is also prime.

The first known factors of composite Mersenne numbers include:

(11,23,83,131,179,191,239,251). 