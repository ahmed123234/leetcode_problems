/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function pairSum(head: ListNode | null): number {
// find the middle of the listNode
        let maxTwinSum = 0;
        let slow = head;
        let fast = head;
        while(fast != null && fast.next != null) {
            fast = fast.next.next;

            slow = slow.next;

            if (fast == null) {
                break;
            }
        }
        // reverse the second part of the listNode
        let s = [];
        fast = slow;
        while (fast != null) {
            s.push(fast.val);
            fast = fast.next;
        }

        fast = slow;

        while(s.length !== 0) {
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
};
