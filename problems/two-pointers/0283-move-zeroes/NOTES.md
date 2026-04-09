# Move Zeroes - LeetCode #283

## Pattern
Two Pointers (Partition / In-place modification)

## Raw Thoughts (Unfiltered)

the first way i thought was to iterate through the array, detect if current index value is 0 and strip it out from the array, add num variable to track how many zeroes, then add zeroes to the end of the array using the num variable

## Thoughts (Cleaned)

I was completely stuck and couldn't figure out where to start. My initial 
thought was to use splice to remove zeros, but I didn't know how to fill 
the end with zeros after removing them. I couldn't see how the two-pointer 
pattern from Valid Palindrome could apply to this problem.

## Key Insights (After Help)

- slow pointer tracks where next non-zero should go
- fast pointer just scans through looking for non-zeros
- Don't need to "remove" zeros - just overwrite them with non-zeros
- After loop, fill remaining with zeros using slow as count

## Edge Cases Tested

- Array with all zeros → [0,0,0]
- Array with no zeros → unchanged
- Single element [0] → [0]
- Single element [1] → [1]

## Mistakes Made

- Initially thought about using splice but didn't know how to handle filling end
- Couldn't connect two-pointer pattern from Valid Palindrome to this problem
- Needed guidance to understand the partition concept