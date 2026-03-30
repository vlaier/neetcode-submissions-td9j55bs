class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const preparedString = s.replace(/[&\/\\#,+()$~%. '":*?<>{}]/g, '').toLowerCase()
        const length = preparedString.length
        let palindrome = true
        for(let i=0; i<Math.floor(length/2); i++){
            if(preparedString[i] !== preparedString[length-1-i]){
                console.log(i, preparedString[i], preparedString[length-1-i])
                palindrome =false
                
            }
        }
        return palindrome
    }
}
