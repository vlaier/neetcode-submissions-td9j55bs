class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counter = {}
        let maxArray = Array.from({length:k},()=>[0,0])
        for (const num of nums){
            counter[num] = (counter[num] | 0) + 1
        }

        for (let i = 0; i < k; i++){
            for(const [key, value] of Object.entries(counter)){
                if(value > maxArray[i][0]) {
                    maxArray[i][0] = value
                    maxArray[i][1] = key
                }
            }
            counter[maxArray[i][1]] = -1
        }
        return maxArray.map(arr=>arr[1])
    }
}
