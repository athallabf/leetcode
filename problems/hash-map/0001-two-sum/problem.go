package main

func twoSum(nums []int, target int) []int {
	mp := make(map[int]int)

	for i, num := range nums {
		complement := target - num

		if j, ok := mp[complement]; ok {
			return []int{j, i}
		}
		mp[num] = i
	}

	return []int{}
}
