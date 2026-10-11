class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {

        let maxReach = 0

        let jumps = 0
        let currentEnd = 0
        let farthest = 0



        for (let i=0;i<nums.length - 1;i++){
            // if (i > maxReach){
            //     return false
            // }

            // if (maxReach === i + nums[i] || maxReach > i + nums[i]){
            //     jumps -= 1
            // }
            
        
            farthest = Math.max(farthest, i + nums[i])


            if (i === currentEnd) {
                jumps++
                currentEnd = farthest
            }
        
        }

        return jumps
    }
}

