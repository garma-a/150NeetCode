class Solution {
  /**
   * @param {number[][]} intervals
   * @param {number[]} newInterval
   * @return {number[][]}
   */
  insert(intervals, newInterval) {
    let i = 0, res = [], n = intervals.length;
    while (i < n && intervals[i][1] < newInterval[0]) res.push(intervals[i++]);
    let s = newInterval[0], e = newInterval[1];
    while (i < n && intervals[i][0] <= e) {
      s = Math.min(intervals[i][0], s);
      e = Math.max(intervals[i][1], e);
      i++;
    }
    res.push([s, e]);

    while (i < n) res.push(intervals[i++]);
    return res;
  }

}
