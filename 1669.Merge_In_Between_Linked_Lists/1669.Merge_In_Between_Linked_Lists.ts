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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let temp1 = list1, temp2 = list1;
    while(a > 1) {
        a--;
        temp1 = temp1.next;

    }

    while(b >0) {
        b--;
        temp2 = temp2.next;
    }
    temp2 = temp2.next;

    temp1.next = list2;

    while(list2.next != null) {
        list2 = list2.next;
    }

    list2.next = temp2;
  
    return list1;
};
