class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        const length = s.length
        // let tmp = undefined
        for(let i = 0; i < Math.ceil(length/2); i++){
            // tmp = s[i]
            // s[i] = s[length-1-i]
            // s[length-1-i] = tmp
            [s[i], s[length-1-i]] = [s[length-1-i], s[i]]
        }   
    }
}
