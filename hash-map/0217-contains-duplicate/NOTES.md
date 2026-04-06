# Contains Duplicate - LeetCode #217

## Pattern
Hash Set (Presence Detection)

## Intuition
Use a hash set to track elements we've seen. If we encounter an element already in the set, there's a duplicate.

## Approaches

### Hash Set (Optimal)
- Time: O(n)
- Space: O(n)
- Check before adding

### Sorting
- Time: O(n log n)
- Space: O(1)
- Compare adjacent after sorting

## Key Insight
Early termination - return as soon as duplicate is found.

## Edge Cases
- Empty array
- Single element
- All same elements
- Negative numbers
- Large arrays

## Mistakes
1. Had multiple duplicate function declarations initially
2. Had logic error in sorting approach (premature return true)

## Similar Problems
- Two Sum
- Valid Anagram
