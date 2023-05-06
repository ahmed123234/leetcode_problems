function decode(encoded: number[]): number[] {
           
        let n = encoded.length + 1;
        let perm = [];
        let x = 0;
        for (let i = 1; i <= n; i++) 
            x ^= i;

        perm[0] = x;
        for (let i = 1; i < n; i++) {
            if (i % 2 == 1)
                perm[0] ^= encoded[i];  
        }


        for (let i = 1; i < n; i++) {
            perm[i] = encoded[i - 1] ^ perm[i - 1];  
        }
        return perm;

};
