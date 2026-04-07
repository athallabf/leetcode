# Intersection of Two Arrays - LeetCode #349

## Thoughts

Actually the first time i am capable of solving problem without looking at the solution. How did i approach this? when i see _unique_ i immediately remember the `new Set()` which removes duplicate, and then we can just store the nums1 input into Set(), it automatically removes duplicate and then we can loop through the second array (num2) and then check for every number using set.has(n), initially it didn't pass because i only had if (set.has(n)) as the condition hence the result was duplicate (at first i used basic array to store the results) and then i changed the result into Set too and it works wonderfully, the `!result.has(n)` was unnecessary because Set handles the duplicate removal

## Pattern

Hash Set (Set Intersection)

## Intuition

1. Convert nums1 to a Set for O(1) lookup
2. Iterate through nums2, check if exists in Set
3. Add to result Set (ensures uniqueness)

## Approaches

### Hash Set (Optimal)

- Time: O(n + m)
- Space: O(n)
- Two passes, O(1) lookup each

## Key Insight

Using Set ensures uniqueness in result automatically. No need to track duplicates.

## Edge Cases

- Empty arrays
- Arrays with no intersection
- Duplicate elements in both arrays
- Same array passed twice

## Mistakes

None - derived solution cleanly

## Similar Problems

- Contains Duplicate
- Two Sum
