class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const arr = [...nums, ...nums]
        return arr
    }
}
