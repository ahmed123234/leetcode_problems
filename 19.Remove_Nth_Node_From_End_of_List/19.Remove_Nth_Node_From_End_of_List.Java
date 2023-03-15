class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int i = 1;
        int j = 0;
        ListNode temp = head;
    
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

        // ListNode fast = head, slow = head;
        // for (int i = 0; i < n; i++) fast = fast.next;
        // if (fast == null) return head.next;
        // while (fast.next != null) {
        //     fast = fast.next;
        //     slow = slow.next;
        // }
        // slow.next = slow.next.next;
        // return head;

    }
}
