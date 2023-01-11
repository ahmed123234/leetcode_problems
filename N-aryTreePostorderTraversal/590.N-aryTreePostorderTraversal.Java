/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {

    List <Integer> list = new ArrayList <> ();

    public List<Integer> postorder(Node root) {

        if( root == null) 
            return list;

        int n = root.children.size() - 1;
        int i = 0;

        while (i <= n) {

            postorder(root.children.get(i));
            i++;
        }

        list.add(root.val);

        return list;       
    }
}
