export function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set(nums1);
  const result = new Set();

  for (const n of nums2) {
    // if (set.has(n) && !result.has(n)) { // this was unnecessary because set automatically dedupe
    if (set.has(n)) {
      result.add(n);
    }
  }

  return [...result] as number[];
}
