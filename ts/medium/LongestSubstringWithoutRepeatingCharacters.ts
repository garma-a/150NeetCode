class Solution {
	lengthOfLongestSubstring(s: string): number {
		let storage = new Set();
		let [prev, cur] = [0, 0];
		let mxLen = 0;
		while (cur < s.length) {
			while (storage.has(s[cur]) && prev < cur) {
				storage.delete(s[prev]);
				prev++;
			}
			storage.add(s[cur]);
			mxLen = Math.max(mxLen, cur - prev + 1);
			cur++;
		}
		return mxLen;
	}
}
