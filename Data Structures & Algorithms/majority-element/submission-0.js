class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort();
        const mid = Math.floor(nums.length / 2);
        return nums[mid];
    }
}
