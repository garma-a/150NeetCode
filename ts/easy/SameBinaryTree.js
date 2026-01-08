
class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}


class Solution {
	/**
	 * @param {TreeNode} p
	 * @param {TreeNode} q
	 * @return {boolean}
	 */
	isSameTree(p, q) {
		if (!p && !q) return true;
		if ((!p && q) || (p && !q)) return false;
		if (p.val === q.val)
			return this.isSameTree(p.left, q.left) &&
				this.isSameTree(p.right, q.right);
		return false;
	}
}


class Solution2 {
	/**
	 * @param {TreeNode} p
	 * @param {TreeNode} q
	 * @return {boolean}
	 */
	isSameTree(p, q) {
		const stack1 = [p];
		const stack2 = [q];
		while (stack1.length && stack2.length) {
			const [top1, top2] = [stack1.pop(), stack2.pop()];
			if (!top1 && top2 || top1 && !top2)
				return false;
			if (!top1 && !top2) continue;
			if (top1.val !== top2.val) return false;
			stack1.push(top1.left, top1.right);
			stack2.push(top2.left, top2.right);
		}
		return true;
	}
}




