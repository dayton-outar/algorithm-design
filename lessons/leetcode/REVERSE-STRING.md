# 917. Reverse Only Letters (🟢 Easy)

## Problem

Given a string `s`, return the reversed string where all characters that are not letters stay in the same place, and all letters reverse their positions.

## Examples

```text
Input: "ab-cd"
Output: "dc-ba"
```

```text
Input: "a-bC-dEf=ghIj!!"
Output: "j-Ih-gfE=dCba!!"
```

## Links

- LeetCode: <https://leetcode.com/problems/reverse-only-letters/>
- JavaScript solution: [reverse-string.js](reverse-string.js)

## Approach

The implementation first collects all letters into a stack. It then walks through the original string again:

- If the current character is a letter, pop the next letter from the stack.
- If the current character is not a letter, copy it unchanged.

Because stacks are last-in, first-out, popping the collected letters naturally returns them in reverse order.

## Algorithm

1. Scan the string and push every letter into an array.
2. Scan the string a second time.
3. For each letter position, append the last saved letter.
4. For each non-letter position, append the original character.
5. Return the rebuilt string.

## Complexity

- Time: `O(n)` because the string is scanned twice.
- Space: `O(n)` for the stack of letters and rebuilt string.
