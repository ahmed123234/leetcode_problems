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
    public ListNode swapNodes(ListNode head, int k) {
    ListNode temp = head;
    Stack<Integer> store = new Stack<>();
    int index = 0;
    int n = 0;

    while( temp != null) {
        n++;
        temp = temp.next;
    }
    
    temp = head;
    while( temp != null) {
        if (index == k - 1  || index == n - k ) {
            store.push(temp.val);
        }  
        index++;
        temp = temp.next;
    }

    temp = head;
    index = 0;
    while( temp != null) {
        if (index == k - 1  || index == n - k ) {
            temp.val = store.pop();
        } 
        index++; 
        temp = temp.next;
    }


    return head;
    }
}
