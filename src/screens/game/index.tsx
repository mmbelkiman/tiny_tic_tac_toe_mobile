import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './styles';
import {calculateWinner, createInitialBoard} from './utils';
import Square from '../../components/square';
import HorizontalLine from '../../components/HorizontalLine';
import VerticalLine from '../../components/VerticalLine';
import DiagonalTopLeftLine from '../../components/DiagonalTopLeftLine';

interface Props {
  boardSize: number;
}

const Game: React.FC<Props> = ({boardSize}) => {
  const windowWidth = Dimensions.get('window').width;
  const squareSize = windowWidth / boardSize;

  const [board, setBoard] = useState<string[][]>(createInitialBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<{
    winner: string | null;
    direction: string | null;
    position: number;
  } | null>(null);

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
    console.log(newWinner);
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
                value={isXNext ? 'X' : 'O'}
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
          length={boardSize * squareSize}
          height={squareSize / 10}
          winner={winner?.winner}
          visible={winner?.direction === 'diagonalTopLeft'}
        />

        {/*TODO DiagonalTopRightLine*/}
      </View>
    </View>
  );
};

export default Game;
