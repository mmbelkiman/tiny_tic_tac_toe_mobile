import React, {useEffect, useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './styles';
import WinnerLine from './components/WinnerLine';
import Square from './components/Square';
import {calculateWinner, createInitialBoard} from './utils';
import {WinnerResult, PlayerMark} from './common/types';

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
  const [winner, setWinner] = useState<WinnerResult>({
    winner: '',
    direction: null,
    position: null,
  });

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

        <WinnerLine
          winnerMark={winner.winner}
          boardPosition={winner.position}
          squareSize={squareSize}
          winnerResultDirection={winner.direction}
          boardSize={boardSize}
        />
      </View>
    </View>
  );
};

export default Game;
