class Solution {
	/**
	 * @param {number[]} nums
	 * @return {number[][]}
	 */
	permute(nums) {
		let ans = [];
		let buffer = [];
		function backtrack(isTaken = new Set()) {
			if (sub.length === nums.length) {
				ans.push([...buffer]);
				return;
			}
			for (let i = 0; i < nums.length; i++) {
				if (!isTaken.has(nums[i])) {
					isTaken.add(nums[i]);
					buffer.push(nums[i]);
					backtrack(isTaken);
					buffer.pop();
					isTaken.delete(nums[i]);
				}

			}
		}
		backtrack();
		return ans;
	}
}
