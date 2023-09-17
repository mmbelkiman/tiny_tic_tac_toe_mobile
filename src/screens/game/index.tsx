import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './styles';
import {
  calculateLineHorizontalLength,
  calculateWinner,
  createInitialBoard,
  WinnerResult,
} from './utils';
import Square from '../../components/Square';
import HorizontalLine from '../../components/HorizontalLine';
import VerticalLine from '../../components/VerticalLine';
import DiagonalTopLeftLine from '../../components/DiagonalTopLeftLine';
import {PlayerMark} from '../../common/types';
import DiagonalTopRightLine from '../../components/DiagonalTopRightLine';

interface Props {
  boardSize: number;
}

const Game: React.FC<Props> = ({boardSize}) => {
  const windowWidth = Dimensions.get('window').width;
  const squareSize = windowWidth / boardSize;

  const [board, setBoard] = useState<PlayerMark[][]>(
    createInitialBoard(boardSize),
  );
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<WinnerResult | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (board[row][col] || winner?.winner) {
      return;
    }

    const newBoard = [...board.map(r => [...r])];
    newBoard[row][col] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const newWinner = calculateWinner(board, boardSize);
    if (newWinner.winner) {
      setWinner(newWinner);
    }
  }, [board, boardSize]);

  const status = winner?.winner
    ? `Winner: ${winner.winner}`
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((square, colIndex) => (
              <Square
                key={colIndex}
                playerMark={isXNext ? 'X' : 'O'}
                onPress={() => handleSquareClick(rowIndex, colIndex)}
                squareSize={squareSize}
                winner={winner?.winner || null}
              />
            ))}
          </View>
        ))}
        <HorizontalLine
          winner={winner?.winner}
          positionY={((winner?.position || 0) + 0.4) * squareSize}
          height={squareSize / 8}
          visible={winner?.direction === 'horizontal'}
        />

        <VerticalLine
          width={squareSize / 8}
          positionX={((winner?.position || 0) + 0.43) * squareSize}
          winner={winner?.winner}
          visible={winner?.direction === 'vertical'}
        />

        <DiagonalTopLeftLine
          length={calculateLineHorizontalLength(boardSize, squareSize)}
          height={squareSize / 10}
          winner={winner?.winner}
          visible={winner?.direction === 'diagonalTopLeft'}
        />

        <DiagonalTopRightLine
          length={calculateLineHorizontalLength(boardSize, squareSize)}
          height={squareSize / 10}
          winner={winner?.winner}
          visible={winner?.direction === 'diagonalTopRight'}
        />
      </View>
    </View>
  );
};

export default Game;
