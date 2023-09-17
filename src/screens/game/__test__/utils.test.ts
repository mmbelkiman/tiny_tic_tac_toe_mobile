import {
  calculateWinner,
  checkColumns,
  checkDiagonals,
  checkDiagonalTopLeft,
  checkDiagonalTopRight,
  checkRows,
  createInitialBoard,
} from '../utils';
import {WinnerResult} from '../common/types';

describe('Game Utils', () => {
  describe('checkRows', () => {
    it('should return a WinnerResult when "O" is the winner at position 1', () => {
      const squares = [
        ['X', 'X', ''],
        ['O', 'O', 'O'],
        ['', '', ''],
      ];
      const boardSize = 3;
      const result: WinnerResult | null = checkRows(squares, boardSize);
      expect(result).toEqual({
        winner: 'O',
        direction: 'horizontal',
        position: 1,
      });
    });

    it('should return null when there is no winning horizontal row', () => {
      const squares = [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X'],
      ];
      const boardSize = 3;
      const result: WinnerResult | null = checkRows(squares, boardSize);
      expect(result).toBeNull();
    });

    it('should return a WinnerResult when "X" is the winner at row 6 on a 10x10 board', () => {
      const boardSize = 10;
      const squares = [
        ['', 'O', 'X', 'X', 'O', 'X', 'X', '', 'X', 'X'],
        ['O', 'X', 'O', 'O', 'X', 'O', 'O', 'X', 'O', 'O'],
        ['X', '', '', 'X', 'O', 'X', 'X', 'O', 'X', 'X'],
        ['O', 'X', 'O', 'O', 'X', 'O', 'O', 'X', 'O', ''],
        ['', 'O', 'X', 'X', 'O', '', 'X', 'O', 'X', 'X'],
        ['X', 'O', 'X', 'X', '', '', 'X', 'O', '', 'X'],
        ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
        ['O', 'X', '', 'O', 'X', 'O', 'O', 'X', 'O', 'O'],
        ['X', 'O', 'X', 'X', 'O', 'X', 'X', 'O', 'X', 'X'],
        ['O', 'X', '', 'O', 'X', 'O', '', 'X', 'O', 'O'],
      ];

      const result: WinnerResult | null = checkRows(squares, boardSize);
      expect(result).toEqual({
        winner: 'X',
        direction: 'horizontal',
        position: 6,
      });
    });
  });

  describe('checkColumns', () => {
    it('should return a WinnerResult when "O" is the winner at column 3 on a 5x5 board', () => {
      const boardSize = 5;
      const squares = [
        ['O', '', 'O', 'X', 'O'],
        ['X', '', 'O', 'X', 'O'],
        ['O', '', 'O', 'X', 'O'],
        ['', 'X', 'O', 'X', 'O'],
        ['', 'X', 'O', 'X', 'O'],
      ];

      const result: WinnerResult | null = checkColumns(squares, boardSize);
      expect(result).toEqual({winner: 'O', direction: 'vertical', position: 2});
    });

    it('should return a WinnerResult when "X" is the winner at column 2 on a 4x4 board', () => {
      const boardSize = 4;
      const squares = [
        ['O', 'X', 'O', 'O'],
        ['O', 'X', '', 'O'],
        ['', 'X', 'O', 'O'],
        ['', 'X', 'O', ''],
      ];

      const result: WinnerResult | null = checkColumns(squares, boardSize);
      expect(result).toEqual({winner: 'X', direction: 'vertical', position: 1});
    });

    it('should return null when there is no winner in columns on a 3x3 board', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X'],
      ];

      const result: WinnerResult | null = checkColumns(squares, boardSize);
      expect(result).toBeNull();
    });
  });

  describe('checkDiagonalTopLeft', () => {
    it('should return a WinnerResult when "X" is the winner in the top-left diagonal on a 3x3 board', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X'],
      ];

      const result: WinnerResult | null = checkDiagonalTopLeft(
        squares,
        boardSize,
      );
      expect(result).toEqual({
        winner: 'X',
        direction: 'diagonalTopLeft',
        position: 0,
      });
    });

    it('should return a WinnerResult when "O" is the winner in the top-left diagonal on a 4x4 board', () => {
      const boardSize = 4;
      const squares = [
        ['O', 'X', 'X', 'O'],
        ['X', 'O', 'O', 'X'],
        ['X', 'O', 'O', 'X'],
        ['O', 'X', 'X', 'O'],
      ];

      const result: WinnerResult | null = checkDiagonalTopLeft(
        squares,
        boardSize,
      );
      expect(result).toEqual({
        winner: 'O',
        direction: 'diagonalTopLeft',
        position: 0,
      });
    });

    it('should return null when there is no winner in the top-left diagonal on a 3x3 board', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['O', 'O', ''],
      ];

      const result: WinnerResult | null = checkDiagonalTopLeft(
        squares,
        boardSize,
      );
      expect(result).toBeNull();
    });

    it('should return null if top left is empty', () => {
      const boardSize = 3;
      const squares = [
        ['', 'O', 'O'],
        ['O', 'X', 'O'],
        ['O', 'O', ''],
      ];

      const result: WinnerResult | null = checkDiagonalTopLeft(
        squares,
        boardSize,
      );
      expect(result).toBeNull();
    });
  });

  describe('checkDiagonalTopRight', () => {
    it('should return a WinnerResult when "X" is the winner in the top-right diagonal on a 3x3 board', () => {
      const boardSize = 3;
      const squares = [
        ['O', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'O'],
      ];

      const result: WinnerResult | null = checkDiagonalTopRight(
        squares,
        boardSize,
      );
      expect(result).toEqual({
        winner: 'X',
        direction: 'diagonalTopRight',
        position: 0,
      });
    });

    it('should return a WinnerResult when "O" is the winner in the top-right diagonal on a 4x4 board', () => {
      const boardSize = 4;
      const squares = [
        ['X', 'X', 'O', 'O'],
        ['X', 'O', 'O', 'X'],
        ['O', 'O', 'X', 'O'],
        ['O', 'X', 'X', 'O'],
      ];

      const result: WinnerResult | null = checkDiagonalTopRight(
        squares,
        boardSize,
      );
      expect(result).toEqual({
        winner: 'O',
        direction: 'diagonalTopRight',
        position: 0,
      });
    });

    it('should return null when there is no winner in the top-right', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['X', 'O', ''],
      ];

      const result: WinnerResult | null = checkDiagonalTopRight(
        squares,
        boardSize,
      );
      expect(result).toBeNull();
    });

    it('should return null when top-right is empty', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', ''],
        ['O', 'X', 'O'],
        ['X', 'O', ''],
      ];

      const result: WinnerResult | null = checkDiagonalTopRight(
        squares,
        boardSize,
      );
      expect(result).toBeNull();
    });
  });

  describe('checkDiagonals', () => {
    it('should return a WinnerResult when "X" is the winner in the top-left diagonal on a 3x3 board', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', 'O'],
        ['O', 'X', 'O'],
        ['O', 'O', 'X'],
      ];

      const result: WinnerResult | null = checkDiagonals(squares, boardSize);
      expect(result).toEqual({
        winner: 'X',
        direction: 'diagonalTopLeft',
        position: 0,
      });
    });

    it('should return a WinnerResult when "O" is the winner in the top-right diagonal on a 4x4 board', () => {
      const boardSize = 4;
      const squares = [
        ['X', 'X', 'O', 'O'],
        ['X', 'O', 'O', 'X'],
        ['O', 'O', 'X', 'O'],
        ['O', 'X', 'X', 'O'],
      ];

      const result: WinnerResult | null = checkDiagonals(squares, boardSize);
      expect(result).toEqual({
        winner: 'O',
        direction: 'diagonalTopRight',
        position: 0,
      });
    });

    it('should return null when there is no winner in the diagonals on a 5x5 board', () => {
      const boardSize = 5;
      const squares = [
        ['X', 'O', 'X', 'O', 'X'],
        ['O', '', 'O', 'X', 'O'],
        ['X', 'O', '', 'O', 'X'],
        ['', 'X', 'O', 'X', 'O'],
        ['X', 'O', 'X', 'O', 'X'],
      ];

      const result: WinnerResult | null = checkDiagonals(squares, boardSize);
      expect(result).toBeNull();
    });
  });

  describe('calculateWinner', () => {
    it('should return a WinnerResult when "X" is the winner in a row on a 3x3 board', () => {
      const boardSize = 3;
      const squares = [
        ['X', 'O', ''],
        ['X', 'X', 'X'],
        ['O', '', 'O'],
      ];

      const result: WinnerResult = calculateWinner(squares, boardSize);
      expect(result).toEqual({
        winner: 'X',
        direction: 'horizontal',
        position: 1,
      });
    });

    it('should return a WinnerResult when "O" is the winner in a column on a 4x4 board', () => {
      const boardSize = 4;
      const squares = [
        ['O', '', 'O', 'X'],
        ['O', 'X', 'O', 'X'],
        ['O', '', 'O', 'O'],
        ['O', 'X', 'X', 'X'],
      ];

      const result: WinnerResult = calculateWinner(squares, boardSize);
      expect(result).toEqual({winner: 'O', direction: 'vertical', position: 0});
    });

    it('should return a WinnerResult when "X" is the winner in a diagonal Top left on a 5x5 board', () => {
      const boardSize = 5;
      const squares = [
        ['X', 'O', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O'],
        ['X', 'O', 'X', 'O', 'O'],
        ['O', 'X', 'O', 'X', 'O'],
        ['X', 'X', 'O', 'O', 'X'],
      ];

      const result: WinnerResult = calculateWinner(squares, boardSize);
      expect(result).toEqual({
        winner: 'X',
        direction: 'diagonalTopLeft',
        position: 0,
      });
    });

    it('should return a WinnerResult when "O" is the winner in a diagonal Top Right on a 5x5 board', () => {
      const boardSize = 5;
      const squares = [
        ['X', 'O', 'X', 'X', 'O'],
        ['O', 'X', 'O', 'O', 'O'],
        ['X', 'O', 'O', 'O', 'O'],
        ['O', 'O', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'O', 'X'],
      ];

      const result: WinnerResult = calculateWinner(squares, boardSize);
      expect(result).toEqual({
        winner: 'O',
        direction: 'diagonalTopRight',
        position: 0,
      });
    });

    it('should return a WinnerResult with null values when there is no winner on a 6x6 board', () => {
      const boardSize = 6;
      const squares = [
        ['X', 'O', 'X', 'O', 'X', 'O'],
        ['O', '', 'O', 'X', 'O', 'X'],
        ['X', 'O', '', 'O', 'X', 'O'],
        ['O', 'X', '', 'X', 'O', 'X'],
        ['X', 'O', '', 'O', 'X', 'O'],
        ['O', 'X', 'O', 'X', 'O', 'X'],
      ];

      const result: WinnerResult = calculateWinner(squares, boardSize);
      expect(result).toEqual({winner: '', direction: null, position: null});
    });
  });

  describe('createInitialBoard', () => {
    it('should create an empty board of the specified size (3x3)', () => {
      const boardSize = 3;
      const expectedBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];

      const result = createInitialBoard(boardSize);
      expect(result).toEqual(expectedBoard);
    });

    it('should create an empty board of the specified size (5x5)', () => {
      const boardSize = 5;
      const expectedBoard = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
      ];

      const result = createInitialBoard(boardSize);
      expect(result).toEqual(expectedBoard);
    });

    it('should create an empty board of the specified size (7x7)', () => {
      const boardSize = 7;
      const expectedBoard = [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
      ];

      const result = createInitialBoard(boardSize);
      expect(result).toEqual(expectedBoard);
    });
  });
});
