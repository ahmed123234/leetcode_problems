var intervalIntersection = function(firstList, secondList) {
        let n = firstList.length; 
        let m = secondList.length;

        if (n == 0 || m == 0) {
            return [];
        }

        let res = [];

        let i = 0;
        let j = 0;

        for (; i < n && j < m;) {
                let temp = [];
                temp.push(Math.max(firstList[i][0], 
                secondList[j][0]));

                temp.push(Math.min(firstList[i][1], 
                secondList[j][1]));

                if (temp[0] <= temp[1]) {
                    res.push([temp[0], temp[1]]);
                } 
            
             if(temp[1] == firstList[i][1]) i++;       
             if(temp [1] == secondList[j][1]) j++;
        } 

        return res;
        
};
