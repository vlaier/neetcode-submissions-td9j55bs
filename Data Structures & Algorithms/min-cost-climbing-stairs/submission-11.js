class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let [prev1, prev2] = [cost[0], cost[1]]
        for(let i = 2; i < cost.length; i++){
            [prev1, prev2] = [prev2, cost[i] + Math.min(prev1, prev2) ]        
        }
        return Math.min(prev1, prev2)
    }
}
