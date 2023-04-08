
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const createTree = (head, tail) => {
    if (head == tail) return null;

    let fast = head;
    let slow = head;


    while(!(fast == tail || fast.next == tail)) {
        fast = fast.next.next;
        slow = slow.next;
    }

    const node = new TreeNode(slow.val);
    node.left = createTree(head, slow);
    node.right = createTree(slow.next, tail);

    return node;
};

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head == null) return null;

    return createTree(head, null);
};
