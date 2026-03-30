class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let mid = x / 2;
        let[left, right] = [0, x]
        while(true){
            const mid = left + Math.floor((right - left)/2)
            const floorPower = Math.floor(mid) * Math.floor(mid) 
            const ceilPower = Math.floor(mid+1) * Math.floor(mid+1) 
            if(floorPower <= x && ceilPower > x) return mid
            if(floorPower > x) right = mid - 1
            if(floorPower < x) left = mid+1
        }

    }
}
