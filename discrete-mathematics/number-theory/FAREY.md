# Farey Series

## Definition and Basic Properties

We focus on positive rational numbers (fractions) like ${\frac{2}{3}}$ or ${\frac{7}{11}}$, viewed as ratios of positive integers. The results we prove reflect properties of integers themselves.

The Farey series ${\mathcal{F}_n}$ of order ${n}$ is the increasing sequence of all reduced fractions between 0 and 1 whose denominators do not exceed ${n}$. A fraction ${\frac{h}{k}}$ belongs to ${\mathcal{F}_n}$ if
${0 \le h \le k \le n,\ (h,k)=1}$.

We include 0 and 1 as ${\frac{0}{1}}$ and ${\frac{1}{1}}$.

## Successive Terms

If ${\frac{h}{k}}$ and ${\frac{h'}{k'}}$ are consecutive terms in ${\mathcal{F}_n}$, then
${k h' - h k' = 1}$.

If three consecutive terms are ${\frac{h}{k}}, \frac{h''}{k''}, \frac{h'}{k'}}$, then
${\frac{h''}{k''} = \frac{h + h'}{k + k'}}$.

This middle fraction is called the mediant.

Also, for consecutive terms,
${k + k' > n}$.

The mediant ${\frac{h + h'}{k + k'}}$ lies strictly between ${\frac{h}{k}}$ and ${\frac{h'}{k'}}$.

If ${k + k' \le n}$, another fraction would lie between them, contradicting consecutiveness.

## No Equal Denominators

If ${n > 1}$, no two consecutive terms in ${\mathcal{F}_n}$ share the same denominator.

## Equivalence of Properties

The two key properties are equivalent:

* ${k h' - h k' = 1}$
* ${\frac{h''}{k''} = \frac{h + h'}{k + k'}}$

Each can be derived from the other.

## Constructing Intermediate Fractions

Consider fractions of the form
${\frac{H}{K} = \frac{\mu h + \lambda h'}{\mu k + \lambda k'}}$,
where ${\lambda, \mu > 0}$ and ${(\lambda, \mu)=1}$.

These fractions lie between ${\frac{h}{k}}$ and ${\frac{h'}{k'}}$ and are in lowest terms.

The first such fraction to appear in ${\mathcal{F}_n}$ is obtained when ${\lambda = \mu = 1}$, giving
${\frac{h''}{k''} = \frac{h + h'}{k + k'}}$.

## Second Construction Method

To find the successor of ${\frac{h}{k}}$, solve
${k x - h y = 1}$

for integers ${x, y}$ such that
${0 \le y \le n}$.

The fraction ${\frac{x}{y}}$ is then the next term after ${\frac{h}{k}}$.

## Lattices

A lattice is a grid of points formed by linear combinations of two independent vectors. Any lattice point can be written as
${x = m x_1 + n x_2,\quad y = m y_1 + n y_2}$
with integers ${m, n}$.

A linear transformation
${x' = ax + by,\quad y' = cx + dy}$
maps lattice points to lattice points if and only if
${ad - bc = \pm 1}$.

Such transformations are called unimodular.

## Visible Points

A lattice point ${(x,y)}$ is visible from the origin if no other lattice point lies between it and the origin. This happens exactly when
${(x,y)=1}$.

## Geometric Interpretation of Farey Series

Each fraction ${\frac{h}{k}}$ corresponds to a visible lattice point ${ (k,h) }$.

Rotating a ray from the origin sweeps through these points in order, producing the Farey sequence. Consecutive fractions correspond to adjacent visible lattice points with no others between them.

## Farey Dissection

Represent points on a circle using arc length from a fixed point. Each fraction ${\frac{h}{k}}$ corresponds to a point on the circle.

Between consecutive fractions ${\frac{h}{k}}$ and ${\frac{h'}{k'}}$, the mediant
${\frac{h + h'}{k + k'}}$
splits the arc.

This process divides the circle into Farey arcs.

Each arc associated with ${\frac{h}{k}}$ has length between
${\frac{1}{k(2n-1)}} \quad \text{and} \quad \frac{1}{k(n+1)}}$.

## Approximation of Real Numbers

For any real number ${\xi}$ and positive integer ${n}$, there exists a reduced fraction ${\frac{h}{k}}$ with
${0 < k \le n}$ such that
${\left|\xi - \frac{h}{k}\right| \le \frac{1}{k(n+1)}}$.
