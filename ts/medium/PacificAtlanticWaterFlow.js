class Solution {
  /**
   * @param {number[][]} heights
   * @return {number[][]}
   */
  pacificAtlantic(heights) {
    let pacificReachable = new Set(), atlanticReachable = new Set();
    let rowLength = heights.length, colLength = heights[0].length;

    function dfs(row, col, set, prevHeight) {
      const key = `${row},${col}`;
      if (
        row < 0 ||
        col < 0 ||
        row >= rowLength ||
        col >= colLength ||
        set.has(key) ||
        heights[row][col] < prevHeight
      ) return;
      set.add(key);
      dfs(row + 1, col, set, heights[row][col]);
      dfs(row - 1, col, set, heights[row][col]);
      dfs(row, col + 1, set, heights[row][col]);
      dfs(row, col - 1, set, heights[row][col]);
    }

    for (let r = 0; r < rowLength; r++) {
      dfs(r, 0, pacificReachable, heights[r][0]);
      dfs(r, colLength - 1, atlanticReachable, heights[r][colLength - 1]);
    }
    for (let c = 0; c < colLength; c++) {
      dfs(0, c, pacificReachable, heights[0][c]);
      dfs(rowLength - 1, c, atlanticReachable, heights[rowLength - 1][c]);
    }
    let res = [];
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

