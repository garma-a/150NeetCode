
class Solution {
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {

    const rows = board.length, cols = board[0].length;

    function dfs(r, c) {
      if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O") return
      board[r][c] = "T";
      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
    }

    for (let i = 0; i < rows; i++) {
      dfs(i, 0);
      dfs(i, cols - 1);
    }
    for (let j = 0; j < cols; j++) {
      dfs(0, j);
      dfs(rows - 1, j);
    }

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++)
        if (board[i][j] === 'O') board[i][j] = 'X';
        else if (board[i][j] === 'T') board[i][j] = 'O';
    }

  }
}
