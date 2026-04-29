# The Representation of Numbers by Decimals

## Decimal Form of a Positive Number

Every positive real number can be written in decimal form.

Write

${\xi=[x]+x}$

where ${[x]}$ is the integer part of ${\xi}$ and ${0\le x<1}$ is the fractional part.

Now express the integer part ${X=[x]}$ in powers of ${10}$. There exist digits

${A_1,A_2,\dots,A_s}$

with each ${A_i}$ one of ${0,1,\dots,9}$, and ${A_1\ne 0}$, such that

${X=A_1 10^s + A_2 10^{s-1}+\cdots +A_s10 + A_{s+1}}$

We abbreviate this as

${X=A_1A_2\dots A_sA_{s+1}}$

This is the usual decimal notation for the integer part.

---

## Decimal Form of the Fractional Part

Now write the fractional part as

${x=.a_1a_2a_3\dots}$

where each digit ${a_n}$ belongs to

${0,1,2,\dots,9}$

Construct the digits step by step:

* Let ${a_1=[10x]}$
* Then ${10x=a_1+f_2}$ where ${0\le f_2<1}$

Next,

* Let ${a_2=[10f_2]}$
* Then ${10f_2=a_2+f_3}$

Continue in the same way.

This gives

${x=\frac{a_1}{10}+\frac{a_2}{10^2}+\frac{a_3}{10^3}+\cdots}$

So we write simply

${x=.a_1a_2a_3\dots}$

and therefore

${\xi=A_1A_2\dots A_sA_{s+1}.a_1a_2a_3\dots}$

Every positive real number has a decimal expansion.

---

## Terminating Decimals

If the process eventually gives remainder ${0}$, then all later digits are ${0}$.

Example:

${\frac{17}{400}=.0425000\dots}$

which we usually write as

${.0425}$

A decimal terminates exactly when the number is a rational fraction whose denominator has only prime factors ${2}$ and ${5}$.

---

## Uniqueness of Decimal Expansions

The decimal digits are uniquely determined, except for one familiar case.

A terminating decimal can also be written with repeating ${9}$s:

${1=.9999\dots}$

More generally,

${.2500\dots=.24999\dots}$

So every positive number has one decimal expansion, except terminating decimals, which have two equivalent forms.

---

## Recurring Decimals

A decimal that does not terminate may repeat a block of digits forever.

Examples:

${\frac13=.3333\dots=. \dot3}$

${\frac17=.142857142857\dots=. \dot142857}$

These are **pure recurring decimals**, where the repeating block starts immediately after the decimal point.

A **mixed recurring decimal** has some non-repeating digits first, then a repeating block.

Example:

${\frac16=.16666\dots=.1\dot6}$

---

## When Rational Numbers Repeat

Let

${x=\frac{p}{q}}$

in lowest terms.

### Case 1: ${q=2^a5^b}$

Then the decimal terminates.

If

${\mu=\max(a,b)}$

then multiplying by ${10^\mu}$ clears the denominator, so the decimal ends after at most ${\mu}$ digits.

### Case 2: ${(q,10)=1}$

Then the decimal is purely recurring.

There exists a smallest positive integer ${\nu}$ such that

${10^\nu\equiv 1\pmod q}$

This ${\nu}$ is the repeating period length.

### Case 3: General Denominator

If

${q=2^a5^bQ}$

with ${(Q,10)=1}$, then:

* the decimal first has a terminating part of at most ${\mu=\max(a,b)}$ digits,
* then a recurring block of length ${\nu}$.

So every rational number either terminates or eventually repeats.

# Representation of Numbers in Other Bases

There is nothing special about base ${10}$. We may represent numbers in any integer base ${r>1}$.

Examples:

${\frac12 = .1_2}$

${\frac23 = .2_3}$

${\frac34 = .3_4}$

Here the subscript shows the base.

All earlier results for decimals remain true in base ${r}$ after replacing:

* ${10}$ with ${r}$
* prime factors ${2,5}$ with prime factors of ${r}$

So if

${x=\frac{p}{q}}$

in lowest terms and

${q=s^\alpha t^\beta \cdots v^\gamma}$

where ${s,t,\dots,v}$ are the prime factors of ${r}$, then:

* the expansion terminates after finitely many digits if ${q}$ contains no other prime factors,
* the expansion is purely recurring if ${(q,r)=1}$,
* the repeating period is the order of ${r}$ modulo ${q}$,
* otherwise the expansion is mixed recurring.

