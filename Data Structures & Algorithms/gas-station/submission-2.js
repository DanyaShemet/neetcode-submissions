class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const length = gas.length
        // let start = 0
        // let totalGas = 0
        // let tank = 0




        

        // for (let start=0; start < length; start++){
        //     let tank = 0
        //     let canComplete = true
        //     for (let step=0; step < length; step++){
        //         let i = start + step

        //         if (i >= length) {
        //             i -= length
        //         }

        //         tank += gas[i] - cost[i]
             

        //         if (tank < 0) {
        //             canComplete = false
        //             break
        //         }
        //     }

        //     if (canComplete) {
        //         return start
        //     }
        // }

        // return -1

        let resultIndex = 0
        let tank = 0


        const n = gas.length;

        let totalGas = 0;
        let totalCost = 0;
        
        for (let i = 0; i < n; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        if (totalGas < totalCost) {
            return -1; // impossible case
        }

        for (let start=0; start < length; start++){
            let difer = gas[start] - cost[start]

    
            tank += difer

             if (tank < 0) {
                tank = 0
                resultIndex = start + 1
            }
        }

        return resultIndex
    }
}
