class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let [prev1, prev2] = [nums[0], Math.max(nums[0], nums[1] | 0)]
        for(let i=2; i < nums.length; i++){
            const tmp = prev2
            prev2 = Math.max(nums[i] + prev1, prev2)
            prev1 = tmp
        }
        return prev2
    }
}
