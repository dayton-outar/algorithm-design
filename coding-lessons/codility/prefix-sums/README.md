# 5. Prefix Sums

There is a simple yet powerful technique that allows for the fast calculation of sums of elements in given slice (contiguous segments of array). Its main idea uses preﬁx sums which are deﬁned as the consecutive totals of the ﬁrst $0, 1, 2, \dots, n$ elements of an array.

|           | $a_0$       | $a_1$             | $a_2$                  | $\ldots$ | $a_{n - 1}$                           |
|:---------:|:-----------:|:-----------------:|:----------------------:|:--------:|:-------------------------------------:|
| $p_0 = 0$ | $p_1 = a_0$ | $p_2 = a_0 + a_1$ |$p_3 = a_0 + a_1 + a_2$ | $\ldots$ | $p_n = a_0 + a_1 + \dots + a_{n - 1}$ |

We can easily calculate the prefix sums in $O(n)$ time complexity. Notice that the total $p_k$ equals $p_{k - 1} + a_{k - 1}$, so each consecutive value can be calculated in a constant time.

**5.1: Counting prefix sums - $O(n)$.**
```js
const prefixSums = (A) => {
    const n = A.length;
    let P = Array(n + 1).fill(0);

    for ( let i = 1; i < (n + 1); i++ ) {
        P[i] = P[i - 1] + A[i - 1];
    }

    return P;
}

prefixSums([2, 1, 5, 3, 2]); // [ 0, 2, 3, 8, 11, 13 ]
```

Similarly, we can calculate suﬃx sums, which are the totals of the $k$ last values. Using preﬁx (or suﬃx) sums allows us to calculate the total of any slice of the array very quickly. For example, assume that you are asked about the totals of $m$ slices $[x..y]$ such that $0 \leq x \leq y < n$, where the total is the sum $a_x + a_{x + 1} + \ldots + a_{y - 1} + a_y$.

The simplest approach is to iterate through the whole array for each result separately; however, that requires $O(n · m)$ time. The better approach is to use preﬁx sums. If we calculate the preﬁx sums then we can answer each question directly in constant time.

| $p_{y + 1}$  | $a_0$ | $a_1$ | $\ldots$ | $a_{x - 1}$ | $a_x$ | $a_{x + 1}$ | $\ldots$ | $a_{y -1}$ | $a_y$ |
|:------------:|:-----:|:-----:|:--------:|:-----------:|:-----:|:-----------:|:--------:|:----------:|:-----:|
| $p_x$        | $a_0$ | $a_1$ | $\ldots$ | $a_{x - 1}$ |       |             |          |            |       |
| $p_{x + 1} = p_x$ |  |       |          |             | $a_x$ | $a_{x + 1}$ | $\ldots$ | $a_{y -1}$ | $a_y$ |

**5.2: Total of one slice - $O(1)$.**
```js
const countTotal = (P, x, y) => P[y + 1] - P[x];

countTotal([ 0, 2, 3, 8, 11, 13 ], 1, 2); // 8 - 2 = 6
```

We have calculated the total of $a_x + a_{x - 1} + \ldots + a_{y - 1} + a_y$ in $O(1)$ time. Using this approach, the total time complexity is $O(n + m)$.

## 5.1. Exercise

**Problem:** 🟡 You are given a non-empty, zero-indexed array $A$ of $n$ $(1 \leq n \leq 100,000)$ integers $a_0 ,a_1 , \ldots, a_{n − 1}$ $(0 \leq a_i \leq 1,000)$. This array represents number of mushrooms growing on the consecutive spots along a road. You are also given integers $k$ and $m$ $(0 \leq k, m < n)$. 

A mushroom picker is at spot number $k$ on the road and should perform $m$ moves. In one move she moves to an adjacent spot. She collects all the mushrooms growing on spots she visits. The goal is to calculate the maximum number of mushrooms that the mushroom picker can collect in $m$ moves.

For example, consider array A such that:

![Array A](/.attachments/prefix-array-sums.png)

The mushroom picker starts at spot $k = 4$ and should perform $m = 6$ moves. She might move to spots 3, 2, 3, 4, 5, 6 and thereby collect 1 + 5 + 7 + 3 + 9 = 25 mushrooms. This is the maximal number of mushrooms she can collect.

**Solution $O(m^2)$:** Note that the best strategy is to move in one direction optionally followed by some moves in the opposite direction. In other words, the mushroom picker should not change direction more than once. With this observation we can ﬁnd the simplest solution. Make the ﬁrst ${ p = 0, 1, 2, \\dots, m }$ moves in one direction, then the next $m − p$ moves in the opposite direction. This is just a simple simulation of the moves of the mushroom picker which requires $O(m^2)$ time.

**Solution $O(n + m)$:** A better approach is to use preﬁx sums. If we make $p$ moves in one direction, we can calculate the maximal opposite location of the mushroom picker. The mushroom picker collects all mushrooms between these extremes. We can calculate the total number of collected mushrooms in constant time by using preﬁx sums.

