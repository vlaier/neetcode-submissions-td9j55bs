class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let prefix = strs[0]
        for(let i = 1; i < strs.length; i++){
            for (let j=strs[i].length; j >= 0; j--){
                if(prefix.slice(0,j)===strs[i].slice(0,j)){
                    prefix = prefix.slice(0,j)
                    break
                }
            }
            if(prefix==="")break
        }
        return prefix
    }
}
