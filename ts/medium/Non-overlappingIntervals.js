class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number}
   */
  eraseOverlapIntervals(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    let fe = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
      let [s, e] = intervals[i];
      if (fe > s) {
        ans++;
      } else {
        fe = e;
      }
    }
    return ans;
  }
}
