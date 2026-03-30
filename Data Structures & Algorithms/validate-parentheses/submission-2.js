class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    constructor(){
        this.stack = []

    }
    isValid(s) {
        if(s.length%2 !== 0) return false
        for(let i=0; i<s.length; i++){
            if("({[".includes(s[i])) {
                this.stack.push(s[i])
            } else {
                const lastBracket = this.stack.pop()
                const bracketPair = lastBracket+s[i]
                if(bracketPair !== "()" && bracketPair !=="{}" && bracketPair !=="[]") return false
            }
        }
        return this.stack.length === 0 ? true : false

    }
}