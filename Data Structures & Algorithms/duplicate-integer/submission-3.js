class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const encountered = []
        let result = false
    //     const filtredNums = nums.filter((num)=>{
    //        const isDuplicate = !(encountered.includes(num))
    //        encountered.push(num)
    //        return isDuplicate
    // })
    //     return filtredNums
    // }
        // nums.forEach((num)=>{
        //     if(encountered.includes(num)){
        //         result = true
        //     }
        //     encountered.push(num)
        // })
        // return result //26ms
        const length = nums.length
        for(let i=0; i<length; i++){
            if(encountered.includes(nums[i])){
                result = true
                break
            }
            encountered.push(nums[i])
        }
        return result
    }
}