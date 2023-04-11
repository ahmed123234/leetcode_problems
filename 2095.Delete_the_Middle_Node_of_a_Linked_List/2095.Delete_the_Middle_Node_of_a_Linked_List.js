/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let fast = head, slow = head, pre = head;
    let i = 0;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (i++ != 0) {
            pre = pre.next;
        }
    }

    pre.next = slow.next;
    
    return i == 0? null : head;
};
