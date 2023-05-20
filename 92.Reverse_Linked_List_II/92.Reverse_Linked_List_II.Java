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
    public ListNode reverseBetween(ListNode head, int left, int right) {
    int i = 1;
    ListNode temp = head; 
    List <Integer> list = new ArrayList<> ();
    ListNode start = head;
    ListNode end = head;

    if (left == right) return head; 
    while( temp != null) {

        if(i  < left - 1) {
            start = start.next;
        }

         if(i  < right + 1) {
            end = end.next;
            
        }

        if (i >= left && i <= right) {
            list.add(temp.val); 
        }
        temp = temp.next;
        i++;
    }

    Collections.reverse(list);
    ListNode a = new ListNode(list.get(0), null);
    temp = a;

    i = 1;
    for(; i < list.size() ; i++) {
        temp.next = new ListNode(list.get(i), null);
        temp = temp.next;
    }

    if (left == 1) {
        temp.next = end;
        return a;    
    }

    start.next = a;
    temp.next = end;
    return head; 
    }
}
