class ListNode {
	constructor(val = 0, next = null) {
		this.val = val;
		this.next = next;
	}
}


class Solution {
	/**
	* @param {ListNode} head 
	* @returns {void}
	*/
	reorderList(head) {
		if (!head || !head.next) return;
		let [prevMid, mid] = this.returnMidNode(head);
		if (prevMid) prevMid.next = null;
		let reversedMid = this.reverse(mid);
		let tempHead = head;
		while (tempHead && reversedMid) {
			let nextHead = tempHead.next;
			let nextReversed = reversedMid.next;
			tempHead.next = reversedMid;
			if (nextHead) {
				reversedMid.next = nextHead;
			}
			tempHead = nextHead;
			reversedMid = nextReversed;
		}

		return head;
	}

	/**
	* @param {ListNode} head 
	* @returns {ListNode[]}
	*/
	returnMidNode(head) {
		let prevSlow = null;
		let slow = head;
		let fast = head;
		while (fast && fast.next) {
			prevSlow = slow;
			slow = slow.next;
			fast = fast.next.next;
		}
		return [prevSlow, slow];
	}

	/**
	* @param {ListNode} head 
	* @returns {ListNode}
	*/
	reverse(head) {
		let prev = null;
		let cur = head;
		while (cur) {
			let temp = cur.next;
			cur.next = prev;
			prev = cur;
			cur = temp;
		}
		return prev;
	}



}
