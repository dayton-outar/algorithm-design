# General Properties of Congruences

## Roots of Congruuences

An integer ${x}$ is a **root** of the congruence

${f(x)=c_0x^n+c_1x^{n-1}+\cdots+c_n \equiv 0 \pmod m}$

when it satisfies the relation. We also call ${x}$ a root of ${f(x)}$ modulo ${m}$. If ${a}$ is a root, then every integer congruent to ${a}$ modulo ${m}$ is also a root. We treat such roots as equivalent.

When a congruence has ${l}$ roots, we mean it has ${l}$ incongruent roots.

An algebraic equation of degree ${n}$ has exactly ${n}$ roots (with the usual conventions), and a polynomial of degree ${n}$ can be written as a product of linear factors. It is natural to ask whether the same holds for congruences. A few examples show that the situation is more complicated.

${x^{p-1}-1 \equiv 0 \pmod p}$

has ${p-1}$ roots:

${1,2,\dots,p-1}$

Also,

${x^4-1 \equiv 0 \pmod {16}}$

has eight roots:

${1,3,5,7,9,11,13,15}$

But

${x^4-2 \equiv 0 \pmod {10}}$

has no root.

So congruences behave less simply than ordinary algebraic equations.

---

## Integral Polynomials and Polynomial Congruences

If ${c_0,c_1,\dots,c_n}$ are integers, then

${c_0x^n+c_1x^{n-1}+\cdots+c_n}$

is an **integral polynomial**.

Let

${f(x)=\sum_{r=0}^{n} c_r x^{n-r}}$

and

