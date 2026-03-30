class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}
        for(let i = 0; i <= nums.length ; i++){
            const num = nums[i]
            const difference = target - num 
            if(difference in seen){           
                 return [seen[difference],i]  
            }
            seen[num] = i
        }
    }
}
