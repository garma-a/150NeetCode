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
	 * @return {boolean}
	 */
	isBalanced(root) {
		function balancedfn(root) {
			if (!root) return [true, 0];
			const [leftBalanced, leftHeight] = balancedfn(root.left);
			const [rightBalanced, rightHeight] = balancedfn(root.right);
			let balanced = leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;
			if (!balanced) return [false, 0];
			return [balanced, Math.max(leftHeight, rightHeight) + 1];
		}
		return balancedfn(root)[0];
	}
}
