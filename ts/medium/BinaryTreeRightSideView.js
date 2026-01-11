
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
	 * @return {number[]}
	 */
	rightSideView(root) {
		if (!root) return [];
		const ans = [root.val];
		const q = [root];
		while (q.length) {
			const copy = [...q];
			const level = [];
			for (const node of copy) {
				if (node.left) {
					level.push(node.left.val);
					q.push(node.left);
				}
				if (node.right) {
					level.push(node.right.val);
					q.push(node.right);
				}
				q.shift()
			}
			if (level.length)
				ans.push(level.pop())
		}
		return ans;
	}
}
