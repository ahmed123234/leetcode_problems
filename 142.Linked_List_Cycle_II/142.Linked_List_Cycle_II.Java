public class Solution {
    public ListNode detectCycle(ListNode head) {
        Set<ListNode> set  = new HashSet<>();

        while(head != null) {
            if (!(set.add( head))) {
                return head;
            }

            head = head.next;
        } 
        return head;   
    }
}
