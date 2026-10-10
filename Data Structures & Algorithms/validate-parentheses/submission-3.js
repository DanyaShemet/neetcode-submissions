class Solution {
    isValid(s) {
        if (s.length % 2 !== 0) {
            return false
        }

        const stack = []

        const brackets = {
            '{': '}',
            '[': ']',
            '(': ')'
        }

        for (let i = 0; i < s.length; i++) {
            const char = s[i]

            if (brackets[char]) {
                stack.push(char)
            } else {
                const last = stack.pop()

                if (brackets[last] !== char) {
                    return false
                }
            }
        }

        return stack.length === 0
    }
}