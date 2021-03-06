// easy
const testBoard = [
  [0,1,0,0,0,0,0,2,0],
  [9,6,4,8,0,3,5,0,0],
  [0,0,5,0,0,9,0,0,0],
  [3,0,0,0,0,2,0,0,0],
  [0,0,2,6,0,7,0,0,1],
  [0,7,0,0,8,0,0,6,5],
  [4,0,1,0,3,0,0,0,0],
  [0,2,0,0,9,8,0,0,0],
  [0,9,0,7,4,0,0,0,2],
];

const testBoard2 = [
  [0,4,0,0,0,0,0,0,0],
  [2,7,0,8,0,6,4,0,1],
  [0,9,8,7,4,0,2,6,0],
  [0,2,0,6,0,7,3,0,0],
  [0,1,9,0,5,0,0,7,0],
  [0,0,0,0,1,4,0,0,0],
  [3,8,0,0,0,9,0,0,7],
  [0,0,0,0,0,0,0,8,6],
  [0,6,0,5,0,0,1,4,0],
];

// medium
const testBoard3 = [
  [0,7,4,3,2,0,5,0,0],
  [0,0,3,0,5,8,4,0,0],
  [0,2,0,0,0,9,0,0,0],
  [0,0,2,0,0,0,0,0,0],
  [6,0,7,8,9,4,2,0,3],
  [0,0,0,0,0,0,1,0,0],
  [0,0,0,9,0,0,0,1,0],
  [0,0,1,2,3,0,9,0,0],
  [0,0,5,0,4,7,8,3,0],
];

// hard
const testBoard4 = [
  [0,0,4,2,0,0,0,7,5],
  [0,0,0,9,1,0,0,0,4],
  [0,3,0,0,0,0,9,0,0],
  [9,0,1,0,7,0,4,0,2],
  [0,0,8,0,0,0,0,1,0],
  [0,0,0,5,0,0,0,0,1],
  [6,0,0,0,4,3,0,0,0],
  [5,7,0,0,0,1,6,0,0],
];

// const solved1 = solveSudoku(testBoard);
// console.log(verify(solved1) ? "Valid" : "Invalid");
//
// const solved2 = solveSudoku(testBoard2);
// console.log(verify(solved2) ? "Valid" : "Invalid");
//
// const solved3 = solveSudoku(testBoard3);
// printBoard(solved3);
// console.log(verify(solved3) ? "Valid" : "Invalid");

const solved4 = solveSudoku(testBoard4);
printBoard(solved4);
console.log(verify(solved4) ? "Valid" : "Invalid");
