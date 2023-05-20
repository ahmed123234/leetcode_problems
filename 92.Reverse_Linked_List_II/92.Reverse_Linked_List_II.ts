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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let i = 1
    let temp = head; 
    let list = [];
    let start = head;
    let end = head;

    if (left === right) return head; 
    while( temp !== null) {

        if(i  < left - 1) {
            start = start.next;
        }

         if(i  < right + 1) {
            end = end.next;
            
        }

        if (i >= left && i <= right) {
            list.push(temp.val); 
        }
        temp = temp.next;
        i++;
    }

    // console.log("end", end)
    // console.log("start", start)
    // console.log("list", list)

    list.reverse();
    let a = new ListNode(list[0], null);
    temp = a;

    for( let i = 1; i < list.length ; i++) {
        temp.next = new ListNode(list[i], null);
        temp = temp.next;
    }
    // console.log("temp", temp)
    // console.log("list a", a)

    if (left === 1) {
        temp.next = end;
        return a;    
    }

    start.next = a;
    temp.next = end;
    return head;
};
