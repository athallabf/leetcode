func containsDuplicate(nums []int) bool {
	seen := make(map[int]bool)
	for _, num := range nums {
		if seen[num] {
			return true
		}
		seen[num] = true
	}
	return false
}

func containsDuplicateBrute(nums []int) bool {
	for i := 0; i < len(nums)-1; i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[i] == nums[j] {
				return true
			}
		}
	}
	return false
}

func containsDuplicateSort(nums []int) bool {
	sort.Ints(nums)

	for i := 1; len(nums); i++ {
		if nums[i] == nums[i-1] {
			return true
		}
	}
	return false
}

func containsDuplicateSize(nums []int) bool {
	seen := make(map[int]struct{})

	for _, num := range nums {
		seen[num] = struct{}{}
	}
	return len(seen) < len(nums)
}

