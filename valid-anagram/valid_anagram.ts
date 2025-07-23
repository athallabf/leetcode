function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const map = new Map<string, number>()

  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1)
  }

  for (const char of t) {
    map.set(char, (map.get(char) || 0) - 1)

    if (map.get(char) < 0) return false
  }
  return true


}

console.log(isAnagram("kasur", "rusak"))
console.log(isAnagram("ngops", "rusak"))
