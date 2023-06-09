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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  
    let temp = head;
    let store: number [] = [];
    let index: number = 0;
    let n = 0;
    while( temp !== null) {
        n++;
        temp = temp.next;
    }
    
    temp = head;
    while( temp !== null) {
        if (index === k - 1  || index === n - k ) {
            store.push(temp.val);
        }  
        index++;
        temp = temp.next;
    }

    temp = head;
    index = 0;
    while( temp !== null) {
        if (index === k - 1  || index === n - k ) {
            temp.val = store.pop();
        } 
        index++; 
        temp = temp.next;
    }


    return head;
};
