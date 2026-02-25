
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let maxReach = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (i > maxReach) return false;
      if (maxReach >= nums.length - 1) return true;
      maxReach = Math.max(maxReach, i + nums[i]);

    }
  }
}
