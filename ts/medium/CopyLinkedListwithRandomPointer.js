// class Node {
// 	constructor(val, next = null, random = null) {
// 		this.val = val;
// 		this.next = next;
// 		this.random = random;
// 	}
// }

class Solution {
	/**
	 * @param {Node} head
	 * @return {Node}
	 */
	copyRandomList(head) {
		/**@type {Map<Node , Node>} */
		let oldToNew = new Map();
		let temp = head;
		while (temp) {
			oldToNew.set(temp, new Node(temp.val))
			temp = temp.next;
		}
		temp = head;
		while (temp) {
			let copy = oldToNew.get(temp);
			copy.next = oldToNew.get(temp.next) || null;
			copy.random = oldToNew.get(temp.random) || null;
			temp = temp.next;
		}
		return oldToNew.get(head);

	}
}
export { };
