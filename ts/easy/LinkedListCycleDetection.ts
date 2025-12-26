
class ListNode {
	constructor(public val = 0, public next: ListNode | null = null) {
	}
}


class Solution {
	hasCycle(head: ListNode): boolean {
		if (!head) {
			return false;
		}
		let slow: ListNode | null = head;
		let fast: ListNode | null = head.next;

		while (fast) {
			if (slow === fast) {
				return true;
			}
			slow = slow.next;
			if (fast.next) {
				fast = fast.next.next;
			} else {
				return false;
			}
		}



		return false;
	}
}
