class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans = "";
        for (let it of strs[0]) {
            let tmp = ans + it;
            let flag = true;
            for (let word of strs) {
                if (!word.includes(tmp)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                ans = tmp;
            } else {
                return ans;
            }
        }
        return ans;
    }
}
