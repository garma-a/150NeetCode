class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  jump(nums) {
    if (nums.length === 1) return 0;
    let l = 0, r = nums[0];
    let maxReachable = 0;
    let steps = 1;
    while (r < nums.length - 1) {
      steps++;
      for (let i = l; i <= r; i++) {
        maxReachable = Math.max(maxReachable, nums[i] + i);
      }
      l = r + 1;
      r = maxReachable;

    }
    return steps;
  }
}
