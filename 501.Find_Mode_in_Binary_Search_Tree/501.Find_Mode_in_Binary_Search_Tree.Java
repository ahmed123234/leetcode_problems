/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    
    HashMap<Integer, Integer> map = new HashMap<> ();

    public int[] findMode(TreeNode root) {

        inorder(root); 

        System.out.println(map);
        
        int max = 0;
        int count = 0;

        for (int key: map.keySet()) {
            if (map.get(key) == max) {
                count ++;
            }
            
            if (map.get(key) > max) {
                max = map.get(key);
                count = 1;
            }
        }

        int res[] = new int [count];
        int i = 0;
        for (int key: map.keySet()) {
            if (map.get(key) == max) {
                
                res[i++] = key;
            }
        }

        return res;
    }

    public void inorder(TreeNode root) {
        if( root == null ){
            return;   
        }

        map.put(root.val, 
            map.getOrDefault(root.val, 0) + 1);

        inorder(root.left);
        inorder(root.right);
    }
}
