class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }
        
        const map = new Map()

        for(let i=0;i<s.length;i++){
            const str1 = s[i]
            const str2 = t[i]

            map.set(str1, (map.get(str1) || 0) + 1)
            map.set(str2, (map.get(str2) || 0) - 1)
        }


for (const value of map.values()) {
    if (value !== 0) {
        return false
    }
}

return true

    }
}
