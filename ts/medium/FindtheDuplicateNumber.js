class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	findDuplicate(nums) {

		for (let i = 0; i < nums.length; i++) {
			const index = Math.abs(nums[i]) - 1;
			if (nums[index] < 0) {
				return nums[index] * -1;
			}
			nums[index] *= -1;
		}
	}
}
