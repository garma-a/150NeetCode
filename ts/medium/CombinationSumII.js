
class Solution {
	/**
	 * @param {number[]} candidates
	 * @param {number} target
	 * @return {number[][]}
	 */
	combinationSum2(candidates, target) {
		let answer = [];
		let buffer = [];
		candidates.sort((a, b) => a - b);
		function backtrack(curTotal = 0, index = 0) {
			if (curTotal === target) {
				answer.push([...buffer]);
				return;
			}
			if (curTotal > target || index >= candidates.length) return;
			buffer.push(candidates[index]);
			backtrack(curTotal + candidates[index], index + 1);
			buffer.pop();
			while (index < candidates.length - 1 && candidates[index] === candidates[index + 1]) index++;
			backtrack(curTotal, index + 1);
		}
		backtrack();
		return answer;
	}

}
