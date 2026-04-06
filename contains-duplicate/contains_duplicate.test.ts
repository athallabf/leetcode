import { describe, it, expect } from 'bun:test';
import { containsDuplicate, containsDuplicateOneLine, containsDuplicateSort } from './contains_duplicate';

describe('containsDuplicate', () => {
  const testCases = [
    { input: [1, 2, 3, 1], expected: true },
    { input: [1, 2, 3, 4], expected: false },
    { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
    { input: [], expected: false },
    { input: [1], expected: false },
    { input: [0, 0, 0, 0], expected: true },
    { input: [-1, -2, -3, -1], expected: true },
    { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], expected: false },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`returns ${expected} for input [${input}]`, () => {
      expect(containsDuplicate(input)).toBe(expected);
      expect(containsDuplicateOneLine(input)).toBe(expected);
      
      const inputCopy = [...input];
      expect(containsDuplicateSort(inputCopy)).toBe(expected);
    });
  });

  it('handles large arrays efficiently', () => {
    const largeArray = Array.from({ length: 100000 }, (_, i) => i);
    expect(containsDuplicate(largeArray)).toBe(false);
    
    const largeArrayWithDup = [...largeArray, 50000];
    expect(containsDuplicate(largeArrayWithDup)).toBe(true);
  });

  it('works with original test case', () => {
    expect(containsDuplicate([1, 2, 3, 4, 3])).toBe(true);
  });
});