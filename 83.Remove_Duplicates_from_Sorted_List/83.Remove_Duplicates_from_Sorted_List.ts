/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
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
