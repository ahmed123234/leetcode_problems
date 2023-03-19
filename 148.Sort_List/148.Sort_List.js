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
var sortList = function(head) {
    let temp = head;
    const values = [];

    while (temp != null) {
        values.push(temp.val);
        temp = temp.next;
    }
    
    values.sort((a, b) => {
        return b - a;
    });
    
    temp = head;
     while (temp != null) {
            temp.val = values.pop();
            temp = temp.next;
    }

    return head;
};
