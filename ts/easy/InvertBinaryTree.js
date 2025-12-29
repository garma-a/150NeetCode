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
	 * @return {TreeNode}
	 */
	invertTree(root) {
		if (!root) return null;
		let right = root.right;
		root.right = root.left;
		root.left = right;
		if (root.left)
			this.invertTree(root.left)
		if (root.right)
			this.invertTree(root.right)
		return root;
	}
}
