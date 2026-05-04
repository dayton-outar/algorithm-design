# 4. Counting Elements

A numerical sequence can be stored in an array in various ways. In the standard approach, the consecutive numbers $a_0, a_1, \ldots, a_{n - 1}$ are usually put into the corresponding consecutive indices of the array:

$$\large
A[0] = a_0 \quad A[1] = a_1 \quad \ldots \quad A[n - 1] = a_{n - 1}
$$

We can also store the data in a slightly diﬀerent way, by making an array of counters. Each number may be counted in the array by using an index that corresponds to the value of the given number.

![Sequence of numbers counted](/.attachments/counter-sequence.png)

Notice that we do not place elements directly into a cell; rather, we simply count their occurrences. It is important that the array in which we count elements is suﬃciently large. If we know that all the elements are in the set { $0, 1, \ldots , m$ }, then the array used for counting should be of size $m + 1$.

**4.1: Counting elements - $O(n + m)$.**
```js
const counting = (A, m) => {
    const n = A.length
    let count = Array(m + 1).fill(0);
    for (let i = 0; i < n; i++) {
        count[A[i]]++;
    }

    return count;
}
```

The limitation here may be available memory. Usually, we are not able to create arrays of $10^9$ integers, because this would require more than one gigabyte of available memory.

Counting the number of negative integers can be done in two ways. The ﬁrst method is to add some big number to each value: so that, all values would be greater than or equal to zero. That is, we shift the representation of zero by some arbitrary amount to accommodate all the negative numbers we need. In the second method, we simply create a second array for counting negative numbers.

## 4.1. Exercise

**Problem:** 🟡 You are given an integer $m$ $(1 \leq m \leq 1,000,000)$ and two non-empty, zero-indexed arrays $A$ and $B$ of $n$ integers, $a_0, a_1 ,\ldots , a_{n−1}$ and $b_0, b_1, \ldots, b_{n−1}$ respectively $(0 \leq a_i, b_i \leq m)$.

The goal is to check whether there is a swap operation which can be performed on these arrays in such a way that the sum of elements in array A equals the sum of elements in array B after the swap. By swap operation we mean picking one element from array A and one element from array B and exchanging them.

**Solution $O(n^2)$:** The simplest method is to swap every pair of elements and calculate the totals. Using that approach gives us $O(n^3)$ time complexity. A better approach is to calculate the sums of elements at the beginning, and check only how the totals change during the swap operation.

**4.2: Swap the elements - $O(n^2)$.**
```js
const slowSolution = (A, B, m) => {
    const n = A.length;
    const sumA = A.reduce((p, c) => p + c, 0);
    const sumB = B.reduce((p, c) => p + c, 0);

    for ( let i = 0; i < n; i ++) {
        for ( let j = 0; j < n; j++) {
            let change = B[j] - A[i];
            sumA += change;
            sumB -= change;
            if (sumA == sumB) {
                return true;
            }
            sumA -= change;
            sumB += change;
        }
    }

    return false;
}
```

**Solution $O(n + m)$:** The best approach is to count the elements of array $A$ and calculate the diﬀerence $d$ between the sums of the elements of array $A$ and $B$.

For every element of array $B$, we assume that we will swap it with some element from array $A$. The diﬀerence $d$ tells us the value from array $A$ that we are interested in swapping, because only one value will cause the two totals to be equal. The occurrence of this value can be found in constant time from the array used for counting.

**4.3: Swap the elements - $O(n + m)$**
```js
const fastSolution = (A, B, m) => {
    const n = A.length;
    const sumA = A.reduce((p, c) => p + c, 0);
    const sumB = B.reduce((p, c) => p + c, 0);

    let d = Math.abs(sumB - sumA);

    if (d % 2 == 1) return false;

    // * `4.5 % 2 = 0.5` → not `1`, so it **passes your check**
    // * `6.2 % 2 = 0.2` → also **passes**
    // If `d` could be non-integer, forces it back to an integer.
    d = Math.floor( d / 2 );

    let count = counting(A, m);
    for ( let i = 0; i < n; i++ ) {
        let value = B[i] - d;
        if ( (0 < value) && (value <= m) && (count[value] > 0) ) {
            return true;
        }
    }

    return false;
}

fastSolution([0, 1, 1, 4, 5, 3, 2, 1], [5, 4, 3, 2, 1, 2, 1, 1, 3, 3], 5); // true
fastSolution([4, 4, 4, 4, 4], [5, 5, 5, 5], 5); // false
fastSolution([3, 2, 2], [3, 1, 1], 3); // true
```

