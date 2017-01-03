function verify(board) {
  const verificationTuples = [
    [0, 0], [1, 3], [2, 6],
    [3, 1], [4, 4], [5, 7],
    [6, 2], [7, 5], [8, 8],
  ];

  return verificationTuples.reduce((valid, [i, j]) => {
    return valid && isValidSpace(board, i, j);
  }, true)
}

function isValidSpace(board, i, j) {
  const rowSet = new Set();
  const colSet = new Set();
  const regSet = new Set();

  rowAction(board, i, space => rowSet.add(space));
  colAction(board, j, space => colSet.add(space));
  regAction(board, i, j, space => regSet.add(space));

  return [ rowSet, colSet, regSet ].every(set => set.size === 9);
}
