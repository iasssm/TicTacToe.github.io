// const X_CLASS = 'x';
// const CIRCLE_CLASS = 'circle';
// const WINNING_COMBINATIONS = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];
// //select cells
// const cellElem = document.querySelectorAll('[data-cell');

// const container = document.getElementById('container');

// const winningMessageElement = document.getElementById('winningMessage');
// const winningMessageTextElement = document.querySelector(
//   '[data-winning-message-text]'
// );
// let circleTurn;

// startGame();

// function startGame() {
//   circleTurn = false;
//   cellElem.forEach((cell) => {
//     cell.addEventListener('click', handleClick, { once: true });
//   });
//   setBoardHoverClass();
// }
// function handleClick(e) {
//   const cell = e.target;
//   const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
//   //Place Mark
//   placeMark(cell, currentClass);
//   //Check For Win
//   if (checkWin(currentClass)) {
//     endGame(false);
//   }
//   //Check For Draw
//   else if (isDraw()) {
//     endGame(true);
//   } else {
//     swapTurns();
//     setBoardHoverClass();
//   }
//   //Switch
//   swapTurns();
//   setBoardHoverClass();
// }

// function endGame(draw) {
//   if (draw) {
//     winningMessageElement.innerText = 'Draw!';
//   } else {
//     winningMessageTextElement.innerText = `${
//       circleTurn ? "O's" : "X's"
//     } Wins!!`;
//   }
//   winningMessageElement.classList.add('show');
// }

// function isDraw() {
//   return [...cellElem].every((cell) => {
//     return (
//       cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
//     );
//   });
// }

// function placeMark(cell, currentClass) {
//   cell.classList.add(currentClass);
// }
// function swapTurns() {
//   circleTurn = !circleTurn;
// }
// function setBoardHoverClass() {
//   container.classList.remove(X_CLASS);
//   container.classList.remove(CIRCLE_CLASS);
//   if (circleTurn) {
//     container.classList.add(CIRCLE_CLASS);
//   } else {
//     container.classList.add(X_CLASS);
//   }
// }
// //verificam daca una dintre combinatii e egala cu current combination
// function checkWin(currentClass) {
//   return WINNING_COMBINATIONS.some((combination) => {
//     return combination.every((index) => {
//       return cellElem[index].classList.contains(currentClass);
//     });
//   });
// }

const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll('[data-cell]');
const container = document.getElementById('container');
const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector(
  '[data-winning-message-text]'
);
let circleTurn;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove('show');
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!';
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessageElement.classList.add('show');
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  container.classList.remove(X_CLASS);
  container.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    container.classList.add(CIRCLE_CLASS);
  } else {
    container.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
