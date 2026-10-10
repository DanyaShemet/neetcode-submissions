class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        const result = []

        for (let i=0;i<nums.length;i++){
            // if (map.has(nums[i])){
            //     map.set(nums[i], (map.get(nums[i]) || 0) + 1)
            // }else {
            //     map.set(nums[i], 1)
            // }

            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        while(result.length < k){
            let maxKey = 0
            let maxFreq = 0

             for (let key of map.keys()){
                if (maxFreq < map.get(key)){
                    maxFreq = map.get(key)
                    maxKey = key
                }
            }

            result.push(maxKey)

            map.delete(maxKey)
        }

       

        return result
    
    }
}
