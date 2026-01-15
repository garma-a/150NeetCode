class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	subsets(nums) {
		const global = [];
		/**
		 * @param {number[]} nums
		 * @param {number[]} subset
		 * @return {number[][]}
		 */
		function backtrack(nums, subset = []) {
			if (!nums.length) {
				global.push([...subset]);
				return;
			}
			backtrack(nums.slice(1), [...subset])
			backtrack(nums.slice(1), [...subset, nums[0]]);
		}
		backtrack(nums);
		return global;
	}
}

class Solution2 {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	subsets(nums) {
		const global = [];
		const stack = [[0, []]];
		while (stack.length) {
			const [idx, sub] = stack.pop();
			if (idx >= nums.length) {
				global.push([...sub]);
				continue;
			};
			stack.push([idx + 1, [...sub, nums[idx]]])
			stack.push([idx + 1, [...sub]]);
		}
		return global;

	}
}
