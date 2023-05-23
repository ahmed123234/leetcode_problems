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
    public ListNode insertionSortList(ListNode head) {
    Queue<Integer> q = new LinkedList<>();
    ListNode temp = head;

    while(temp != null) {
        q.offer(temp.val);
        temp = temp.next;
    }

    // System.out.println("before " + q);
    int n = q.size();
    int [] a = new int [n];
    for (int i = 0; i < n; i++) {
        a[i] = q.poll();
    }

    System.out.println("before " + a);
   

    for (int i = 1; i < n; i++) {
        int j = i;
        int start = a[j];
        while (j > 0 && a[j - 1] > start) {
            a[j] = a[j - 1];
            j--;
        }

       a[j] = start;
    }

    // console.log("after ", q);

    temp = head;
    int j = 0;
    while (j < n) {
        temp.val = a[j++];
        temp = temp.next;
    }

    return head;
    }
}


//OR
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
    public ListNode insertionSortList(ListNode head) {
        
        if (head == null) return head;

        ListNode helper = new ListNode(0);
        ListNode pre = helper;
        ListNode next = null;
        ListNode curr = head;

        while(curr != null) {
            next = curr.next;

            while(pre.next != null && pre.next.val < curr.val) {
                pre = pre.next;
            }

            curr.next = pre.next;
            pre.next = curr;
            curr = next;
            pre = helper;
        }
        return pre.next;
    }
}
