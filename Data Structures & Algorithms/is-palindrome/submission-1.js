class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const preparedString = s.replace(/[&\/\\#,+()$~%. ''"":*?<>{}]/g, '').toLowerCase()
        const length = preparedString.length
        for(let i=0; i<Math.floor(length/2); i++){
            if(preparedString[i] !== preparedString[length-1-i]){
                return false
            }
        }
        return true
    }
}
