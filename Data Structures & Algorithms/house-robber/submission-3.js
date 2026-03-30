class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const robbedArr =[nums[0], Math.max(nums[0], nums[1]) || 0]
        for(let i=2; i<nums.length; i++){
            robbedArr[i] = Math.max(nums[i]+robbedArr[i-2], robbedArr[i-1])
        }
        console.log(robbedArr)
        return Math.max(...robbedArr)
    }
}
