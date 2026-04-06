function firstUniqChar(s: string): number {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    // l e e t c o d e
    // if l

    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
