var Solution = /** @class */ (function() {
    function Solution() {
    }
    Solution.prototype.lengthOfLongestSubstring = function(s) {
        var storage = new Set();
        var _a = [0, 0], prev = _a[0], cur = _a[1];
        var mxLen = 0;
        while (cur < s.length) {
            while (storage.has(s[cur]) && prev < cur) {
                storage.delete(s[prev]);
                prev++;
            }
            storage.add(s[cur]);
            mxLen = Math.max(mxLen, cur - prev + 1);
            cur++;
        }
        return mxLen;
    };
    return Solution;
}());
