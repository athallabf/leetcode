# Contains Duplicate - LeetCode #217

## Pattern
Hash Set (Presence Detection)

## Intuition
Instead of comparing every element with every other element (O(n²)), we can use a hash set to track elements we've seen. As we iterate through the array, if we encounter an element already in the set, we know there's a duplicate. This gives us O(n) time with O(n) space.

## Approaches You Considered

### Approach 1: Brute Force (Initial Thought)
- Time: O(n²)
- Space: O(1)
- Where I got stuck: Left commented out in file as reference
- Tradeoff: Simple but inefficient for large inputs

### Approach 2: Hash Set (Current Implementation)
- Time: O(n)
- Space: O(n)
- Where I got stuck: Initially had multiple duplicate function declarations
- Tradeoff: Optimal time with linear space overhead

### Approach 3: Sorting (Alternative)
- Time: O(n log n)
- Space: O(1) or O(n) depending on sort implementation
- Where I got stuck: Had logic error - returned true unconditionally in loop
- Tradeoff: Better space than hash set but worse time; modifies input

## Key Insight
The sorting approach had a critical bug: `for (let i = 1; i < nums.length; i++) { return true; }` - this would return true on the first iteration regardless of whether there was actually a duplicate! The correct approach needs to compare adjacent elements after sorting: `if (nums[i] === nums[i-1])`.

## Edge Cases You Tested
- Empty array → false
- Single element → false  
- All same elements → true
- Negative numbers with duplicates → true
- No duplicates → false
- Large array (100k elements) → performance maintained
- Original test case [1,2,3,4,3] → true

## Similar Problems You've Seen
- Two Sum (uses hash map for complement lookup instead of presence checking)
- Valid Anagram (frequency counting with hash map)
- Future: Happy Number (cycle detection with set), Longest Consecutive Sequence

## Mistakes I Made
1. **Multiple function declarations**: Left 3 versions of containsDuplicate in the file - this would cause TypeScript errors
2. **Sorting logic error**: Had premature return true in the sorting approach
3. **Not cleaning up experiments**: Left commented out brute force and test calls in the file
4. **Initially forgot export**: Needed to make functions testable

This reinforced that solutions should be clean and production-ready - no commented out code, no multiple implementations in the same file, and always test edge cases.