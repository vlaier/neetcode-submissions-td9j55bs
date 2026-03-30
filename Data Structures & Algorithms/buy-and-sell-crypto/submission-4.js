class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let gains = [0]
        for(let i = 1; i < prices.length; i++){
            gains[i] = prices[i] - Math.min(...prices.slice(0,i+1))
        }
        return Math.max(...gains)
    }
}
