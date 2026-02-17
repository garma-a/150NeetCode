class Solution {
	/**
	 * @param {string} text1
	 * @param {string} text2
	 * @return {number}
	 */
	longestCommonSubsequence(text1, text2) {
		let pos = [];
		for (let row = 0; row < text1.length + 1; row++) {
			pos[row] = []
			pos[row][0] = 0;
		}

		for (let col = 0; col < text2.length + 1; col++)
			pos[0][col] = 0;

		for (let row = 1; row <= text1.length; row++) {
			for (let col = 1; col <= text2.length; col++) {
				if (text1[row - 1] === text2[col - 1]) {
					pos[row][col] = pos[row - 1][col - 1] + 1;
				} else {
					pos[row][col] = Math.max(pos[row - 1][col], pos[row][col - 1]);
				}
			}
		}
		return pos[text1.length][text2.length];
	}
}
