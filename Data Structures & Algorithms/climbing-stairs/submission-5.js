class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const solutions = [1,2]
        for(let i = 2; i < n; i++){
            solutions[i] = solutions[i-1] + solutions[i-2]
        }
        return solutions[n - 1]
    }
}
