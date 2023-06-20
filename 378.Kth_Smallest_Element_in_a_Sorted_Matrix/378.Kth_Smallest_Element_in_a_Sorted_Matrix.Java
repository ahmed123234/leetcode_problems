class Solution {
    public int kthSmallest(int[][] matrix, int k) {
        PriorityQueue<Integer> q = new PriorityQueue<>((a, b) -> Integer.compare(a, b));

        int n = matrix.length;
        int m = matrix[0].length;

        for (int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                q.offer(matrix[i][j]);

                if(q.size() > k) {
                    q.poll();
                }
            }
        }
        return q.poll();
    }
}
