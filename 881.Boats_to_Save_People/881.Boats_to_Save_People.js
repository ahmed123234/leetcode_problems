var numRescueBoats = function(people, limit) {
        let left = 0;
        let right  = people.length - 1;

        people.sort((a, b) => {
            return a-b;
        });
        
        let count = 0;
        while(left <= right) {
             count ++;
            if(people[left] + people[right] <= limit) {
                left ++;
            }

            right --;
        }
        return count;
};
