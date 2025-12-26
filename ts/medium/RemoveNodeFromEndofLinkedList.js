class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head);
        /**@type {[ListNode|null ,ListNode|null , ListNode|null ]}  */
        let [l, p, c] = [dummy, dummy.next, dummy.next]
        while (n > 0) {
            c = c.next;
            n--;
        }
        while (c) {
            l = l.next;
            p = p.next;
            c = c.next;
        }
        l.next = p.next;
        return dummy.next;
    }
}
