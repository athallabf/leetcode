function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    const j = map.get(complement)
    if (map.has(complement) && j !== i){
      return [j, i]
    }

    map.set(nums[i], i)
  }
  return []
}
