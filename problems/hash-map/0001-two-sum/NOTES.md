# Two Sum - LeetCode #1

## Pattern
Hash Map (Index Lookup)

## Intuition
The brute force approach checks every pair (O(n²)), but we can do better by storing previously seen numbers in a hash map. As we iterate, we check if the complement (target - current number) exists in our map. If it does, we've found our pair. This reduces time complexity to O(n) at the cost of O(n) space.

## Approaches Considered

### Brute Force
- Time: O(n²)
- Space: O(1)
- Simple but too slow for large inputs

### Hash Map (Optimal)
- Time: O(n)
- Space: O(n)
- Store previously seen numbers for O(1) lookup

## Key Insight
The hash map only contains indices we've already seen. Since we check BEFORE adding the current element, any match automatically has index < current index. No need for `j !== i` check.

## Edge Cases Tested
- Empty array
- Single element
- No solution exists
- Negative numbers
- Zeros
- Duplicate numbers
- Large arrays (10k elements)

## Mistakes Made
1. Initially included unnecessary `j !== i` check
2. Forgot to export function in TypeScript

## Similar Problems
- Contains Duplicate
- Valid Anagram
- 3Sum, 4Sum
