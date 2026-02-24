class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {

    function expandAroundCenter(left, right) {
      while (left >= 0 && right < s.length) {
        if (s[left] !== s[right])
          break;
        left--;
        right++;
      }
      return [left + 1, right - left - 1];
    }
    let ans = "";
    for (let i = 0; i < s.length; i++) {
      let [oddStart, oddLength] = expandAroundCenter(i, i);
      let [evenStart, evenLength] = expandAroundCenter(i, i + 1);
      if (evenLength > ans.length)
        ans = s.substring(evenStart, evenLength + evenStart);
      if (oddLength > ans.length)
        ans = s.substring(oddStart, oddLength + oddStart);

    }
    return ans;

  }
}

