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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const map = new Map();
    const res = [];

    pass(res, root, map);
    return res;

};

function pass(res, root, map) {
        if (root == null) return "";

        const left = pass(res, root.left, map);
        const right = pass(res, root.right, map);

        const key = root.val + "$" + left + "$" + right;

        if (map.has(key) && map.get(key) == 1) {
            res.push(root);
        }
         if (!map.has(key)) {
            map.set(key, 1);
        } else {
             map.set(key, map.get(key) + 1);
        }
        
    
        return key;
    }
