import { describe, it, expect } from 'bun:test';
import { isAnagram } from './valid_anagram';

describe('isAnagram', () => {
  const testCases = [
    { s: "anagram", t: "nagaram", expected: true },
    { s: "rat", t: "car", expected: false },
    { s: "", t: "", expected: true },
    { s: "a", t: "ab", expected: false },
    { s: "a", t: "a", expected: true },
    { s: "ab", t: "a", expected: false },
    { s: "kasur", t: "rusak", expected: true },
    { s: "ngops", t: "rusak", expected: false },
    { s: "aaa", t: "aaa", expected: true },
    { s: "abc", t: "bca", expected: true },
    { s: "aacc", t: "acca", expected: true },
    { s: "aacc", t: "ccab", expected: false },
  ];

  testCases.forEach(({ s, t, expected }) => {
    it(`returns ${expected} for s="${s}", t="${t}"`, () => {
      expect(isAnagram(s, t)).toBe(expected);
      expect(isAnagram(t, s)).toBe(expected);
    });
  });

  it('handles unicode characters', () => {
    expect(isAnagram("😀😃", "😃😀")).toBe(true);
    expect(isAnagram("😀😃", "😀😄")).toBe(false);
  });

  it('handles case sensitivity', () => {
    expect(isAnagram("Hello", "hello")).toBe(false);
    expect(isAnagram("hello", "hello")).toBe(true);
  });
});