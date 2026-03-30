class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let maxElement = 0
        const counter = {}
        nums.forEach(num=>{
            counter[num] = (counter[num] | 0) + 1
            if(counter[num] > Math.floor(nums.length/2)) maxElement = num
        })        
        console.log(maxElement)
        return maxElement
    }
}
