class Solution {
  /**
   * @param {number[][]} matrix
   * @return {number[]}
   */
  spiralOrder(matrix) {
    let ROW = matrix.length, COL = matrix[0].length;
    let L = 0, R = COL - 1, T = 0, B = ROW - 1;
    const res = [];
    while (L <= R && T <= B) {
      for (let start = L; start <= R; start++) {
        res.push(matrix[T][start]);
      }
      T += 1;
      for (let start = T; start <= B; start++) {
        res.push(matrix[start][R]);
      }
      R -= 1;
      if (T <= B) {
        for (let start = R; start >= L; start--) {
          res.push(matrix[B][start]);
        }
        B -= 1;
      }
      if (L <= R) {
        for (let start = B; start >= T; start--) {
          res.push(matrix[start][L]);
        }
        L += 1;
      }
    }
    return res;
  }
}

