class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

       const res = [];

        function backtrack(index, path) {
            if (index === nums.length) {
                res.push([...path]);
                return;
            }

            path.push(nums[index]);

            backtrack(index + 1, path);

            path.pop();

            backtrack(index + 1, path);
        }

        backtrack(0, []);
        return res;


        // const result = [[]]

        // for (const num of nums) {
        //     const length = result.length

        //     for (let i = 0; i < length; i++) {
        //         result.push([...result[i], num])
        //     }
        // }

        // return result
    }
}
