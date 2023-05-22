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
    public int pairSum(ListNode head) {
        
        // find the middle of the listNode
        int maxTwinSum = 0;
        ListNode slow = head;
        ListNode fast = head;
        while(fast != null && fast.next != null) {
            fast = fast.next.next;

            slow = slow.next;

            if (fast == null) {
                break;
            }
        }
        // reverse the second part of the listNode
        Stack<Integer> s =  new Stack<>();
        fast = slow;
        while (fast != null) {
            s.push(fast.val);
            fast = fast.next;
        }

        fast = slow;

        while(!s.isEmpty()) {
            fast.val = s.pop();
            fast = fast.next;
        }

        fast = head;

         while(fast != null && slow!= null) {
        
            maxTwinSum = Math.max(maxTwinSum, fast.val + slow.val);
        
            slow = slow.next; 
            fast = fast.next;           
        
        }

        return maxTwinSum;
    }
}
