
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
	goodNodes(root) {
		if (!root) return 0;
		/**
		 * @type {[TreeNode,number][]} 
		 */
		const q = [[root, root.val]]
		let count = 0;
		while (q.length) {
			const [top, curmx] = q.shift();
			if (curmx <= top.val) count++;
			if (top.right) {
				q.push([top.right, Math.max(top.val, curmx)]);
			}
			if (top.left) {
				q.push([top.left, Math.max(top.val, curmx)]);
			}
		}
		return count;

	}
}
