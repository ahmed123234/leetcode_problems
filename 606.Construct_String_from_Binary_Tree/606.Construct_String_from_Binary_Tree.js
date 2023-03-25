/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


const pass = (root, res) => {
    if( root == null) {
            return res.join("");
    }
        if (root.left == null  && root.right == null) {
            res.push(root.val);
            return res.join("");
        }

    
        res.push(root.val);
        

        if(root.left != null) {
            res.push("(");
            pass(root.left, res);
            res.push(")");
        }

        if (root.left == null && root.right != null) {
            res.push("()");
        }
        
        if(root.right != null) {
            res.push("(");
            pass(root.right, res);
            res.push(")");
        }

        return res.join("");
}



/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function(root) {

    let res = [];
   return pass(root, res);
};
