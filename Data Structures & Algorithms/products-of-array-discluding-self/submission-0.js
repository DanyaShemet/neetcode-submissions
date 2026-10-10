class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let left = 1
       let right = 1
       let leftResult = []
       let rightResult = []
       let result = []

       let final = []

       for (let i=0;i<nums.length;i++){
            final.push(left)
            left *= nums[i]
       }

        for (let i=nums.length-1;i >=0 ;i--){
            final[i] *= right
            right *= nums[i]  
       }

    //    for (let i=nums.length-1;i >=0 ;i--){
    //         rightResult[i] = right
    //         right *= nums[i]  
    //    }

    //    for (let i=0;i<nums.length;i++){
    //         result.push(leftResult[i] * rightResult[i])
    //    }

       console.log(final)

       


        return final
    }
}
