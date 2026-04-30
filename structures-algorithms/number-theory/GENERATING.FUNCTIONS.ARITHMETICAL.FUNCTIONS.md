# Generating Functions of Arithmetical Functions

## Dirichlet Series

Arithmetical functions often generate Dirichlet series:

${\sum_{n=1}^{\infty}\frac{a(n)}{n^s}}$

These series turn divisor sums into products and make multiplicative structure visible.

## Zeta Function

The Riemann zeta function is the basic example:

${\zeta(s)=\sum_{n=1}^{\infty}\frac1{n^s}}$

For ${s>1}$ it factors as an Euler product:

${\zeta(s)=\prod_p\left(1-\frac1{p^s}\right)^{-1}}$

This identity translates unique prime factorization into analysis.

## Multiplication of Dirichlet Series

If

${A(s)=\sum_{n=1}^{\infty}\frac{a(n)}{n^s}}$

and

${B(s)=\sum_{n=1}^{\infty}\frac{b(n)}{n^s}}$

then their product has coefficients given by Dirichlet convolution:

${(a*b)(n)=\sum_{d\mid n}a(d)b\left(\frac nd\right)}$

This operation explains why Mobius inversion belongs naturally to generating functions.

## Standard Examples

Several functions have compact Dirichlet series:

${\sum_{n=1}^{\infty}\frac{d(n)}{n^s}=\zeta(s)^2}$

${\sum_{n=1}^{\infty}\frac{\sigma(n)}{n^s}=\zeta(s)\zeta(s-1)}$

${\sum_{n=1}^{\infty}\frac{\mu(n)}{n^s}=\frac1{\zeta(s)}}$

These formulas package divisor identities into analytic form.

## Von Mangoldt Function

The von Mangoldt function ${\Lambda(n)}$ is defined by

${\Lambda(n)=\log p}$

when ${n=p^k}$, and ${\Lambda(n)=0}$ otherwise. It satisfies

${\log n=\sum_{d\mid n}\Lambda(d)}$

so it isolates prime-power information.

## Other Generating Functions

Power series also encode arithmetical functions, especially functions connected to partitions and representations by squares. The choice of generating function depends on the structure one wants to expose: divisibility favors Dirichlet series, while addition favors ordinary power series.
