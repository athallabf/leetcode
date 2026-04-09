/**
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slow = 0;

  // First pass: move all non-zeros to front
  // [0,1,0,3,12] → [1,_,_,_,_] → [1,3,_,_,_] → [1,3,12,_,_]
  //                  slow=1         slow=2          slow=3

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  // Second pass: fill remaining with zeros
  // slow=3, length=5 → fill positions 3,4 with 0
  // [1,3,12,_,_] → [1,3,12,0,0]

  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0;
  }
}
/**
    i = 0
    [0,1,0,3,12]
    slow = 0
    nums[fast] = nums[0] = 0
    if (0 !== 0) false

    i = 1
    slow = 0
    nums[fast] = nums[1] = 1
    if (1 !== 0) true
    nums[slow] = nums[0] = 0
    nums[0] = 1
    slow = 1

    i = 2
    [1,1,0,3,12]
    nums[fast] = nums[2] = 0 
    false skip

    i = 3
    slow = 1
    nums[fast] = nums[3] = 3
    nums[slow] = nums[1] = 1
    nums[1] = 1
    slow = 2
    [1,3,0,3,12]

    i = 4
    slow = 2
    nums[fast] = nums[4] = 12
    nums[slow] = nums[2] = 0
    nums[2] = 12
    slow = 3
    [1,3,12,3,12]

    end loop

    i = slow = 3
    i < 5 
    nums[i] = nums[slow] = nums[3]
    nums[3] = 0
    [1,3,12,0,12]

    i = 4
    nums[4] = 0
    [1,3,12,0,0]

    end loop


     */
