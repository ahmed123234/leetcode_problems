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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const q = [];
        const res = [];

        if(root == null) return res;

        q.push(root);

        while (q.length != 0) {
            
            const levelVals = [];

            for (let sz = q.length; sz > 0; --sz) {
                const temp = q.shift();
                levelVals.push(temp.val);

                if(temp.left != null) 
                    q.push(temp.left);

                if(temp.right != null) 
                    q.push(temp.right);
            }
            res.push(levelVals);
        }
        return res.reverse();
};
