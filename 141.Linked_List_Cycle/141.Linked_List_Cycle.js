/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        if (fast == slow) {
            return true;
        }

        slow = slow.next;
    }
    return false;
};
