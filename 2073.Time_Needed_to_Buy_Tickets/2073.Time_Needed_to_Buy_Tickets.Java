class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        Queue<Integer> q = new LinkedList<>();
        int time = 0;
        tickets[k] *= -1;
        for (int val : tickets)
            q.offer(val);

        while(!q.isEmpty()) {
            time ++;
            int val = q.poll();
            if(val < 0) {
                val++;
                if(val == 0){
                    break;
                }
                else {
                    q.offer(val);
                }
            } else if (val > 0) {
                val --;
                if(val > 0)
                    q.offer(val);
            }
    
        }
        return time;
    }
}
