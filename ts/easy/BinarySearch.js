class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number}
	 */
	search(nums, target) {

		let [l, r] = [0, nums.length - 1];
		while (l <= r) {
			let mid = Math.trunc(l + (r - l) / 2)
			if (nums[mid] === target) {
				return mid;
			} else if (nums[mid] < target) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}
		}
		return -1;
	}
}
