class Solution {
	/**
	 * @param {string} s
	 * @param {number} k
	 * @return {number}
	 */
	characterReplacement(s, k) {
		let [l, r] = [0, 0];
		let freq = new Array(26).fill(0);
		let maxLength = 0;
		let curMxFreq = 0;
		while (r < s.length) {
			let charIndex = s[r].charCodeAt(0) - 65;
			freq[charIndex]++;
			curMxFreq = Math.max(curMxFreq, freq[charIndex]);
			if ((r - l + 1) - curMxFreq > k) {
				freq[s[l].charCodeAt(0) - 65]--;
				l++;
			}
			maxLength = Math.max(maxLength, r - l + 1);
			r++;
		}
		return maxLength;
	}
}
