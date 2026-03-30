class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counter = {}   
        for(let i = 0; i < nums.length; i++){
            counter[nums[i]] = (counter[nums[i]] | 0) + 1
            if(counter[nums[i]] > Math.floor(nums.length/2)) return nums[i]
        }
    }
}
