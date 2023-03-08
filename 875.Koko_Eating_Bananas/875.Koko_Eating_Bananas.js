const canEatAll = (piles, speed, h) => {
        let time = 0;
        for (const pile of piles) {
            time += Math.floor((pile - 1) / speed ) + 1;
        }

        return time > h ? false : true;
    };

var minEatingSpeed = function(piles, h) {
    // set the minimum number of banansa in each pile 
        let start = 1;
// set the maximum number of banansa in each pile 
        let end = Math.max(...piles);

        while (start < end) {
            // set the middle number of banansa in each pile 
            const mid = start  + Math.floor((end - start) / 2);

            if (canEatAll(piles, mid, h))
                end = mid;

            else
                start = mid + 1;
        }
        return start;
};
