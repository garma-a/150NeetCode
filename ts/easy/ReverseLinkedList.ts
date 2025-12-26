class ListNode {
	constructor(public val: number, public next: ListNode | null) { }
}
class Solution {
	reverse(head: ListNode): ListNode | null {
		let prev: ListNode | null = null;
		let cur: ListNode | null = head;
		while (cur) {
			const saved_cur: ListNode | null = cur.next;
			cur.next = prev;
			prev = cur;
			cur = saved_cur;
		}
		return prev;
	}

}
