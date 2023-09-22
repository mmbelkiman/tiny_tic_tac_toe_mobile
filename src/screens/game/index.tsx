import React, {useEffect, useState} from 'react';
import {Button, Dimensions, SafeAreaView, View} from 'react-native';
import styles from './styles';
import WinnerLine from './components/WinnerLine';
import Square from './components/Square';
import {calculateWinner, createInitialBoard} from './utils';
import {PlayerMark, WinnerResult} from './common/types';
import Header from '@game/components/Header';
import Score from '@game/components/Score';

interface Props {
  boardSize: number;
  onPressBack: () => void;
}

const Game: React.FC<Props> = ({boardSize, onPressBack}) => {
  const windowWidth = Dimensions.get('window').width;
  const squareSize = windowWidth / boardSize;
  const [circleWins, setCircleWins] = useState(0);
  const [crossWins, setCrossWins] = useState(0);
  const [board, setBoard] = useState<PlayerMark[][]>([[]]);
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<WinnerResult>({
    winner: '',
    direction: null,
    position: null,
  });

  useEffect(() => {
    // If it has a clear board, create a new one
    if (board.length === 1) {
      setBoard(createInitialBoard(boardSize));
    }
  }, [board, boardSize]);

  const resetGame = () => {
    setBoard([[]]);
    setWinner({
      winner: '',
      direction: null,
      position: null,
    });
  };

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
      if (newWinner.winner === 'X') {
        setCrossWins(oldValue => oldValue + 1);
      } else {
        setCircleWins(oldValue => oldValue + 1);
      }
    }
  }, [board, boardSize]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header onPressBack={onPressBack} />

      <Score
        winnerPlayerMark={winner.winner}
        currentPlayer={isXNext ? 'X' : 'O'}
        circleWins={circleWins}
        crossWins={crossWins}
      />

      <View
        style={styles.container}
        onTouchStart={() => {
          if (winner.winner !== '') {
            resetGame();
          }
        }}>
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
    </SafeAreaView>
  );
};

export default Game;
