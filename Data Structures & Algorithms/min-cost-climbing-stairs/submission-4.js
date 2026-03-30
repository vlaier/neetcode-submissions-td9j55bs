class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    constructor(){
        this.memo = {}
    }
    minCostClimbingStairs(cost) {
        const dfs= (i)=>{
            if(i >= cost.length) this.memo[i]=0
            if(i in this.memo) return this.memo[i]
            this.memo[i] = cost[i] + Math.min(dfs(i+1), dfs(i+2))
            return this.memo[i]
        }

        return Math.min(dfs(0), dfs(1))    
    }
}
