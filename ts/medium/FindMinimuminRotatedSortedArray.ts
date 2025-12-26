class Solution {
	findMin(nums: number[]): number {
		let [l, r] = [0, nums.length - 1];
		let res = nums[0];
		while (l <= r) {
			if (nums[l] < nums[r]) {
				res = Math.min(res, nums[l]);
				break;
			}
			const mid = Math.floor(l + (r - l) / 2);
			res = Math.min(res, nums[mid]);
			if (nums[mid] >= nums[l]) {
				l = mid + 1;
			} else {
				r = mid - 1;
			}

		}
		return res;
	}

}
