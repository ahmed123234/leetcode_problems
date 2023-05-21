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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const list1 = [];
    const list2 = [];
    let temp = l1;
    while(temp !== null) {
        list1.push(temp.val);
        temp = temp.next;
    }

    temp = l2;

    while(temp !== null) {
        list2.push(temp.val);
        temp = temp.next;
    }

    let list = new ListNode();
    let sum = 0;

    while(list1.length !== 0 || list2.length !== 0) {
        if(list1.length !== 0) sum += list1.pop();
        if(list2.length !== 0) sum += list2.pop();

        list.val = sum % 10;

        let head = new ListNode();
        sum = Math.floor(sum / 10);
        head.val = sum;
        head.next = list;
        list = head;
        
    } 

    return list.val === 0? list.next: list;

};
