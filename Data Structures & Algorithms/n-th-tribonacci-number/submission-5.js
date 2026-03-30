class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const results = [0, 1, 1]
        for (let i = 3; i <= n; i++){
            results[i%3] = results[0] + results[1] + results[2]
        }
        return results[n%3]
    }
}
