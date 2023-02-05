var mergeSimilarItems = function(items1, items2) {
    const res = [];
    const m = new Map(items1);

        for( let item of items2) {
            let key = item[0];

            m.set(key, ((m.get(key) == undefined)? 0 :  m.get(key)) + item[1]);
        }

        m.forEach(

            (value, key) => {
               let l = [];
                l.push(key);
                l.push(value);
                res.push(l);
            }

        );

        res.sort((a, b) => {
            return a[0] - b[0];
        });
    
        return res;
};
