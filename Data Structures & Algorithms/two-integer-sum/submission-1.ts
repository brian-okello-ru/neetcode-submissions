class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const m = new Map();
        for (let i = 0; i < nums.length; i++){
            const num = nums[i];
            const rem = target - num;
            if (!m.has(rem)) m.set(num, i)
            else {
                const index = m.get(rem);
                return [index, i];
            }
        }
    }
}
