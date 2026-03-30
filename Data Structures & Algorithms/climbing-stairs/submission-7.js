class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let [prev1, prev2] = [1,2]
        for(let i = 2; i < n; i++){
            [prev1, prev2] = [prev2, prev1+prev2]
        }
        if(n===1) return prev1
        return prev2
    }
}
