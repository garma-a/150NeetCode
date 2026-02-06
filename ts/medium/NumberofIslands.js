class Solution {
	/**
	 * @param {character[][]} grid
	 * @return {number}
	 */
	numIslands(grid) {
		/**
		*@param {number} i the row inedx
		*@param {number} j the col index
		*/
		function dfs(i, j) {
			if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length
				|| grid[i][j] === "0"
			) return 1;
			grid[i][j] = "0";
			dfs(i + 1, j);
			dfs(i - 1, j);
			dfs(i, j + 1);
			dfs(i, j - 1);
		}
		let ans = 0;
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] == "1") {
					ans++;
					dfs(i, j);
				}
			}
		}
		return ans;
	}
}
