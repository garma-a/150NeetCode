const { globalAgent } = require("http");

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @returns {number[][]}
	 */
	combinationSum(nums, target) {
		const global = [];
		const buffer = [];

		/**
		 * @param {number[]} nums
		 * @param {number[]} sub
		 * @returns {number[][]}
		 */
		function backtrack(total = 0, idx = 0) {
			if (total > target || idx >= nums.length) return;
			if (total === target) {
				global.push([...buffer]);
				return;
			}
			buffer.push(nums[idx])
			backtrack(total + nums[idx], idx)
			buffer.pop(nums[idx])
			backtrack(total, idx + 1)
		}
		backtrack()
		return global;
	}
}

class Solution2 {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @returns {number[][]}
	 */
	combinationSum(nums, target) {
		const stack = [[0, 0, []]];
		const global = [];
		while (stack.length) {
			const [idx, total, sub] = stack.pop();
			if (idx >= nums.length || total > target) continue;
			if (total === target) {
				global.push([...sub]);
				continue;
			}
			stack.push([idx + 1, total, [...sub]]);
			stack.push([idx, total + nums[idx], [...sub, nums[idx]]]);
		}
		return global;
	}
}
