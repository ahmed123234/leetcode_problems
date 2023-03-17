class Solution {
    public void deleteNode(ListNode node) {
        // assign the value of node to be the value of the next node in the list
        node.val = node.next.val;

        // remove the next node from the list
        node.next = node.next.next; 
    }
}
