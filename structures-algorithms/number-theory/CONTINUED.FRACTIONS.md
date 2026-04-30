## Continued Fractions

### Finite Continued Fractions

We define a finite continued fraction by

${a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + \cdots + \frac{1}{a_n}}}}$

where the numbers ${a_0, a_1, a_2, \dots, a_n}$ are given values. We often write this more compactly as

${[a_0, a_1, a_2, \dots, a_n]}$

The numbers ${a_0, a_1, \dots, a_n}$ are called the **partial quotients**. 

### Basic Identities

From the definition:

${[a_0] = a_0}$

${[a_0, a_1] = a_0 + \frac{1}{a_1}}$

and for longer expressions,

${[a_0, a_1, \dots, a_n] = [a_0, a_1, \dots, a_{n-1} + \frac{1}{a_n}]}$

We can also split a continued fraction at any point:

${[a_0, a_1, \dots, a_n] = [a_0, a_1, \dots, a_{m-1}, [a_m, a_{m+1}, \dots, a_n]]}$

for any valid ${m}$. 

### Convergents

The value

${[a_0, a_1, \dots, a_n]}$

is called the ${n}$th **convergent**.

Write it as

${\frac{p_n}{q_n}}$

where the numerators and denominators satisfy:

${p_0 = a_0,\quad p_1 = a_1 a_0 + 1}$

${p_n = a_n p_{n-1} + p_{n-2}}$

and

${q_0 = 1,\quad q_1 = a_1}$

${q_n = a_n q_{n-1} + q_{n-2}}$

Then

${[a_0, a_1, \dots, a_n] = \frac{p_n}{q_n}}$ 

### Important Relations

These sequences satisfy:

${p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}}$

and

${p_n q_{n-2} - p_{n-2} q_n = (-1)^n a_n}$

These formulas are fundamental when studying approximations. 

### Positive Partial Quotients

From now on, assume

${a_1 > 0,\ a_2 > 0,\ \dots,\ a_n > 0}$

Usually the ${a_i}$ are integers. In that case, we call the expression a **simple continued fraction**. 

### Behavior of Convergents

The even-numbered convergents increase steadily:

${x_2 < x_4 < x_6 < \cdots}$

The odd-numbered convergents decrease steadily:

${x_1 > x_3 > x_5 > \cdots}$

Every odd convergent is greater than every even convergent.

So the true value lies between neighboring convergents, and each new convergent improves the approximation. 

### Rational Numbers and Representation

If all partial quotients are integers and positive after the first term, then the continued fraction represents a rational number.

Conversely, every positive rational number can be written as a simple continued fraction.

### Growth of Denominators

For a simple continued fraction, the denominators of the convergents grow steadily:

${q_n \ge q_{n-1}}$

and for ${n > 1}$,

${q_n > q_{n-1}}$

Since

${q_n = a_n q_{n-1} + q_{n-2}}$

each new denominator is larger than the previous one. In particular,

${q_n \ge n}$

for sufficiently large ${n}$. 

### Lowest Terms

Each convergent

${\frac{p_n}{q_n}}$

is already reduced to lowest terms. That means

${\gcd(p_n,q_n)=1}$

This follows from the determinant identity:

${p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}}$ 

### Two Forms for Rational Numbers

Every positive rational number has a simple continued fraction expansion. It can always be written in exactly two finite ways:

* one with an even number of convergents,
* one with an odd number of convergents.

These two forms differ only at the end.

For example:

${[2,2,3] = [2,2,2,1]}$

So if the last partial quotient is greater than ${1}$, we may replace it by reducing it by ${1}$ and appending ${1}$. 

### Complete Quotients

Define the tail of the continued fraction by

