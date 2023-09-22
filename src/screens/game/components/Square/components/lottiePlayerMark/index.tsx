import React from 'react';
import LottieView from 'lottie-react-native';
import {LottieColorObject, PlayerMark} from '@game/common/types';
import {getMarkDuration, getMarkStyle} from './utils';
import {getPlayerColor} from '@game/common/utils';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';

interface LottieElementProps {
  activePlayerMark: PlayerMark;
  squareSize: number;
}

const LottiePlayerMark: React.FC<LottieElementProps> = ({
  activePlayerMark,
  squareSize,
}) => {
  if (activePlayerMark === '') {
    return null;
  }

  //TODO
  const colors: Array<LottieColorObject> = [
    {
      keypath: 'Layer 1',
      color:
        activePlayerMark === 'X'
          ? '#00000000'
          : getPlayerColor(activePlayerMark),
    },
    {
      keypath: 'Layer 2',
      color:
        activePlayerMark === 'O'
          ? '#00000000'
          : getPlayerColor(activePlayerMark),
    },
  ];

  return (
    <LottieView
      duration={getMarkDuration(activePlayerMark)}
      style={getMarkStyle(squareSize)}
      source={lottieMarkAnimation}
      autoPlay={true}
      loop={false}
      colorFilters={colors}
    />
  );
};

export default LottiePlayerMark;
