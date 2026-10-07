class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = '';
        for (let str of strs){
            str = `${str.length}#${str}`
            res += str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0;
        const res: string[] = [];

        while(i < str.length){
            const index = str.indexOf('#', i);
            const range = +str.slice(i, index);
            const start = index + 1;
            const end = start + range;
            const word = str.slice(start, end);
            res.push(word);
            i = end;
        }
        return res;
    }
}
