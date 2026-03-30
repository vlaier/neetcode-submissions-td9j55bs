class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let [value, count] = [0, 0]
        for(const num of nums){
            if (num !== value){
                if(count === 0){
                    value = num
                    count++
                    
                } else count--
            } else count++
        }
        return value
    }
}
