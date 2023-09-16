export const checkRows = (
  squares: string[][],
  boardSize: number,
): WinnerResult | null => {
  for (let i = 0; i < boardSize; i++) {
    const firstMark = squares[i][0];

    // If the first mark is not empty, proceed to check the row
    if (firstMark !== '') {
      let isWinner = true;
      for (let j = 1; j < boardSize; j++) {
        // Compare the current square to the first mark
        if (squares[i][j] !== firstMark) {
          isWinner = false;
          break; // No need to check further if it's not a winner
        }
      }

      if (isWinner) {
        return {winner: firstMark, direction: 'horizontal', position: i};
      }
    }
  }
  return null;
};

export const checkColumns = (
  squares: string[][],
  boardSize: number,
): WinnerResult | null => {
  for (let i = 0; i < boardSize; i++) {
    const firstMark = squares[0][i];

    // If the first mark is not empty, proceed to check the column
    if (firstMark !== '') {
      let isWinner = true;
      for (let j = 1; j < boardSize; j++) {
        // Compare the current square to the first mark
        if (squares[j][i] !== firstMark) {
          isWinner = false;
          break; // No need to check further if it's not a winner
        }
      }

      if (isWinner) {
        return {winner: firstMark, direction: 'vertical', position: i};
      }
    }
  }
  return null;
};

export const checkDiagonalTopLeft = (
  squares: string[][],
  boardSize: number,
): WinnerResult | null => {
  let currentMark = squares[0][0];
  let isWinner = true;

  if (currentMark === '') {
    return null;
  }
  for (let i = 0; i < boardSize; i++) {
    if (squares[i][i] !== currentMark) {
      isWinner = false;
      break;
    }
  }

  return isWinner
    ? {winner: currentMark, direction: 'diagonalTopLeft', position: 0}
    : null;
};

export const checkDiagonalTopRight = (
  squares: string[][],
  boardSize: number,
): WinnerResult | null => {
  let currentMark = squares[0][boardSize - 1];
  let isWinner = true;

  if (currentMark === '') {
    return null;
  }

  for (let i = 0; i < boardSize; i++) {
    if (squares[i][boardSize - 1 - i] !== currentMark) {
      isWinner = false;
      break;
    }
  }

  return isWinner
    ? {winner: currentMark, direction: 'diagonalTopRight', position: 0}
    : null;
};

export const checkDiagonals = (
  squares: string[][],
  boardSize: number,
): WinnerResult | null => {
  const topLeftWinner = checkDiagonalTopLeft(squares, boardSize);
  if (topLeftWinner) {
    return topLeftWinner;
  }

  const topRightWinner = checkDiagonalTopRight(squares, boardSize);
  if (topRightWinner) {
    return topRightWinner;
  }

  return null;
};

export interface WinnerResult {
  winner: string | null;
  direction: string | null; // 'horizontal', 'vertical', 'diagonalTopLeft', 'diagonalTopRight', or null if no winner
  position: number;
}

const calculateWinner = (
  squares: string[][],
  boardSize: number,
): WinnerResult => {
  const rowWinner = checkRows(squares, boardSize);
  if (rowWinner) {
    return rowWinner;
  }

  const columnWinner = checkColumns(squares, boardSize);
  if (columnWinner) {
    return columnWinner;
  }

  const diagonalWinner = checkDiagonals(squares, boardSize);
  if (diagonalWinner) {
    return diagonalWinner;
  }

  return {winner: null, direction: null, position: -1};
};

const createInitialBoard = (boardSize: number): string[][] => {
  return Array.from({length: boardSize}, () => Array(boardSize).fill(''));
};

export {calculateWinner, createInitialBoard};
