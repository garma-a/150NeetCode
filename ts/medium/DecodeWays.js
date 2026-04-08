class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  numDecodings(s) {
    const valid = new Set();
    const memo = new Map();
    for (let i = 1; i <= 26; i++) valid.add(i.toString());

    function dfs(idx = 0) {
      if (idx === s.length) return 1;
      if (memo.has(idx)) return memo.get(idx);

      let singleNum = 0, doubleNum = 0;

      let single = s[idx], double = "";


      if (valid.has(single)) singleNum = dfs(idx + 1);


      if (idx < s.length - 1) {
        double = s[idx] + s[idx + 1];
        if (valid.has(double)) doubleNum = dfs(idx + 2);
      }


      memo.set(idx, singleNum + doubleNum);

      return singleNum + doubleNum;
    }
    return dfs(0)
  }
}


const s = new Solution();
s.numDecodings("121212")
