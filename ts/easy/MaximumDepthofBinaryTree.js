class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}


class Solution {
	/**
	 * @param {TreeNode} root
	 * @return {number}
	 */
	maxDepth(root) {
		if (!root) return 0;
		const stack = [[root, 1]];
		let res = 0;
		while (stack.length) {
			const [top, depth] = stack.pop();
			if (top) {
				res = Math.max(res, depth);
				stack.push([top.left, depth + 1]);
				stack.push([top.right, depth + 1]);
			}
		}
		return res;
	}
}
