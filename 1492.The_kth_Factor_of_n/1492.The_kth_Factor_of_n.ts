function kthFactor(n: number, k: number): number {
    let order: number = 1;
    for (let i: number = 1; i <= n; i++) {
        if (n % i === 0) {
            if(order === k) {
                return i;
            }
            order++;
        }
    }
    return -1;
};
