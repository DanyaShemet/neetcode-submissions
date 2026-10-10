class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        // function backtrack(index, current){
        //     // if (current.length === nums.current){
        //     //     result.push(current)
        //     //     return result
        //     // }


        //     for (let i = 0; i < nums.length; i++) {
        //         backtrack(nums[i])
        //     }
        // }
        

        // backtrack([])

        
        const result = [[]]

        for (const num of nums) {
            const length = result.length

            for (let i = 0; i < length; i++) {
                result.push([...result[i], num])
            }
        }

        return result
    }
}
