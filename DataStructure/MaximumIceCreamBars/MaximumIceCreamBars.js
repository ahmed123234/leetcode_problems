/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {

        let count = 0;
        let n = costs.length;

        costs.sort((price1, price2) => price1 - price2);

        for (let i = 0; i < n; i++) {

            if (costs[i] <= coins) {
                coins -= costs[i];
                count ++;
            }
        }

        return count;
};
