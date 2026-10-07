class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const frequencies = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            frequencies.set(s[i], (frequencies.get(s[i]) || 0) + 1);
            frequencies.set(t[i], (frequencies.get(t[i]) || 0) - 1);
        }

        for (const count of frequencies.values()) {
            if (count !== 0) return false;
        }

        return true;
    }
}