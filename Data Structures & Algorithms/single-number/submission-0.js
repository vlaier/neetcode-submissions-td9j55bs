class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        const result = nums.reduce((prev, curr)=>{
            return prev ^ curr
        })
        return result
    }
}
