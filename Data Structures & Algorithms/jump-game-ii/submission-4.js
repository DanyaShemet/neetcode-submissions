class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {

        let maxReach = 0

        let jumps = 0
        let currentEnd = 0



        for (let i=0;i<nums.length - 1;i++){        
           maxReach = Math.max(maxReach, i + nums[i])


            if (i === currentEnd) {
                jumps++
                currentEnd = maxReach
            }
        
        }

        return jumps
    }
}

