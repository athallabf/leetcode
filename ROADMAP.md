# LeetCode Learning Roadmap

## Philosophy
Build patterns systematically. Master one category before moving to the next. Quality over quantity.

## Current Status
- ✅ Phase 1: Hash Map Fundamentals (in progress)
- ⏳ Phase 2+: Not started

---

## Phase 1: Hash Map Fundamentals (Week 1-2)
**Goal:** Master the most common pattern. You've done 3 of these.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Two Sum | Easy | Hash Map - complement lookup |
| 2 | Contains Duplicate | Easy | Hash Set - presence check |
| 3 | Valid Anagram | Easy | Hash Map - frequency counting |
| 4 | First Unique Character in String | Easy | Hash Map - first occurrence |
| 5 | Intersection of Two Arrays | Easy | Hash Set - intersection |

**Key Patterns:**
- Store for O(1) lookup
- Complement = target - current
- Frequency counting with increment/decrement

---

## Phase 2: Two Pointers (Week 3)
**Goal:** When you need to search from both ends simultaneously.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Valid Palindrome | Easy | Two Pointers - from both ends |
| 2 | Move Zeros | Easy | Two Pointers - partitioning |
| 3 | Remove Duplicates from Sorted Array | Easy | Two Pointers - in-place |
| 4 | 3Sum | Medium | Two Pointers + Hash Map |
| 5 | Container With Most Water | Medium | Two Pointers - greedy |

**Key Patterns:**
- One pointer at start, one at end
- Move pointers based on comparison
- In-place modification

---

## Phase 3: Sliding Window (Week 4)
**Goal:** Contiguous subarray/substring problems.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Maximum Average Subarray | Easy | Sliding Window - fixed size |
| 2 | Best Time to Buy and Sell Stock | Easy | Sliding Window - one pass |
| 3 | Longest Substring Without Repeating | Medium | Sliding Window - variable |
| 4 | Minimum Size Subarray Sum | Medium | Sliding Window - two pointers |
| 5 | Fruit Into Baskets | Medium | Sliding Window |

**Key Patterns:**
- Expand window, shrink when condition breaks
- Track state in hash map
- O(n) for scanning

---

## Phase 4: Stack (Week 5)
**Goal:** LIFO data structure - great for matching pairs.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Valid Parentheses | Easy | Stack - matching |
| 2 | Remove All Adjacent Duplicates | Easy | Stack - cancellation |
| 3 | Next Greater Element | Medium | Stack - monotonic |
| 4 | Daily Temperatures | Medium | Stack - look ahead |

**Key Patterns:**
- Match opening with closing
- Cancel adjacent pairs
- Track "next" or "previous" in O(n)

---

## Phase 5: Binary Search (Week 6-7)
**Goal:** When sorted data lets you divide and conquer.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Binary Search | Easy | Binary Search - basic |
| 2 | Search Insert Position | Easy | Binary Search - with insertion |
| 3 | First Bad Version | Easy | Binary Search - find first |
| 4 | Search in Rotated Array | Medium | Binary Search - modified |
| 5 | Find Peak Element | Medium | Binary Search - boundary |

**Key Patterns:**
- Compare with middle
- Narrow range by half each time
- Handle edge cases (rotated, duplicates)

---

## Phase 6: Linked List (Week 7-8)
**Goal:** Pointer manipulation - critical for interviews.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Reverse Linked List | Easy | Pointer manipulation |
| 2 | Merge Two Sorted Lists | Easy | Pointer manipulation |
| 3 | Linked List Cycle | Easy | Floyd's cycle detection |
| 4 | Remove Nth Node From End | Medium | Two pointers |
| 5 | Palindrome Linked List | Medium | Reverse + compare |

**Key Patterns:**
- Move pointers: next, prev
- Dummy head for edge cases
- Slow/fast for cycle detection

---

## Phase 7: Trees (Week 8-10)
**Goal:** Recursive thinking and traversal.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Maximum Depth of Binary Tree | Easy | DFS/BFS |
| 2 | Same Tree | Easy | DFS - comparison |
| 3 | Invert Binary Tree | Easy | DFS - transformation |
| 4 | Binary Tree Level Order | Medium | BFS - level traversal |
| 5 | Validate BST | Medium | DFS with bounds |
| 6 | Lowest Common Ancestor | Medium | DFS |

**Key Patterns:**
- DFS: postorder, preorder, inorder
- BFS: level-by-level with queue
- Pass bounds to validate BST

---

## Phase 8: Advanced (Week 10+)
**Goal:** Now you're ready for harder problems.

| # | Problem | Difficulty | Pattern |
|---|---------|------------|---------|
| 1 | Group Anagrams | Medium | Hash Map + sorting |
| 2 | Top K Frequent Elements | Medium | Heap + Hash Map |
| 3 | Product of Array Except Self | Medium | Prefix/Suffix |
| 4 | Valid Sudoku | Medium | Hash Set validation |
| 5 | Longest Consecutive Sequence | Medium | Hash Set |

---

## Why This Works

1. **One pattern at a time** - master it before moving on
2. **Easy → Medium** - builds confidence and intuition
3. **Pattern groups** - you'll start recognizing "this is a two-pointer problem"
4. **Interleaves difficulty** - prevents burnout
5. **Foundations first** - won't hit problems you can't solve yet

---

## Progress Tracking

After completing each problem:
- [ ] Add to PATTERNS.md with pattern tag
- [ ] Log in PROGRESS.md with date, difficulty, confidence
- [ ] Write NOTES.md with approach and lessons

---

## Common Patterns Summary

| Pattern | Problems Using It |
|---------|------------------|
| Hash Map/Set | Two Sum, Contains Duplicate, Valid Anagram, Group Anagrams |
| Two Pointers | Valid Palindrome, 3Sum, Container With Most Water |
| Sliding Window | Longest Substring Without Repeating, Min Size Subarray |
| Stack | Valid Parentheses, Remove Adjacent Duplicates |
| Binary Search | Binary Search, Search Rotated Array |
| Linked List | Reverse, Merge Sorted, Cycle Detection |
| DFS/BFS | Tree traversal, Level Order |

---

*Last Updated: 2026-04-06*
