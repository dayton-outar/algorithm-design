# Partitions

## Additive Arithmetic

Partition theory studies the ways to write an integer as a sum of allowed parts. Unlike multiplicative number theory, the natural generating functions are power series.

The partition function ${p(n)}$ counts decompositions of ${n}$ into positive parts, ignoring order.

## Generating Function for ${p(n)}$

Each possible part ${k}$ may occur ${0,1,2,\dots}$ times, so

${\sum_{n=0}^{\infty}p(n)x^n=\prod_{k=1}^{\infty}\frac1{1-x^k}}$

This product is the central object of partition theory.

## Euler's Theorems

Euler's product identities show that the number of partitions into distinct parts equals the number of partitions into odd parts. In generating-function form,

${\prod_{k=1}^{\infty}(1+x^k)=\prod_{k=1}^{\infty}\frac1{1-x^{2k-1}}}$

The algebraic identity directly proves the combinatorial equality.

## Pentagonal Number Identity

Euler's pentagonal number theorem gives an expansion for

${\prod_{k=1}^{\infty}(1-x^k)}$

with exponents

${\frac{m(3m-1)}2}$

This identity leads to a recurrence for ${p(n)}$.

## Jacobi Identities

Jacobi's triple product and its special cases provide deeper product-sum transformations. These identities connect partitions, theta functions, and representations by squares.

## Congruences

Ramanujan discovered striking congruences such as

${p(5n+4)\equiv0\pmod5}$

with analogous congruences modulo ${7}$ and ${11}$. These results reveal hidden modular structure in the partition function.

## Rogers-Ramanujan Identities

The Rogers-Ramanujan identities equate complicated partition-generating products with series whose exponents follow quadratic patterns. They show that highly constrained partitions can have unexpectedly simple generating functions.

Ramanujan's continued fraction arises naturally from the same family of identities.
