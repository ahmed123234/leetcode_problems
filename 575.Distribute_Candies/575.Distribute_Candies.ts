function distributeCandies(candyType: number[]): number {
     const set = new Set();

       for (const type of candyType) {
         set.add(type);
       } 
        let size = set.size,
        len = candyType.length / 2; 
        if(size < len) {
          return set.size;
        }
        return len;
};
