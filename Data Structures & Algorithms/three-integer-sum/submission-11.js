class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     * [-1, -1, 0, 1, 2]
     */
    threeSum(nums) {
        const result = []
        nums.sort((a, b) => a - b)

        for (let i = 0;i <= nums.length - 2;i ++){
            if (i > 0 && nums[i] === nums[i-1]){
                continue
            }
            
            let left = i + 1
            let right = nums.length - 1
            let target = -nums[i]

          
            while (right > left){
                let sum = nums[left] + nums[right]
            
                if (sum === target){
                    result.push([
                        nums[i], nums[left], nums[right]
                    ])

                    left++
                    right--

                      while (right > left && nums[left] === nums[left -1]){
                        left++
                    }

             while (right > left && nums[right] === nums[right + 1]){
                right--
            }


                } else if (sum > target){
                    right--
                } else {
                    left++
                }
            }
        }

        return result
    }
}