/* time limit exceeded
function containsDuplicate(nums: number[]): boolean {
  const n: number = nums.length;
  for (let i: number = 0; i < n - 1; i++) {
    for (let j: number = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
}

containsDuplicate([1, 2, 3, 4, 3]);
 **/

function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

function containsDupliacateHash(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
