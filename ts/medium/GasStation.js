
class Solution {
  /**
   * @param {number[]} gas
   * @param {number[]} cost
   * @return {number}
   */
  canCompleteCircuit(gas, cost) {
    if (gas.reduce((acc, cur, i) => acc + (cur - cost[i]), 0) < 0) return -1;

    let total = 0, startPos = 0;

    for (let i = 0; i < gas.length; i++) {
      total += (gas[i] - cost[i]);
      if (total < 0) {
        total = 0;
        startPos = i + 1
      }
    }
    return startPos
  }
}
