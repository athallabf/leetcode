# Valid Anagram - LeetCode #242

## Pattern
Hash Map (Frequency Counting)

## Intuition
Two strings are anagrams if they have the exact same character frequencies. Instead of sorting both strings (O(n log n)), we can count characters in the first string, then decrement counts while iterating through the second string. If any count goes negative or we finish with non-zero counts, they're not anagrams. This gives O(n) time with O(1) space (since alphabet size is fixed).

## Approaches You Considered

### Approach 1: Sorting (Initial Thought)
- Time: O(n log n)
- Space: O(log n) or O(n) depending on sorting algorithm
- Where I got stuck: Would be slower than necessary for large strings
- Tradeoff: Simple to implement but not optimal

### Approach 2: Hash Map Frequency Counting (Current Implementation)
- Time: O(n)
- Space: O(1) - bounded by alphabet size (26 for lowercase English, but technically O(n) for Unicode)
- Where I got stuck: Initially missed the length check optimization
- Tradeoff: Optimal time with constant space for fixed alphabet

### Approach 3: Array Counter (Alternative for lowercase English)
- Time: O(n)
- Space: O(1) - fixed size array of 26
- Where I got stuck: Didn't consider this optimization initially
- Tradeoff: Same complexity but potentially faster due to cache locality

## Key Insight
The early length check (`if (s.length !== t.length) return false`) is crucial - it's an O(1) operation that can immediately eliminate half of the non-anagram cases. Without this, we'd do unnecessary work on strings that can't possibly be anagrams due to different lengths.

## Edge Cases You Tested
- Empty strings → true
- Different lengths → false (caught early by length check)
- Single character match/mismatch → works correctly
- Unicode characters → handled correctly by Map
- Case sensitivity → "Hello" vs "hello" correctly returns false
- Repeated characters → "aacc" vs "ccac" works
- Near-misses → "aacc" vs "ccab" correctly returns false
- Original test cases → "kasur"/"rusak" = true, "ngops"/"rusak" = false

## Similar Problems You've Seen
- Two Sum (hash map for lookup instead of frequency)
- Contains Duplicate (hash set for presence instead of frequency)
- Future: Group Anagrams (uses frequency signature as key), First Unique Character in String

## Mistakes I Made
1. **Missing length check initially**: Would have done unnecessary work on different-length strings
2. **Export omission**: Forgot to export function in TypeScript when adding tests
3. **Incorrect test case**: Had "aacc" vs "ccac" expecting true but typed "ccab" in test (caught by test failure!)
4. **Not considering array optimization**: For lowercase English only, a fixed-size array would be more efficient than Map

This reinforced the importance of:
- Always checking for obvious disqualifiers first (length check)
- Considering the character set when choosing data structures
- Letting tests catch logical errors in test cases themselves
- Clean separation of concerns (no console.log in solution files)