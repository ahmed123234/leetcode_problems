/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
   let temp = head;
    let store = [];
    let index = 0;
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
