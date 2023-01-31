var timeRequiredToBuy = function(tickets, k) {
    
        let time = 0;
        tickets[k] *= -1;
        
        for (let val of tickets) {
            time ++;
            tickets.unshift();
            if(val < 0) {
                val++;
                if(val == 0){
                    break;
                }
                else {
                    tickets.push(val);
                }
            } else if (val > 0) {
                val --;
                if(val > 0)
                    tickets.push(val);
            }
    
        }
        return time;

};
