# Order of Magnitude of Arithmetical Functions

## Pointwise and Average Behavior

Arithmetical functions often fluctuate too much for a single simple formula. Instead, we study their order of magnitude and their average order.

For a function ${f(n)}$, an average order describes the size of

${\sum_{n\le x}f(n)}$

as ${x}$ grows.

## Divisor Function

The divisor function ${d(n)}$ has irregular spikes, but its average behavior is smooth:

${\sum_{n\le x}d(n)\sim x\log x}$

The reason is geometric: counting divisors of all numbers up to ${x}$ is the same as counting lattice points satisfying ${ab\le x}$.

## Sum of Divisors

The function ${\sigma(n)}$ also fluctuates, but its average order is quadratic in scale:

${\sum_{n\le x}\sigma(n)\sim \frac{\pi^2}{12}x^2}$

Large divisors dominate its growth more strongly than they do for ${d(n)}$.

## Euler's Function

Euler's function has average order

${\frac{6}{\pi^2}n}$

in the sense that

${\sum_{n\le x}\phi(n)\sim \frac{3}{\pi^2}x^2}$

The constant reflects the probability that two random integers are coprime.

## Squarefree Numbers

The number of squarefree integers up to ${x}$ is asymptotic to

${\frac{6}{\pi^2}x}$

This is another appearance of the reciprocal zeta value

${\frac1{\zeta(2)}=\frac6{\pi^2}}$

## Representations by Two Squares

The representation function ${r(n)}$ is tied to divisors in residue classes modulo ${4}$. Its average behavior is controlled by lattice-point counting inside circles:

${\sum_{n\le x}r(n)\approx \pi x}$

This connects an arithmetical function to a geometric area estimate.
