# Approximation of Irrationals by Rationals

## The Problem

Rational numbers lie arbitrarily close to every real number, so existence is not the issue. The useful question is how efficiently a rational fraction approximates an irrational number.

For an irrational ${\xi}$ and a reduced rational ${p/q}$, the quality of approximation depends on the size of

${\left|\xi-\frac{p}{q}\right|}$

relative to the denominator ${q}$. A smaller error with a smaller denominator gives a better approximation.

## Dirichlet Approximation

Dirichlet's argument uses the pigeonhole principle. Divide the unit interval into equal parts and compare the fractional parts of

${0,\xi,2\xi,\dots,n\xi}$

Two of these fractional parts must lie close together. Their difference gives integers ${p}$ and ${q}$ such that

${\left|q\xi-p\right|<\frac{1}{n}}$

with ${0<q\le n}$. Therefore infinitely many rationals satisfy

${\left|\xi-\frac{p}{q}\right|<\frac{1}{q^2}}$

This result gives a universal baseline for irrational approximation.

## Orders of Approximation

An irrational number is approximable to order ${\mu}$ when infinitely many fractions ${p/q}$ satisfy

${\left|\xi-\frac{p}{q}\right|<\frac{1}{q^\mu}}$

Every irrational number reaches order ${2}$ by Dirichlet's theorem. Some numbers reach better orders, but algebraic irrational numbers face strict limits.

## Algebraic and Transcendental Numbers

An algebraic number satisfies a non-zero polynomial equation with integer coefficients. A transcendental number satisfies no such equation.

Liouville's theorem shows that if ${\alpha}$ is algebraic of degree ${n}$, then rational approximations cannot be too good. There is a constant ${C>0}$ such that

${\left|\alpha-\frac{p}{q}\right|>\frac{C}{q^n}}$

for all reduced ${p/q}$. This separates many deliberately constructed numbers from the algebraic numbers.

## Liouville-Type Construction

Numbers with extremely sparse decimal expansions can be made too well approximable to be algebraic. A typical example is built from rapidly growing powers:

${\sum_{k=1}^{\infty}10^{-k!}}$

Truncating this series gives rationals with denominators that grow quickly, while the omitted tail is much smaller than any fixed algebraic bound. This proves the number is transcendental.

## Continued Fractions

Continued fractions identify especially strong rational approximations. Their convergents ${p_n/q_n}$ satisfy sharp inequalities, and no unrelated fraction with a comparable denominator usually improves them.

If the partial quotients of the continued fraction are bounded, the irrational cannot be approximated too closely. If the partial quotients grow very large, unusually close approximations appear.

## Simultaneous Approximation

The same pigeonhole idea approximates several real numbers at once. Given real numbers ${\xi_1,\xi_2,\dots,\xi_k}$, one seeks a common denominator ${q}$ such that all distances

${\left|q\xi_i-p_i\right|}$

are small. The denominator now serves several approximation problems simultaneously, so the exponent weakens as the number of targets grows.

## Transcendence of ${e}$ and ${\pi}$

The chapter closes by applying approximation and auxiliary polynomial ideas to two central constants. The proofs show that ${e}$ is transcendental, then use a related argument to show that ${\pi}$ is transcendental.

The transcendence of ${\pi}$ also proves that the classical problem of squaring the circle has no solution by straightedge and compass.
