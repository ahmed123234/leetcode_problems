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
var zigzagLevelOrder = function(root) {
    const q = [];
        const res = [];

        if(root == null) return res;
        let i = 0;
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

            if ((i++) % 2 == 1)
                levelVals.reverse();

            res.push(levelVals);
        }
        return res;
};
