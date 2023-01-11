class Solution {
    int max = 0;
    public int maxDepth(Node root) {
        if (root == null)
            return 0;

        Queue <Node> q = new LinkedList<> ();
        q.offer(root);

        while(!q.isEmpty()) {

            int n = q.size();

        for (int i = 0; i < n; i++) {

            Node node = q.poll();

            for (Node child : node.children) {
                q.offer(child);   
            }
        }

        max ++;
    }

        return max;
    }
}
