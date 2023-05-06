class Solution {
    public int[] decode(int[] encoded) {
        
        int n = encoded.length + 1;
        int perm [] = new int [n];
        int x = 0;
        for (int i = 1; i <= n; i++) 
            x ^= i;

        perm[0] = x;
        for (int i = 1; i < n; i++) {
            if (i % 2 == 1)
                perm[0] ^= encoded[i];  
        }


        for (int i = 1; i < n; i++) {
            perm[i] = encoded[i - 1] ^ perm[i - 1];  
        }
        return perm;

    }
}
