class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
    //     let currentIndex = 0
    //     let destionationIndex = nums.length - 1

    //     while(destionationIndex > currentIndex){
    //         let stepValue = nums[currentIndex]

    //         if (stepValue === 0){
    //             return false
    //         }

    //         currentIndex += stepValue
    //     }

    //     return true
        


      let maxReach = 0

        for (let i = 0; i < nums.length; i++) {
            // Перевірка доступності індексу

            if (maxReach < i){
                return false
            }

            maxReach = Math.max(maxReach, i + nums[i])
        }

        return true
    }


}
