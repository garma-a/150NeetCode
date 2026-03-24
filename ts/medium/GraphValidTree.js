
class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    let mp = new Map();
    for (let i = 0; i < n; i++) mp.set(i, []);
    for (const [key, val] of edges) {
      mp.get(key).push(val);
      mp.get(val).push(key);
    }
    let visited = new Set();

    function dfs(child, parent) {
      if (visited.has(child)) { ans = false; return; }
      visited.add(child);
      for (let nei of mp.get(child)) {
        if (nei === parent) continue;
        if (!dfs(nei, child)) return false;
      }
      return true;
    }
    return dfs(0, -1) && visited.size === n;

  }
}