---

# Irrational Numbers Defined by Decimals

A decimal (or base-${r}$ expansion) that neither terminates nor repeats represents an irrational number.

Example:

${x=.01001000100001\dots}$

where the number of zeros between successive ${1}$s increases by one each time.

This number cannot be rational.

Another example is the decimal whose ${n}$th digit equals:

* ${1}$ if ${n}$ is prime
* ${0}$ otherwise

That decimal is also irrational.

---

# Digits Chosen from Primes in Order

The number

${.2357111317192329\dots}$

formed by writing the prime numbers in increasing order as digits, is irrational.

Two proof ideas justify this:

1. If every arithmetic progression ${k\cdot10^{s+1}+1}$ contained primes, then primes would appear in the decimal with arbitrarily long blocks of zeros before them, preventing repetition.

2. If there is always a prime between ${N}$ and ${10N}$ for large ${N}$, then the decimal has arbitrarily long non-repeating initial segments, so it cannot recur.

---

# Divisibility Tests

Many divisibility tests come directly from place-value notation.

## Divisibility by 2

A number is divisible by ${2}$ if its last digit is even.

More generally, divisibility by ${2^\nu}$ depends only on the last ${\nu}$ digits.

Similar rules hold for ${5^\nu}$.

---

## Divisibility by 3 and 9

Since

${10^\nu\equiv 1\pmod 9}$

for all ${\nu}$, a number is congruent modulo ${9}$ to the sum of its digits.

So a number is divisible by:

* ${9}$ iff its digit sum is divisible by ${9}$
* ${3}$ iff its digit sum is divisible by ${3}$

---

## Divisibility by 11

Since

${10\equiv -1\pmod{11}}$

we get alternating signs by powers of ${10}$.

So a number is divisible by ${11}$ iff the alternating sum of its digits is divisible by ${11}$.

Example:

${29310478561}$

Compute:

${561-478+310-29=364}$

Then:

${364=4\cdot7\cdot13}$

So the number is divisible by ${7}$ and ${13}$, but not by ${11}$.

---

# Maximum Period of a Decimal

Consider the decimal of ${1/q}$ where ${q}$ is prime.

The repeating period length equals the order of ${10}$ modulo ${q}$, so it divides ${\phi(q)=q-1}$.

If ${10}$ is a primitive root modulo ${q}$, then the period has maximum length ${q-1}$.

When this happens, the decimals

${\frac{p}{q}\quad (p=1,2,\dots,q-1)}$

all have period ${q-1}$ and differ only by cyclic rearrangement of digits.

Examples of such primes ${q}$ include:

${7,17,19,23,29,47}$

# Bachet’s Weights Problem

We want the smallest set of integer weights that can:

1. Weigh any whole number up to ${40}$ using **one pan only**, and
2. Weigh any whole number up to ${40}$ using **two pans**, where weights may go on either side.

---

## One-Pan Version

The powers of ${2}$ solve the problem:

${1,2,4,\dots,2^{n-1}}$

These weights can measure every integer from ${1}$ to

${2^n-1}$

Each number has a unique binary form:

${N=\sum_{s=0}^{n-1} a_s2^s}$

where each digit ${a_s}$ is ${0}$ or ${1}$.

So:

* ${1,2,4,8,16}$ weigh every number up to ${31}$
* ${1,2,4,8,16,32}$ weigh every number up to ${63}$

No smaller set of ${n}$ weights can do better.

So to weigh up to ${40}$ with one pan, the smallest set is:

${1,2,4,8,16,32}$

---

## Two-Pan Version

Now allow weights on either side.

Use powers of ${3}$:

${1,3,9,\dots,3^{n-1}}$

These weigh every integer from

${1}$ to

${\frac12(3^n-1)}$

Each target number has a unique balanced ternary form:

${N=\sum_{s=0}^{n-1} b_s3^s}$

where each ${b_s}$ is one of:

${-1,0,1}$

Interpretation:

* ${1}$ means place the weight with the object
* ${-1}$ means place it on the opposite pan
* ${0}$ means do not use it

Thus every integer between

${-\frac12(3^n-1)}$

and

${\frac12(3^n-1)}$

is representable.

For ${n=4}$, the weights

${1,3,9,27}$

measure all integers up to

${40}$

So the smallest two-pan solution is:

