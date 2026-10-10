class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        let result = []

        for (let i=0;i<nums.length;i++){
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        const buckets = Array.from(
            { length: nums.length + 1 },
            () => []
        )

        for (const [num, frequency] of map) {
            buckets[frequency].push(num)
        }


        for (let i = buckets.length - 1; i >= 0; i--) {
            // let remaining = k - result.length
            // let value = buckets[i]


              for (const num of buckets[i]) {
                result.push(num)

                if (result.length === k) {
                    return result
                }
            }

            // if (remaining <= 0){
            //     break
            // }

            

            // if (value.length){
            //     if (value.length <= remaining){
            //         //result = result.concat(value)
            //         result.push(value)
            //     }else {
            //         //result = result.concat(value.slice(0, remaining))
            //         result.push(value.slice(0, remaining))
            //     }
            // }  
 
        }



        // while(result.length < k){
        //     let maxKey = 0
        //     let maxFreq = 0

        //      for (let key of map.keys()){
        //         if (maxFreq < map.get(key)){
        //             maxFreq = map.get(key)
        //             maxKey = key
        //         }
        //     }

        //     result.push(maxKey)

        //     map.delete(maxKey)
        // }

       

        return result
    
    }
}
