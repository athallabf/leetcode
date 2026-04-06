# Two Sum - LeetCode #1

## Pattern
Hash Map (Frequency/Index Tracking)

## Intuition
The brute force approach checks every pair (O(n²)), but we can do better by storing previously seen numbers in a hash map. As we iterate, we check if the complement (target - current number) exists in our map. If it does, we've found our pair. This reduces time complexity to O(n) at the cost of O(n) space.

## Approaches You Considered

### Approach 1: Brute Force (What I initially thought of)
- Time: O(n²)
- Space: O(1)
- Where I got stuck: Would be too slow for large inputs
- Tradeoff: Simple to understand but inefficient

### Approach 2: Hash Map (What I actually implemented)
- Time: O(n)
- Space: O(n)
- Where I got stuck: Initially included an unnecessary `j !== i` check
- Tradeoff: Optimal time complexity with linear space overhead

## Key Insight
The `j !== i` check in my original implementation was unnecessary because the hash map only contains indices of elements we've already seen. When we're at index `i`, the map only has elements from indices `[0, i-1]`, so any match we find will automatically have `j < i`, making `j !== i` always true.

## Edge Cases You Tested
- Empty array → should return []
- Single element → should return []
- No solution exists → should return []
- Negative numbers → [-1, -2, -3, -4, -5] with target -8 → [2, 4]
- Zeros → [0, 4, 3, 0] with target 0 → [0, 3]
- Duplicate numbers → [3, 3] with target 6 → [0, 1]
- Large arrays (10k elements) → performance test

## Similar Problems You've Seen
- Contains Duplicate (same hash map pattern but checking for duplicates instead of complements)
- Valid Anagram (frequency counting variant)
- Future: 3Sum, 4Sum (extensions of this pattern)

## Mistakes I Made
1. **Redundant check**: I included `j !== i` which was unnecessary and showed I wasn't thinking carefully about what the map contained at each step
2. **Export issue**: Forgot to export the function in TypeScript when writing testable code
3. **Not testing edge cases initially**: My first pass only considered the happy path examples from LeetCode

This taught me to always ask: "What does my data structure actually contain at this point in the algorithm?" rather than just copying patterns mechanically.