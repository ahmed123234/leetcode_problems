public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {

	// check if either headA or headB is null
	if (headA == null || headB == null)
            return null;
	
	// Create new nodes to itearate through both given nodes
        ListNode a = headA,  b = headB;

        // iterate while a node not equal b node
        while(a != b) {

            a = a == null? headB : a.next;
            b = b == null? headA : b.next;
        } 
        return a;
    }
}
