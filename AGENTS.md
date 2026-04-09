# AGENTS.md - LeetCode Practice Guidelines (Reflection-Focused)

## Philosophy

This repo is not for storing LeetCode submissions—it's a **learning journal** where you distill what solving each problem taught you. Every entry should answer:
- What pattern did I recognize (or fail to recognize)?
- What mental model clicked?
- What mistake did I make, and what did it reveal about my thinking?
- How would I explain this to a teammate?

Solutions pasted from LeetCode are anchors—not the primary artifact. The real value lives in your notes, tests, and reflections.

## How This Works

### Your Role
1. Solve problems on LeetCode.com
2. Paste your solution into the appropriate problem folder here
3. Write a `NOTES.md` explaining it in your own words
4. Write test cases that stress edge cases
5. Update the pattern and progress trackers

### My Role
- I will NOT provide solutions unless you're explicitly stuck
- I will ask probing questions to surface your understanding:
  - "What pattern does this belong to?"
  - "What would break your approach?"
  - "How would you explain this to a peer?"
- I will help you refine your notes and tests
- I will track your pattern recognition over time
- I will ALWAYS read your NOTES.md after you write it and improve it if needed:
  - Keep your raw thoughts exactly as you wrote them
  - Add cleaned-up version alongside if needed
  - Add sections like Key Insights, Edge Cases, Mistakes if missing
  - Fix English if awkward (but keep your meaning)
  - Add insights you might have missed

## Solution File Structure (After Pasting from LeetCode)

Each problem directory should contain after your LeetCode session:

```
problem-name/
├── problem.ts          # Your LeetCode solution (cleaned: one function, no console.log, no junk)
├── problem.go          # Go equivalent if you wrote it
├── problem.test.ts     # Your own test cases (written AFTER solving)
├── NOTES.md            # Your reflection (see template below)
└── README.md           # Optional: problem statement + your approaches
```

### NOTES.md Template (Fill This Out Honestly)
```markdown
# Problem Name - LeetCode #XXX

## Pattern
[What category is this? Be specific: Hash Map frequency counting? Two-pointer variant? etc.]

## Raw Thoughts (Unfiltered)
[Write your thoughts exactly as they come - typos, incomplete sentences, messy notes. This captures your real thinking process.]

## Thoughts (Cleaned)
[Your thoughts rewritten with proper English - still your ideas, just polished. This is what you'd show a teammate.]

## Key Insights (After Reflection)
- [The one thing that made this problem click]
- [What you learned from mistakes]
- [Performance improvements found]

## Edge Cases Tested
- [Specific inputs you tried that revealed flaws or confirmed correctness]
- [What made you add those test cases?]

## Mistakes Made
- [What wrong assumption did you make?]
- [What bug did you introduce?]
- [What would you warn future-you about?]

## Similar Problems
- [Other LeetCode problems where you used this same pattern]
- [How this connects to previous problems]
```

## Weekly Reflection Process

Every Sunday, we review:
1. **Pattern Bank**: Which patterns have you seen 3+ times? Which still feel new?
2. **Mistake Trends**: Are you making the same type of error repeatedly? (e.g., off-by-one, missing edge cases)
3. **Fluency Check**: Can you solve a problem from 2 weeks ago without looking?
4. **Next Focus**: What pattern should you deliberately practice next week?

## Code Quality Standards (For Pasted Solutions)

When you paste from LeetCode, clean up:
- ✅ One function per file (no multiple declarations)
- ✅ No commented-out code (save alternatives in NOTES.md if useful)
- ✅ No console.log or debug prints
- ✅ Proper TypeScript typing (no `any` unless unavoidable with explanation)
- ✅ Idiomatic Go (if you provide Go version)

## Tracking Files We'll Maintain

- `PATTERNS.md`: Running list of patterns you've encountered, with problem counts
- `PROGRESS.md`: Problems solved per week, difficulty, confidence rating, pattern tags
- `MISTAKES.md`: Common errors you're working to eliminate (updated weekly)

## English Writing Practice

Writing NOTES.md in English serves double purpose:
1. **Reinforce learning** - explaining concepts solidifies understanding
2. **Improve English** - practice technical writing in a foreign language

### Writing Guidelines
- Don't worry about perfect grammar - clarity first
- Write in full sentences when possible
- Use proper capitalization (start sentences with capital letters)
- I will point out awkward phrasing and suggest improvements
- This is a habit to build - consistency matters more than perfection

### My Commitment to You
I will always read your NOTES.md in context of your learning journey. I will:
- Point out unclear parts and ask for clarification
- Suggest better ways to express your thoughts
- Celebrate your insights in my responses