**5.3: Mushroom picker - $O(n + m)$**
```js
const mushrooms = (A, k, m) => {
    // where k is the starting position of the muchroom picker and m is the number of allowed moves
    let n = A.length;
    let result = 0;
    const sums = prefixSums(A);

    for ( let i = 0; i < (Math.min(m , k) + 1); i++ ) {
        let leftPos = k - i;
        let rightPos = Math.min( n - 1, Math.max( k, ( (k + m) - 2 * i ) ) );
        result = Math.max( result, countTotal( sums, leftPos, rightPos ) );
    }

    for ( let i = 0; i < Math.min( m + 1, n - k ); i++ ) {
        let rightPos = k + i;
        let leftPos = Math.max( 0, Math.min( k, ( k - ( m - 2 * i ) ) ) );
        result = Math.max( result, countTotal( sums, leftPos, rightPos ) );
    }

    return result;
}

// prefixSums: [ 0,  2,  5, 12, 17, 18, 21, 30 ]
mushrooms( [2, 3, 7, 5, 1, 3, 9], 4, 6); // 25
```

The total time complexity of such a solution is $O(n + m)$.

## Observations

In the `mushrooms` function, there are two loops. Each loop evaluates a possible range of positions and computes the **maximum sum of mushrooms collected over a contiguous segment**.

The function checks the two possible optimal patterns:

1. **Go left first, then turn right**
2. **Go right first, then turn left**

Because once you change direction, changing again is pointless for maximizing a continuous collected range.

Importantly, the loops do **not** sum directly over the original array `A`. Instead, they use the **prefix sum array** produced by `prefixSums(A)`. This allows the function to compute the total mushrooms between any two positions (`leftPos` and `rightPos`) in constant time using:

```js
countTotal(sums, leftPos, rightPos)
```

This is what makes the solution efficient.

---

The main task in both loops is to determine valid boundaries:

* `leftPos` → how far left the picker reaches
* `rightPos` → how far right the picker reaches

Once those are known, the prefix sum array gives the total instantly.

The interesting part is how those boundaries are derived.

---

Let’s start with the first loop.

```js
for (let i = 0; i < Math.min(m, k) + 1; i++)
```

Here, `i` represents how many steps the picker takes **to the left first**.

* She cannot move left more than `k` steps (index `0` is the boundary).
* She cannot exceed `m` total moves.

So the maximum valid left movement is:

```js
Math.min(m, k)
```

We add `+1` because `i = 0` is also a valid case (no movement to the left).

This ensures all valid leftward explorations are considered without going out of bounds.

For example, with `[2, 3, 7, 5, 1, 3, 9]`, `k = 4`, `m = 6`:

* Moving left from index 4, the furthest reachable index is 0 (4 steps).
* Even though 6 moves are available, the array boundary limits movement.
* So `k` becomes the limiting factor, not `m`.

---

Inside the loop, we compute:

```js
leftPos = k - i;
```

This simply moves left from the starting point.

The key part is computing `rightPos`:

```js
rightPos = Math.min(n - 1, Math.max(k, (k + m) - 2 * i));
```

---

The expression:

```js
(k + m) - 2 * i
```

comes from how movement cost works.

If the picker moves left `i` steps, she spends:

```
i moves
```

To then move right, she must first return to `k`, which costs another:

```
i moves
```

So going left and coming back costs:

```
2 * i
```

That leaves:

```js
m - 2 * i
```

moves to go right.

So the furthest right position she can reach is:

```js
k + (m - 2 * i)
```

which simplifies to:

```js
(k + m) - 2 * i
```

