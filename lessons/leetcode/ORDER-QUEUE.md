# 899. Orderly Queue 🔴

## Problem

You are given a string `s` and an integer `k`. You can choose one of the first `k` letters of `s` and append it to the end of the string.

Return the lexicographically smallest string you can create after applying this operation any number of times.

## Examples

```text
Input: s = "cba", k = 1
Output: "acb"
Explanation:
In the first move, move the first character "c" to the end to get "bac".
In the second move, move the first character "b" to the end to get "acb".
```

```text
Input: s = "baaca", k = 3
Output: "aaabc"
Explanation:
In the first move, move the first character "b" to the end to get "aacab".
In the second move, move the third character "c" to the end to get "aaabc".
```

## Constraints

- `1 <= k <= s.length <= 1000`
- `s` consists of lowercase English letters.

## Links

- LeetCode: <https://leetcode.com/problems/orderly-queue/>
- JavaScript solution: [order-queue.js](order-queue.js)

## Approach

The key observation depends on the value of `k`.

When `k === 1`, the only possible operation is moving the first character to the end. That means every reachable string is just a rotation of `s`, so the answer is the smallest rotation.

When `k > 1`, the operation is powerful enough to create any permutation of the string. Since any arrangement is reachable, the smallest possible string is the sorted list of characters.

## Algorithm

1. If `k` is `1`, initialize the answer as `s`.
2. Generate every rotation of `s`.
3. Keep the lexicographically smallest rotation.
4. If `k` is greater than `1`, sort all characters in ascending order.
5. Return the resulting string.

## Complexity

- Time: `O(n^2)` when `k === 1` because each rotation creates a string of length `n`; `O(n log n)` when `k > 1` because the characters are sorted.
- Space: `O(n)` for temporary strings or the sorted character array.
