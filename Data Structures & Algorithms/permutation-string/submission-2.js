class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */

    /** 
    for this problem we want to find substrings in s2 and if they contain the letters of s1
    one way that comes to my mind:
    - is to create a hash map of the chars in s1 with their count. 
    - after that I will loop with a window of size s1 in s2     
    */

    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false

        const strToMap = (str) => {
            const map =  new Map()
            for (const char of str){
                if (map.has(char)) {
                    map.set(char, map.get(char) + 1)
                } else {
                    map.set(char, 1)
                }
            }
            return map
        }

        const s1Map = strToMap(s1)
        let left = 0; 
        let right = left + s1.length 
        
       while (left < s2.length){
        // find the substrings of size s1
        const subStrMap = strToMap(s2.slice(left, right) )
        let res = 0
        // compare subStrMap
        for (let [key, value] of s1Map){
            if (subStrMap.has(key) && subStrMap.get(key) === value){
                res += 1
            }
        }
        if (res === s1Map.size){
            return true
        }
        left += 1
        right = left + s1.length
    }
    return false
    }
}