For example (as shown in the table under [Stepping Through](#stepping-through)), assuming starting position (`k`) is 4 and only 6 moves (`m`) are allowed,

* If the picker moves to the left once (to index 3), she has to return to index 4 and that takes up 2 moves, only leaving 4 left. She can only change direction once. So, she continues 4 moves to the right, placing her at index 8 (which is out of bounds). Hence, the need for `(k + m) - 2 * i`, which for this case works to ${(6 + 4) - (2 \times 1)}$.

---

The surrounding bounds ensure validity:

* `Math.max(k, ...)` prevents crossing back left of the starting point
* `Math.min(n - 1, ...)` prevents exceeding the array length

So `rightPos` effectively answers:

> “After going left `i` steps and paying the cost to return, how far right can I still go within the remaining moves?”

---

The second loop mirrors this logic.

```js
for (let i = 0; i < Math.min(m + 1, n - k); i++)
```

Here, `i` represents how many steps the picker takes **to the right first**.

* She cannot exceed `m` moves → `m + 1` possibilities including 0
* She cannot go beyond the array → `n - k` positions

---

Inside the loop:

```js
rightPos = k + i;
```

And the left boundary is computed as:

```js
leftPos = Math.max(0, Math.min(k, k - (m - 2 * i)));
```

---

The expression:

```js
k - (m - 2 * i)
```

follows the same reasoning:

* Moving right `i` steps costs `i`
* Returning to `k` costs another `i`
* Total cost: `2 * i`

Remaining moves:

```js
m - 2 * i
```

Use those to go left:

```js
k - (m - 2 * i)
```

Then clamp within bounds:

* `Math.min(k, ...)` → don’t go right of start
* `Math.max(0, ...)` → don’t go below index 0

---

### Final intuition

Both loops follow the same pattern:

> Go in one direction first (`i` steps), pay the cost to return (`2 * i`), then use the remaining moves to extend in the opposite direction.

That’s why the key term is always:

```js
m - 2 * i
```

And once the range `[leftPos, rightPos]` is defined, the prefix sum array lets us compute the total mushrooms in constant time—making the entire solution efficient.

---

### Stepping Through

Let's step through the case of passing an array of `[2, 3, 7, 5, 1, 3, 9]`, an initial position of `4` and allowed moves of `6`. While stepping through the focus will be on watching how the line of code below evaluates the right-most position.

```js
let rightPos = Math.min( n - 1, Math.max( k, ( (k + m) - 2 * i ) ) );
```

Evaluations of `rightPos` in the first loop is shown in the table below. Please note that the length, `n` of `[2, 3, 7, 5, 1, 3, 9]` is 7. `k` will remain 4 throughout the function as well as `m` (which is 6).

| `rightPos` | `i` | `n - 1` | `k` | `m` | `(k + m) - 2 * i` | Note                                                            |
|-----------:|----:|--------:|----:|----:|------------------:|:----------------------------------------------------------------|
| 6          |    0|    **6**|    4|    6|                 10| `Math.max` of 4 and 10 is 10 and `Math.min` of 6 and 10 is 6.   |
| 6          |    1|    **6**|    4|    6|                  8| `Math.max` of 4 and 8 is 8 and `Math.min` of 6 and 8 is 6. |
| 6          |    2|    **6**|    4|    6|                  6| `Math.max` of 4 and 6 is 6 and `Math.min` of 6 and 6 is 6. |
| 4          |    3|        6|**4**|    6|                  4| `Math.max` of 4 and 4 is 4 and `Math.min` of 6 and 4 is 4. |
| 4          |    4|        6|**4**|    6|                  2| `Math.max` of 4 and 2 is 4 and `Math.min` of 6 and 4 is 4. |

Let's also evaluate the left-most position in the second loop,

```js
let leftPos = Math.max( 0, Math.min( k, ( k - ( m - 2 * i ) ) ) );
```

Evaluations of `leftPos` in the first loop is shown in the table below.

| `leftPos` | `i` | `0` | `k` | `m` | `k - ( m - 2 * i )` | Note                                                            |
|----------:|----:|----:|----:|----:|--------------------:|:----------------------------------------------------------------|
| 0         |    0|**0**|    4|    6|                   -2| `Math.min` of 4 and -2 is -2 and `Math.max` of 0 and -2 is 0.    |
| 0         |    1|**0**|    4|    6|                    0| `Math.min` of 4 and 0 is 0 and `Math.max` of 0 and 0 is 0. |
| 2         |    2|    0|    4|    6|                **2**| `Math.min` of 4 and 2 is 2 and `Math.max` of 0 and 2 is 2. |

## Minimum Average of Two Slices

**Problem:** 🟡
A non-empty array $A$ consisting of $N$ integers is given. A pair of integers $(P, Q)$, such that $0 ≤ P < Q < N$, is called a _slice_ of array $A$ (notice that the slice contains at least two elements). The _average_ of a slice $(P, Q)$ is the sum of $A[P] + A[P + 1] + ... + A[Q]$ divided by the length of the slice. To be precise, the average equals $(A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1)$.

For example, array $A$ such that:

```js
    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
```

contains the following example slices:

- slice (1, 2), whose average is (2 + 2) / 2 = 2;
- slice (3, 4), whose average is (5 + 1) / 2 = 3;
- slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.

The goal is to find the starting position of a slice whose average is minimal.

Write a function:

```js
    function solution(A) {}
```

that, given a non-empty array $A$ consisting of $N$ integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

```js
    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
```

the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

- $N$ is an integer within the range $[2 ... 100,000]$;
- each element of array $A$ is an integer within the range $[−10,000 ... 10,000]$.

**Solution:**

According to Dan Avramescu,

> The Min Average Slice problem gives more of a mathematical challenge than a coding one.
>
> The trick here is to figure out that you only need to find the minimum average of slices which are 2 or 3 in length. That is because ***a slice of 4 or larger is basically a sum of slices with the length of 2 or 3. A composed slice will never have an average sum lower than its components.***

```js
// Credit: https://github.com/yaseenshaik/codility-solutions-javascript/blob/master/MinAvgTwoSlice.md
function solution(A) {
    var start = 0;
 
    var currentSum = A[0] + A[1];
    var minAvgSlice = currentSum / 2;

    for (var i = 2; i < A.length; i++) {
       currentSum += A[i];
       var newAvg = currentSum / 3;

       if (newAvg < minAvgSlice) {
          minAvgSlice = newAvg;
          start = i - 2;
       }
 
       currentSum -= A[i-2];
       newAvg = currentSum / 2;

       if (newAvg < minAvgSlice) {
          minAvgSlice = newAvg;
          start = i - 1;
       }
    }
 
    return start;
 }
 ```

## References

1. [Codility Training Media - Prefix Sums](https://codility.com/media/train/3-PrefixSums.pdf)