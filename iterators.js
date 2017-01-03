
function rowAction(board, row, action) {
  for (var k = 0; k < board[row].length; k++) {
    action(board[row][k], row, k, board);
  }
}

function colAction(board, col, action) {
  for (var l = 0; l < board.length; l++) {
    action(board[l][col], l, col, board);
  }
}

function regAction(board, i, j, action) {
  let iMin, iMax, jMin, jMax;

  if (i < 3) {
    iMin = 0;
    iMax = 3;
  } else if (i < 6) {
    iMin = 3;
    iMax = 6;
  } else {
    iMin = 6;
    iMax = 9;
  }

  if (j < 3) {
    jMin = 0;
    jMax = 3;
  } else if (j < 6) {
    jMin = 3;
    jMax = 6;
  } else {
    jMin = 6;
    jMax = 9;
  }

  for (var l = iMin; l < iMax; l++) {
    for (var k = jMin; k < jMax; k++) {
      action(board[l][k], l, k, board);
    }
  }
}

function rowColRegAction(board, i, j, action, postAction = () => {}) {
    rowAction(board, i, action);
    postAction(board, i, j);
    colAction(board, j, action);
    postAction(board, i, j);
    regAction(board, i, j, action);
    postAction(board, i, j);
}

function allSpaceAction(board, action) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      action(board[i][j], i, j, board);
    }
  }
}
