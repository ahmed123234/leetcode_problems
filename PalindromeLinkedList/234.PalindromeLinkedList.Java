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
    public boolean isPalindrome(ListNode head) {

        ListNode current = head, currentMid = head;
        int nodeCount = 0;

        if (current != null) {
            nodeCount ++;
            current = current.next;
        }

        current = head;
        int i = 0;
        int [] arr = new int [nodeCount/2];

        while (i < nodeCount/2) {
            currentMid = currentMid.next;
            i++;
        }

        i=0;

        while (i < nodeCount/2) {
            arr[i++]= currentMid.val;
            currentMid = currentMid.next;
        }

        i = 0;
        boolean flag = true;

        while (i < nodeCount/2) {

            if (current.val != arr[i])
                return false;
            i++;
            current = current.next;
        }

        return flag;
    }
}
