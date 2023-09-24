import React, {useRef, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {PlayerMark} from '@game/common/types';
import {playShakeAnimation} from './animations';
import LottiePlayerMark from './components/lottiePlayerMark';
import {getSquareStyle} from './utils';

interface SquareProps {
  playerMark: PlayerMark;
  onPress: () => void;
  squareSize: number;
  winner: PlayerMark | null;
  circleColor: string;
  crossColor: string;
  testID?: string;
}

const Square: React.FC<SquareProps> = ({
  playerMark,
  squareSize,
  winner,
  onPress,
  circleColor,
  crossColor,
  testID = '',
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [activePlayerMark, setActivePlayerMark] = useState<PlayerMark>('');

  const handleOnPress = () => {
    playShakeAnimation(animation);

    //Skip other effects and actions if already has player set
    if (activePlayerMark !== '') {
      return;
    }
    setActivePlayerMark(playerMark);
    onPress();
  };

  return (
    <TouchableOpacity
      testID={`Square${testID}.TouchableOpacity`}
      disabled={!!winner}
      onPress={handleOnPress}>
      <Animated.View style={getSquareStyle(squareSize, animation)}>
        <LottiePlayerMark
          color={activePlayerMark === 'O' ? circleColor : crossColor}
          activePlayerMark={activePlayerMark}
          squareSize={squareSize}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Square;
