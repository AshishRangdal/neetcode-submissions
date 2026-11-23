class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let cnt = 0;
        for (let it = 0; it < nums.length; it++) {
            if (nums[it] === val) {
                cnt++;
                nums.splice(it, 1, "-");
            }
        }
        nums.sort((a, b) => {
            if (typeof a === "number" && typeof b === "string") return -1;
            if (typeof a === "string" && typeof b === "number") return 1;
            return 0;
        });
        return nums.length - cnt;
    }
}
