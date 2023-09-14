import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Dimensions} from 'react-native';
import styles from './styles';
import {calculateWinner, createInitialBoard} from './utils';

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

  const renderSquare = (row: number, col: number) => {
    return (
      <TouchableOpacity
        style={[styles.square, {width: squareSize, height: squareSize}]}
        onPress={() => handleSquareClick(row, col)}>
        <Text style={styles.squareText}>{board[row][col]}</Text>
      </TouchableOpacity>
    );
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
        {Array.from({length: boardSize}).map((_, row) => (
          <View key={row} style={styles.row}>
            {Array.from({length: boardSize}).map((_, col) =>
              renderSquare(row, col),
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Game;
