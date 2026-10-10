class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map()
        const result = []

        for (let i =0;i<nums.length;i++){

            const diff = target - nums[i]

            if (map.has(diff)){
                result.push(i, map.get(diff))
            } else {
                map.set(nums[i], i)
            }
        }
        
        return result
    }
}