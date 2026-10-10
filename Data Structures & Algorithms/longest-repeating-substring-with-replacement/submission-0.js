class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map()
        let left = 0
        let maxLength = 0
        let maxFrequency = 0

for (let right = 0; right < s.length; right++) {
    const char = s[right]
    map.set(char, (map.get(char) || 0) + 1)
    maxFrequency = Math.max(maxFrequency, map.get(char))
    let windowLength = right - left + 1
    let needToChange = windowLength - maxFrequency

    while (right - left + 1 - maxFrequency > k) {
            map.set(s[left], map.get(s[left]) - 1)
        left++
    }

    maxLength = Math.max(maxLength, right - left + 1)
}

return maxLength

    }
}
