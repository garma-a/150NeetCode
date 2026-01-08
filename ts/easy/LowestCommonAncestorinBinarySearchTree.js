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
	 * @param {TreeNode} p
	 * @param {TreeNode} q
	 * @return {TreeNode}
	 */
	lowestCommonAncestor(root, p, q) {
		if (!root) return null;
		if (p.val < root.val && q.val < root.val)
			return this.lowestCommonAncestor(root.left, p, q);
		if (p.val > root.val && q.val > root.val)
			return this.lowestCommonAncestor(root.right, p, q);
		return root;
	}
}
