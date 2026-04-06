import { describe, it, expect } from 'bun:test';
import { twoSum } from './two_sum';

describe('twoSum', () => {
  it('should return indices of two numbers that add up to target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('should handle zeros', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  it('should return empty array when no solution exists', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
    expect(twoSum([1], 1)).toEqual([]);
  });

  it('should work with larger arrays', () => {
    const nums: number[] = [];
    for (let i = 0; i < 10000; i++) {
      nums.push(i);
    }
    expect(twoSum(nums, 19997)).toEqual([9998, 9999]);
  });
});