${a_n' = [a_n, a_{n+1}, a_{n+2}, \dots]}$

This is called the ${n}$th **complete quotient**.

Then:

${x = a_0'}$

and

${x = \frac{a_n' p_{n-1} + p_{n-2}}{a_n' q_{n-1} + q_{n-2}}}$

for valid values of ${n}$. This links the full continued fraction to its convergents. 

### Integer Parts of Complete Quotients

Each partial quotient equals the integer part of the corresponding complete quotient:

${a_n = \lfloor a_n' \rfloor}$

Also,

${a_n < a_n' < a_n + 1}$

except for the final term in a finite expansion, where equality may occur. 

### Uniqueness

If two simple continued fractions represent the same number, then their partial quotients must match term by term.

So, except for the two alternative finite endings already described for rationals, the representation is unique. 

### Continued Fraction Algorithm

Let

${x = a_0 + \xi_0}$

where

${a_0 = \lfloor x \rfloor,\quad 0 \le \xi_0 < 1}$

If ${\xi_0 \ne 0}$, define:

${\frac{1}{\xi_0} = a_1 + \xi_1,\quad 0 \le \xi_1 < 1}$

Then continue:

${\frac{1}{\xi_1} = a_2 + \xi_2}$

and so on.

This process generates:

${x = [a_0,a_1,a_2,\dots]}$

This method is the standard way to compute a continued fraction expansion. 

### Rational Numbers Terminate

If ${x}$ is rational, the algorithm eventually reaches a remainder of zero, so the continued fraction ends after finitely many steps. Therefore every rational number has a finite simple continued fraction expansion. 

### Error in Approximations

Let

${x = [a_0,a_1,a_2,\dots]}$

and let

${\frac{p_n}{q_n}}$

be the ${n}$th convergent. Then the error after the ${n}$th approximation is

${x - \frac{p_n}{q_n} = \frac{(-1)^n}{q_n(a_{n+1}'q_n + q_{n-1})}}$

where ${a_{n+1}'}$ is the next complete quotient. This shows the error alternates in sign and becomes smaller as ${n}$ increases. 

### Bounds on the Error

The approximation error satisfies

${\left|x - \frac{p_n}{q_n}\right| < \frac{1}{q_n q_{n+1}} < \frac{1}{q_n^2}}$

So larger denominators produce better approximations. 

### Numerator Error Form

Multiplying by ${q_n}$ gives

${q_n x - p_n = \frac{(-1)^n \delta_n}{q_{n+1}}}$

where

${0 < \delta_n < 1}$

for intermediate terms. Hence both

${x - \frac{p_n}{q_n}}$

and

${q_n x - p_n}$

shrink steadily in absolute value. 

### Infinite Simple Continued Fractions

Now consider an infinite sequence

${a_0,a_1,a_2,\dots}$

with

${a_1,a_2,\dots > 0}$

and form

${[a_0,a_1,a_2,\dots]}$

Its finite truncations are

${x_n = [a_0,a_1,\dots,a_n]}$

These convergents approach a limit as ${n \to \infty}$. Therefore every infinite simple continued fraction converges to a real number. 

### Odd and Even Convergents

The even convergents increase steadily, while the odd convergents decrease steadily.

Also:

* every odd convergent is greater than every even convergent,
* both subsequences approach the same limit.

So the true value always lies between neighboring convergents. 

### Relative Position of the Limit

For an infinite simple continued fraction:

* the value is less than every odd convergent,
* the value is greater than every even convergent.

This gives a clean alternating bracket around the true number. 

### Irrational Numbers

Every irrational number produces an infinite continued fraction. The algorithm never terminates, because termination would mean the number is rational.

So irrational numbers correspond naturally to infinite simple continued fractions. 

### Recovering Partial Quotients

For an irrational number

${x = [a_0,a_1,a_2,\dots]}$

the partial quotients come directly from repeated integer parts:

${a_0 = \lfloor x \rfloor}$

Then subtract and invert repeatedly:

${a_1 = \left\lfloor \frac{1}{x-a_0} \right\rfloor}$

and continue in the same way. 

### Uniqueness for Irrationals

If two infinite simple continued fractions have the same value, then all their partial quotients are identical.

So every irrational number has one unique infinite simple continued fraction expansion. 

### Consecutive Convergents

Suppose two fractions

${\frac{R}{S}} \quad \text{and} \quad \frac{P}{Q}$

are consecutive convergents of the same continued fraction, with

${\frac{R}{S}}$

coming first and

${\frac{P}{Q}}$

coming next.

Then they satisfy:

${PS - QR = \pm 1}$

This determinant condition is a hallmark of neighboring convergents. It also means the two fractions are already in lowest terms. 

### Intermediate Fractions

If

${\frac{R}{S}}$

and

${\frac{P}{Q}}$

are consecutive convergents, then any fraction between them can be written in the form

${\frac{P\zeta + R}{Q\zeta + S}}$

for some positive number ${\zeta}$.

This describes all values lying between two neighboring convergents. 

### Equivalent Numbers

Two real numbers ${\xi}$ and ${\eta}$ are called **equivalent** if

${\eta = \frac{a\xi + b}{c\xi + d}}$

where ${a,b,c,d}$ are integers and

${ad - bc = \pm 1}$

This transformation preserves deep continued-fraction structure. 

### Properties of Equivalence

Equivalence behaves like a true relation:

* If ${\xi}$ is equivalent to ${\eta}$, then ${\eta}$ is equivalent to ${\xi}$.
* If ${\xi}$ is equivalent to ${\eta}$ and ${\eta}$ to ${\tau}$, then ${\xi}$ is equivalent to ${\tau}$.

So numbers fall into equivalence classes under these transformations. 

### Rational Numbers Are All Equivalent

Any rational number can be transformed into any other rational number using such a relation. Therefore all rational numbers belong to one equivalence class. 

### Irrational Numbers and Shared Tails

Two irrational numbers are equivalent **if and only if** their continued fractions eventually share the same tail.

That means:

${\xi = [a_0,a_1,\dots,a_n,c_0,c_1,c_2,\dots]}$

${\eta = [b_0,b_1,\dots,b_m,c_0,c_1,c_2,\dots]}$

After some point, both expansions continue with the identical infinite sequence

${c_0,c_1,c_2,\dots}$

This is one of the most important structural results in continued fractions. 

### Periodic Continued Fractions

A continued fraction is **periodic** if its partial quotients repeat after some stage.

So for some fixed period length ${k}$,

${a_n = a_{n+k}}$

for all sufficiently large ${n}$. 

### Quadratic Irrationals Produce Periodic Expansions

If a number is an irrational root of a quadratic equation with integer coefficients, then its continued fraction is periodic.

So numbers like:

${\sqrt{2},\ \sqrt{3},\ \sqrt{5}}$

have repeating continued fraction patterns. 

### Converse Result

If a continued fraction is periodic, then its value is a quadratic irrational.

So periodic continued fractions and quadratic irrationals exactly match each other. 

### Purely Periodic Continued Fractions

A continued fraction is **purely periodic** when repetition starts immediately:

${x = [\overline{a_0,a_1,\dots,a_{k-1}}]}$

This means the block

${a_0,a_1,\dots,a_{k-1}}$

repeats forever. 

### Reduced Quadratic Irrationals

A quadratic irrational is **reduced** when:

${x > 1}$

and its conjugate ${x'}$ satisfies

${-1 < x' < 0}$

These numbers are exactly the values with purely periodic continued fractions. 

### Connection Between Reduction and Periodicity

If a quadratic irrational is reduced, then its continued fraction expansion is purely periodic.

Conversely, if a continued fraction is purely periodic, its value is a reduced quadratic irrational.

So the two ideas are equivalent. 

### Complete Quotients Cycle

For quadratic irrationals, the complete quotients

${x_0, x_1, x_2, \dots}$

can take only finitely many possible forms. Therefore one of them must repeat.

Once one repeats, the later sequence repeats forever, producing a periodic continued fraction. 

### Symmetry in a Period

Periodic continued fractions often show mirror-like structure inside one full period, especially for square roots.

For many values such as ${\sqrt{N}}$, the partial quotients rise and fall symmetrically around a central term. 

### Continued Fraction of Square Roots

For a nonsquare positive integer ${N}$,

${\sqrt{N}}$

has the form

${[a_0,\overline{a_1,a_2,\dots,a_{r-1},2a_0}]}$

So the repeating block ends with ${2a_0}$. This is a classic theorem for square roots. 

### Example: ${\sqrt{2}}$

${\sqrt{2} = [1,\overline{2}]}$

So:

${\sqrt{2} = [1,2,2,2,\dots]}$

Its convergents are:

${1,\ \frac{3}{2},\ \frac{7}{5},\ \frac{17}{12},\dots}$

These rapidly approximate ${\sqrt{2}}$. 

### Example: ${\sqrt{3}}$

${\sqrt{3} = [1,\overline{1,2}]}$

So:

${\sqrt{3} = [1,1,2,1,2,\dots]}$ 

### Example: ${\sqrt{5}}$

${\sqrt{5} = [2,\overline{4}]}$

So:

${\sqrt{5} = [2,4,4,4,\dots]}$ 

### Best Rational Approximations

Continued-fraction convergents give exceptionally strong rational approximations to a real number ${x}$.

If

${\frac{p_n}{q_n}}$

is a convergent, then no fraction

${\frac{a}{b}}$

with

${0 < b \le q_n}$

approximates ${x}$ better. In that sense, convergents are optimal among fractions with small denominators. 

### Precise Approximation Bound

Every convergent satisfies

${\left|x - \frac{p_n}{q_n}\right| < \frac{1}{q_n^2}}$

This explains why continued fractions are powerful for numerical approximation. A modest denominator can give surprisingly high accuracy. 

### Converse Principle

If a reduced fraction

${\frac{a}{b}}$

satisfies

${\left|x - \frac{a}{b}\right| < \frac{1}{2b^2}}$

then

${\frac{a}{b}}$

must be a convergent of the continued fraction for ${x}$.

So unusually accurate rational approximations usually come from convergents. 

### Hurwitz-Type Result

For every irrational number ${x}$, infinitely many rational fractions

${\frac{p}{q}}$

satisfy

${\left|x - \frac{p}{q}\right| < \frac{1}{\sqrt{5},q^2}}$

This gives a universal guarantee that strong approximations always exist. 

### The Golden Ratio as the Hardest Case

The constant

${\phi = \frac{1+\sqrt{5}}{2}}$

has continued fraction

${[1,1,1,1,\dots]}$

Its convergents are ratios of consecutive Fibonacci numbers.

Because all partial quotients are ${1}$, it is among the hardest irrational numbers to approximate well with rationals. 

### Fibonacci Connection

For

${\phi = [1,1,1,\dots]}$

the numerators and denominators follow:

${1,1,2,3,5,8,13,\dots}$

These are Fibonacci numbers. Therefore:

${\frac{F_{n+1}}{F_n}} \to \phi$

as ${n \to \infty}$. 

### Large Partial Quotients Mean Better Jumps

When a continued fraction contains a large partial quotient ${a_{n+1}}$, the convergent

${\frac{p_n}{q_n}}$

is especially accurate.

Large terms create sudden jumps in approximation quality. 

### Practical Meaning

To approximate a real number efficiently:

1. Compute its continued fraction.
2. Use successive convergents.
3. Stop when the denominator becomes large enough for your application.

This often beats decimal truncation when denominator size matters. 

### Example

For ${\pi}$:

${\pi = [3,7,15,1,292,\dots]}$

This gives famous approximations:

${\frac{22}{7},\quad \frac{333}{106},\quad \frac{355}{113}}$

The large term ${292}$ explains why ${355/113}$ is extremely accurate.

### Linear Fractional Transformations

A continued fraction can be built step by step using transformations of the form

${x \mapsto a + \frac{1}{x}}$

Repeatedly applying these maps generates each successive convergent. This viewpoint links continued fractions with matrix methods and number theory. 

### Matrix Representation

Each partial quotient ${a_n}$ corresponds to the matrix

${\begin{pmatrix} a_n & 1 \ 1 & 0 \end{pmatrix}}$

Multiplying these matrices in order produces

${\begin{pmatrix} p_n & p_{n-1} \ q_n & q_{n-1} \end{pmatrix}}$

where

${\frac{p_n}{q_n}}$

is the ${n}$th convergent. 

### Determinant Identity Revisited

Since each factor has determinant ${-1}$, the product gives

${p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}}$

This explains why neighboring convergents are always coprime and closely related. 

### Solving Pell-Type Equations

Continued fractions of square roots help solve equations like

${x^2 - Ny^2 = 1}$

where ${N}$ is a nonsquare positive integer.

Suitable convergents of ${\sqrt{N}}$ often provide integer solutions. 

### Example: ${x^2 - 2y^2 = 1}$

Using convergents of

${\sqrt{2} = [1,\overline{2}]}$

we get:

${\frac{1}{1},\ \frac{3}{2},\ \frac{7}{5},\ \frac{17}{12},\dots}$

Then:

* ${3^2 - 2(2^2) = 1}$
* ${17^2 - 2(12^2) = 1}$

So continued fractions generate infinitely many solutions. 

### Period Length Matters

For

${\sqrt{N}}$

the length of the repeating period helps determine which convergent gives the fundamental solution to Pell’s equation.

Odd and even period lengths lead to different cases. 

### Fast Growth of Solutions

Once one nontrivial solution exists, later solutions can grow very quickly.

That is why Pell equations can have surprisingly large smallest solutions even for modest values of ${N}$. 

### Why Continued Fractions Matter

They connect:

* approximation of irrational numbers,
* quadratic irrationals,
* Fibonacci ratios,
* Diophantine equations,
* matrix algebra.

Few elementary tools reach so many areas of mathematics. 

### Practical Summary

If you see:

* repeating continued fraction → quadratic irrational
* large partial quotient → excellent approximation
* convergent of ${\sqrt{N}}$ → possible Pell solution

These are standard signals in number theory.

### Decimal Expansions vs Continued Fractions

Decimal expansions measure accuracy using powers of ${10}$. Continued fractions instead adapt to the number itself and often produce far better rational approximations with much smaller denominators.

For many arithmetic problems, continued fractions are more natural than decimals. 

### Why Convergents Are Special

Each convergent balances two competing goals:

* small denominator,
* high accuracy.

That balance makes convergents the preferred rational approximations in many applications. 

### When Expansions End

* A **finite** simple continued fraction represents a rational number.
* An **infinite periodic** continued fraction represents a quadratic irrational.
* A **non-periodic infinite** continued fraction represents a more general irrational number.

This gives a clean classification of real numbers through continued fractions. 

### Core Workflow

To analyze a real number ${x}$:

1. Extract integer parts repeatedly.
2. Build the continued fraction.
3. Compute convergents.
4. Use convergents for approximation or number-theoretic structure.

This is the standard operating method. 

### Key Results to Remember

* Consecutive convergents satisfy

${p_n q_{n-1} - p_{n-1} q_n = (-1)^{n-1}}$

* Error bound:

${\left|x-\frac{p_n}{q_n}\right| < \frac{1}{q_n^2}}$

* Quadratic irrationals have periodic continued fractions.

* Every irrational number has a unique infinite simple continued fraction expansion. 

### Lasting Importance

Continued fractions remain important in:

* computational mathematics,
* cryptography,
* Diophantine approximation,
* symbolic algebra,
* numerical methods.

They are classical tools that still matter today. 

### Final Perspective

A continued fraction turns a number into a sequence of integer decisions. That sequence reveals how well the number can be approximated, whether it hides algebraic structure, and how it behaves arithmetically.

That is why continued fractions hold a central place in number theory.