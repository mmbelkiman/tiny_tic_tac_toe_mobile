import React from 'react';
import LottieView from 'lottie-react-native';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {getColorFilters, getMarkDuration, getMarkStyle} from './utils';

interface LottieElementProps {
  isCircle: boolean;
  isVisible: boolean;
  squareSize: number;
  color: string;
  backgroundColor: string;
}

const LottiePlayerMark: React.FC<LottieElementProps> = ({
  isCircle,
  isVisible,
  squareSize,
  color,
  backgroundColor,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <LottieView
      duration={getMarkDuration(isCircle)}
      style={getMarkStyle(squareSize)}
      source={lottieMarkAnimation}
      autoPlay={true}
      loop={false}
      colorFilters={getColorFilters({isCircle, color, backgroundColor})}
    />
  );
};

export default LottiePlayerMark;
