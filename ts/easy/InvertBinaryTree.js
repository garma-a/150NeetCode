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
		const q = [root];
		while (q.length) {
			const top = q.shift();
			const right = top.right;
			top.right = top.left;
			top.left = right;
			if (top.right) q.push(top.right);
			if (top.left) q.push(top.left);
		}
		return root;
	}
}
