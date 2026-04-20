export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  
  /**
   slow = 1
   fast = slow - 1
   [1,1,2,2,3]

   num[slow] !== num[fast]
   num[slow] = num[fast]
   slow++

   */
  let slow = 1;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
}
