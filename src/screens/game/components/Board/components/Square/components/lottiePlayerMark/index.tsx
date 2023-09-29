import React from 'react';
import LottieView from 'lottie-react-native';
import lottieMarkAnimation from '@game/res/lottieMarkAnimation.json';
import {getColorFilters, getMarkDuration, getMarkStyle} from './utils';

interface LottieElementProps {
  isCircle: boolean;
  isVisible: boolean;
  squareSize: number;
  color: string;
  testID?: string;
  backgroundColor: string;
}

const LottiePlayerMark: React.FC<LottieElementProps> = ({
  isCircle,
  isVisible,
  squareSize,
  color,
  backgroundColor,
  testID,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <LottieView
      testID={`LottiePlayerMark${testID}.${isCircle ? 'O' : 'X'}`}
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
