# Learning Progress Tracker

Track your weekly progress, difficulty distribution, and confidence levels.

## Weekly Log

| Week | Problems Solved | Difficulty Breakdown | Patterns Practiced | Confidence (1-5) | Notes |
|------|----------------|----------------------|-------------------|------------------|-------|
| 2026-W14 | 0 | 0E, 0M, 0H | - | - | Starting baseline |
| 2026-W15 | 2 | 2E, 0M, 0H | Hash Map, Two Pointers | 5 | Added Remove Duplicates problem, mastering two-pointers pattern |

## Difficulty Distribution Goal
Gradually increase challenge while maintaining accuracy:
- Weeks 1-4: 70% Easy, 30% Medium
- Weeks 5-8: 50% Easy, 40% Medium, 10% Hard  
- Weeks 9-12: 30% Easy, 50% Medium, 20% Hard
- Week 13+: 20% Easy, 60% Medium, 20% Hard

## Fluency Checks (Every Sunday)
Can you solve these without looking?
- [ ] Two Sum (from 2 weeks ago)
- [ ] Valid Parentheses (from 1 month ago)
- [ ] Binary Search (from 6 weeks ago)

## Problem Log Template
When you solve a problem, add it here:

```
### [Problem Name] - LeetCode #XXX
- Date: YYYY-MM-DD
- Difficulty: Easy/Medium/Hard
- Pattern: [Primary pattern used]
- Approach: [Brief description of your solution]
- Time/Space: O(x) / O(y)
- Mistakes: [What you got wrong initially]
- Confidence: 1-5 (how well you understand it now)
- Links: [To your NOTES.md]
```

### Remove Duplicates from Sorted Array - LeetCode #26
- Date: 2026-04-20
- Difficulty: Easy
- Pattern: Two Pointers (in-place modification)
- Approach: Slow/fast pointers where slow tracks unique position, fast scans; compare nums[fast] with nums[slow-1] to detect new uniques
- Time/Space: O(n) / O(1)
- Mistakes: Compared with nums[slow] instead of nums[slow-1]; returned nums.length instead of slow; forgot empty array edge case
- Confidence: 4
- Links: ./problems/two-pointers/0026-remove-duplicates-from-sorted-array/NOTES.md
```

## Example Entry
```
### Two Sum - LeetCode #1
- Date: 2026-04-06
- Difficulty: Easy
- Pattern: Hash Map (index lookup)
- Approach: Single pass hash map storing {number: index}, checking for complement
- Time/Space: O(n) / O(n)
- Mistakes: Included unnecessary j !== i check; forgot export for testing
- Confidence: 5 (understands why hash map works, edge cases, and tradeoffs)
- Links: ./two-sum/NOTES.md
```

## Monthly Review Questions
At end of each month, answer:
1. Which 3 patterns feel most solid now?
2. Which pattern still trips you up despite practice?
3. Are you leaning too heavily on one approach (e.g., always hash map)?
4. What's one algorithm you want to deliberately practice next month?