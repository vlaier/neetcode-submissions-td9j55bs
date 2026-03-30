class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    memoization = {}
    climbStairs(n) {
        if(n===1) return 1
        if(n===2) return 2
        if(n in this.memoization){
            return this.memoization[n]
        } else {
            this.memoization[n] = this.climbStairs(n-1) + this.climbStairs(n-2)
        }
        return this.memoization[n]
    }
}
