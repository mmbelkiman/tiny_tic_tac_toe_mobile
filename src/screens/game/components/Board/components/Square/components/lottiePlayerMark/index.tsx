import React from 'react';
import LottieView from 'lottie-react-native';
import {PlayerMark} from '@game/common/types';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {getColorFilters, getMarkDuration, getMarkStyle} from './utils';

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

  return (
    <LottieView
      duration={getMarkDuration(activePlayerMark)}
      style={getMarkStyle(squareSize)}
      source={lottieMarkAnimation}
      autoPlay={true}
      loop={false}
      colorFilters={getColorFilters({activePlayerMark})}
    />
  );
};

export default LottiePlayerMark;
