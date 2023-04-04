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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    const res = [];
    if(root == null) return 0;
    const queue = [];

    queue.push(root);
    while(queue.length != 0) {
        let sum = 0;
        let n = queue.length;
        for(let sz = n; sz > 0 ; --sz) {
           let temp = queue.shift();
            sum += temp.val;

            if(temp.left != null) 
                queue.push(temp.left);

            if(temp.right != null) 
                queue.push(temp.right);
        }
        res.push(sum / n);
    }

  return res;
};
