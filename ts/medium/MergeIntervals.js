class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    if (intervals.length === 0) return intervals;
    intervals.sort((el1, el2) => el1[0] - el2[0]);
    let output = [intervals[0]];
    for (const [s, e] of intervals.slice(1)) {
      const last = output[output.length - 1];
      if (s <= last[1])
        output[output.length - 1] = [Math.min(s, last[0]), Math.max(e, last[1])];
      else output.push([s, e]);
    }
    return output;
  }
}
