class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for (let i =0; i < nums.length; i++) {
            const num = nums[i];
            if(map.has(num)){
                const val = map.get(num) + 1;
                map.set(num, val);
            }
            else {
                map.set(num, 1);
            }
        }

        const arr = new Array(nums.length + 1);
        map.forEach((val, key) => {
            if(arr[val]) arr[val] = [...arr[val], key];
            else arr[val] = [key];
        })

        let res = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            if (res.length === k) break;
            if (!arr[i]) continue;
            const rem = k - res.length;
            const val = arr[i].slice(0, rem);
            res.push(...val);
        }

        return res;
    }
}
