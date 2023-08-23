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
var deleteDuplicates = function(head) {
    if(head === null || head.next === null) return head;
        let slow = head, fast = head.next;

        while(slow !== null && fast !== null ) {
            if(slow.val === fast.val) {
                slow.next = fast.next;
                fast = fast.next;
            } else {
                slow = fast;
                fast = fast.next;
            }
        }         
        return head;
};
