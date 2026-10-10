class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((s) => {
            const len = s.length
            return `${len}#${s}`
        }).join('')
    }

    /**
     * @param {string} str 5#hello2#hi
     * @returns {string[]}
     */
    decode(str) {
         let result = []
        let index = 0


        while (index < str.length) {
            let hashIndex = index

            while (str[hashIndex] !== '#') {
                hashIndex++
            }

            const length = Number(str.slice(index, hashIndex))

            const wordStart = hashIndex + 1
            const wordEnd = wordStart + length

            result.push(str.slice(wordStart, wordEnd))

            index = wordEnd
        }

        return result
    }
}
