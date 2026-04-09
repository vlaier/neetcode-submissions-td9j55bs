class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        const bitString = n.toString(2)
        let count = 0
        for (let bit of bitString){
            if(Number(bit) ^ 1 == 0) count +=1
        }
        return count
    }
}
