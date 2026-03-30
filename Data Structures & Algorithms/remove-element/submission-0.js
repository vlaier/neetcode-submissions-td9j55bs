class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        nums.sort()
        let startIndex = null
        let length = 0
        nums.forEach((num,index)=>{
            if(num===val){
                if(startIndex === null) startIndex = index
                length ++
            } 
        })
        nums.splice(startIndex, length)
        return nums.length
    }
}
