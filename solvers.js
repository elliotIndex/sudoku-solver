function solveSudoku(board) {
  const solutionBoard = copyBoard(board);
  let isSolved = false;
  let possibilities;
  while (isSolved === false) {
    possibilities = generateBoardPossibilities(solutionBoard);
    if (possibilities === null) {
      return null;
    }
    isSolved = solveSingles(solutionBoard, possibilities);

    if (isSolved === null) {
      isSolved = solveGroups(solutionBoard, possibilities);
    }
  }

  if (isSolved === null) {
    console.log("Couldn't solve it :(");
  } else {
    console.log("Solved!");
  }

  return solutionBoard;
}


function solveSingles(solutionBoard, possibilities) {
  let solvedOne = false;
  let foundUnsolved = false;

  allSpaceAction(possibilities, function (space, i, j) {
    if (typeof(space) !== 'number') {
      foundUnsolved = true;
      if (space.size === 1) {
        solutionBoard[i][j] = space.entries().next().value[0];
        solvedOne = true;
      }
    }
  });

  if (!foundUnsolved) {
    return true;
  }

  if (solvedOne) {
    return false;
  }

  return null;
}

function solveGroups(solutionBoard, possibilities) {
  let changeMade = false;
  printBoard(solutionBoard);
  allSpaceAction(possibilities, (space, i, j) => {
    if (typeof(space) !== "number") {
      space.forEach(possibility => {
        if (solutionBoard[i][j]) { return; }
        let found = false;
        rowColRegAction(possibilities, i, j, (entry, row, col) => {
          if (entry.has && !(row === i && col === j)) {
            if (entry.has(possibility)) {
              found = true;
            }
          }
        }, () => {
          if (!found) {
            changeMade = true;
            solutionBoard[i][j] = possibility;
          } else {
            found = false;
          }
        });
      });
    }
  });
  return changeMade ? false : null;
}
