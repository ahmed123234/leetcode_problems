/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteMiddle(ListNode head) {
        ListNode fast = head, slow = head, pre = head;
        int i = 0;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            
            if (i++ != 0) {
                pre = pre.next;
            }
        }

        pre.next = slow.next;
        
        return i == 0? null : head;   
    }
}
