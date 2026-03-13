
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}


class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    const startArray = [...intervals].sort((a, b) => a.start - b.start).map((el) => el.start);
    const endArray = [...intervals].sort((a, b) => a.end - b.end).map((el) => el.end);
    let startPtr = 0, endPtr = 0, counter = 0, ans = 0;
    while (startPtr < intervals.length && endPtr < intervals.length) {
      const curStart = startArray[startPtr], curEnd = endArray[endPtr];
      if (curStart < curEnd) {
        counter++;
        startPtr++;
      } else {
        counter--;
        endPtr++;
      }
      ans = Math.max(ans, counter);
    }
    return ans;

  }
}
