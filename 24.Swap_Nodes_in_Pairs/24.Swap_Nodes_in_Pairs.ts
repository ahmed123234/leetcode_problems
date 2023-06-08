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

function swapPairs(head: ListNode | null): ListNode | null {
    if(head === null || head.next === null) {
        return head;
    }

    let temp = head.next;
    head.next = swapPairs(head.next.next);
    temp.next = head;

    return temp;

};
