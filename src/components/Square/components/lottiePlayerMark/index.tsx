import React from 'react';
import LottieView from 'lottie-react-native';
import {getMarkAnimationFile, getMarkDuration, getMarkStyle} from './utils';
import {PlayerMark} from '../../../../common/types';

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
      source={getMarkAnimationFile(activePlayerMark)}
      autoPlay={true}
      loop={false}
    />
  );
};

export default LottiePlayerMark;