## Observations

In the function `fastSolution`, it was not clearly explained the reason for returning `false` after checking if the difference between the sums of the two sequences was an odd number. This was done by,

```js
if (d % 2 == 1) return false;
```

Eventually, after running a few cases you begin to understand that only a difference that is an even number can be split and swapped. For example, if the sum difference between two sequences is ${2}$, the difference can be split in two and shared across both seqences. Let's say one sequence has $[3, 2, 2]$ and another sequence has $[3, 1, 1]$, after splitting the difference any of the ${2}$'s from first sequence can be swapped with any of the ${1}$'s from the second sequence to get both sequences to have equal sum: $[3, 2, 1]$, $[3, 2, 1]$.

So, the line of code below splits the difference of the sum between the two sequences,

```js
d = Math.floor( d / 2 );
```

You could not possibly split an odd number and, in a sense, the `Math.floor` may be unnecessary. `Math.floor` was a translation from Python's version of floor division that was taken from the original snippet from Codility.

Now, unto the logic within the loop and using the case mentioned above $([3, 2, 2], [3, 1, 1])$. Since we need to swap one element (at least one element) from each sequence, we need to find numbers that can close the difference in sum between the two. So, this is the reason we need to look in one sequence, take that value and use the difference between that value and the split difference, which can _restore balance_ between the two sequences. Hence, the line,

```js
let value = B[i] - d;
```

Now, that we have a value that _restores balance_ we can apply a few conditions to identify a number that can be swapped. Here are the conditions,

1. The value needs to be within the range between ${0}$ and ${m}$. So, this explains `(0 < value) && (value <= m)`
2. Does this value exist in the first sequence? So, we use `(count[value] > 0)`

Once both conditions are met, we now there exists a number in the first sequence that can be swapped into the second sequence to make both sequences have a sum that equal to each other.

### The Magic

The magic is pattern recognition + a small algebra step most people skip.

#### 1. Start from the goal (not the code)

You’re trying to **swap one element from A with one from B** so that:

* new sum of A = new sum of B

Let:

* `x` = element from A
* `y` = element from B

After swap:

* `sumA - x + y = sumB - y + x`

#### 2. Do the algebra (this is the “magic”)

Rearrange:

```
sumA - x + y = sumB - y + x
```

Move terms:

```
sumA - sumB = 2x - 2y
```

Divide by 2:

```
(sumA - sumB)/2 = x - y
```

Flip sign if needed:

```
y = x + (sumB - sumA)/2
```

That’s your **key insight**.

#### 3. Why this leads to the code

Let:

```
d = sumB - sumA
```

Then:

```
y = x + d/2
```

So for every `x` in A, you just need to check:

> “Does B contain `x + d/2`?”

#### 4. Why the checks matter

##### ✔ `Math.abs(sumB - sumA)`

You only care about the **difference**, not direction.

##### ✔ `d % 2 == 1`

If `d` is odd:

```
d/2 is not an integer → impossible
```

So no valid swap exists.

##### ✔ `d = d / 2`

Now you’re searching for:

```
y - d = x
```

#### 5. Where the “array as hash table” comes in

To check fast:

* Put all frequency of values of A into an array (or set), using index as key for the values
* Then for each `y` in B:

  * check if `y - d` exists in A

That turns a slow ${O(n^2)}$ into ${O(n)}$

#### 6. How people come up with this

Not by guessing. It’s a repeatable process:

1. **Write the condition mathematically**
2. **Solve for the unknown**
3. **Reduce to a lookup problem**

You’re basically transforming:

> “Try all swaps”
> → into
> “Find a number with a specific relationship”

#### Bottom line

The real skill isn’t memorizing tricks. It’s this habit:

> Translate the problem into an equation, then simplify it until it becomes a lookup.

That’s the move you’re starting to notice. Keep pushing there—that’s where you level up fast.

## References

1. [Codility Training Media - Counting Elements](https://codility.com/media/train/2-CountingElements.pdf)