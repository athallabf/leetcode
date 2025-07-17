func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	mapWord := make(map[rune]int)

	for _, char := range s {
		mapWord[char]++
	}

	for _, char := range t {
		mapWord[char]--

		if mapWord[char] < 0 {
			return false
		}
	}
	return true
}
