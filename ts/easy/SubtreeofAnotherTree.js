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
	 * @param {TreeNode} subRoot
	 * @return {boolean}
	 */
	isSubtree(root, subRoot) {
		if (!root && subRoot) return false;
		if (!root && !subRoot) return true;
		if (this.isSameTree(root, subRoot)) return true;
		return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
	}

	/**
	 * @param {TreeNode} root
	 * @param {TreeNode} subRoot
	 * @return {boolean}
	 */
	isSameTree(root, subRoot) {
		const [stack1, stack2] = [[root], [subRoot]];
		while (stack1.length && stack2.length) {
			const [top1, top2] = [stack1.pop(), stack2.pop()];
			if (top1 && !top2 || top2 && !top1) return false;
			if (!top1 && !top2) continue;
			if (top1.val !== top2.val) return false;
			stack1.push(top1.left, top1.right);
			stack2.push(top2.left, top2.right);
		}
		return true;
	}
}
