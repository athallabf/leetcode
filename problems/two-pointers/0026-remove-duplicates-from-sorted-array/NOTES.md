# Remove Duplicates from Sorted Array - LeetCode #26

## Pattern

Two-pointers technique with slow and fast pointers. Slow pointer tracks position for next unique element, fast pointer scans array. Since array is sorted, duplicates are adjacent.

## Raw Thoughts (Unfiltered)

struggling with indices again slow vs fast comparison should i start slow at 0 or 1? wait first element always unique so slow start at 1? no actually slow is where to write next unique so after first element it's 1? 
comparing nums[fast] with nums[slow-1]? makes sense because slow-1 is last unique placed
oh and need to return slow not length because slow is count of uniques
test cases: [1,1,2] should return 2 and array [1,2,_]
wait need to handle empty array edge case
for loop start fast at 1? yes because we already accounted for index 0
[1,1,1] should return 1 
[1,2,3] should return 3 unchanged

## Thoughts (Cleaned)

The remove duplicates problem on a sorted array can be solved efficiently with two pointers. Since duplicates are adjacent in a sorted array, we can use:
- Slow pointer: tracks the position where the next unique element should be placed
- Fast pointer: scans through each element in the array

We initialize slow to 1 because the first element (at index 0) is always unique and doesn't need to be moved. Then we iterate fast from 1 to the end. For each element, we compare it with the element just before the slow pointer (nums[slow-1]), which represents the last unique element we've placed. If they're different, we've found a new unique element, so we copy it to nums[slow] and increment slow. At the end, slow represents the number of unique elements.

## Key Insights (After Reflection)

- In a sorted array, duplicates are always adjacent, so we only need to compare with the previous element
- The slow pointer doesn't just track position—it directly represents the count of unique elements processed so far
- We must return slow, not the array length, because the array may have trailing duplicates beyond the unique section
- Edge case: empty array should return 0 (handled naturally by slow=1 and loop not executing, but need to check)

## Edge Cases Tested

- Empty array [] → returns 0
- All duplicates [1,1,1,1] → returns 1
- No duplicates [1,2,3,4] → returns 4, array unchanged
- Single element [5] → returns 1
- Mixed pattern [0,0,1,1,1,2,2,3,3,4] → returns 5 with [0,1,2,3,4]

## Mistakes Made

- Initially tried comparing nums[fast] with nums[slow] instead of nums[slow-1], causing off-by-one errors
- Forgot to return slow instead of nums.length
- Didn't consider that the first element is automatically unique, leading to unnecessary complexity
- Almost created a new array instead of modifying in-place (remembered from Move Zeros problem)

## Similar Problems

- #283 Move Zeros (same two-pointer pattern but looking for non-zero instead of unique)
- #80 Remove Duplicates from Sorted Array II (allows up to 2 duplicates)
- #977 Squares of a Sorted Array (different two-pointer approach from both ends)
- #167 Two Sum II - Input array is sorted (two pointers from start and end)