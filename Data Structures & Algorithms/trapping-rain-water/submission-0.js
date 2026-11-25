class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // max left array
        const maxLeft = new Array(height.length).fill(0)
        let mxL = 0
        for (let i = 0; i < height.length; i++){
           mxL = Math.max(mxL, (height[i - 1] || 0))
           maxLeft[i] = mxL
        }
        
        // max right array
        const maxRight = new Array(height.length).fill(0)
        let mxR = 0
        for (let i = height.length - 1; i >= 0; i--){
            mxR = Math.max(mxR, (height[i + 1] || 0))
            maxRight[i] = mxR
        }
        
        // min between right and left column
        const minLR = new Array(height.length)
        for (let i = 0; i < height.length; i++){
            minLR[i] = Math.min(maxLeft[i], maxRight[i])
        }
        
        let sum = 0 
        for (let i = 0; i < height.length; i++){
            sum += Math.max(minLR[i] - height[i], 0)
        }
        return sum
    }
}
