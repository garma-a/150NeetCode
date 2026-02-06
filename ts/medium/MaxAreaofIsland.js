class Solution {
	/**
	 * @param {number[][]} grid
	 * @return {number}
	 */
	maxAreaOfIsland(grid) {
		const [ROW, COL] = [grid.length, grid[0].length]
		const dfs = (i, j) => {
			if (i >= ROW || j >= COL || i < 0 || j < 0 || grid[i][j] === 0) return 0;
			grid[i][j] = 0;
			return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
		}
		let ans = 0;
		for (let r = 0; r < ROW; r++) {
			for (let c = 0; c < COL; c++) {
				if (grid[r][c] === 1) {
					ans = Math.max(ans, dfs(r, c));
				}
			}
		}
		return ans;
	}
}
