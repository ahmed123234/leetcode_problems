function average(salary: number[]): number {
    let n = salary.length;
    let sum = salary[0];
    let min = salary[0];
    let max = salary[0];

    for(let i = 1; i < n ; i++) {
        sum += salary[i];

        min = Math.min(min, salary[i]);
        max = Math.max(max, salary[i]);
    }
    return (sum - (min + max)) / (n - 2) ;   

};
