/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let i = 1;
        let j = 0;
        temp = head;
    
        while (temp.next != null) {
            temp = temp.next;
            i++;
        }
        j = i - n;
        temp = head;
        if(j == 0) return head.next;

        while (temp.next != null) {
            j--;
            if(j == 0) {
                temp.next = temp.next.next;
                break;
            }
            temp = temp.next;

        }

        return head;
};
