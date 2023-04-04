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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
        const q = [];

        if(root == null) return false;

        q.push(root);

        while (q.length != 0) {
            let count = 0;
            for (let sz = q.length; sz > 0; --sz) {
                const temp = q.shift();
                if(temp.val == x || temp.val == y) {
                    count ++;
                }
                if(temp.left != null && temp.right != null) {
                    if (temp.left.val == x && temp.right.val == y) return false;

                    if (temp.left.val == y && temp.right.val == x) return false;
                }

                if(temp.left != null) 
                    q.push(temp.left);

                if(temp.right != null) 
                    q.push(temp.right);
            }
            if(count == 2) return true;
        }
        return false; 
};
