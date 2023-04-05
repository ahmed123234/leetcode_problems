/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function(root) {
     const q = [];


        q.push(root);

        while (q[0] != null) {
            const temp = q.shift();
            // Add both null and not null values
            q.push(temp.left);
            q.push(temp.right);
        }

        while(q.length !== 0 && q[0] == null) {
            q.shift();
        }

        // Check if the tree is complete 
        return (q.length)? false: true;
};
