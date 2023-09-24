import React from 'react';
import LottieView from 'lottie-react-native';
import {PlayerMark} from '@game/common/types';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {getColorFilters, getMarkDuration, getMarkStyle} from './utils';

interface LottieElementProps {
  activePlayerMark: PlayerMark;
  squareSize: number;
  color: string;
}

const LottiePlayerMark: React.FC<LottieElementProps> = ({
  activePlayerMark,
  squareSize,
  color,
}) => {
  if (activePlayerMark === '') {
    return null;
  }

  const isCircle = activePlayerMark === 'O';

  return (
    <LottieView
      duration={getMarkDuration(activePlayerMark)}
      style={getMarkStyle(squareSize)}
      source={lottieMarkAnimation}
      autoPlay={true}
      loop={false}
      colorFilters={getColorFilters({isCircle, color})}
    />
  );
};

export default LottiePlayerMark;
