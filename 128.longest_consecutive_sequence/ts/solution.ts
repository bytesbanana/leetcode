function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);

  let longestSeq = 0;

  for (let n of nums) {
    if (!numSet.has(n - 1)) {
      let length = 0;
      while (numSet.has(n + length)) {
        length++;
      }
      if (longestSeq < length) longestSeq = length;
    }
  }

  return longestSeq;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
