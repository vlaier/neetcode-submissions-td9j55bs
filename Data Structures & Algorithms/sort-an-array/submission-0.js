class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(first, second){
        let [i,j] = [0,0]
        const resultArr = []
        while(i < first.length && j < second.length){
            if(first[i] < second[j]){
                resultArr.push(first[i])
                i++
            }else {
                resultArr.push(second[j])
                j++
            }
        }
        resultArr.push(...first.slice(i))
        resultArr.push(...second.slice(j))
        return resultArr

    }
    sortArray(nums) {
        if (nums.length < 2) return nums
        const mid = Math.floor(nums.length / 2)
        const left = this.sortArray(nums.slice(0,mid))
        const right = this.sortArray(nums.slice(mid))
        return this.merge(left,right)


    }
}
