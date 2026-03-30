class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const counter = {}
        let maxEncounters = 0
        let majorityElement = null
        nums.forEach(num=>{
            counter[num] = (counter[num] | 0) + 1
        })
        for(const [key, value] of Object.entries(counter)){
            if(value > Math.floor(nums.length/2)) return key
            if (value > maxEncounters) {
                maxEncounters = value
                majorityElement = key
            }
        }
        return majorityElement
        
    }
}
