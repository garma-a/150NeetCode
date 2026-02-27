
class Solution {
  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(heights) {
    const res = [], rowLength = heights.length, colLength = heights[0].length;
    const pacificReachable = new Set();
    const atlanticReachable = new Set();

    function dfs(r, c, reachableSet, prevHeight) {
      const key = `${r},${c}`;
      if (r < 0 || c < 0 || r >= rowLength || c >= colLength || reachableSet.has(key) || heights[r][c] < prevHeight) {
        return;
      }
      reachableSet.add(key);
      dfs(r + 1, c, reachableSet, heights[r][c]);
      dfs(r - 1, c, reachableSet, heights[r][c]);
      dfs(r, c + 1, reachableSet, heights[r][c]);
      dfs(r, c - 1, reachableSet, heights[r][c]);
    }



    for (let i = 0; i < rowLength; i++) {
      dfs(i, 0, pacificReachable, heights[i][0]);
      dfs(i, colLength - 1, atlanticReachable, heights[i][colLength - 1]);
    }
    for (let j = 0; j < colLength; j++) {
      dfs(0, j, pacificReachable, heights[0][j]);
      dfs(rowLength - 1, j, atlanticReachable, heights[rowLength - 1][j]);
    }

    for (let r = 0; r < rowLength; r++) {
      for (let c = 0; c < colLength; c++) {
        if (pacificReachable.has(`${r},${c}`) && atlanticReachable.has(`${r},${c}`)) {
          res.push([r, c]);
        }
      }
    }

    return res;

  }
}
