/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let [left, right] = [0,n]
        while(left < right){
            const pick = left + Math.ceil((right-left)/2)
            const pickResult = guess(pick)
            
            if(pickResult === 0) return pick
            if(pickResult === -1) right = pick
            if(pickResult === 1) left = pick
        }

    }
}
