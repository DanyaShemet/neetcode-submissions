class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0
        let r = heights.length - 1
        let max = 0

        while (r > l){
            let minHeight = Math.min(heights[r], heights[l])
            let containerSize = minHeight * (r - l)

            
            if (containerSize > max){
                max = containerSize
            }

            if (heights[r] > heights[l]){
                l++
            }else {
                r--
            }
        }

        return max
    }
}