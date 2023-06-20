class Solution {
    public int findKthLargest(int[] nums, int k) {
        // using max heap 

        PriorityQueue<Integer> q = new PriorityQueue<>((a, b) -> Integer.compare(a, b));
    
        int n = nums.length;
        for(int i = 0; i < n; i++) {
            q.offer(nums[i]);

            if (q.size() > k) {
                q.poll();
            }
        }
        return q.poll();
    
    }
}
