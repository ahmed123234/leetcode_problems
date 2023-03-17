/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
     let temp = head, slow = temp;


        // Move the head if the value of the nodes at beginning of the list equal to the desired val
        while (temp != null && temp.val == val) {
            head = temp.next;
            temp = head;
        }

        while (temp != null) {
            if (temp.val == val) {
                slow.next = temp.next;

            }else {
                slow = temp;
            }

            temp = temp.next;
        }
        return head;
};
