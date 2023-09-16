import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './styles';
import {calculateWinner, createInitialBoard} from './utils';
import Square from '../../components/square';

interface Props {
  boardSize: number;
}

const Game: React.FC<Props> = ({boardSize}) => {
  const windowWidth = Dimensions.get('window').width;
  const squareSize = windowWidth / boardSize;

  const [board, setBoard] = useState<string[][]>(createInitialBoard(boardSize));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (board[row][col] || winner) {
      return;
    }

    const newBoard = [...board.map(r => [...r])];
    newBoard[row][col] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  useEffect(() => {
    const newWinner = calculateWinner(board, boardSize);
    if (newWinner) {
      setWinner(newWinner);
    }
  }, [board, boardSize]);

  const status = winner
    ? `Winner: ${winner}`
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
                winner={winner}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Game;
