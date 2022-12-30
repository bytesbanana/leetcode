function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => (a >= b ? 1 : -1));

  const N = nums.length;
  const answer = new Array<number[]>();

  for (let i = 0; i < N; i++) {
    let l = i + 1;
    let r = N - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        // console.log(i, l, r);
        answer.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return answer;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([-1, 0, 1, 0]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
