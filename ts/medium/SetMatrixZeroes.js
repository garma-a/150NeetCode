class Solution {
  /**
   * @param {number[][]} matrix
   * @return {void}
   */
  setZeroes(matrix) {
    const ROW = matrix.length, COL = matrix[0].length;
    const zeroRows = new Set(), zeroCol = new Set();
    for (let r = 0; r < ROW; r++)
      for (let c = 0; c < COL; c++) {
        if (matrix[r][c] === 0) {
          zeroRows.add(r);
          zeroCol.add(c);
        }
      }

    for (let r = 0; r < ROW; r++)
      for (let c = 0; c < COL; c++) {
        if (zeroRows.has(r) || zeroCol.has(c)) {
          matrix[r][c] = 0;
        }
      }

  }
}

const s = new Solution()
const matrix = [[1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 0]]
s.setZeroes(matrix);
console.log(matrix);

