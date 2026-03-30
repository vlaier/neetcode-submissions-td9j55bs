class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let [left, right] = [0, nums.length - 1]
        while(left<=right){
            const mid = left + Math.floor((right-left)/2)
            if(nums[mid]=== target) return mid
            if(nums[mid]>target) right = mid - 1
            if(nums[mid]<target) left = mid + 1
        }
        return left
    }
}
