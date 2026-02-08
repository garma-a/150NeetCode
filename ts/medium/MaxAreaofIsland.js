class Solution {
	/**
	 * @param {number[][]} grid
	 * @return {number}
	 */
	maxAreaOfIsland(grid) {
		if (!grid?.length || !grid[0]?.length) return 0;

		const rows = grid.length;
		const cols = grid[0].length;
		let maxArea = 0;

		// Direction vectors for exploring adjacent cells (up, down, left, right)
		const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

		const exploreIsland = (row, col) => {
			// Base case: out of bounds or water/visited cell
			if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
				return 0;
			}
			// Explore all adjacent cells and sum their areas all four directions
			return 1 +
				exploreIsland(row + 1, col) +
				exploreIsland(row - 1, col) +
				exploreIsland(row, col + 1) +
				exploreIsland(row, col - 1);
			let area = 1;
			for (const [dx, dy] of directions) {
				area += exploreIsland(row + dx, col + dy);
			}

			return area;
		};

		// Iterate through grid to find islands
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				if (grid[row][col] === 1) {
					const currentArea = exploreIsland(row, col);
					maxArea = Math.max(maxArea, currentArea);
				}
			}
		}

		return maxArea;
	}
}
