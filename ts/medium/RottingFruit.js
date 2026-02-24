
class Solution {
  /**
   * @param {number[][]} grid
   * @return {number}
   */
  orangesRotting(grid) {
    const colLenght = grid[0].length, rowLength = grid.length, neighbors = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    let q = [], totalFresh = 0, converted = 0, minutes = 0;
    for (let r = 0; r < rowLength; r++)
      for (let c = 0; c < colLenght; c++) {
        if (grid[r][c] === 2) q.push([r, c])
        if (grid[r][c] === 1) totalFresh++;

      }

    while (q.length) {
      let size = q.length, levelProccesed = false;
      for (let level = 0; level < size; level++) {
        const [curRow, curCol] = q.shift();

        for (const [r, c] of neighbors) {
          const neighborRow = curRow + r, neighborCol = curCol + c;
          if (neighborRow >= 0 && neighborRow < rowLength && neighborCol >= 0 && neighborCol < colLenght && grid[neighborRow][neighborCol] === 1) {
            grid[neighborRow][neighborCol] = 2;
            q.push([neighborRow, neighborCol]);
            converted++;
            levelProccesed = true;
          }
        }

      }
      if (levelProccesed) minutes++;

    }
    return totalFresh === converted ? minutes : -1;
  }
}
