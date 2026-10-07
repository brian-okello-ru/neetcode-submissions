class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let res = [];
        const map = new Map<string, Array<string>>();
        const sortedStrings = strs.map(word => 
            word.split('').sort().join('')
        );

        for (let i = 0; i < sortedStrings.length; i++){
            const current = sortedStrings[i];
            if (map.has(current)) {
                let val = map.get(current);
                val = [...val, strs[i]];
                map.set(current, val);
            }
            else {
                map.set(current, [strs[i]]);
            }
        }

        map.forEach((v, k) => {
            res = [...res, v]
        })
        return res;

    }
}
