class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mp = {};
        for(const it of nums){
            if(mp[it]){
                return true;
            }else{
                mp[it]=1;
            }
        }
        return false;
    }
}
