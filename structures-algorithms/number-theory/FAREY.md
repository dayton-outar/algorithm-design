# Farey Series

## Definition and Basic Properties

We focus on positive rational numbers (fractions) like ${\frac{2}{3}}$ or ${\frac{7}{11}}$, viewed as ratios of positive integers. The results we prove reflect properties of integers themselves.

The Farey series ${\mathcal{F}_n}$ of order ${n}$ is the increasing sequence of all reduced fractions between 0 and 1 whose denominators do not exceed ${n}$. A fraction ${\frac{h}{k}}$ belongs to ${\mathcal{F}_n}$ if
${0 \le h \le k \le n,\ (h,k)=1}$.

We include 0 and 1 as ${\frac{0}{1}}$ and ${\frac{1}{1}}$.

## Successive Terms

If $\large{\frac{h}{k}}$ and $\large{\frac{h'}{k'}}$ are consecutive terms in ${\mathcal{F}_n}$, then
${k h' - h k' = 1}$.

If three consecutive terms are $\large{\frac{h}{k}}, \frac{h''}{k''}, \frac{h'}{k'}$, then
$\large{\frac{h''}{k''} = \frac{h + h'}{k + k'}}$.

This middle fraction is called the mediant.

Also, for consecutive terms,
${k + k' > n}$.

The mediant $\large{\frac{h + h'}{k + k'}}$ lies strictly between $\large{\frac{h}{k}}$ and $\large{\frac{h'}{k'}}$.

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
$\large{\frac{H}{K} = \frac{\mu h + \lambda h'}{\mu k + \lambda k'}}$,
where ${\lambda, \mu > 0}$ and ${(\lambda, \mu)=1}$.

These fractions lie between ${\frac{h}{k}}$ and ${\frac{h'}{k'}}$ and are in lowest terms.

The first such fraction to appear in ${\mathcal{F}_n}$ is obtained when ${\lambda = \mu = 1}$, giving
$\large{\frac{h''}{k''} = \frac{h + h'}{k + k'}}$.

## Second Construction Method

To find the successor of ${\frac{h}{k}}$, solve
${k x - h y = 1}$

for integers ${x, y}$ such that
${0 \le y \le n}$.

The fraction ${\frac{x}{y}}$ is then the next term after ${\frac{h}{k}}$.

## Lattices

A lattice is a grid of points formed by linear combinations of two independent vectors. Any lattice point can be written as
$\large{x = m x_1 + n x_2,\quad y = m y_1 + n y_2}$
with integers ${m, n}$.

A linear transformation
$\large{x' = ax + by,\quad y' = cx + dy}$
maps lattice points to lattice points if and only if
$\large{ad - bc = \pm 1}$.

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
${\frac{1}{k(2n-1)}} \quad \text{and} \quad \frac{1}{k(n+1)}$.

## Approximation of Real Numbers

For any real number ${\xi}$ and positive integer ${n}$, there exists a reduced fraction ${\frac{h}{k}}$ with
${0 < k \le n}$ such that
${\left|\xi - \frac{h}{k}\right| \le \frac{1}{k(n+1)}}$.


## Observations

Short answer: **Farey sequences are about understanding how rational numbers are arranged and approximated**. That turns out to be very practical in programming when you need **precise fractions, ordering, or approximations without floating-point errors**.

### What a Farey sequence is (intuitively)

A Farey sequence of order *n* is:

> **All fractions between 0 and 1 with denominators ≤ n, in sorted order, reduced.**

Example for n = 5:

0/1, 1/5, 1/4, 1/3, 2/5, 1/2, 3/5, 2/3, 3/4, 4/5, 1/1

The key property:

* If `a/b` and `c/d` are neighbors, then
  **bc − ad = 1**

That’s not just a curiosity—it’s what makes them powerful.

### Why it exists

Hardy isn’t doing this for fun. Farey sequences give you:

1. **Best rational approximations**

   * They systematically list the “simplest” fractions first.
   * If you need to approximate a real number with a small denominator, this is gold.

2. **Structure of rational numbers**

   * They reveal how fractions “fit together” tightly.
   * Neighbor fractions are as close as possible given their denominators.

3. **Connection to deeper math**

   * Continued fractions
   * Diophantine approximation
   * Number theory proofs

### Where this helps you in programming

This is where it becomes practical.

#### 1. Avoid floating point errors

Instead of using floats, you can:

* Represent values as fractions `(num, den)`
* Use Farey logic to **compare and simplify precisely**

Example use:

* Financial systems (interest rates, ratios)
* Exact calculations (no rounding surprises)

#### 2. Best fraction approximation

Say you have a float like `0.333333` and want a clean fraction with small denominator.

Farey sequences let you find:

* 1/3 instead of messy decimals

This is used in:

* Graphics (aspect ratios)
* Audio timing
* Rational approximations of constants

#### 3. Efficient fraction search (no sorting needed)

You can generate the next fraction **without recomputing everything**.

There’s a known algorithm:

```cpp
// Generate Farey sequence up to order n
int a = 0, b = 1, c = 1, d = n;

while (c <= n) {
    printf("%d/%d\n", a, b);
    int k = (n + b) / d;
    int e = k*c - a;
    int f = k*d - b;
    a = c; b = d;
    c = e; d = f;
}
```

This is:

* O(n²) total terms
* But **O(1) per step**
* No sorting, no GCD each time

That’s algorithmic elegance Hardy wants you to notice.

#### 4. Geometry / Graphics / Grids

Used in:

* Finding **visible lattice points**
* Generating slopes without duplicates
* Ray casting / line-of-sight problems

#### 5. Competitive programming / algorithm design

Shows up in:

* Fraction comparison tricks
* Stern–Brocot tree (even more useful version)
* Rational interval searches

### The real takeaway

Farey sequences train you to think like this:

> “How do I work with numbers *exactly*, efficiently, and in order—without brute force or floating point?”

That mindset is what translates to strong programming.
