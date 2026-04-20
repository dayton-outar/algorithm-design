# Huffman Coding

Huffman coding is a method for compressing text by reducing how many bits are used to represent characters. 

## Core Idea

Standard text encoding often uses a fixed size:

* 1 character = 1 byte = 8 bits
* Example: `"tilt"` = 4 bytes

But if a text only uses a few unique characters, 8 bits per character is wasteful.

Instead, assign **shorter binary codes** to frequently used characters and longer codes to less frequent ones.

## Simple Example

If a word only uses 3 letters:

```
t = 00  
i = 01  
l = 10  
```

Then `"tilt"` becomes:

```
00 01 10 00 → 00011000
```

This uses fewer bits than standard encoding.

## Tree-Based Encoding

Huffman coding builds a **binary tree**:

* Left branch → `0`
* Right branch → `1`
* Each character is stored at a leaf node

![The words, tilt, in Huffman binary tree](/.attachments/huffman-tilt-tree.png)

To find a character’s code:

1. Start at the root
2. Follow the path to the character
3. Record the sequence of 0s and 1s

Example:

```
i = 00  
l = 01  
t = 1
```

Notice:

* Codes have **different lengths**
* Frequent characters get **shorter codes**

## Decoding

Unlike fixed-length encoding, you **can’t split bits into equal chunks**.

Instead:

* Read one bit at a time
* Traverse the tree
* Stop when you hit a character
* Restart from the root

## Why This Works

### 1. No Ambiguity

Codes never overlap because:

* Only **leaf nodes** represent characters
* Each path from root → leaf is unique

Bad example (ambiguous):

```
a = 0  
c = 00  
```

Huffman avoids this completely.

### 2. Guaranteed Decoding

* Trees have **no cycles**
* Every path ends at a character
* No infinite loops

### 3. Efficient Compression

* Frequent characters → shorter codes
* Rare characters → longer codes
* Saves significant space in large text

### 4. Binary Tree Structure

* Each node has at most 2 children
* Matches binary digits (0 and 1)

## Bottom Line

Huffman coding:

* Uses **frequency-based variable-length encoding**
* Relies on **binary tree traversal**
* Achieves compression by **minimizing average bit usage per character**
