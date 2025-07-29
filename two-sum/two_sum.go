func twoSum(nums []int, target int) []int {
	mp := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		if j, ok := mp[complement]; ok && j != i {
			return []int{i, j}
		}
		mp[num] = i
	}

	return []int{}
}
