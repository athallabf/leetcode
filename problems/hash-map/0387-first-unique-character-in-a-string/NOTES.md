# First Unique Character in String - LeetCode #387

## Pattern
Hash Map (Frequency Counting)

## Intuition
1. Count frequency of each character
2. Iterate through string in order to find first character with count === 1

## Approaches

### Hash Map (Optimal)
- Time: O(n)
- Space: O(n)
- Two passes: first to count, second to find first unique

## Key Insight
Map keys are unique - `map.set('a', 2)` overwrites the previous value. Don't need to store instances, just the count.

## Edge Cases
- All same characters
- No unique characters
- Empty string
- Single character
- First character is unique

## Mistakes
1. Initially had `else if (value > 1) return -1` - returned too early
2. Should only return -1 after checking ALL characters

## Similar Problems
- Valid Anagram
- Contains Duplicate
