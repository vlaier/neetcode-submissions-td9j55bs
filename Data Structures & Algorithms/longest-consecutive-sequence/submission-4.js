class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let streak = 0
        let maxStreak = 0
        const numsSet = new Set(nums)
        for(const num of numsSet){
            if(!numsSet.has(num-1)){
                while(numsSet.has(num+streak)){
                    streak++
                }
                if(streak > maxStreak) maxStreak = streak
                streak =0
            } 
        }
        return maxStreak;
    }
}
