class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let [value, count] = [0, 0]
        for(const num of nums){
            if(count===0) value = num
            num === value ? count++ : count--
        }
        return value
    }
}
