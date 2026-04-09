export function isPalindrome(s: string): boolean {
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < cleanString.length / 2; i++) {
    if (cleanString[i] !== cleanString.at(-(i + 1))) {
      return false;
    }
  }
  return true;
}