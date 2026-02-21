class Solution {
  /**
   * @param {number[][]} grid
   */
  islandsAndTreasure(grid) {
    const rowSize = grid.length, colSize = grid[0].length;
    const neighbors = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const queue = [];

    for (let row = 0; row < rowSize; row++) {
      for (let col = 0; col < colSize; col++) {
        if (grid[row][col] === 0) {
          queue.push([row, col]);
        }
      }
    }

    while (queue.length) {
      const [curRow, curCol] = queue.shift();
      for (const [r, c] of neighbors) {
        const finalRow = curRow + r, finalCol = curCol + c;
        if (
          finalRow >= 0 && finalRow < rowSize &&
          finalCol >= 0 && finalCol < colSize &&
          grid[finalRow][finalCol] !== -1 &&
          grid[finalRow][finalCol] > grid[curRow][curCol] + 1
        ) {
          grid[finalRow][finalCol] = grid[curRow][curCol] + 1;
          queue.push([finalRow, finalCol]);
        }
      }
    }
    return grid;
  }
}
