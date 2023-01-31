
var finalPrices = function(prices) {
    let length = prices.length;
        for (let i = 0; i < length - 1 ; i++) {
            for (let j = i + 1; j < length; j++) {
                if (prices[j] <= prices[i]) {
                    prices[i] -= prices[j];
                    break;
                }
            }
        }
        return prices;
};
