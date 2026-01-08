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
	 * @return {number[][]}
	 */
	levelOrder(root) {
		if (!root) return [];
		const q = [root];
		const ans = [];
		while (q.length) {
			const level = [];
			const copy = [...q];
			for (const node of copy) {
				level.push(node.val);
				q.shift();
				if (node.left)
					q.push(node.left);
				if (node.right)
					q.push(node.right);
			}
			ans.push([...level]);

		}
		return ans;
	}
}
