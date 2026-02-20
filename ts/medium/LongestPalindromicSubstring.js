class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    if (s.length < 2) return s;
    let start = 0, maxLen = 0, ans = "";
    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return [right - left - 1, left + 1];
    }
    for (let i = 0; i < s.length; i++) {
      const [oddLength, startOdd] = expandAroundCenter(i, i);
      const [evenLength, startEven] = expandAroundCenter(i, i + 1);
      if (maxLen < oddLength) {
        ans = s.substring(startOdd, startOdd + oddLength);
        maxLen = oddLength
      }
      if (maxLen < evenLength) {
        ans = s.substring(startEven, startEven + evenLength);
        maxLen = evenLength
      }

    }
    return ans;
  }
}

