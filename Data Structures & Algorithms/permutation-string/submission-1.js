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
        const strToMap = (str) => {
    const map = new Map()
    for (let char of str){
        if (map.has(char)){
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    } 
    return map
}

if (s1.length > s2.length) return false;

    const k = s1.length;
    const s1Map = strToMap(s1);
    const windowMap = strToMap(s2.slice(0, k)); // first window, built once

    for (let left = 0; left + k <= s2.length; left++) {
        // 1. Check the current window: s2[left .. left + k - 1]
        let matches = 0;
        for (const [char, count] of s1Map) {
            if (windowMap.get(char) === count) matches++;
        }
        if (matches === s1Map.size) return true;

        // 2. Slide: s2[left] leaves, s2[left + k] enters
        const right = left + k;
        if (right === s2.length) break; // that was the last window

        const out = s2[left];
        windowMap.set(out, windowMap.get(out) - 1);

        const incoming = s2[right];
        windowMap.set(incoming, (windowMap.get(incoming) || 0) + 1);
    }
    return false;
    }
}
