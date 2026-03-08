
class Solution {
  /**
   * @param {number[][]} matrix
   * @return {number[]}
   */
  spiralOrder(matrix) {

    const ROW = matrix.length, COL = matrix[0].length;
    let lt = [0, 0], rt = [0, COL - 1], rb = [ROW - 1, COL - 1], lb = [ROW - 1, 0];
    let res = [];

    while (lt[0] <= rb[0] && lt[1] <= rb[1]) {
      if (lt[0] === rb[0] && lt[1] === rb[1]) {
        res.push(matrix[lt[0]][lt[1]]);
        break;
      } else if (lt[0] === rb[0]) {
        this.fromTo(lt, rt, matrix, res);
        break
      } else if (lt[1] === rb[1]) {
        this.fromTo(lt, lb, matrix, res);
        break;
      } else {
        this.fromTo(lt, rt, matrix, res);
        this.fromTo([rt[0] + 1, rt[1]], rb, matrix, res);
        this.fromTo([rb[0], rb[1] - 1], lb, matrix, res);

        if (lb[0] - 1 >= lt[0] + 1)
          this.fromTo([lb[0] - 1, lb[1]], [lt[0] + 1, lt[1]], matrix, res);
      }
      lt = [lt[0] + 1, lt[1] + 1];
      rt = [rt[0] + 1, rt[1] - 1];
      rb = [rb[0] - 1, rb[1] - 1];
      lb = [lb[0] - 1, lb[1] + 1];
    }
    return res;

  }


  fromTo(from, to, matrix = [], res = []) {
    const [fromRow, fromCol] = from, [toRow, toCol] = to;
    let rowIsFixed = false, ourRow = 0;
    if (fromRow === toRow) {
      rowIsFixed = true;
      ourRow = fromRow;
    }
    let colIsFixed = false, ourCol = 0;
    if (fromCol === toCol) {
      colIsFixed = true;
      ourCol = fromCol;
    }

    if (rowIsFixed && colIsFixed) res.push(matrix[ourRow][ourCol]);

    else if (rowIsFixed && fromCol < toCol)
      for (let c = fromCol; c <= toCol; c++) res.push(matrix[ourRow][c]);

    else if (rowIsFixed && fromCol > toCol)
      for (let c = fromCol; c >= toCol; c--) res.push(matrix[ourRow][c]);

    else if (colIsFixed && fromRow < toRow)
      for (let r = fromRow; r <= toRow; r++) res.push(matrix[r][ourCol]);

    else if (colIsFixed && fromRow > toRow)
      for (let r = fromRow; r >= toRow; r--) res.push(matrix[r][ourCol]);


  }



}
