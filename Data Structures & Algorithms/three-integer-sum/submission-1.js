class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    /** 
    Initial BF Solution (not fully working)

    const res = new Set()
        for (let i = 0; i < nums.length; i++){
            for (let j = i + 1; j <  nums.length; j++){
                for (let k = j + 1; k <  nums.length; k++){
                    if (nums[i] + nums[j] + nums[k] === 0 && !res.has([nums[i], nums[j], nums[k]])){
                        res.add([nums[i], nums[j], nums[k]])
                    } 
                }
            }
        }
    return Array.from(res)
    */

    threeSum(nums) {
        nums.sort((a, b) => a - b)
        const res = []
        
        for (let i = 0; i < nums.length; i++){
            if (nums[i] > 0 ) break
            if (i > 0 && nums[i] === nums[i-1]) continue
            let left = i + 1
            let right = nums.length - 1
            while (left < right){
                let sum = nums[i] + nums[left] + nums[right] 
                if (sum < 0){
                    left++
                } else if (sum > 0){
                    right--
                } else {
                    res.push([nums[i], nums[left], nums[right]])
                    left++
                    right--
                    while (left < right && nums[left] === nums[left - 1]) left++;  // skip repeated second numbers
                }
            }
        }
        return res
    }

}
