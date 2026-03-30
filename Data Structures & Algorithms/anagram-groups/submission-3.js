class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const length = s.length
        const [sDictionary, tDictionary] = [{}, {}]

        for (let i = 0; i < length; i++) {
            // sDictionary[s[i]] ? sDictionary[s[i]] += 1 : sDictionary[s[i]] = 1
            sDictionary[s[i]] = (sDictionary[s[i]] || 0) + 1
            // tDictionary[t[i]] ? tDictionary[t[i]] += 1 : tDictionary[t[i]] = 1   
            tDictionary[t[i]] = (tDictionary[t[i]] || 0) + 1
        }
        for (const [key] of Object.entries(sDictionary)) {
            if (sDictionary[key] !== tDictionary[key]) return false
        }
        return true

    }
    groupAnagrams(strs) {
        const seen = new Set()
        const returnArray = []
        for (let i = 0; i < strs.length; i++) {
            const anagrams = []
            if(!seen.has(strs[i])) anagrams.push(strs[i])
            for (let j = i+1; j < strs.length; j++) {
                // console.log(this.isAnagram("",""))
                if (!seen.has(strs[i]) && !seen.has(strs[j])) {
                    // console.log(`${strs[i]}  ${strs[j]}`)
                    if (this.isAnagram(strs[i], strs[j])) {
                        anagrams.push(strs[j])
                    }
                }

            }
            anagrams.forEach(anagram=>seen.add(anagram))
            anagrams.length && returnArray.push(anagrams)
        }
        return returnArray
    }
}
