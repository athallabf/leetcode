export function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

// Alternative approach: one-liner using Set size comparison
export function containsDuplicateOneLine(nums: number[]): boolean {
  return new Set(nums).size < nums.length;
}

// Alternative approach: sorting (modifies input array)
export function containsDuplicateSort(nums: number[]): boolean {
  nums.sort((a, b) => a - b); // Important: numeric sort
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}