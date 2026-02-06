class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	rob(nums) {
		let table = new Array(nums.length).fill(0);
		table[0] = nums[0];
		table[1] = Math.max(nums[0], nums[1])
		for (let i = 2; i < nums.length; i++) {
			table[i] += Math.max(nums[i] + table[i - 2], table[i - 1]);
		}
		return table[nums.length - 1];
	}

	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	rob2(nums) {
		if (nums.length === 0) return 0;
		if (nums.length === 1) return nums[0];
		if (nums.length === 2) return Math.max(nums[0], nums[1]);
		return Math.max(this.rob(nums.slice(1)), this.rob(nums.slice(0, -1)))

	}


}
