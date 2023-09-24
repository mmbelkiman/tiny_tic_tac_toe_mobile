import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import Header from '@game/components/Header';
import Score from '@game/components/Score';
import Board from '@game/components/Board';
import {COLOR_PLAYER_O, COLOR_PLAYER_X} from '@game/common/constants';
import styles from './styles';
import WinnerLine from './components/WinnerLine';
import {calculateWinner, createInitialBoard, getPlayerColor} from './utils';
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
  const [isCircleNext, setIsCircleNext] = useState(true);
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
    newBoard[row][col] = isCircleNext ? 'O' : 'X';
    setBoard(newBoard);
    setIsCircleNext(!isCircleNext);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPressBack={onPressBack} />

      <Score
        winnerPlayerMark={winner.winner}
        currentPlayer={isCircleNext ? 'O' : 'X'}
        circleWins={circleWins}
        crossWins={crossWins}
        circleColor={COLOR_PLAYER_O}
        crossColor={COLOR_PLAYER_X}
      />

      <View onTouchStart={handleOnTouchGameCanvas} style={styles.gameCanvas}>
        <Board
          board={board}
          nextPlayerMark={isCircleNext ? 'O' : 'X'}
          squareSize={squareSize}
          winnerPlayerMark={winner?.winner || null}
          onClickSquare={handleSquareClick}
          circleColor={COLOR_PLAYER_O}
          crossColor={COLOR_PLAYER_X}
        />

        <WinnerLine
          color={getPlayerColor(winner.winner)}
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
