class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const resultsArr = []
        for(let i=0; i<operations.length; i++){
            if(operations[i] === "+"){
                const length = resultsArr.length
                const sumValue = resultsArr[length-1] + resultsArr[length-2]
                resultsArr.push(sumValue)
            } else if(operations[i]==="D"){
                const length = resultsArr.length
                const doubleValue = resultsArr[length-1]*2
                resultsArr.push(doubleValue)
            } else if(operations[i]==="C"){
                resultsArr.pop()
            }else{
                const newValue = Number(operations[i])
                resultsArr.push(newValue)
            }
        }
        return resultsArr.reduce((acc,curr)=>acc+curr,0)
    }
}
