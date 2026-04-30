# Elliptic Curves

## Congruent Numbers

A congruent number is a positive rational number that occurs as the area of a right triangle with rational side lengths. If the sides are ${a}$, ${b}$, and ${c}$, then

${a^2+b^2=c^2,\quad \frac{ab}{2}=n}$

This problem leads naturally to elliptic curves.

## Addition Law

An elliptic curve can be written in Weierstrass form

${y^2=x^3+ax+b}$

with non-zero discriminant. The rational points on the curve form an abelian group.

The group law is geometric: draw the line through two points, take its third intersection with the curve, and reflect across the ${x}$-axis.

## Other Models

Different cubic equations may define the same elliptic curve after a rational change of variables. Homogeneous equations in projective coordinates include a point at infinity, which serves as the identity element for the group law.

## Points of Finite Order

A point has finite order if repeated addition eventually gives the identity. Torsion points are highly constrained over ${\mathbb Q}$, and their structure gives useful information about the curve.

## Rational Points

The rational points ${E(\mathbb Q)}$ form a finitely generated abelian group:

${E(\mathbb Q)\cong E(\mathbb Q)_{\text{tors}}\oplus\mathbb Z^r}$

The integer ${r}$ is the rank. Positive rank means the curve has infinitely many rational points.

## Points Modulo Primes

Reducing an elliptic curve modulo a prime ${p}$ gives a finite group ${E(\mathbb F_p)}$ for primes of good reduction. Counting its points defines local data that feed into the curve's global arithmetic.

## Integer Points

Elliptic curves usually have only finitely many integer points. This finiteness contrasts with the possibility of infinitely many rational points.

## L-Series and Fermat

The local point counts assemble into an ${L}$-series. Deep links between elliptic curves and modular forms connect these series to major Diophantine problems.

The modern proof of Fermat's last theorem passes through this bridge: a hypothetical Fermat solution would produce an elliptic curve with impossible modular behavior.
