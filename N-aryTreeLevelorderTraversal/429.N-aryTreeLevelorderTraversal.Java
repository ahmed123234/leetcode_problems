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

    List <List<Integer>> list = new ArrayList <List<Integer>> ();

    public List<List<Integer>> levelOrder(Node root) {

        if(root == null) 
            return list;

        Queue <Node> q =  new LinkedList <> ();

        q.offer(root);

        while(!q.isEmpty()) {

            int n = q.size();
            List <Integer> levelElements = new ArrayList <> ();

            for (int i = 0; i < n; i++) {

                Node current = q.poll();
                levelElements.add(current.val);

                for (Node child : current.children)
                    q.offer(child);
            }

            list.add(levelElements);
        }

        return list;
    }
}
