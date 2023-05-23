/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let q = [];
    let temp = head;

    while(temp !== null) {
        q.push(temp.val);
        temp = temp.next;
    }

    // console.log("before ", q);
    let n = q.length;
   

    for (let i = 1; i <n; i++) {
        let j = i;
        let start = q[j];
        while (j > 0 && q[j - 1] > start) {
            q[j] = q[j - 1];
            j--;
        }

       q[j] = start;
    }

    // console.log("after ", q);

    temp = head;
    while (q.length !== 0) {
        temp.val = q.shift();
        temp = temp.next;
    }

    return head;
};


// OR using ListNode 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
   if (head == null) return head;

        let helper = new ListNode(0);
        let pre = helper;
        let next = null;
        let curr = head;

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
        return helper.next;
};
