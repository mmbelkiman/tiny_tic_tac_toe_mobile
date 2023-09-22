import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import Header from '@game/components/Header';
import Score from '@game/components/Score';
import Board from '@game/components/Board';
import styles from './styles';
import WinnerLine from './components/WinnerLine';
import {calculateWinner, createInitialBoard} from './utils';
import {PlayerMark, WinnerResult} from './common/types';

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

  useEffect(() => {
    //Verify winner
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

  const resetGame = () => {
    setBoard([[]]);
    setWinner({
      winner: '',
      direction: null,
      position: null,
    });
  };

  const handleOnTouchGameCanvas = () => {
    if (winner.winner !== '') {
      resetGame();
    }
  };

  const handleSquareClick = (row: number, col: number) => {
    if (board[row][col] || winner?.winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />

      <Score
        winnerPlayerMark={winner.winner}
        currentPlayer={isXNext ? 'X' : 'O'}
        circleWins={circleWins}
        crossWins={crossWins}
      />

      <View onTouchStart={handleOnTouchGameCanvas} style={styles.gameCanvas}>
        <Board
          board={board}
          nextPlayerMark={isXNext ? 'X' : 'O'}
          squareSize={squareSize}
          winnerPlayerMark={winner?.winner || null}
          onClickSquare={handleSquareClick}
        />

        <WinnerLine
          winnerMark={winner.winner}
          boardPosition={winner.position}
          squareSize={squareSize}
          winnerResultDirection={winner.direction}
          boardSize={boardSize}
        />
      </View>
    </SafeAreaView>
  );
};

export default Game;
