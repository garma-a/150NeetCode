class Solution {
	/**
	 * @param {character[][]} grid
	 * @return {number}
	 */
	numIslands(grid) {
		const height = grid.length, width = grid[0].length;
		function dfs(i, j) {
			if (
				i < 0 || i >= height ||
				j < 0 || j >= width ||
				grid[i][j] === "0"
			) return;
			grid[i][j] = "0";
			dfs(i + 1, j)
			dfs(i - 1, j)
			dfs(i, j + 1)
			dfs(i, j - 1);
		}
		let num_of_island = 0;

		for (let row = 0; row < height; row++)
			for (let col = 0; col < width; col++)
				if (grid[row][col] === "1") {
					num_of_island++;
					dfs(row, col);
				}
		return num_of_island;


	}
}
