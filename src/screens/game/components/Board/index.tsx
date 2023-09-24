import {View} from 'react-native';
import React from 'react';
import {PlayerMark} from '@game/common/types';
import styles from './styles';
import Square from './components/Square';

interface BoardProps {
  board: PlayerMark[][];
  nextPlayerMark: PlayerMark;
  winnerPlayerMark: PlayerMark | null;
  squareSize: number;
  onClickSquare: (rowIndex: number, colIndex: number) => void;
  circleColor: string;
  crossColor: string;
}

const Board: React.FC<BoardProps> = ({
  board,
  nextPlayerMark,
  squareSize,
  winnerPlayerMark,
  onClickSquare,
  crossColor,
  circleColor,
}) => {
  if (!board || board.length === 0) {
    return null;
  }

  return (
    <>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((square, colIndex) => (
            <Square
              key={colIndex}
              playerMark={nextPlayerMark}
              squareSize={squareSize}
              winner={winnerPlayerMark}
              crossColor={crossColor}
              circleColor={circleColor}
              onPress={() => onClickSquare(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </>
  );
};

export default Board;
