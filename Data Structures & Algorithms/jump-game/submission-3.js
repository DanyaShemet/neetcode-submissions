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

        for (let i=0;i<nums.length;i++){
            if (i > maxReach){
                return false
            }
            maxReach = Math.max(maxReach, i + nums[i])
        }

        console.log(maxReach)

        return true
        


      
    }


}

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     canJump(nums) {
//         const destination = nums.length - 1

//         function backtrack(currentIndex) {
//             if (currentIndex >= destination) {
//                 return true
//             }

//             const maxJump = nums[currentIndex]

//             for (let jump = maxJump; jump >= 1; jump--) {
//                 const nextIndex = currentIndex + jump

//                 if (backtrack(nextIndex)) {
//                     return true
//                 }
//             }

//             return false
//         }

//         return backtrack(0)
//     }
// }