${1,3,9,27}$

---

# Game of Nim

Two players alternate turns removing matches from heaps.

Suppose there are heaps:

${A,B,C,\dots}$

A move removes any positive number of matches from **one heap only**.

The player who takes the last match wins.

---

## Winning and Losing Positions

Represent each heap size in binary and add the columns **without carrying** (bitwise XOR).

* If the result is ${0}$, the position is **losing** for the player to move.
* If the result is nonzero, the position is **winning**.

Example:

Heaps:

${(2,2)}$

Binary:

${10,10}$

Column sum without carrying:

${00}$

So this is a losing position.

Example:

${(1,3,4)}$

Binary:

${01,11,100}$

XOR is nonzero, so this is a winning position.

---

## Optimal Move

From any winning position, one move can always change the heaps into a losing position.

From any losing position, every legal move creates a winning position.

So perfect play is simple:

* Move to XOR ${0}$ whenever possible.
* If you start on XOR ${0}$ and the opponent plays correctly, you lose.

---

# Variant: Last Match Loses

There is a variation where the player taking the last match loses.

In that version, the normal Nim strategy works except in certain endgame cases with heaps of size ${1}$. Then parity of the remaining heaps matters.

---

# Integers Missing a Digit

Consider all positive integers whose decimal form never uses a particular digit, such as ${9}$.

There are infinitely many such numbers, but they become rare among large integers.

Up to ${10^k}$, only about

${9^k}$

numbers avoid one chosen digit.

So their proportion is roughly

${\left(\frac{9}{10}\right)^k}$

which tends to ${0}$ as ${k\to\infty}$.

Thus almost all large integers contain any chosen digit somewhere in their decimal expansion. 

# Numbers Missing a Digit

Consider all positive integers whose decimal expansion avoids one chosen digit, say ${9}$.

There are infinitely many such numbers, but they form a sparse set.

Among numbers below ${10^k}$, at most

${9^k}$

avoid the digit ${9}$, since each of the ${k}$ positions has only ${9}$ allowed choices.

So their proportion is at most

${\frac{9^k}{10^k}=\left(\frac{9}{10}\right)^k}$

As ${k\to\infty}$, this tends to ${0}$.

Therefore almost every large integer contains any chosen digit.

The same reasoning works in any base ${r}$.

---

# Sets of Measure Zero

A real number corresponds to a point on the number line.

Some infinite sets contain infinitely many points but occupy no total length. Such sets are said to have **measure zero**.

Example:

The rational numbers between ${0}$ and ${1}$ form a countable set:

${x_1,x_2,x_3,\dots}$

Around each rational ${x_n}$ place an interval of length

${\delta 2^{-n}}$

The total length is

${\delta\sum_{n=1}^{\infty}2^{-n}=\delta}$

Since ${\delta}$ can be made as small as we like, the rationals have measure zero.

So a countable set always has measure zero.

This fact is fundamental in analysis and probability.

---

# Decimals Missing a Digit

Now consider real numbers in ${[0,1]}$ whose decimals omit some chosen digit ${b}$.

Build this set step by step.

At the first decimal place, divide ${[0,1]}$ into ten equal parts and remove the interval corresponding to digit ${b}$.

At the next step, divide each remaining interval into ten parts and again remove the subinterval whose next digit is ${b}$.

Continue forever.

After ${k}$ steps, the remaining total length is

${\left(\frac{9}{10}\right)^k}$

This tends to ${0}$.

So the set of numbers whose decimal expansion misses a digit has measure zero.

Therefore almost all decimals contain every digit somewhere.

---

# Stronger Result: Every Finite Block Appears

The same method extends further.

Fix any finite digit string, such as:

${937}$

The set of decimals that never contain this block also has measure zero.

Hence almost every decimal contains every possible finite block of digits.

That means typical decimal expansions are extremely rich in patterns.

---

# Cantor’s Ternary Set

Take numbers in ${[0,1]}$ and write them in base ${3}$.

Keep only numbers whose ternary digits use ${0}$ and ${2}$, never ${1}$.

Equivalent construction:

1. Start with ${[0,1]}$
2. Remove the middle third
3. Remove the middle third of each remaining interval
4. Repeat forever

The remaining set is the **Cantor set**.

It has these striking properties:

* infinitely many points
* uncountable
* measure zero
* perfect (closed and every point is a limit point)

