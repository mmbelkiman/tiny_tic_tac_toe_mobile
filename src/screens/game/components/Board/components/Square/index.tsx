import React, {useRef, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import {PlayerMark} from '@game/common/types';
import {playShakeAnimation} from './animations';
import LottiePlayerMark from './components/lottiePlayerMark';
import {getPlayerMarkColor, getSquareStyle} from './utils';

interface SquareProps {
  playerMarkIsCircle: boolean;
  onPress: () => void;
  squareSize: number;
  disabled: boolean;
  circleColor: string;
  crossColor: string;
  testID?: string;
}

const Square: React.FC<SquareProps> = ({
  playerMarkIsCircle,
  squareSize,
  disabled,
  onPress,
  circleColor,
  crossColor,
  testID = '',
}) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [hasPlayedAnimations, setHasPlayedAnimations] = useState(false);

  //It is necessary to persist the Player Mark state to prevent it from changing when a new prop comes from the board.
  const [isCircle, setIsCircle] = useState<boolean>(false);

  const handleOnPress = () => {
    playShakeAnimation(animation);

    //Skip other effects and actions if already has player set
    if (hasPlayedAnimations) {
      return;
    }
    setHasPlayedAnimations(true);
    setIsCircle(playerMarkIsCircle);
    onPress();
  };

  return (
    <TouchableOpacity
      testID={`Square${testID}.TouchableOpacity`}
      disabled={disabled}
      onPress={handleOnPress}>
      <Animated.View style={getSquareStyle(squareSize, animation)}>
        <LottiePlayerMark
          color={getPlayerMarkColor({
            isCircle,
            crossColor,
            circleColor,
          })}
          isCircle={isCircle}
          isVisible={hasPlayedAnimations}
          squareSize={squareSize}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Square;
