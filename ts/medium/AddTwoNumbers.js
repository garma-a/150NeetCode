
class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}


class Solution {
	/**
	 * @param {ListNode} l1
	 * @param {ListNode} l2
	 * @return {ListNode}
	 */
	addTwoNumbers(l1, l2) {
		let dummy = new ListNode(0, null);
		let head = dummy;
		let carrey = 0;
		while (l1 || l2) {
			const [firstVals, secondVal] = [l1?.val || 0, l2?.val || 0];
			const digitSum = (firstVals + secondVal + carrey) % 10;
			if (firstVals + secondVal + carrey > 9) carrey = 1;
			else carrey = 0;
			dummy.next = new ListNode(digitSum, null);
			dummy = dummy.next;
			if (l1) l1 = l1.next;
			if (l2) l2 = l2.next;
		}
		if (carrey) dummy.next = new ListNode(carrey, null);
		return head.next;



	}
}
