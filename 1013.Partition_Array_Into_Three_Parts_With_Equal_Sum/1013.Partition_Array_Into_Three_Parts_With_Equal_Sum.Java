class Solution {
    public boolean canThreePartsEqualSum(int[] arr) {
        int sum = Arrays.stream(arr).sum();
        int n = arr.length;
        int sumPart = sum /3;

        int s = 0;
        int parts = 0;
        for (int i = 0; i< n; i++) {
            s += arr[i];

            if (s == sumPart) {
                s = 0;
                parts++;
            }
        }
        return (parts >= 3) && sum %3 == 0;

    }
}
