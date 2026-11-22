class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const scount = {};
        const tcount = {};
        for (const it of s) {
            scount[it] = (scount[it] || 0) + 1;
        }
        for (const it of t) {
            tcount[it] = (tcount[it] || 0) + 1;
        }
        for (const it of [...s, ...t]) {
            if (scount[it] !== tcount[it]) {
                return false;
            }
        }
        return true;
    }
}
