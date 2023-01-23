class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        Queue <Integer> q = new LinkedList <> ();

        for (int val : students) {
            q.offer(val);
        }
       
        int top = 0;
        int count = 0;

        while(!q.isEmpty() &&  count < q.size()) {
            int val = q.poll();
            if(val == sandwiches[top]) {
                top ++;
                count = 0;
            } else {
                count ++;
                q.offer(val);
            }
        }
        return q.size();
    }
}
