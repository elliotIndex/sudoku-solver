
function makeAllPossibilities() {
  const possibilities = new Set();
  [1,2,3,4,5,6,7,8,9].forEach(poss => possibilities.add(poss));
  return possibilities;
}

function generateSpacePossibilities(board, i, j) {
  const possibilities = makeAllPossibilities();

  rowColRegAction(board, i, j, action => possibilities.delete(action));

  return possibilities;
}


function generateBoardPossibilities(board) {
  const possibilities = createEmptyPossibilities();

  allSpaceAction(board, (space, i, j) => {
    const spacePosibilities = space || generateSpacePossibilities(board, i, j);

    if (spacePosibilities.size === 0) {
      return null;
    }

    possibilities[i][j] = spacePosibilities;
  })

  return possibilities;
}
