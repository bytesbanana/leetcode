/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowHashSet = new Array(9);
  const colHashSet = new Array(9);
  const subBoxHashSet = Array.from(Array(3), () => new Array(3));
  for (let i = 0; i < 9; i++) {
    if (!rowHashSet[i]) rowHashSet[i] = new Set();

    for (let j = 0; j < 9; j++) {
      const sI = parseInt(i / 3);
      const sJ = parseInt(j / 3);

      if (!colHashSet[j]) colHashSet[j] = new Set();
      if (!subBoxHashSet[sI][sJ]) subBoxHashSet[sI][sJ] = new Set();

      if (board[i][j] === ".") continue;

      if (
        rowHashSet[i].has(board[i][j]) ||
        colHashSet[j].has(board[i][j]) ||
        subBoxHashSet[sI][sJ].has(board[i][j])
      ) {
        return false;
      }

      rowHashSet[i].add(board[i][j]);
      colHashSet[j].add(board[i][j]);
      subBoxHashSet[sI][sJ].add(board[i][j]);
    }
  }
  return true;
};
