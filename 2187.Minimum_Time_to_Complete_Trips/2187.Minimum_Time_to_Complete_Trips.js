const isValid = (mid, totalTrips, time) => {
     let trips = 0;
     for ( const t of time) {
         trips += mid / t;
     }

     return (trips >= totalTrips)? true : false;
 };

var minimumTime = function(time, totalTrips) {
    

    let low = Math.min.apply(this, time);
    let high = totalTrips * low; 
    

    while (low < high) {
        const mid = low + (high - low) / 2;

        if (isValid(mid, totalTrips, time)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

