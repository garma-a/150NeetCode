
class Solution {
	/**
	 * @param {number[][]} grid
	 * @return {number}
	 */
	maxAreaOfIsland(grid) {

		const height = grid.length, width = grid[0].length;
		function dfs(i, j) {
			if (
				i < 0 || i >= height ||
				j < 0 || j >= width ||
				grid[i][j] === 0
			) return 0;
			grid[i][j] = 0;
			return 1 + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1);
		}
		let mx_land = 0
		for (let i = 0; i < height; i++)
			for (let j = 0; j < width; j++)
				if (grid[i][j] === 1) {
					mx_land = Math.max(mx_land, dfs(i, j));
				}
		return mx_land;
	}
}
