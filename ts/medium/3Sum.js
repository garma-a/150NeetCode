const { resolve } = require("path");

class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	threeSum(nums) {
		nums.sort((a, b) => a - b);
		const result = [];

		for (let idx = 0; idx < nums.length - 2; idx++) {
			// Skip duplicate values for the first number
			if (idx > 0 && nums[idx] === nums[idx - 1]) continue;

			// Early termination: if smallest number is positive, no triplets possible
			if (nums[idx] > 0) break;

			let left = idx + 1;
			let right = nums.length - 1;

			while (left < right) {
				const sum = nums[idx] + nums[left] + nums[right];

				if (sum > 0) {
					right--;
				} else if (sum < 0) {
					left++;
				} else {
					result.push([nums[idx], nums[left], nums[right]]);

					// Skip duplicates for left pointer
					while (left < right && nums[left] === nums[left + 1]) left++;
					// Skip duplicates for right pointer
					while (left < right && nums[right] === nums[right - 1]) right--;

					left++;
					right--;
				}
			}
		}

		return result;
	}
}

// so 
