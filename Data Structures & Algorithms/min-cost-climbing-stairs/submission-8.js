class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const resultsArr = [cost[0], cost[1]]
        for(let i = 2; i<cost.length; i++){
            resultsArr[i%3] = cost[i] + Math.min(resultsArr[(i-1)%3], resultsArr[(i-2)%3])
        }
        return Math.min(resultsArr[(cost.length-1)%3], resultsArr[(cost.length-2)%3])
    }
}
