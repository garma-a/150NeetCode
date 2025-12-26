class ListNode {
	constructor(public val: number = 0, public next: ListNode | null = null) { }
}


class Solution {
	mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
		if (!list1 && !list2) {
			return null;
		} else if (!list1) {
			return list2;

		} else if (!list2) {
			return list1;
		}
		const dummy = new ListNode(0);
		if (list1.val > list2.val) {
			dummy.next = new ListNode(list2.val);
			list2 = list2.next;
		} else {
			dummy.next = new ListNode(list1.val);
			list1 = list1.next;
		}
		let curHead = dummy.next;
		while (list1 && list2) {
			if (list1.val > list2.val) {
				curHead.next = new ListNode(list2.val);
				list2 = list2.next;
			} else {
				curHead.next = new ListNode(list1.val);
				list1 = list1.next;
			}
			curHead = curHead.next;
		}
		while (list1) {
			curHead.next = new ListNode(list1.val);
			list1 = list1.next;
			curHead = curHead.next;
		}

		while (list2) {
			curHead.next = new ListNode(list2.val);
			list2 = list2.next;
			curHead = curHead.next;
		}

		return (dummy.next as ListNode);
	}
}
