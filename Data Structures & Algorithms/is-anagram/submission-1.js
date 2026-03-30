class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const length = s.length
        const [sDictionary, tDictionary] = [{},{}]

        for(let i = 0; i < length; i++){
            sDictionary[s[i]] ? sDictionary[s[i]] += 1 : sDictionary[s[i]] = 1
            tDictionary[t[i]] ? tDictionary[t[i]] += 1 : tDictionary[t[i]] = 1   
        }
        for(const [key] of Object.entries(sDictionary)){
            if(sDictionary[key] !== tDictionary[key]) return false
        }
        return true

    }
}