# Valid Palindrome - LeetCode #125

## Pattern

Two Pointers (from both ends)

## Raw Thoughts (Unfiltered)

the first thought that came to my mind was: checking both sides of the string and then check using if statement

now i need to figure out how to strip the non-alphanumeric char, i googled and got this `s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();`

then i thought about the how to track both sides of the string and compare them
i initially used the for loop but i got stuck, i didnt know how to track the end of the string, then i got the syntax from google which is using `-i` and string.at()

and then after a bit of trial and error i got the solution

## Thoughts (Cleaned)

My first thought was to check both sides of the string and compare them using an if statement.
Next, I needed to figure out how to strip non-alphanumeric characters. I googled and found this regex solution:

```typescript
s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
```

Then I thought about how to track both sides of the string and compare them. I initially used a for loop but got stuck - I didn't know how to track the end of the string. I found the syntax from Google, which is using negative indices with `.at(-(i+1))`.
After some trial and error, I got the solution working.

## Key Insights (After Reflection)

- Each iteration compares 2 positions (start and end), so you only need `length / 2` iterations
- `.at(-1)` gets the last character, `.at(-2)` gets second-to-last, etc.
- Regex `/[^a-zA-Z0-9]/g` removes everything except letters and numbers
- Case insensitive: `.toLowerCase()`

## Edge Cases Tested

- Empty string → true
- String with only special characters → true
- Single character → true
- Mixed case ("A man, a plan...") → true

## Mistakes Made

- Initially forgot to divide by 2 in loop (redundant checks)
- Forgot to call `.toLowerCase()` for case-insensitive comparison
