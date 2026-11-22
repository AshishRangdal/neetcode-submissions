class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mp = new Map();
        for (let it = 0; it < nums.length; it++) {
            const diff = target - nums[it];
            if (mp.has(diff)) {
                return [mp.get(diff), it];
            } else {
                mp.set(nums[it], it);
            }
        }
    }
}
