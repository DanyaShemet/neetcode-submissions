class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
    let currentSum = 0
let maxSum = -Infinity

for (const num of nums) {
    if (currentSum < 0) {
        currentSum = 0
    }

    currentSum += num
    maxSum = Math.max(maxSum, currentSum)
}

    return maxSum
}
}