So a set can be “large” in one sense and “small” in another.

---

# Normal Numbers

A number is **simply normal** in base ${r}$ if each digit appears with frequency

${\frac1r}$

For decimal expansions, each digit ${0}$ through ${9}$ appears about one-tenth of the time.

A number is **normal** in base ${r}$ if every block of ${k}$ digits appears with frequency

${\frac1{r^k}}$

for every ${k\ge1}$.

So in a normal decimal:

* each digit appears ${1/10}$ of the time
* each pair appears ${1/100}$ of the time
* each three-digit block appears ${1/1000}$ of the time
* and so on

Almost all real numbers are normal in any base, even though proving a specific familiar constant is normal can be difficult. 

# Explicit Normal Numbers

Although almost all real numbers are normal, constructing specific examples is harder.

A classic decimal example is formed by concatenating the positive integers:

${0.123456789101112131415\dots}$

This is now called the **Champernowne number**. It is normal in base ${10}$.

More generally, concatenating all base-${r}$ integers gives a normal number in base ${r}$.

---

# Liouville Numbers

Consider a decimal such as

${0.110001000000000000000001\dots}$

where digits ${1}$ occur only in positions

${1!,2!,3!,4!,\dots}$

and all other digits are ${0}$.

This number can be approximated extremely closely by rational fractions.

Numbers with this property are called **Liouville numbers**.

They are transcendental: they cannot satisfy any polynomial equation with integer coefficients.

This gave the first explicit examples of transcendental numbers.

---

# Algebraic and Transcendental Numbers

A real or complex number is **algebraic** if it satisfies

${a_nx^n+a_{n-1}x^{n-1}+\cdots+a_0=0}$

for integers ${a_i}$ not all zero.

Examples:

* ${\sqrt2}$
* ${\frac{1+\sqrt5}{2}}$
* roots of ${x^3-2=0}$

A number that is not algebraic is **transcendental**.

Examples known to be transcendental include:

* ${e}$
* ${\pi}$
* Liouville numbers

There are countably many algebraic numbers but uncountably many real numbers, so almost all reals are transcendental.

---

# Approximation of Irrational Numbers

Every irrational number ${\alpha}$ can be approximated by infinitely many rationals

${\frac pq}$

such that

${\left|\alpha-\frac pq\right|<\frac1{q^2}}$

This is a deep and useful fact from continued fractions.

Some irrationals can be approximated much better than this, but algebraic irrational numbers cannot be approximated *too* well.

That contrast separates algebraic numbers from Liouville numbers.

---

# Countability Ideas

The integers are countable. Rational numbers are also countable, even though there are infinitely many fractions.

But the real numbers are uncountable.

Cantor’s diagonal argument proves this: any attempted list of decimals misses some real number formed by changing the diagonal digits.

So infinities come in different sizes.

---

# Infinite Sets Compared

Examples:

* Natural numbers and even numbers have the same size (both countable).
* Rational numbers are countable.
* Real numbers are uncountable.
* The interval ${[0,1]}$ has the same cardinality as all real numbers.

This changed mathematics permanently by making infinity a precise subject.

# Irrationality of ${e}$

The number

${e=1+\frac1{1!}+\frac1{2!}+\frac1{3!}+\cdots}$

is irrational.

If ${e=\frac pq}$ were rational, then multiplying by ${q!}$ would give

${q!e=q!\left(1+\frac1{1!}+\cdots+\frac1{q!}\right)+\left(\frac1{q+1}+\frac1{(q+1)(q+2)}+\cdots\right)q!}$

The first part is an integer. The remaining tail is positive but less than ${1}$, which is impossible. So ${e}$ cannot be rational.

---

# Irrationality of ${\pi}$

The proof for ${\pi}$ is much deeper, but the conclusion is stronger than mere suspicion from its nonrepeating decimal expansion:

${\pi}$ is irrational.

In fact, ${\pi}$ is transcendental, so it does not satisfy any nonzero polynomial equation with integer coefficients.

This also implies the classical problems of squaring the circle exactly with ruler and compass are impossible.

---

# Closing Perspective

Decimal expansions reveal several layers of number theory:

* rational numbers terminate or repeat
* irrational numbers do neither
* almost all numbers contain every digit pattern
* explicit constants can be normal, irrational, or transcendental
* infinity itself comes in different sizes

What begins as place-value notation leads directly into some of the deepest ideas in mathematics. 