# 918. Maximum Sum Circular Subarray <span style="background:#eab308;color:black;padding:2px 8px;border-radius:999px;">Moderate</span>

## Problem

Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]`, and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A subarray may only include each element of the fixed buffer `nums` at most once.

## Examples

```text
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
```

```text
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
```

```text
Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
```

## Constraints

- `n == nums.length`
- `1 <= n <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`

## Links

- LeetCode: <https://leetcode.com/problems/maximum-sum-circular-subarray/>
- JavaScript solution: [max-sum-circular.js](max-sum-circular.js)

## Approach

The solution extends Kadane's algorithm.

There are two possible shapes for the answer:

- A normal maximum subarray that does not wrap.
- A circular maximum subarray that wraps around the end of the array.

The non-wrapping case is the regular maximum subarray sum. For the wrapping case, remove the minimum subarray from the total sum. The remaining elements form the best circular subarray.

The all-negative case needs special handling. If the total sum is equal to the minimum subarray sum, removing the minimum subarray would remove the whole array, which is not allowed. In that case, return the normal maximum subarray sum.

## Algorithm

1. Track the running total of the array.
2. Use Kadane's algorithm to find the maximum subarray sum.
3. Use a mirrored Kadane pass to find the minimum subarray sum.
4. If every element belongs to the minimum subarray, return the maximum subarray sum.
5. Otherwise, return the larger of:
   - the maximum subarray sum
   - `totalSum - minimumSubarraySum`

## Complexity

- Time: `O(n)` because the array is scanned once.
- Space: `O(1)` because only scalar counters are stored.
