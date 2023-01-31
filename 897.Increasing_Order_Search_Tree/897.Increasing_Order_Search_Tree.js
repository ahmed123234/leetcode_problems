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
 * @return {TreeNode}
 */
let nodes  = [];

var increasingBST = function(root) {
    nodes = [];

      inorder(root);

        const length = nodes.length;
        tree = new TreeNode(nodes[0]);
        pointer = tree;

        for (let i = 1; i < length; i++) {

            if(pointer.right == undefined) {
                pointer.right = new TreeNode(nodes[i]);   
                pointer = pointer.right;
            }

        } 
        return tree;
};

var inorder = (root) => {
    if(root == undefined) {  
            return false;
        }

        inorder(root.left);
        nodes.push(root.val);
        inorder(root.right);

        return true;
};
