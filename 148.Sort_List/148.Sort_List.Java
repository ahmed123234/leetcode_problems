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
    public ListNode sortList(ListNode head) {
        ListNode temp = head;
        int n = 0;

        while (temp != null) {
            temp = temp.next;
            n ++;
        }

        int [] values = new int [n];

        temp = head;
        int i = 0;

        while (temp != null) {
            values[i++] = temp.val;
            temp = temp.next;
        }

        Arrays.sort(values);
    
    temp = head;
    i = 0;
     while (temp != null) {
            temp.val = values[i++];
            temp = temp.next;
    }

    return head;
    }
}
