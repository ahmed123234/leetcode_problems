class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        // set the minimum number of banansa in each pile 
        int start = 1;
// set the maximum number of banansa in each pile 
        int end = Arrays.stream(piles).max().getAsInt();

        while (start < end) {
            // set the middle number of banansa in each pile 
            int mid = start + (end - start ) / 2;

            if (canEatAll(piles, mid, h))
                end = mid;

            else
                start = mid + 1;
        }
        return start;
    }

    public boolean canEatAll(int [] piles, int speed, int h) {
        int time = 0;
        for (int pile : piles) {
            time += (pile - 1) / speed + 1;
        }

        return time > h ? false : true;
    }
}
