class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxStreak = 0
        let currentStreak = 0
        const sortedNums = [...new Set(nums)].sort((a,b)=>a-b)
        for(let i=0; i<sortedNums.length; i++){
        (sortedNums[i-1]===undefined || sortedNums[i]===sortedNums[i-1] + 1) ? currentStreak ++ : currentStreak=1;
        console.log(sortedNums[i], currentStreak)
        if(currentStreak > maxStreak) maxStreak = currentStreak
        }
        return maxStreak
    }
}
