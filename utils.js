function printBoard(board) {
  const toPrint = [];
  board.forEach((row, index) => {
    toPrint.push(row.slice(0,3).concat("|").concat(row.slice(3,6)).concat("|").concat(row.slice(6,9)));
    if (index === 2 || index === 5) {
      toPrint.push(["-","-","-","+","-","-","-","+","-","-","-"]);
    }
  });
  toPrint.forEach((row, prindex) => {
    let newRow = "";
    row.forEach((space, index) => {
      newRow += row[index] + " " || "  ";
    });
    toPrint[prindex] = newRow;
  });
  for (var i = 0; i < toPrint.length; i++) {
    console.log(toPrint[i]);
  }
}


function copyBoard(board) {
  const copy = [];
  for (let i = 0; i < board.length; i++) {
    copy.push([]);
    for (let j = 0; j < board[i].length; j++) {
      copy[i].push(board[i][j]);
    }
  }
  return copy;
}

function createEmptyPossibilities() {
  const rows = [];

  for (var i = 0; i < 9; i++) {
    rows.push(makeZerosRow());
  }

  return rows;
}

function makeZerosRow() {
  return [0,0,0,0,0,0,0,0,0];
}
