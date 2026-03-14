class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */
  canFinish(numCourses, prerequisites) {
    /**
     * @type {Map<number , Array<number>>}
     */
    const preMap = new Map();
    for (let i = 0; i < numCourses; i++) preMap.set(i, []);
    for (let [crs, pre] of prerequisites) preMap.get(crs).push(pre);

    const visited = new Set();
    function dfs(crs) {
      if (visited.has(crs)) return false;
      if (preMap.get(crs).length === 0) return true;
      visited.add(crs);
      for (let pre of preMap.get(crs))
        if (!dfs(pre)) return false;
      visited.delete(crs);
      preMap.set(crs, []);
      return true;
    }

    for (let c = 0; c < numCourses; c++) if (!dfs(c)) return false;
    return true;
  }

}
