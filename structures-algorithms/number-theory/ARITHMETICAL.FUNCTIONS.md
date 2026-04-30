# Arithmetical Functions

## Euler's Function

Euler's function ${\phi(n)}$ counts the positive integers not exceeding ${n}$ that are coprime to ${n}$. If

${n=p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k}}$

then

${\phi(n)=n\prod_{p\mid n}\left(1-\frac1p\right)}$

The function is multiplicative: if ${(m,n)=1}$, then

${\phi(mn)=\phi(m)\phi(n)}$

## Mobius Function

The Mobius function ${\mu(n)}$ records squarefree structure:

${\mu(n)=1}$

if ${n=1}$,

${\mu(n)=(-1)^k}$

if ${n}$ is a product of ${k}$ distinct primes, and

${\mu(n)=0}$

if a square prime divides ${n}$.

## Mobius Inversion

If two functions satisfy

${F(n)=\sum_{d\mid n} f(d)}$

then Mobius inversion recovers ${f}$:

${f(n)=\sum_{d\mid n}\mu(d)F\left(\frac nd\right)}$

This is one of the central algebraic tools for divisor sums.

## Divisor Functions

The divisor-counting function ${d(n)}$ and divisor-sum function ${\sigma(n)}$ are defined by

${d(n)=\sum_{d\mid n}1,\quad \sigma(n)=\sum_{d\mid n}d}$

Both are multiplicative. Their values follow directly from the prime factorization of ${n}$.

## Perfect Numbers

A perfect number satisfies

${\sigma(n)=2n}$

Even perfect numbers are tied to Mersenne primes. If ${2^p-1}$ is prime, then

${2^{p-1}(2^p-1)}$

is perfect, and every even perfect number has this form.

## Sums of Two Squares

The function ${r(n)}$ counts representations of ${n}$ as a sum of two squares, with signs and order counted. Its formula depends on the divisors of ${n}$ modulo ${4}$:

${r(n)=4\left(d_1(n)-d_3(n)\right)}$

where ${d_1(n)}$ and ${d_3(n)}$ count divisors congruent to ${1}$ and ${3}$ modulo ${4}$.
