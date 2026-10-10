class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
   checkInclusion(s1, s2) {
        let map = new Map()

        for (const char of s1) {
            map.set(char, (map.get(char) || 0) + 1)
        }

        let left = 0
        let right = s1.length

        const snapshot = new Map(map)

        while(right <= s2.length){
            map = new Map(snapshot)
            const substring = s2.slice(left, right)



            for (const char of substring) {
                if (!map.has(char)) {
                    break
                }

                map.set(char, map.get(char) - 1)
            }



            left++
            right++

            const isValid = [...map.values()].every(count => count === 0)

            if (isValid) {
                return true
            }
        }

      

                
            


    
return false



    }
}
