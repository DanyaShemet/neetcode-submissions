class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for (let str of strs){
            const count = new Array(26).fill(0)

            for (const char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }

            const countsString = count.join(',')

            if (map.has(countsString)){
                map.get(countsString).push(str)
            }else{
                map.set(countsString, [str])
            }
        }

        return [...map.values()]
    }
}