${g(x)=\sum_{r=0}^{n} c_r' x^{n-r}}$

If

${c_r \equiv c_r' \pmod m}$

for every ${r}$, then the two polynomials are congruent modulo ${m}$, written as

${f(x)\equiv g(x)\pmod m}$

If ${f(x)\equiv g(x)}$, then multiplying both sides by any integral polynomial ${h(x)}$ gives

${f(x)h(x)\equiv g(x)h(x)\pmod m}$

The symbol ${\equiv}$ has two uses:

1. It can compare numbers.
2. It can compare polynomials coefficient by coefficient.

So when we write

${f(x)\equiv 0}$

the meaning depends on context.

If

${f(x)\equiv g(x)}$

then substituting any integer ${a}$ gives

${f(a)\equiv g(a)\pmod m}$

The converse is not always true.

For example,

${a^p \equiv a \pmod p}$

for every integer ${a}$, but

${x^p \equiv x \pmod p}$

is not a polynomial identity.

---

## Divisibility of Polynomials Modulo ${m}$

We say that ${f(x)}$ is divisible by ${g(x)}$ modulo ${m}$ if there exists an integral polynomial ${h(x)}$ such that

${f(x)\equiv g(x)h(x)\pmod m}$

We write this as

${g(x)\mid f(x)\pmod m}$

A necessary and sufficient condition for

${(x-a)\mid f(x)\pmod m}$

is

${f(a)\equiv 0\pmod m}$

If ${(x-a)}$ divides ${f(x)}$ modulo ${m}$, then

${f(x)\equiv (x-a)h(x)\pmod m}$

for some polynomial ${h(x)}$, so substituting ${x=a}$ gives

${f(a)\equiv 0\pmod m}$

So the condition is necessary.

It is also sufficient. If

${f(a)\equiv 0\pmod m}$

then

${f(x)\equiv f(x)-f(a)\pmod m}$

and

${f(x)-f(a)=(x-a)h(x)}$

where

${h(x)=\frac{f(x)-f(a)}{x-a}}$

is an integral polynomial.

Therefore ${(x-a)}$ divides ${f(x)}$ modulo ${m}$. 

# Roots of Congruences Modulo a Prime

From this point onward, let ${p}$ be prime. In this case, the theory becomes much simpler.

If

${f(x)\equiv g(x)h(x)\pmod p}$

then every root of ${f(x)\equiv 0\pmod p}$ must be a root of at least one of

${g(x)\equiv 0\pmod p}$

or

${h(x)\equiv 0\pmod p}$

If ${a}$ is a root of ${f(x)}$, then

${f(a)\equiv 0\pmod p}$

so

${g(a)h(a)\equiv 0\pmod p}$

Because ${p}$ is prime, this means either

${g(a)\equiv 0\pmod p}$

or

${h(a)\equiv 0\pmod p}$

Thus ${a}$ is a root of one of those congruences.

The condition that ${p}$ is prime is essential. For example,

${x^2 \equiv x^2-4 \equiv (x-2)(x+2)\pmod 4}$

and ${x=2}$ is a root of

${x^2\equiv 0\pmod 4}$

but not of either factor separately.

---

## Number of Roots of a Polynomial

If ${f(x)}$ has degree ${n}$ and more than ${n}$ roots modulo ${p}$, then every coefficient of ${f(x)}$ is divisible by ${p}$. In other words,

${f(x)\equiv 0\pmod p}$

So a nonzero polynomial of degree ${n}$ modulo a prime cannot have more than ${n}$ incongruent roots.

This result matters only when ${n<p}$.

The proof uses induction. If ${a}$ is a root, then

${f(x)\equiv (x-a)g(x)\pmod p}$

where ${g(x)}$ has degree at most ${n-1}$. Every remaining root of ${f(x)}$ must be a root of ${g(x)}$. If ${f(x)}$ had more than ${n}$ roots, then ${g(x)}$ would have more than ${n-1}$ roots, forcing

${g(x)\equiv 0\pmod p}$

and therefore

${f(x)\equiv 0\pmod p}$

again.

The primality of ${p}$ is necessary. For example,

${x^4-1\equiv 0\pmod {16}}$

has eight roots.

---

## Full Number of Roots

If a polynomial ${f(x)}$ of degree ${n}$ has exactly ${n}$ roots modulo ${p}$:

${a_1,a_2,\dots,a_n}$

then it factors completely as

${f(x)\equiv c_0(x-a_1)(x-a_2)\cdots(x-a_n)\pmod p}$

where ${c_0}$ is the leading coefficient.

---

## Applications of the General Results

Fermat’s theorem shows that

${x^d\equiv 1\pmod p}$

has its full number of roots when ${d=p-1}$. We can now prove the same whenever ${d}$ divides ${p-1}$.

If ${p}$ is prime and

${d\mid (p-1)}$

then the congruence

${x^d\equiv 1\pmod p}$

has exactly ${d}$ roots.

To see this, write

${x^{p-1}-1=(x^d-1)g(x)}$

where

${g(x)=x^{p-1-d}+x^{p-1-2d}+\cdots+x^d+1}$

Now ${x^{p-1}-1\equiv 0}$ has ${p-1}$ roots, while ${g(x)\equiv 0}$ has at most ${p-1-d}$ roots. Therefore ${x^d-1\equiv 0}$ must have at least ${d}$ roots, and since its degree is ${d}$, it has exactly ${d}$ roots.

---

## Primitive Roots Count

Among the ${d}$ roots of

${x^d\equiv 1\pmod p}$

exactly ${\phi(d)}$ have order ${d}$.

In particular, there are

${\phi(p-1)}$

primitive roots modulo ${p}$.

If ${\psi(d)}$ counts the roots whose order is exactly ${d}$, then

${\sum_{d\mid p-1}\psi(d)=p-1}$

and also

${\sum_{d\mid p-1}\phi(d)=p-1}$

Hence

${\psi(d)=\phi(d)}$

for every divisor ${d}$ of ${p-1}$. 

# Distinct Powers Modulo a Prime

If ${\psi(d)>0}$, choose a number ${f}$ whose order modulo ${p}$ is ${d}$. Then the numbers

${f^h \quad (0\le h \le d-1)}$

are all roots of

${x^d\equiv 1\pmod p}$.

They are incongruent modulo ${p}$, since if

${f^h\equiv f^{h'}\pmod p}$

with ${h'<h}$, then

${f^{h-h'}\equiv 1\pmod p}$

which contradicts the fact that ${f}$ has order ${d}$ unless ${h=h'}$.

These ${d}$ values are exactly all the roots of

${x^d\equiv 1\pmod p}$.

If ${f^h}$ has order ${d}$, then ${h}$ must be relatively prime to ${d}$. Therefore exactly ${\phi(d)}$ of these roots have order ${d}$.

This also proves that if ${p}$ is an odd prime, then there exists a number ${g}$ such that

${1,g,g^2,\dots,g^{p-2}}$

are all incongruent modulo ${p}$. Such a ${g}$ is a primitive root modulo ${p}$.

---

# Factorization of ${x^{p-1}-1}$

The polynomial

${f(x)=x^{p-1}-1}$

has degree ${p-1}$ and roots

${1,2,\dots,p-1}$

modulo ${p}$. Therefore it factors as

${x^{p-1}-1\equiv (x-1)(x-2)\cdots(x-(p-1))\pmod p}$

Comparing constant terms gives another proof of Wilson’s theorem.

Comparing coefficients gives this result:

If ${p}$ is an odd prime, ${1\le l < p-1}$, and ${A_l}$ is the sum of all products of ${l}$ distinct numbers chosen from

${1,2,\dots,p-1}$

then

${A_l\equiv 0\pmod p}$

---

# Another Proof of Fermat’s and Wilson’s Theorems

Assume ${p}$ is odd. Expanding

${(x-1)(x-2)\cdots(x-(p-1))}$

and comparing coefficients step by step shows that

${p\mid A_1,\quad p\mid A_2,\quad \dots,\quad p\mid A_{p-2}}$

and finally

${(p-1)! \equiv -1\pmod p}$

which is Wilson’s theorem.

Since

${(x-1)(x-2)\cdots(x-(x-p+1))\equiv x^{p-1}-1\pmod p}$

for any ${x}$ not divisible by ${p}$, Fermat’s theorem follows immediately:

${x^{p-1}\equiv 1\pmod p}$

---

# The Residue of ${\left(\frac{p-1}{2}\right)!}$

Let ${p}$ be an odd prime and define

${\varpi=\frac{p-1}{2}}$

Then

${(p-1)! = 1\cdot2\cdots \varpi \cdot (\varpi+1)\cdots(p-1)}$

which implies

${(\varpi !)^2 \equiv (-1)^{\varpi-1}\pmod p}$

Now distinguish two cases.

### Case 1: ${p=4n+1}$

Then

${(\varpi !)^2\equiv -1\pmod p}$

So ${\varpi !}$ is congruent to one of the square roots of ${-1}$ modulo ${p}$.

### Case 2: ${p=4n+3}$

Then

${(\varpi !)^2\equiv 1\pmod p}$

Hence

${\varpi !\equiv \pm 1\pmod p}$

The sign depends on how many quadratic non-residues less than ${\frac p2}$ occur modulo ${p}$.

If ${\nu}$ is the number of quadratic non-residues less than ${\frac p2}$, then

${\left(\frac{p-1}{2}\right)! \equiv (-1)^\nu \pmod p}$

---

# Wolstenholme’s Theorem

For a prime ${p>3}$, the numerator of

${1+\frac12+\frac13+\cdots+\frac1{p-1}}$

is divisible by ${p^2}$.

For ${p=3}$, the result fails. The denominator is never divisible by ${p}$, so the statement concerns only the numerator. 

# Modular Inverses and Wolstenholme’s Theorem

If ${i}$ is relatively prime to ${m}$, then the congruence

${ix \equiv 1 \pmod m}$

has exactly one solution. We call this solution the **associate** or modular inverse of ${i}$ modulo ${m}$. We often write it as

${\frac{1}{i}}$

More generally, the solution of

${ax \equiv b \pmod m}$

may be written as

${\frac{b}{a}}$

Using this notation, Wolstenholme’s theorem states:

If ${p>3}$ and ${\frac{1}{i}}$ means the inverse of ${i}$ modulo ${p^2}$, then

${1+\frac12+\frac13+\cdots+\frac1{p-1}\equiv 0\pmod{p^2}}$

We first show the weaker congruence

${1+\frac12+\frac13+\cdots+\frac1{p-1}\equiv 0\pmod p}$

For any integer ${i}$ with ${0<i<p}$,

${i\cdot \frac1i \equiv 1\pmod p}$

and

${(p-i)\cdot \frac1{p-i}\equiv 1\pmod p}$

Hence,

${i\left(\frac1i+\frac1{p-i}\right)\equiv 1-1\equiv 0\pmod p}$

so

${\frac1i+\frac1{p-i}\equiv 0\pmod p}$

Summing these paired terms gives the result.

---

# Equivalent Forms of Wolstenholme’s Theorem

The two common forms of Wolstenholme’s theorem are equivalent.

Let ${\bar{x}}$ be the inverse of ${x}$ modulo ${p^2}$, where ${0<x<p}$. Then

${\bar{x}(p-1)! \equiv \frac{(p-1)!}{x}\pmod{p^2}}$

Therefore,

${(p-1)!\left(\bar1+\bar2+\cdots+\overline{p-1}\right)\equiv (p-1)!\left(1+\frac12+\cdots+\frac1{p-1}\right)\pmod{p^2}}$

so both statements say the same thing.

To prove the theorem, substitute ${x=p}$ into a known identity to obtain

${(p-1)! = p^{p-1}-A_1p^{p-2}+\cdots-A_{p-2}p+A_{p-1}}$

Since ${A_{p-1}=(p-1)!}$, rearranging gives

${p^{p-2}-A_1p^{p-3}+\cdots+A_{p-3}p-A_{p-2}=0}$

For ${p>3}$, earlier results imply

${p\mid A_1,; p\mid A_2,; \dots,; p\mid A_{p-3}}$

Hence

${p^2 \mid A_{p-2}}$

which is equivalent to Wolstenholme’s theorem.

Now define

${C_p=1+\frac1{2^2}+\cdots+\frac1{(p-1)^2}}$

Its numerator equals

${A_{p-2}^2-2A_{p-1}A_{p-3}}$

so it is divisible by ${p}$. Therefore, for every prime ${p>3}$,

${C_p\equiv 0\pmod p}$

---

# Bernoulli Numbers and von Staudt’s Theorem

We end this chapter with a famous theorem of von Staudt concerning Bernoulli numbers.

Bernoulli numbers appear in the expansion

${\frac{x}{e^x-1}=1-\frac12x+\frac{B_1}{2!}x^2-\frac{B_2}{4!}x^4+\frac{B_3}{6!}x^6-\cdots}$

It is convenient to write instead

${\frac{x}{e^x-1}=\beta_0+\frac{\beta_1}{1!}x+\frac{\beta_2}{2!}x^2+\frac{\beta_3}{3!}x^3+\cdots}$

where

${\beta_0=1,\quad \beta_1=-\frac12}$

and

${\beta_{2k}=(-1)^{k-1}B_k,\quad \beta_{2k+1}=0;(k\ge1)}$

These numbers are important because they occur in the Euler–Maclaurin summation formula for sums of powers. In particular,

${1^k+2^k+\cdots+(n-1)^k=\sum_{r=0}^{k}\frac1{k+1-r}\binom{k}{r}n^{k+1-r}\beta_r}$

Von Staudt’s theorem determines the fractional part of ${B_k}$:

For every ${k\ge1}$,

${(-1)^kB_k\equiv \sum \frac1p \pmod 1}$

where the sum runs over all primes ${p}$ such that

${(p-1)\mid 2k}$

# Examples of von Staudt’s Theorem

Take ${k=1}$. Then the condition

${(p-1)\mid 2}$

holds only for ${p=2}$ and ${p=3}$. Therefore,

${-B_1 \equiv \frac12+\frac13=\frac56 \pmod 1}$

so

${B_1=\frac16}$.

Rewriting the theorem in terms of ${\beta_k}$ gives

${\beta_k+\sum_{(p-1)\mid k}\frac1p = i}$

where ${i}$ is an integer and

${k=1,2,4,6,\dots}$

If we define

${\epsilon_k(p)=1 \text{ when } (p-1)\mid k,\quad \epsilon_k(p)=0 \text{ otherwise}}$

then we can write the same result as

${\beta_k+\sum \frac{\epsilon_k(p)}{p}=i}$

where the sum runs over all primes ${p}$.

An important consequence follows immediately: no Bernoulli number has a squared prime factor in its denominator.

---

# Proof Setup for von Staudt’s Theorem

The proof depends on the following lemma:

${\sum_{m=1}^{p-1} m^k \equiv -\epsilon_k(p)\pmod p}$

If

${(p-1)\mid k}$

then Fermat’s theorem gives

${m^k\equiv 1\pmod p}$

for every ${m}$ not divisible by ${p}$. Hence,

${\sum m^k = p-1 \equiv -1 \equiv -\epsilon_k(p)\pmod p}$

If

${(p-1)\nmid k}$

and ${g}$ is a primitive root modulo ${p}$, then

${g^k\not\equiv 1\pmod p}$

The numbers

${g,2g,\dots,(p-1)g}$

form the same residue classes modulo ${p}$ as

${1,2,\dots,p-1}$

So,

${\sum (mg)^k \equiv \sum m^k \pmod p}$

which gives

${(g^k-1)\sum m^k\equiv 0\pmod p}$

Since ${g^k-1\not\equiv 0\pmod p}$, it follows that

${\sum m^k\equiv 0\pmod p}$

Thus the lemma holds in every case.

---

# Completing the Proof by Induction

Now assume the theorem is already true for all smaller values in the sequence

${1,2,4,6,\dots}$

and prove it for ${k}$.

Using the power-sum identity together with the lemma above, for any prime ${\varpi}$ we obtain

${\epsilon_k(\varpi)+\sum_{r=0}^{k}\frac1{k+1-r}\binom{k}{r}\varpi^{k+1-r}\beta_r \equiv 0\pmod \varpi}$

Rearranging gives

${\beta_k+\frac{\epsilon_k(\varpi)}{\varpi}+\sum_{r=0}^{k-2}u_{k,r}\equiv 0\pmod 1}$

where the omitted terms involve earlier ${\beta_r}$ values.

The key step is to show that none of those remaining denominators is divisible by ${\varpi}$. Therefore the only possible denominator involving ${\varpi}$ comes from

${\beta_k+\frac{\epsilon_k(\varpi)}{\varpi}}$

So we may write

${\beta_k+\frac{\epsilon_k(\varpi)}{\varpi}=\frac{a_k}{b_k}}$

with ${\varpi\nmid b_k}$.

Doing this for every prime ${\varpi}$ gives

${\beta_k+\sum \frac{\epsilon_k(p)}{p}=\frac{A_k}{B_k}}$

where no prime divides ${B_k}$. Hence

${B_k=1}$

and the right side is an integer. This proves von Staudt’s theorem.

---

# A Special Case

Suppose ${k}$ is a prime of the form

${3n+1}$

Then

${(p-1)\mid 2k}$

only for

${p=2,;3,;k+1,;2k+1}$

Since ${k+1}$ is even, only ${3}$ and ${2k+1}$ can be prime. Therefore,

${B_k\equiv \frac16 \pmod 1}$

The same argument can be extended further.

For a fixed ${k}$, there exist infinitely many values of ${l}$ such that the Bernoulli numbers ${B_l}$ and ${B_k}$ have the same fractional part.

Establishing this result requires Dirichlet’s theorem on primes in arithmetic progressions, including the special case where the common difference is ${1}$.

