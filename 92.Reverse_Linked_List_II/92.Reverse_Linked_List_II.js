/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
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

    list.reverse();
    let a = new ListNode(list[0], null);
    temp = a;

    for( let i = 1; i < list.length ; i++) {
        temp.next = new ListNode(list[i], null);
        temp = temp.next;
    }

    if (left === 1) {
        temp.next = end;
        return a;    
    }

    start.next = a;
    temp.next = end;
    return head;
};
