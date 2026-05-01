# 997. Find the Town Judge (🟢 Easy)

## Problem

In a town, there are `n` people labeled from `1` to `n`. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody except the town judge trusts the town judge.
3. There is exactly one person that satisfies the first two properties.

You are given `trust`, an array of pairs where `trust[i] = [a, b]` means the person labeled `a` trusts the person labeled `b`.

If the town judge exists and can be identified, return the label of the town judge. Otherwise, return `-1`.

## Examples

```text
Input: n = 2, trust = [[1,2]]
Output: 2
```

```text
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
```

```text
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

```text
Input: n = 3, trust = [[1,2],[2,3]]
Output: -1
```

```text
Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
```

## Links

- LeetCode: <https://leetcode.com/problems/find-the-town-judge/>
- JavaScript solution: [town.js](town.js)

## Approach

The standard way to solve this is to track each person's net trust score.

- If `a` trusts someone, `a` cannot be the judge, so decrement `a`'s score.
- If `b` is trusted by someone, increment `b`'s score.
- The judge is the only person whose score becomes `n - 1`.

This works because the judge must be trusted by every other person and must never appear as the trusting person.

## Algorithm

1. Create a score array for people `1` through `n`.
2. For each pair `[a, b]`, decrement `score[a]` and increment `score[b]`.
3. Scan the scores.
4. Return the person whose score is `n - 1`.
5. Return `-1` if no such person exists.

## Complexity

- Time: `O(n + t)`, where `t` is the number of trust pairs.
- Space: `O(n)` for the trust score array.
