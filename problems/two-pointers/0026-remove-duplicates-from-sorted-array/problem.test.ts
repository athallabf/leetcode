import { describe, expect, test } from 'bun:test';
import { removeDuplicates } from './problem';

describe('Remove Duplicates from Sorted Array', () => {
  test('removes duplicates from [1,1,2]', () => {
    const nums = [1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([1, 2]);
  });

  test('removes duplicates from [0,0,1,1,1,2,2,3,3,4]', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
  });

  test('returns 1 for [1,1,1,1,1]', () => {
    const nums = [1, 1, 1, 1, 1];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([1]);
  });

  test('returns 0 for empty array', () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
  });

  test('returns length for array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums).toEqual([1, 2, 3, 4, 5]);
  });
});