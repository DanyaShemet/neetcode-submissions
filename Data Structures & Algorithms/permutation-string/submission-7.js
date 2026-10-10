class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false
        }

        const map = new Map()

        // 1. Підраховуємо частоти символів s1
        for (const char of s1) {
            map.set(char, (map.get(char) || 0) + 1)
        }

        console.log(map)

        // 2. Обробляємо перше вікно s2
        for (let i = 0; i < s1.length; i++) {
            const char = s2[i]
            map.set(char, (map.get(char) || 0) - 1)
        }

              console.log(map)

        let left = 0
        let right = s1.length

        // 3. Перевіряємо поточне вікно
        while (true) {
            const isValid = [...map.values()].every(count => count === 0)

            if (isValid) {
                return true
            }

            // Більше немає символів для зміщення
            if (right >= s2.length) {
                break
            }

            // 4. Символ виходить із вікна
            const outgoing = s2[left]
            map.set(outgoing, map.get(outgoing) + 1)

            // 5. Новий символ заходить у вікно
            const incoming = s2[right]
            map.set(incoming, (map.get(incoming) || 0) - 1)

            left++
            right++
        }

        return false
    }
}