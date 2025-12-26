class Solution {
	search(nums: number[], target: number): number {
		let [l, r] = [0, nums.length - 1];
		while (l < r) {
			const mid = Math.floor(l + (r - l) / 2);
			if (nums[mid] > nums[r]) {
				l = mid + 1;
			} else {
				r = mid;
			}
		}
		let pivot = l;
		let index = this.binary_search(nums, target, 0, pivot);
		index = index === -1 ? this.binary_search(nums, target, pivot, nums.length - 1) : index;
		return index;
	}

	binary_search(nums: number[], target: number, start: number, end: number): number {
		let [l, r] = [start, end == nums.length ? end - 1 : end];
		while (l <= r) {
			const mid = Math.floor(l + (r - l) / 2)
			if (nums[mid] == target) {
				return mid;
			} else if (nums[mid] > target) {
				r = mid - 1;
			} else {
				l = mid + 1;
			}
		}
		return -1;
	}

}





