class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number}
	 */
	missingNumber(nums) {
		let [validSum, actuallSum] = [(nums.length * (nums.length + 1)) / 2, 0];
		for (const num of nums) {
			actuallSum += num;
		}
		return validSum - actuallSum;

	}
}
